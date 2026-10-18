/**
 * Componentes **reales** de upstream renderizados con el marcado puesto, sin
 * una línea cambiada en ellos.
 *
 * Corre sólo con `vitest.config.es-ar.ts`, que es la única config que carga el
 * plugin. Dos cosas la hacen la prueba que importa:
 *
 * 1. los componentes de upstream **sí** se marcan, así que sus literales salen
 *    en español;
 * 2. **este archivo no se marca** (`*.test.tsx` queda afuera, §8/3), así que
 *    todo literal que el test pasa por props es, por construcción, un **dato**.
 *
 * O sea: la invariante de §4 no se afirma acá, se *monta*. Si un literal de este
 * archivo apareciera traducido, querría decir que algo traduce fuera de un sitio
 * marcado, y eso es el defecto que ADR 0002 existe para eliminar.
 */

import { FolderOpen } from "lucide-react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import { isOverlayInstalled } from "./overlay";

/**
 * `ui/vitest.config.ts` de upstream no se toca (ADR §11) y su `include` por
 * defecto agarra cualquier `*.test.tsx`, así que este archivo también se carga
 * ahí, sin plugin y sin forma de traducir nada. Cuando eso pasa se saltea en vez
 * de fallar: la línea de base de upstream tiene que seguir verde.
 */
const withOverlay = isOverlayInstalled();

/**
 * El idioma lo fija `vitest.setup.es-ar.ts`, que corre antes de que se cargue
 * este archivo: el overlay resuelve el idioma al evaluarse, como en el
 * navegador.
 */
async function load() {
  const overlay = await import("./overlay");
  expect(overlay.isOverlayInstalled(), "el overlay tiene que estar puesto").toBe(true);
  expect(overlay.activeUiLocale()).toBe("es-AR");
  return {
    StatusBadge: await import("@/components/StatusBadge"),
    EmptyState: await import("@/components/EmptyState"),
    StatusIcon: await import("@/components/StatusIcon"),
    AgentIdentity: await import("@/components/AgentIdentity"),
    Loading: await import("@/components/AnimatedPaperclipIcon"),
  };
}

/**
 * Los 7 estados como se ven en el menú de cambio de estado y en los
 * encabezados del tablero, en orden de `StatusIcon.tsx:8`.
 *
 * Es la lista que QA fotografió en CHA-9 y la que arregla CHA-15. Con ADR 0002
 * llegan por el **canal de declaraciones** (`statusLabel` en `TEXT_DECLS`), que
 * es la regresión más probable de toda la tarea (§11.2, T2).
 */
const MENU_DE_ESTADO: readonly [string, string][] = [
  ["backlog", "Backlog"],
  ["todo", "Por hacer"],
  ["in_progress", "En curso"],
  ["in_review", "En revisión"],
  ["done", "Listo"],
  ["cancelled", "Cancelada"],
  ["blocked", "Bloqueada"],
];

