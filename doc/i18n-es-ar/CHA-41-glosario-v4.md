# CHA-41 (segunda parte) — Glosario es-AR v4 y las cinco líneas del mapa

Bitácora del Traductor i18n. **Cierra el entregable 1 de CHA-2.** Continúa
[CHA-41-glosario-v3.md](CHA-41-glosario-v3.md), que entregó la v3 del glosario
antes de que existieran los números de CHA-42 y las formas de CHA-43.

La primera parte era sólo documentación y terminó con seis pedidos. El Lead
aprobó cinco, rechazó uno y me los pasó a implementar, así que esta parte
**sí toca el mapa por sitio**: cinco líneas, más los tests que las sostienen.
Cero diccionario global, cero archivos de upstream.

## 1. Lo primero: cruzar con CHA-43 antes de escribir

CHA-43 corría sobre el mismo árbol y podía haber hecho `All` y `Blocked` por su
cuenta. Leí sus dos commits (`d53224e20` y `aebe7d310`) antes de tocar nada:

- **No hay duplicado.** Su única línea de mapa es
  `components/SkillsContextualSidebar.tsx: { "Author": "Autoría" }`, y sus 14
  entradas nuevas de diccionario no incluyen ninguna de las mías. `All` y
  `Blocked` no están en su lista.
- **Sí hay un insumo nuevo para el glosario**: `Author` es una homógrafa que el
  corte 2 no tenía fichada, y CHA-43 ya la escribió en §9.4. No la reescribí; la
  incorporé a la clasificación nueva de §9 (ver abajo).
- **Su commit tocó el glosario** (§9.4 y §10.6, 92 líneas). Edité sobre eso, no
  sobre la v3 que yo había dejado.

## 2. Las cinco líneas del mapa

| # | Archivo | Antes | Después |
| --- | --- | --- | --- |
| 1 | `components/RoutineList.tsx` | `"Off": "Off"` | `"Off": "Inactiva"` |
| 2 | `pages/TeamCatalog.tsx` | sólo `"Installed ·"` | `+ "Installed": "Instalado"` |
| 3 | `pages/Search.tsx` | *(sin entrada)* | `{ "All": "Todos" }` |
| 4 | `pages/PluginManager.tsx` | sólo `"Review"` | `+ "Open Settings": "Abrir la configuración"` |
| 5 | `pages/Inbox.tsx` y `pages/LegacyInbox.tsx` | sólo `"All"` | `+ "Blocked": "Bloqueadas"` en los dos |

El mapa pasa de **51 archivos / 58 entradas / 8 cadenas** (CHA-38) a **54 / 67 /
15**. De las 7 cadenas nuevas, 1 es de CHA-42 (ninguna: las tres de ancho ya
estaban), 1 de CHA-43 (`Author`) y 3 de acá.

### El riesgo que había que descartar, y cómo se descartó

**Una entrada nueva sólo sirve si la posición está en la lista blanca de
`text-sites.ts`.** El marcado consulta `hayEntradaPorSitio` antes de pasarle el
sitio a `__tEs`, así que una línea puede entrar al JSON y no cambiar nada en
pantalla —el peor resultado posible, porque *parece* hecho—.

Cuatro de los cinco caen en archivos que ya tienen entradas funcionando. **El
#3 era el dudoso**: `pages/Search.tsx` no estaba en el mapa. Verificado: el
sitio es `SCOPE_LABELS` (`Search.tsx:61`), que **sí está** en `TEXT_DECLS`
—CHA-39 lo agregó, y la línea tiene el comentario que explica por qué va sólo
`SCOPE_LABELS` y no `scopeLabel`—. Es la salvedad de §9.2: para un `const` el
canal de declaraciones le pasa el sitio al mapa; para el `return` de una
función, no.

No hice falta tocar `text-sites.ts`, que era la decisión que CHA-38 había
dejado aparte y que no me corresponde.

Y no hay que creerme: el test **«cada entrada del mapa pega en un sitio que el
marcado produce»** de `por-sitio.test.ts` corre `markText` sobre el archivo real
y exige encontrar `__tEs("<cadena>", "<archivo>")`. Las cinco líneas pasan por
ahí. Si upstream renombra alguno de los seis archivos, se pone rojo.

