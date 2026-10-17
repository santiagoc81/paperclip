# Cómo se entrega la traducción es-AR

**Regla fijada por el dueño el 17/10/2026:** todo corte nuevo de la traducción entra por **PR a `master` de este fork**, porque de esa rama se actualiza su app. Nada de cortes que vivan sólo en una rama de trabajo, y nada de poner la traducción en vivo copiando archivos dentro del contenedor.

## Por qué

El corte 1 se entregó en dos pasos que no sirven como camino permanente:

1. El PR #1 mergeó `traduccion-es` en `base-corte1-es-ar`, una rama base creada sólo para que el diff mostrara nuestro trabajo. De ahí no se despliega nada.
2. Para que el dueño lo viera, se copió el `dist` construido con el overlay sobre `/app/ui/dist` dentro del contenedor del server. Eso sobrevive un `restart` y **se pierde al recrear el contenedor o actualizar la imagen**.

El `master` del fork sí es la rama de la que se reconstruye la app, así que es ahí donde el overlay tiene que vivir.

## Las dos condiciones de un corte entregado

1. **Mergeado en `master`** por PR, con los tests del overlay en verde.
2. **El build por defecto produce es-AR.** El `Dockerfile` corre `pnpm --filter @paperclipai/ui build`; si ese comando no aplica el overlay, mergear el código no cambia nada de lo que el dueño ve. Resuelto en [CHA-22](CHA-22-canal-de-entrega.md): `ui/vite.config.mjs` gana por precedencia sobre `vite.config.ts` y le agrega el plugin del overlay al build por defecto, sin tocar un archivo de upstream.

Si falta la segunda, el merge es una promesa vacía: código en `master`, app en inglés.

## Cómo armar la rama de un corte

`master` avanza con upstream, así que cada corte se arma sobre `master` al día:

```sh
git fetch fork --prune
git worktree add /paperclip/workspaces/es-ar-<corte> -b es-ar/<corte> fork/master
```

Los commits del corte anterior ya están en `master`, así que no hace falta cherry-pickear nada. Si el corte salió de una rama vieja, cherry-pickear sus commits sobre `master` es mecánico mientras upstream no toque los mismos archivos: el overlay vive casi todo en archivos propios (`ui/src/i18n-es-ar/`) y gasta pocas líneas sobre archivos de upstream.

## Después del merge

La app se actualiza cuando la imagen se reconstruye desde `master`. Ese paso lo corre el dueño en el NAS: `docker compose` vive fuera del contenedor donde corren los agentes.