describe.runIf(withOverlay)("la invariante de §4: el dato no se puede traducir", () => {
  /**
   * **La prueba que es el ADR entero en una línea** (§6.5), sobre componentes
   * reales de upstream y en un solo render: un agente llamado `Search` y una
   * tarea titulada `Save`, al lado de las etiquetas de interfaz homónimas.
   *
   * `AgentIdentity.tsx` es el caso perfecto porque tiene las dos cosas en nueve
   * líneas: `title={agent.name}` y `{agent.name ?? "Agent"}`. El nombre no es un
   * literal del código —no hay dónde ponerle la llamada— y el `"Agent"` de
   * respaldo sí lo es. El transform no puede confundirlos ni queriendo.
   */
  it("un agente llamado Search y una tarea titulada Save salen como se escribieron", async () => {
    const { AgentIdentity, EmptyState, StatusIcon } = await load();

    const html = renderToStaticMarkup(
      <div>
        {/* dato: lo escribió el dueño */}
        <AgentIdentity.AgentIdentity agent={{ id: "a1", name: "Search" }} />
        {/* literal de upstream: es interfaz */}
        <AgentIdentity.AgentIdentity agent={{ id: "a2" }} />
        {/* dato: el título de la tarea */}
        <EmptyState.EmptyState icon={FolderOpen} title="Save" message="Done" />
        {/* etiqueta de interfaz homónima, por el canal de declaraciones */}
        <StatusIcon.StatusIcon status="done" showLabel />
      </div>,
    );

    // El dato, tal como se escribió, en el texto y en el atributo.
    expect(html).toContain(">Search</span>");
    expect(html).toContain('title="Search"');
    expect(html).toContain(">Save</p>");
    expect(html).toContain(">Done</p>");
    // …y **en el mismo render** la interfaz está en español.
    expect(html).toContain(">Agente</span>");
    expect(html).toContain(">Listo</span>");
    // Lo que no puede pasar nunca: que el dato se haya dado vuelta.
    expect(html).not.toContain("Buscar");
    expect(html).not.toContain("Guardar");
    expect(html).not.toContain(">Listo</p>");
  });

  it("los nombres que colisionan con el diccionario: 0 traducidos (D1/D2 de §11.1)", async () => {
    const { AgentIdentity } = await load();
    // Las cuatro palabras de §11.1/D1. Las tres primeras son entradas del
    // diccionario; antes de ADR 0002, 7 de 26 nombres de agente se daban vuelta.
    const COLISIONAN: readonly [string, string][] = [
      ["Search", "Buscar"],
      ["Done", "Listo"],
      ["Settings", "Configuración"],
      ["Open", "Abrir"],
    ];
    for (const [name, traduccion] of COLISIONAN) {
      const html = renderToStaticMarkup(
        <AgentIdentity.AgentIdentity agent={{ id: "a", name }} />,
      );
      expect(html, name).toContain(`>${name}</span>`);
      expect(html, `${name} → ${traduccion}`).not.toContain(traduccion);
    }
  });

  it("el texto que un llamador le pasa por props es un dato y queda como está", async () => {
    const { EmptyState } = await load();
    // Esto es lo que **cambió** con ADR 0002, y es el punto: antes el overlay
    // agarraba estas tres cadenas en la frontera de JSX sin poder saber si eran
    // interfaz o contenido. Las mismas cadenas, escritas en el archivo de
    // upstream que llama a `EmptyState`, sí se marcan y sí se traducen —pero eso
    // se decide en el archivo de upstream, no acá.
    const html = renderToStaticMarkup(
      <EmptyState.EmptyState
        icon={FolderOpen}
        title="No projects found."
        message="Select an organization to view projects."
        action="Add"
        onAction={() => {}}
      />,
    );
    expect(html).toContain("No projects found.");
    expect(html).toContain("Select an organization to view projects.");
    expect(html).toContain(">Add</button>");
    expect(html).not.toContain("No se encontró ningún proyecto.");
    expect(html).not.toContain("Elegí una empresa para ver los proyectos.");
  });

  it("un patrón interpolado ya no puede dar vuelta un título de tarea (D6)", async () => {
    const { EmptyState } = await load();
    // `patterns.ts` tiene `/^Invite people to (.+)$/`, que es la forma más
    // peligrosa del defecto de §2: una regla que vuelve traducibles infinitas
    // cadenas de usuario. Ahora `lookup` sólo corre contra cadenas marcadas, y
    // esto no está marcado.
    const html = renderToStaticMarkup(
      <EmptyState.EmptyState icon={FolderOpen} message="Invite people to the launch party" />,
    );
    expect(html).toContain("Invite people to the launch party");
    expect(html).not.toContain("Invitar gente a");
  });
});

describe.runIf(withOverlay)("lo que el plugin marca en upstream sí se traduce", () => {
  it("un literal de texto de JSX escrito en un componente de upstream", async () => {
    const { Loading } = await load();
    // `AnimatedPaperclipIcon.tsx:33` escribe `<span className="sr-only">Loading…
    // </span>`. Sin props, sin contexto: es texto del código, lo marca el plugin
    // y sale en español. Es la verificación de punta a punta del canal principal
    // (8.448 de las 19.552 marcas).
    const html = renderToStaticMarkup(<Loading.PaperclipLoading />);
    expect(html).toContain("Cargando…");
    expect(html).not.toContain("Loading…");
  });

  it("el literal de respaldo de un ?? en posición de hijo de JSX", async () => {
    const { AgentIdentity } = await load();
    const html = renderToStaticMarkup(<AgentIdentity.AgentIdentity agent={{ id: "a" }} />);
    expect(html).toContain(">Agente</span>");
  });
});