### Una duda de mecanismo que quedó resuelta

El pedido #2 deja `Installed` e `Installed ·` como **dos claves en el mismo
archivo**, y la pregunta era si una se come a la otra. No: `buscarPorSitio`
(`por-sitio.ts:113-130`) resuelve por **igualdad exacta** sobre la cadena
completa, con un único recorte de los espacios del borde. No hay prefijo ni
substring, y `capa()` no tiene guarda que rechace claves hermanas. Quedó escrito
en §9.5 del glosario, porque si el mecanismo alguna vez pasara a resolver por
prefijo, estas dos son el primer caso que se rompe.

### Y una que no es duda: `Blocked` no la bloquea §7.4

El literal es `"Blocked"` con mayúscula (`Inbox.tsx:2440`,
`LegacyInbox.tsx:2307`), y las comparaciones del archivo son contra
`"blocked"` en minúscula (el `value` de la pestaña). Son cadenas distintas, así
que la regla de la comparación no la toca. Es la diferencia con `paused` en
`RoutineList.tsx`, que §10.6 b) sí bloquea.

## 3. D-3: acepté la reconciliación, y bajé mi propia regla

La v3 decía «las cuatro formas o ninguna» para la columna de 48 px.
**Esa regla queda derogada**, y lo escribo acá porque era mía:

La escribí *antes* de que existiera la tabla de anchos. Verifiqué los seis
números de CHA-42 §3 y están bien: «Activa» 36 · «Archivo» 44 · «Inactiva» 45 ·
«Borrador» 51 → «Borrado» · «Apagada» 53 → «Apagad» · «Archivada» 58 →
«Archiva». Con el gate de 48 px adelante, pedir coherencia entre cuatro formas
cuando una no cabe es inaplicable. **Tres de cuatro en castellano sin un solo
recorte es el mejor final disponible.**

Lo que sí sobrevive del razonamiento es el caso que lo motivaba, y es
exactamente el que se arregló: la entrada de identidad `"Off": "Off"` dejaba la
columna diciendo «Activa» para unas rutinas y `Off` para otras, y **ningún test
la rebotaba** —la guarda de «ninguna traducción es idéntica al inglés» recorre
`ES_AR_AREAS`, no el mapa—. «Inactiva» mide 45 y entra, así que no había que
pagar eso.

**«Archivo» se queda, y la objeción no se arregla: se declara.** Es un
sustantivo donde iría un adjetivo y en esa columna se puede leer como un archivo
de disco. «Archivada», el adjetivo correcto, mide 58 y se corta. Está en §10.5
del glosario como limitación, con el número al lado y con el dato que la
convierte en mejora y no en concesión: **traducirlo arregla un recorte que ya
existía en inglés**, porque `Archived` mide 52 px en una caja de 48.

`Draft` queda en inglés, y conviene decir que **no es lo mismo que `Off` antes
de este cambio**: `Draft` no tiene entrada en ningún lado, así que cae al inglés
por el camino normal del mecanismo. No es una traducción que dice «Draft».

## 4. El pedido que se rechazó, y por qué lo firmo

`Done` → «Terminado» en `ActivityFeed.tsx:119`. **No va.** Lo pedí por
coherencia *dentro* de esa pantalla —sus hermanos son «En curso» y «En
revisión»— y el motivo del rechazo es mejor que el pedido: el defecto que el
dueño reportó en el corte 1 era *el mismo estado con dos nombres según dónde lo
mirás*, y CHA-15 lo unificó en «Listo». La coherencia **entre** pantallas gana,
porque es la que se nota al navegar.

Quedó escrito en **§5 del glosario** como decisión con el razonamiento, no como
pendiente, para que el próximo que mire ese filtro no lo vuelva a abrir.

## 5. Lo que cambió en el glosario (v3 → v4)

