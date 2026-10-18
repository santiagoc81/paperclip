/**
 * El canal de entrega es-AR: hace que el build **por defecto** del fork salga
 * en castellano, sin modificar un solo archivo de upstream (CHA-22).
 *
 * Vite busca su config recorriendo esta lista y se queda con el primer archivo
 * que existe:
 *
 *   vite.config.js → vite.config.mjs → vite.config.ts → .cjs → .mts → .cts
 *
 * `vite.config.mjs` va antes que `vite.config.ts`, así que este archivo —que
 * es nuestro, ruta nueva, nunca en conflicto con un `git pull`— es el que
 * levanta `vite` y `vite build` cuando nadie pasa `--config`. Y eso incluye
 * el `pnpm --filter @paperclipai/ui build` que corre el Dockerfile.
 *
 * No reimplementa nada: reexporta `vite.config.es-ar.ts`, que a su vez importa
 * la config de upstream y le agrega el plugin del overlay. Un cambio de
 * upstream en `vite.config.ts` lo heredamos solo, sin resolver conflictos.
 *
 * Cómo se vuelve al inglés:
 *
 *   - En vivo, sin reconstruir: `?lang=en` en la URL, o
 *     `localStorage["paperclip.lang"] = "en"`. Es el camino de vuelta del dueño.
 *   - En el build: `vite build --config vite.config.ts`, o borrar este archivo.
 *     No hay nada que revertir.
 *
 * Lo que sigue en inglés y así tiene que quedar, porque pasa `--config` propio
 * o apunta a `vite.config.ts` a mano: `vitest` (usa `vitest.config.ts`, por eso
 * los 684 tests de upstream no se enteran), `build:preview`, las configs de QA
 * y `src/lib/vite-component-names.test.ts`.
 */
export { default } from "./vite.config.es-ar.ts";