/**
 * La cola de §6.3 de CHA-36, medida sobre el **módulo real** y no sobre el
 * diccionario (CHA-43).
 *
 * `agent-detail-navigation.ts` es el caso ideal para afirmarlo: es un módulo
 * plano —ni JSX ni hooks ni contexto—, así que importarlo con el plugin puesto
 * da los valores ya marcados. Las seis etiquetas de abajo son exactamente lo
 * que el dueño lee en la barra lateral de la ficha de agente, y cinco de las
 * seis entraron en esta tarea.
 */
describe.runIf(withOverlay)("la ficha de agente: la cola de CHA-36 §6.3 (CHA-43)", () => {
  async function navegacion() {
    const mod = await import("@/pages/agent-detail-navigation");
    const porEtiqueta = new Map<string, string[]>();
    for (const grupo of mod.AGENT_DETAIL_NAVIGATION) {
      porEtiqueta.set(grupo.label, grupo.items.map((item) => item.label));
    }
    return porEtiqueta;
  }

  it("los encabezados de grupo salen en español, incluido «Gobernanza»", async () => {
    await load();
    const grupos = [...(await navegacion()).keys()];
    // «GOBERNANZA» en pantalla: el `uppercase` es CSS, la cadena es `Governance`.
    expect(grupos).toEqual(["Agente", "Tiempo de ejecución", "Gobernanza"]);
  });

  it("«Overview», «Tools», «Permissions / Trust» y «API Keys» ya no quedan en inglés", async () => {
    await load();
    const grupos = await navegacion();
    expect(grupos.get("Agente")).toContain("Resumen");
    expect(grupos.get("Tiempo de ejecución")).toContain("Herramientas");
    expect(grupos.get("Gobernanza")).toEqual([
      "Permisos / Confianza",
      "API keys",
      "Revisiones",
    ]);
  });

  it("`Skills` sigue en inglés, que es la decisión del glosario y no un olvido", async () => {
    await load();
    // Glosario §CHA-31: «Skill / Skills» queda en inglés (femenino: «la skill»).
    // Por eso el encabezado de la pantalla Skills se lee `SKILLS` y está bien.
    expect((await navegacion()).get("Agente")).toContain("Skills");
  });
});

/**
 * Los dos mapas de etiquetas que esta tarea **no** pudo arreglar, afirmados en
 * inglés a propósito: les falta una línea en `TEXT_DECLS` que es del Dev, no
 * mía. El test es el recordatorio —cuando la declaración entre, estos dos se
 * dan vuelta y hay que venir acá.
 */
describe.runIf(withOverlay)("lo que todavía le falta al Dev (CHA-43)", () => {
  it("los agrupadores de fecha de Tareas y Bandeja siguen en inglés", async () => {
    await load();
    // `lib/task-date-groups.ts:3` es un mapa indexado por valor técnico, igual
    // que `EFFORT_LABELS`, pero su nombre no está declarado.
    const mod = await import("@/lib/task-date-groups");
    expect(mod.taskDateGroupLabels.yesterday).toBe("Yesterday");
  });

  it("el orden de la Búsqueda sigue en inglés", async () => {
    await load();
    const mod = await import("@/lib/search-filters");
    expect(mod.SORT_LABELS.relevance).toBe("Relevance");
  });
});