| Sección | Qué |
| --- | --- |
| cabecera | v3 → **v4**, con «Cambios respecto de la v3» |
| §5 | **nueva subsección** `Done` es «Listo» en todas las pantallas |
| §9 (intro) | la cuenta real (54 / 67 / 15) y, sobre todo, **la clasificación en cuatro clases** de entrada por sitio |
| §9.3 | pasa de decisión a hecho: `All` en Búsqueda ya tiene su línea, y queda dicho que el sitio es un `const` |
| §9.5 | **nueva**: la cuarta clase (`Blocked`, `Installed`, `Open Settings`), con la regla para reconocerla |
| §10 (intro) | **el índice de las seis limitaciones**, para que se lea como la lista única que pedía la tarea |
| §10.5 | **reescrita entera**: de dos pendientes a las decisiones cerradas con los px medidos, la limitación de «Archivo» y la derogación de «las cuatro o ninguna» |

Las cuatro clases de §9 son el aporte que creo más útil, porque el mapa ya
tiene 15 cadenas y confundirlas sale caro. Resumidas:

1. **dos sentidos** (las 8 de CHA-38): el inglés es homógrafo y el español no;
2. **no entra en la caja** (las 3 de CHA-42): un solo sentido, pero el global no
   cabe en un ancho fijo de upstream;
3. **dos sentidos, uno global** (`Author`, CHA-43): el sentido común vive en el
   global y el mapa desvía un solo sitio;
4. **concordancia** (las 3 de acá): el global es correcto en el resto de la app
   y concuerda mal en un sitio.

La regla práctica, que es lo que va a usar el que venga: si el español global
*diría algo cierto pero mal concordado*, es la clase 4 y se arregla con una
línea. Si *diría otra cosa*, es la clase 1 y hay que decidir el discriminante
primero.

## 6. Los tests

`por-sitio.test.ts` se ponía rojo por dos motivos y los dos había que
atenderlos:

- la aserción de CHA-42 `lookupPorSitio("Off", …) === "Off"`, que ahora es
  `"Inactiva"`. **El comentario de esa prueba era correcto cuando se escribió**
  —la única candidata era «Apagada», 53 px— y lo reescribí explicando por qué
  cambia, no lo borré;
- el test «cubre las N cadenas y ninguna más», que enumera el mapa: 12 → **15**.

Agregué `POR_FORMA_CHA41` como cuarta clase en la enumeración, un `describe`
con una prueba por cadena nueva (incluida la convivencia de `Installed` con
`Installed ·` y que `All` en Búsqueda no se contamina con el de las bandejas), y
una prueba que fija las tres formas de la columna de 48 px juntas, con los px en
el mensaje de error. `Blocked` e `Installed` entran en
`CON_GLOBAL_A_PROPOSITO`: su global existe, es correcto y tiene que quedarse.

## 7. Gates

| Gate | Esperado | Medido |
| --- | --- | --- |
| `tEs()` del corte 1 | 36 | **36** |
| archivos de upstream tocados | 0 | **0** (3 archivos, los tres nuestros) |
| `pnpm-lock.yaml` / `package.json` | sin cambios | **sin cambios** |
| `vitest.config.ts` (i18n) | verde | **187 pasan, 24 skip** |
| `vitest.config.es-ar.ts` | verde | **25 pasan** |
| `pnpm run typecheck` | 0 | **0** |
| posiciones no literales | 3 | **3** (`text-sites.ts` sin tocar; el test del gate pasa) |
| `report-text-sites.ts` sin cubrir | ≤ 4 | **4** (3.894 entradas, 3.890 cubiertas) |

### Un aviso sobre la suite, con el número

`datos-del-dueno.es-ar.test.tsx` me dio **dos rojos falsos** antes de los verdes
de arriba, los dos por `Test timed out in 5000ms` y los dos mientras corría otra
cosa en la misma máquina. No es sólo sensibilidad a la carga: en la corrida
limpia, «todas las entradas de una sola palabra como nombre de agente» tardó
**4.902 ms contra un timeout de 5.000**. Ese test recorre el diccionario entero
y el diccionario creció 14 entradas con CHA-43, así que el margen es del 2 % y
se achica en cada lote. Dos de sus hermanos ya llevan `180_000` explícito; a
éste le falta. **Es una línea y no es mía**: la anoto para el Lead.
