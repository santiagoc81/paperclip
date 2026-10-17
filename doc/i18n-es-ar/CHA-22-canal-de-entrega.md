# CHA-22 — Que el build por defecto salga en es-AR

**Decide:** Dev UX/UI, 17/10/2026. **Marco:** [ADR 0001](../adr/0001-traduccion-es-ar-por-overlay-en-jsx.md).
No cambia el ADR: lo cumple al pie.

## El hueco

El `Dockerfile` (línea 136) corre `pnpm --filter @paperclipai/ui build`, que es
el script `build` de `ui/package.json` (`vite build`, sin `--config`). Hasta
hoy el overlay sólo se activaba con `--config vite.config.es-ar.ts`, que ningún
script del repo pasa. Mergear el overlay a `master` dejaba el código adentro y
la app reconstruida en inglés.

## La decisión: un archivo de config nuestro que gana por precedencia

Archivo nuevo **`ui/vite.config.mjs`**, de una línea útil:

```js
export { default } from "./vite.config.es-ar.ts";
```

Vite busca su config recorriendo esta lista y se queda con la primera que
existe (`DEFAULT_CONFIG_FILES`, verificado en la Vite 8.2.2 instalada):

```
vite.config.js → vite.config.mjs → vite.config.ts → .cjs → .mts → .cts
```

`vite.config.mjs` va **antes** que `vite.config.ts`. Entonces `vite build` sin
flags levanta el nuestro, que reexporta `vite.config.es-ar.ts`, que importa la
config de upstream y le agrega el plugin del overlay. El Dockerfile no se
entera y produce es-AR.

**Archivos de upstream modificados: cero.** Los dos contadores quedan donde
estaban:

- **Presupuesto del ADR §7.5** (llamadas a `tEs()`, techo ~50): **36 antes, 36
  después**. Este cambio no agrega ninguna.
- **Huella sobre upstream en la rama:** 12 archivos, +50/−36 líneas. Igual
  antes y después.

## Por qué no A, B ni C

Las tres opciones que venían en la tarea:

| | Qué pasa |
|---|---|
| **A.** Plugin en `ui/vite.config.ts` | `vite.config.ts` está en la lista §11 del ADR 0001 («lo que no se toca nunca»). Además rompe la propiedad 1 de §5(d): «cero archivos de upstream modificados, hoy y siempre». |
| **B.** Cambiar el script `build` de `ui/package.json` | `ui/package.json` está en la misma lista §11. Y es el archivo que upstream toca más seguido de los tres (deps). |
| **C.** Cambiar el comando del `Dockerfile` | No está prohibido por §11, pero **no entrega lo pedido**: `pnpm --filter @paperclipai/ui build` seguiría dando inglés. La app en el contenedor saldría en castellano y el build local no, que es justo la clase de discrepancia que hace perder una tarde. |

O sea: A y B contradicen el ADR, C no cumple el objetivo. Esta cuarta opción no
contradice nada y cumple: por eso se eligió sin escalar. Si el Lead o el
Arquitecto prefieren igual A, el cambio es borrar este archivo y poner dos
líneas en `vite.config.ts`; no hay nada más atado a esta decisión.

## Cómo se vuelve al inglés

1. **En vivo, sin reconstruir:** `?lang=en` en la URL, o
   `localStorage["paperclip.lang"] = "en"`. Es el camino de vuelta del dueño y
   sigue funcionando igual: el overlay se apaga en runtime, no en el build.
2. **En el build:** `vite build --config vite.config.ts`, o borrar
   `ui/vite.config.mjs`. No hay nada que revertir.

Lo que ya no se cumple es la frase de §10 del ADR «volver al `vite build` de
siempre deja la app en inglés»: el `vite build` de siempre ahora es es-AR. Es
exactamente lo que pedía la tarea, y el interruptor que §10 nombra primero
(`?lang=en`) está intacto.

## Qué sigue en inglés, a propósito

Todo lo que pasa su propio `--config` o apunta a `vite.config.ts` a mano, que
es lo que queremos:

- **`vitest`** usa `vitest.config.ts` y ni mira los `vite.config.*`. Los 684
  tests de upstream siguen viendo inglés sin tocarlos.
- `build:preview`, `vite.qa.config.mjs`, `vite.flow-preview.config.mjs`.
- `ui/src/lib/vite-component-names.test.ts`, que carga `vite.config.ts`
  explícitamente.
- `vite.config.es-ar.ts` sigue existiendo y sirve para desarrollo:
  `pnpm --filter @paperclipai/ui exec vite --config vite.config.es-ar.ts`.
  (Con este cambio, `pnpm --filter @paperclipai/ui dev` también sale en es-AR.)

## Cómo se verifica, y una trampa

**Grepear el `dist` buscando castellano no alcanza: da falso positivo.**
`ui/src/pages/ProfileSettings.tsx` importa el selector de idioma, que importa
el diccionario, así que las cadenas en castellano **entran al bundle igual**,
con overlay o sin overlay. Medido: un build con `--config vite.config.ts` (sin
plugin) también tiene «Nueva tarea», «Terminada», «Configuración» y «Bandeja».

Lo que sí distingue un build del otro es **el shim del runtime de JSX**, que
sólo entra si el plugin corrió. Su marca en el bundle es el conjunto de
etiquetas opacas de `jsx-runtime.ts`:

```sh
pnpm --filter @paperclipai/ui build                     # el comando del Dockerfile
grep -rlo '"code","pre"' ui/dist/assets/*.js            # tiene que encontrar un chunk
```

Y la prueba que corre sola, sin build: `src/i18n-es-ar/build-channel.test.ts`
le pide a Vite la misma búsqueda de config que hace el build real y verifica
que la elegida sea la nuestra y traiga el plugin.

## Nota de entorno (17/10/2026)

En el worktree `es-ar-entrega-master`, `pnpm --filter @paperclipai/ui build`
**no terminaba, ni con el overlay ni sin él**: `node_modules` es un symlink al
install de `/paperclip/workspaces/paperclip-es`, que está varios commits detrás
de `fork/master`. De ahí salían los `MISSING_EXPORT` de `@paperclipai/shared`
(el mismo ruido que ya se veía en los tests de `src/lib/*`) y la falta de
`@spekoai/client`, que upstream agregó después de ese install.

Se arregló el cableado **sólo dentro del worktree** y sin correr `pnpm install`
(el store es compartido): symlinks de los paquetes del workspace a los de este
árbol y un stub local de `@spekoai/client`. Todo cae bajo `.gitignore`, no va
en el commit y no afecta a la imagen de Docker, que instala de cero.

## Riesgos

| Riesgo | Mitigación |
|---|---|
| Si upstream alguna vez agrega un `ui/vite.config.js`, gana el suyo y el build vuelve a inglés **en silencio** | `src/i18n-es-ar/build-channel.test.ts` corre la búsqueda real de Vite y falla si la config elegida no es la nuestra o no trae el plugin. |
| Precedencia implícita: quien lee `vite.config.ts` puede creer que ése manda | El encabezado de `vite.config.mjs` lo explica, y esta nota. |
| `scripts/dev-runner.ts` mira la fecha de `ui/vite.config.ts` para decidir si el bundle está fresco, y no mira la nuestra | Sin efecto práctico: también mira todo `ui/src`, que es donde vive el diccionario. |