describe.runIf(withOverlay)("StatusIcon — el menú de estado y el tablero (T2, §10.5)", () => {
  /**
   * `statusLabel(status)` de `StatusIcon.tsx:10` arma `"In Progress"` con dos
   * `.replace()`: **no hay literal**. Es la pérdida de §10.5 y se recupera con la
   * entrada de `TEXT_DECLS` que envuelve el retorno, desde un archivo nuestro y
   * con cero ediciones de upstream.
   *
   * `KanbanBoard.tsx:134` es una copia byte a byte de la misma función y tiene su
   * propia entrada: son el menú de cambio de estado y los encabezados del
   * tablero, o sea H-1 y H-2 de CHA-9.
   */
  it("los 7 estados salen traducidos y con un solo nombre cada uno", async () => {
    const { StatusIcon } = await load();
    for (const [status, expected] of MENU_DE_ESTADO) {
      const html = renderToStaticMarkup(<StatusIcon.StatusIcon status={status} showLabel />);
      expect(html, status).toContain(`>${expected}</span>`);
    }
  });

  it("ninguna etiqueta visible de estado queda en inglés, salvo Backlog", async () => {
    const { StatusIcon } = await load();
    for (const [status] of MENU_DE_ESTADO) {
      const html = renderToStaticMarkup(<StatusIcon.StatusIcon status={status} showLabel />);
      for (const ingles of ["Todo", "In Progress", "In Review", "Done", "Cancelled"]) {
        expect(html, `${status} / ${ingles}`).not.toContain(`>${ingles}</span>`);
      }
    }
  });

  it("done y blocked dicen lo mismo acá que en la leyenda del Panel", async () => {
    const { StatusIcon } = await load();
    const { tEs } = await import("./overlay");
    // La leyenda del Panel (`ActivityCharts.tsx:244-245`) y la lista
    // (`IssuesList.tsx:141-142`) resuelven por estas dos claves punteadas.
    for (const [status, key] of [
      ["done", "issues.status.done"],
      ["blocked", "issues.status.blocked"],
    ] as const) {
      const html = renderToStaticMarkup(<StatusIcon.StatusIcon status={status} showLabel />);
      expect(html, status).toContain(tEs(key, "no-deberia-caer-al-ingles"));
    }
    // El nombre viejo de `done` no sobrevive en ninguno de los dos caminos.
    expect(renderToStaticMarkup(<StatusIcon.StatusIcon status="done" showLabel />)).not.toContain(
      "Terminada",
    );
    expect(tEs("issues.status.done", "Done")).not.toBe("Terminada");
  });
});

/**
 * **Hallazgo abierto para el Lead, no una decisión mía.**
 *
 * El ADR recupera por `TEXT_DECLS` las tres funciones de etiqueta derivada que
 * CHA-9 fotografió (`statusLabel` ×2 y `statusLabels`). Pero la misma forma
 * —derivar una etiqueta de un valor técnico, sin literal— aparece en más
 * archivos de producción que el ADR no lista, y el reporte de la fase 3 **no
 * puede verlos**: mide cobertura por *entrada del diccionario*, y estas entradas
 * están cubiertas por otros sitios marcados.
 *
 * Lo que sigue afirma el estado **real** después de implementar el ADR tal como
 * está escrito. No se agregó ningún nombre: §8/fase 2 dice explícitamente que la
 * fase 2 no es agregar nombres. Si el Lead decide recuperarlos, es una línea en
 * `text-sites.ts` por archivo y cero ediciones de upstream, y estos tres casos
 * se dan vuelta.
 */
describe.runIf(withOverlay)("etiquetas derivadas en archivos NO declarados (hallazgo)", () => {
  it("IssueStatusBadge queda en inglés: sentenceCaseStatus no está en TEXT_DECLS", async () => {
    const { StatusBadge } = await load();
    // `StatusBadge.tsx:20` deriva "In review" de "in_review" sin literal, igual
    // que `statusLabel`, pero su archivo no tiene entrada en `TEXT_DECLS`.
    // Se usa en UserProfile, StatusCardDetailDrawer y DesignGuide; las pantallas
    // principales de tareas usan `StatusIcon`, que sí está cubierto.
    const html = renderToStaticMarkup(<StatusBadge.IssueStatusBadge status="in_review" />);
    expect(html).toContain("In review");
    expect(html).not.toContain("En revisión");
  });

  it("StatusBadge sin label deriva del valor técnico y queda en inglés", async () => {
    const { StatusBadge } = await load();
    const html = renderToStaticMarkup(<StatusBadge.StatusBadge status="in_review" />);
    expect(html).toContain("in review");
  });

  it("el rótulo accesible de una tarea bloqueada queda en inglés", async () => {
    const { StatusIcon } = await load();
    // `blockedAttentionLabel` (`StatusIcon.tsx:46`) devuelve `"Blocked"` y
    // plantillas; está en el **mismo archivo** que `statusLabel` pero no entre
    // los nombres declarados, así que el `title`/`aria-label` del glifo queda en
    // inglés mientras la etiqueta visible dice "Bloqueada".
    const html = renderToStaticMarkup(<StatusIcon.StatusIcon status="blocked" showLabel />);
    expect(html).toContain(">Bloqueada</span>");
    expect(html).toContain('aria-label="Blocked"');
  });
});
