import path from "node:path";
import { fileURLToPath } from "node:url";
import { loadConfigFromFile } from "vite";
import { describe, expect, it } from "vitest";

/**
 * El canal de entrega (CHA-22): que el build **por defecto** salga en es-AR.
 *
 * El `Dockerfile` corre `pnpm --filter @paperclipai/ui build`, o sea
 * `vite build` sin `--config`. Que eso aplique el overlay depende de que Vite
 * elija nuestro `ui/vite.config.mjs` y no el `vite.config.ts` de upstream.
 *
 * Es una propiedad silenciosa: si se rompe, el build no falla, sale en inglés
 * y nadie se entera hasta que el dueño mira la app. Por eso se prueba acá.
 */

const UI_ROOT = path.resolve(fileURLToPath(new URL(".", import.meta.url)), "../..");
/**
 * El nombre del plugin cambió con CHA-23: el overlay en el runtime de JSX se
 * reemplazó por marcado en compilación. Este test nació en el corte 1 y su
 * constante quedó apuntando al plugin viejo, así que al traer el canal de
 * entrega a la línea del corte 2 falló — bien, porque la propiedad que
 * verifica es silenciosa.
 */
const OVERLAY_PLUGIN = "paperclip-es-ar-marcado-de-texto";

/** Los plugins vienen anidados en arrays; `flat(Infinity)` hace explotar a tsc. */
function pluginNames(plugins: unknown): string[] {
  const names: string[] = [];
  const walk = (value: unknown): void => {
    if (Array.isArray(value)) {
      for (const item of value) walk(item);
      return;
    }
    if (value && typeof value === "object" && "name" in value) {
      const { name } = value as { name?: unknown };
      if (typeof name === "string") names.push(name);
    }
  };
  walk(plugins);
  return names;
}

describe("el build por defecto del fork", () => {
  it("resuelve a una config que instala el overlay, sin pasar --config", async () => {
    // Sin `configFile`, Vite hace exactamente la búsqueda del build real.
    const loaded = await loadConfigFromFile(
      { command: "build", mode: "production" },
      undefined,
      UI_ROOT,
      "silent",
    );

    expect(loaded).not.toBeNull();
    expect(path.basename(loaded!.path)).toBe("vite.config.mjs");
    expect(pluginNames(loaded!.config.plugins)).toContain(OVERLAY_PLUGIN);
  }, 60_000);

  it("deja la config de upstream intacta y sin overlay", async () => {
    const loaded = await loadConfigFromFile(
      { command: "build", mode: "production" },
      path.join(UI_ROOT, "vite.config.ts"),
      UI_ROOT,
      "silent",
    );

    expect(pluginNames(loaded!.config.plugins)).not.toContain(OVERLAY_PLUGIN);
  }, 60_000);
});
