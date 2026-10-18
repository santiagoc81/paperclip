# CHA-43 — La cola medida del corte 2: las 41 cadenas de CHA-36 §6.3

Worktree `/paperclip/workspaces/es-ar-corte2`, branch `es-ar/corte2`, commit
`d53224e20`, sobre `ee7bcc62d` (CHA-42).

**El número de hoy, de las 41: 19 en español, 1 a medias y 21 en inglés.**

- **14 entraron acá** (§2), con 15 ediciones: 14 entradas de diccionario y una
  más del mapa por sitio, porque `Author` resultó homógrafa.
- **5 ya habían caído con CHA-42** (§3), así que no las rehice.
- **1 está a medias**: `New Task` ya se traduce en cuatro archivos y sigue en
  inglés en los dos que QA fotografió (§3).
- **21 siguen en inglés** (§4 y §5), y **ninguna por falta de forma en
  español**: 12 esperan una línea en `TEXT_DECLS` o en la lista blanca, que es
  del Dev, y 9 están cerradas por decisión o por mecanismo.

El número que cambió más respecto de la tarea es ese 9: la tarea daba por hecho
que `paused`, `working` y `active` se arreglaban con una declaración o con una
entrada, y **ninguna de las tres se arregla así** (§4.4 y §4.5).

---

## 1. El método, que es lo que la tarea pedía primero

La tarea decía: «corré el reporte de sitios y medí contra el árbol de hoy antes
de escribir una línea». Eso se hizo, y cambió la mitad de las conclusiones.

El reporte de sitios (`report-text-sites.ts`) contesta **cobertura por entrada
del diccionario**, que no es la pregunta de esta tarea. La pregunta era, para
cada una de las 41: *¿tiene sitio marcado hoy, en qué archivo, y con qué clase
de sitio?* Para contestarla corrí `markTextWithReport` sobre los 2.030 archivos
de `ui/src` con una sonda ad-hoc que, por cada cadena, imprime:

- los archivos donde el transform le marca un sitio, y de qué clase
  (`jsx-text`, `jsx-attr`, `object-key`, `decl`…);
- los archivos donde la cadena **aparece y no se marca** —que es donde está la
  causa—;
- lo que dicen hoy el diccionario global y el mapa por sitio.

La sonda es instrumento, no entregable: **no quedó en el repo**. Está en el
scratch de la tarea (`probe-sites-CHA-43.ts`) por si alguien quiere repetir la
medición; son ~90 líneas y se corre desde `ui/`.

Lo que se ganó con eso: **tres de las 41 estaban mal clasificadas en la tarea**,
y una cuarta clase entera (los encabezados en mayúscula) resultó ser lo que QA
decía en §6.3 y no lo que decía el resumen de la tarea. Está en §4.

---

## 2. Lo que entró: 14 cadenas, 15 ediciones

### 2.1 Las 14 entradas de diccionario

Todas tenían **sitio marcado antes** de que escribiera la entrada. La columna
«sitio» es lo que imprimió la sonda.

| Inglés | es-AR | Área | Sitio que la aplica | Pantalla |
| --- | --- | --- | --- | --- |
| `Succeeded` | Salió bien | `common.json` | `ActivityCharts.tsx:134` (`label:`) · `DecisionHistory.tsx:21` (`jsx-child`) | Panel |
| `Discover` | Descubrir | `skills.json` | `SkillsContextualSidebar.tsx:48` (`label=`) | Skills · Skill Studio |
| `Sources` | Orígenes | `skills.json` | `SkillsContextualSidebar.tsx:53` (`label=`) · `SkillSources.tsx:45` (`label:`) · `CompanySkills.production.tsx:1368` (`jsx-text`) | Skills · Skill Studio |
| `Author` | Autor | `common.json` | `PluginSettings.tsx:208` (`jsx-text`) | Configuración de plugins |
| `Skills you create, edit, and test.` | Las skills que creás, editás y probás. | `skills.json` | `SkillsContextualSidebar.tsx:67` (`jsx-text`) | Skills · Skill Studio |
| `Not enabled for any agents` | Sin habilitar para ningún agente | `skills.json` | `CompanySkills.tsx:950` (`jsx-child`) | Skills |
| `Overview` | Resumen | `common.json` | 11 sitios `label:` / `jsx-text` (`agent-detail-navigation.ts:25`, `RoutineContextualSidebar.tsx:39`, `RoutineSubSidebar.tsx:45`, `CompanySkills.tsx:2580`, `Costs.tsx:728`, `CaseDetail.tsx:669`, `RunnerInspector.tsx:91`, `gateway-tabs.ts:9`…) | Agentes · ficha · Rutinas · ficha |
| `Tools` | Herramientas | `common.json` | `agent-detail-navigation.ts:35` (`label:`) · `AppsToolsPanel.tsx` (`jsx-text`) · `AuditFeed.production.tsx` (`label:`) | Agentes · ficha |
| `Governance` | Gobernanza | `agents.json` | `agent-detail-navigation.ts:40` (`label:`) | Agentes · ficha |
| `Permissions / Trust` | Permisos / Confianza | `agents.json` | `agent-detail-navigation.ts:42` (`label:`) | Agentes · ficha |
| `API Keys` | API keys | `agents.json` | `agent-detail-navigation.ts:43` (`label:`) | Agentes · ficha |
| `Loading audit links…` | Cargando los enlaces de auditoría… | `agents.json` | `AgentContextualSidebar.tsx:129` (`jsx-text`) | Agentes · ficha |
| `Delivery` | Entrega | `routines.json` | `RoutineContextualSidebar.tsx:42` · `RoutineSubSidebar.tsx:49` (`label:`) | Rutinas · ficha |
| `Images` | Imágenes | `artifacts.json` | `Artifacts.tsx:34` (`label:`) | Artefactos |

Las formas, justificadas una por una, están en el glosario
(«Agregadas en CHA-43»). Dos que vale aclarar acá:

- **`Succeeded` → «Salió bien»** y no «Exitosa». La hermana de la misma leyenda
  es `Failed` → «Falló», que es un verbo y por eso no elige género. Los dos
  sustantivos que rotula hoy son femeninos («la ejecución», «la decisión»), así
  que «Exitosa» andaría; pero la regla 2 de §7 del glosario dice que cuando hay
  forma sin género se prefiere esa, y acá hay.
- **`API Keys` → «API keys»**. Parece un no-cambio y no lo es: el diccionario ya
  decidió en CHA-33 que «API key» queda en inglés y en minúscula («Las API keys
  le permiten…», «Crear una API key»). Lo único que corrige la entrada es la
  mayúscula del título, que en español no va.

### 2.2 La entrada del mapa por sitio: `Author`, una homógrafa nueva

`Author` tiene **dos sentidos en dos archivos**, que es exactamente para lo que
existe el mapa de CHA-38:

| Archivo | Qué rotula | es-AR |
| --- | --- | --- |
| `components/SkillsContextualSidebar.tsx:61` | la **sección** de las skills propias (debajo dice «Las skills que creás, editás y probás.» y después «My Skills»): la acción de crearlas | **Autoría** |
| `pages/PluginSettings.tsx:208` | el dato `plugin.manifestJson.author`: una **persona** | **Autor** |

El global se queda con «Autor» —el sentido común del sustantivo inglés— y el
mapa desvía nada más que la barra lateral de Skills. Es la primera entrada del
mapa cuyo segundo español sale del global y no de una segunda entrada, así que
**no entra en la garantía de §9.2 del glosario**, y se puede porque ninguno de
sus dos sitios es una declaración: los dos son `jsx-text`, el marcado les pasa
el archivo a los dos y no hay ningún sitio derivado al que el global pueda
llegar por la ventana de atrás.

Ventaja de repartirlo así en vez de poner las dos en el mapa: si upstream
renombra `SkillsContextualSidebar.tsx`, el encabezado cae a «Autor» —se degrada
a **español**, no a inglés—.

### 2.3 Los dos tests nuevos

Sostienen el número contra el **módulo real**, no contra el diccionario, que es
la diferencia que hizo valioso a CHA-36:

- `real-components.es-ar.test.tsx` importa `pages/agent-detail-navigation.ts`
  con el plugin puesto —es un módulo plano, sin JSX ni hooks ni contexto, así
  que importarlo da los valores ya marcados— y afirma la barra lateral de la
  ficha de agente **entera** en español: los tres grupos («Agente», «Tiempo de
  ejecución», «Gobernanza») y los ítems de Gobernanza («Permisos / Confianza»,
  «API keys», «Revisiones»). Más un **control negativo**: `Skills` sigue en
  inglés, que es la decisión del glosario y no un olvido.
- Un segundo bloque afirma en inglés los **dos mapas que le faltan al Dev**
  (`taskDateGroupLabels.yesterday` y `SORT_LABELS.relevance`). Cuando entren las
  declaraciones, estos dos tests se dan vuelta y avisan que hay que venir acá.
- `por-sitio.test.ts`: el pin pasó de 11 a 12 cadenas, con el grupo
  `HOMOGRAFOS_CHA43` documentado, y `Author` entró en
  `CON_GLOBAL_A_PROPOSITO` con el motivo escrito (es la tercera clase de esa
  excepción, después de `Review` y de las tres por ancho de CHA-42).

---

## 3. Las 5 que ya habían caído, más la que está a medias

Esto es lo que pedía la tarea para que el número que el Lead le dé al dueño sea
el de hoy y no el de ayer:

| Cadena | Con qué cayó | Cómo |
| --- | --- | --- |
| `Command Palette` | **CHA-42** | `navigation.json` → «Paleta de comandos». No hizo falta ampliar el canal: `TEXT_KEYS` ya marcaba `title`/`description` de `command.tsx:34-35` |
| `Search for a command to run...` | **CHA-42** | `navigation.json` → «Buscá un comando para ejecutar…», mismo sitio |
| `Skills available to this organization.` | **CHA-42** (D-4) | `skills.json` + `viewDescription` en `TEXT_DECLS` |
| `Secrets & variables` | **CHA-42** | `agents.json` ya tenía la entrada; faltaba el nombre `labels` en `TEXT_DECLS` para `AgentContextualSidebar.tsx:54` |
| `On` | **CHA-42** (D-3) | mapa por sitio, `components/RoutineList.tsx` → «Activa» (decisión de ancho: la caja es de 48 px) |
| `New Task` | **a medias** | La entrada «Nueva tarea» de `navigation.json` ya se aplica en `Issues.tsx:149,151`, `Sidebar.tsx`, `Sidebar.production.tsx` y `MobileBottomNav.tsx`. **Lo que sigue en inglés es otro sitio, en otros dos archivos**: es D-1, y es la fila 5 de §5 |

Confirmo lo que la tarea sospechaba, con dos correcciones: `Secrets & variables`
y `On` **sí** habían caído —así que no las toqué—, y `New Task` **no del todo**:
está traducida en cuatro archivos y en inglés en dos, que son justo los dos que
el dueño miró.

---

## 4. Las 9 cerradas por decisión o por mecanismo

Ninguna se puede arreglar con diccionario, y por eso ninguna vuelve al Dev.

### 4.1 Por decisión ya firmada (4)

| Cadena | Motivo |
| --- | --- |
| `Skills` (el encabezado `SKILLS`) | **Queda en inglés por el glosario de CHA-31**: «Skill / Skills» es vocabulario del producto y se usa en femenino («la skill»). El encabezado de la pantalla Skills y la miga de `SkillSources.tsx:45` se leen `SKILLS` **y está bien**. No es una cadena faltante |
| `Studio` | Ídem, misma fila del glosario: «Skill Studio / Studio» es nombre del producto |
| `Claude Code` | Nombre propio de adaptador. Decisión del Lead en esta tarea, consistente con §7 |
| `Local` | Nombre propio de origen. Decisión del Lead |

**Esto corrige la tabla de la tarea en un punto**: la tarea listaba `SKILLS` y
`Studio` entre las 41 a traducir y a la vez el glosario los tiene fijados en
inglés desde CHA-31. Gana el glosario. Son 2 de las 41 que **no son deuda**.

### 4.2 Igual en es-AR (1)

`Videos` → «videos» en rioplatense, sin tilde: la cadena ya está bien. Una
entrada `"Videos": "Videos"` sería diccionario muerto con otro nombre, así que
no la puse. **Queda declarada acá para que la próxima medición no la reabra**:
va a salir «idéntica en los dos idiomas» en el método de §6.3 para siempre, y
eso es correcto.

### 4.3 Familia de interpolación (2)

| Cadena | Dónde | Por qué |
| --- | --- | --- |
| `by Local` | no existe como literal en `ui/src` | Se **compone** en runtime (`by {origen}`). Es la familia que §3 de `cierre-corte2.md` ya declara. La tarea pedía «`by Local` sí: "de Local"» — no hay cadena a la que ponerle esa forma |
| `agent` | `Agents.tsx:490` | Es `{filtered.length} agent{s}`: plural contado, la misma familia que «3 skills» y «Enabled for 2 agents» |

### 4.4 Dato del API, no literal del código (2)

`working` (lista de Agentes) y `active` (lista de Proyectos) salen de
`StatusBadge.tsx:57` y `:39`, los dos `status.replace(…)` sobre el valor que
mandó el API. **No pasan por ningún sitio marcado**: es la invariante de §4 del
ADR funcionando, no una falla. No hay entrada ni declaración que las alcance.

> Esto corrige la clase 2 de la tarea («los tres estados en minúscula se
> resuelven por el diccionario global… es la clase más barata de la lista»).
> No es una clase: son tres causas distintas. `idle` **sí** es un literal y le
> falta una declaración (§5); `working` y `active` son dato.

### 4.5 La regla de la comparación §7.4 (1)

`paused` en la lista de Rutinas está en `RoutineList.tsx:138`
(`isArchived ? "archived" : isDraft ? "draft" : "paused"`), que es un hijo de
JSX entre literales: una posición que el marcado **sí** cubre. Pero el mismo
archivo compara `routine.status === "paused"` en :101 y :136, así que §7.4
bloquea la cadena *en ese archivo* a propósito, para que el español no llegue
antes que la lógica. El reporte de sitios lo confirma en su listado 4: `paused`
aparece ahí, marcado «← en el diccionario».

**Consecuencia, y es la que importa:** `paused` **no la arregla ni una entrada,
ni una declaración, ni el mapa por sitio** —el mapa sólo desvía sitios que ya se
marcan—. La entrada «en pausa» de `common.json` va a seguir sin llegar a esa
columna. `archived` está en el mismo caso.

> Esto corrige la clase 1 de la tarea, que ponía a `paused` entre las que «ya
> están traducidas y no se aplican: hace falta una declaración». Hace falta otra
> cosa, y no es mía ni del Dev: es upstream dejando de reusar el literal del
> estado como texto de pantalla, o una excepción a §7.4, que es una decisión de
> riesgo del Lead.
>
> El contraste con `On` (CHA-42) explica por qué uno sí y el otro no: `On` está
> en `:189`, en mayúscula, y **nadie lo compara**.

---

## 5. Lo que le falta al Dev: 12 cadenas, con archivo y línea

Diez salen con **una línea en `TEXT_DECLS`** de `ui/src/i18n-es-ar/text-sites.ts`
(tabla de abajo); dos piden **lista blanca** y no `TEXT_DECLS` (§5.1). Más una
advertencia de gate (§5.2) y dos entradas que van en el mismo commit (§6).
**Cero ediciones de upstream en los doce casos.**

Las filas 2 y 5 son el mismo mecanismo pero no cuentan igual: la 5 es una de las
41 (`New Task`, a medias), y la 2 es **de yapa** —`Succeeded` ya sale en español
en el Panel por la leyenda del gráfico, y esta declaración le agrega el otro
sitio de la misma pantalla—.

| # | Cadena(s) | Archivo y línea | Nombre a declarar | Nota |
| ---: | --- | --- | --- | --- |
| 1 | `No recent agent runs.` | `src/components/ActiveAgentsPanel.tsx:58` | `emptyMessage` | Valor por defecto de parámetro desestructurado: la **misma posición** que `labels` de CHA-42, así que el canal ya la cubre y sólo falta el nombre. Ojo: `emptyMessage` ya está en `TEXT_ATTRS`, que cubre el atributo y **no** el default |
| 2 | `Succeeded`, `Running`, `Queued`, `Failed`, `Timed out`, `Cancelled`, `Interrupted` | `src/components/ActiveAgentsPanel.tsx:25` | `runStatusLabels` | Mapa indexado por valor técnico. **Las 7 son literales**: no mueve el gate de las 3 posiciones no literales. Seis ya tienen entrada —`Succeeded` → «Salió bien» es de esta tarea—; la séptima, **`Timed out`, no tiene** y la va a necesitar (forma propuesta: «Se pasó del tiempo», sin género, parallela a «Falló») |
| 3 | `Yesterday`, `Today`, `Earlier` | `src/lib/task-date-groups.ts:3` | `taskDateGroupLabels` | Mapa de etiquetas, las 3 literales. Es el que arregla `YESTERDAY` en **Tareas y Bandeja**, o sea dos pantallas con una línea. Las entradas van **junto con** la declaración: hoy serían diccionario muerto (ver §6) |
| 4 | `Inbox` (el encabezado `INBOX`) | `src/pages/Inbox.tsx:825` | `surfaceLabel` | Valor por defecto de parámetro, igual que el #1. La entrada «Bandeja» **ya existe** en `navigation.json`: la declaración sola alcanza |
| 5 | `New Task`, `Create Task` | `src/components/IssuesList.tsx:1737-1738` **y** `src/components/LegacyIssuesList.tsx:1642-1643` | `createButtonLabel`, `createActionLabel` | **D-1**, el que sigue vivo. Dos archivos, los dos con las dos declaraciones. El consecuente del ternario es una plantilla, así que sale como formato (`New {0}` / `Create {0}`) y no como posición no literal. Las entradas de los literales ya existen |
| 6 | `idle` | `src/components/StatusBadge.tsx:51` | `label` | `status === "active" ? "idle" : status`. La rama literal se marca sola y la otra es un identificador, que el canal **ignora**: no suma posición no literal. Es la única declaración de `label` en el archivo. La entrada va junto (ver §6) |
| 7 | `Most agents`, `Most stars`, `Most forks`, `Recently updated`, `Alphabetical` | `src/pages/CompanySkills.production.tsx:597` | `DISCOVERY_SORT_LABELS` | Mapa de etiquetas, las 5 literales. **`CompanySkills.tsx` no tiene este mapa**: declararlo ahí rompería el build, que es la lección que CHA-42 ya aprendió con `viewTitle` |
| 8 | `Relevance`, `Newest created`, `Priority` | `src/lib/search-filters.ts:16` | `SORT_LABELS` | Mapa de etiquetas, todas literales. `Recently updated` se comparte con el #7 |
| 9 | `No artifact stacks yet.` y las 5 hermanas | `src/pages/Artifacts.tsx:236-246` | `emptyMessage` | Ternario anidado **entre seis literales**: se marcan uno por uno, no mueve el gate |
| 10 | `Leave`, `Join`, `Leaving...`, `Joining...` | `src/components/MembershipAction.tsx:27-29` | `label` | Ternario anidado entre literales. Arregla `Leave` en Proyectos **y** el botón equivalente en Agentes y en la ficha |

### 5.1 Las dos que no son una línea en `TEXT_DECLS`

| Cadena | Archivo y línea | Qué pide, y por qué no la hago yo |
| --- | --- | --- |
| `Select skill` | `src/pages/SkillStudio.tsx:1205` (default), `:732` y `:805` (atributo) | El nombre es `emptyLabel`, que **no está en `TEXT_ATTRS`**. O sea: no es `TEXT_DECLS`, es **ampliar la lista blanca de atributos**, que es la decisión más delicada de `text-sites.ts` (§7.3). Conviene medir primero cuántos sitios de `emptyLabel` hay en el árbol y si todos llevan texto, que es el método de §7.2 |
| `My Projects` (y `Other Projects`) | `src/pages/Projects.tsx:192-193` | Es un elemento de un **arreglo de tuplas escrito en el JSX**: no es atributo, ni clave, ni texto de JSX, y **no hay declaración nombrada que envolver**. `TEXT_DECLS` no la puede alcanzar. Pide una posición nueva en la lista blanca (elemento de arreglo) |

### 5.2 Una advertencia de gate, para que no se descubra en CI

**`Never` (lista de Rutinas) no entra sin mover el gate de las 3.**
`RoutineList.tsx:41` es `formatLastRunTimestamp`, y la función tiene dos
retornos: `return "Never"` (literal, se marca) y
`return new Date(value).toLocaleString()` (**no literal**, se envuelve entero).
Declararla agrega `src/components/RoutineList.tsx` a la lista exacta de
`datos-del-dueno.es-ar.test.tsx` —hoy `KanbanBoard.tsx`, `StatusIcon.tsx`,
`CompanyEnvironments.tsx`— y **el test falla por diseño**.

Es la misma situación que `describeScope` en CHA-39, y por eso **no la propongo
como las otras diez**: es una decisión del Lead sobre una posición nueva por
donde podría pasar un dato. El dato que pasaría es una fecha formateada
(`toLocaleString()`), que no pega en ninguna entrada del diccionario y cae a sí
misma; o sea el riesgo es chico y conocido, pero el gate existe para que se
decida y no para que se note.

---

## 6. Por qué dos entradas no las escribí todavía

`Yesterday` (#3) y `idle` (#6) **tienen forma elegida** y las dejo sin escribir
a propósito: hoy ningún sitio marcado las produce, así que la entrada sería
diccionario muerto y el contador de «sin cubrir» pasaría de 4 a 6 — que es
justo el gate que la tarea me puso en ≤ 4, y el mismo problema que CHA-30 tuvo
que limpiar sacando 19 entradas.

**Van juntas con la declaración, en el mismo commit.** Las formas, ya decididas,
para que quien haga la declaración no tenga que elegir:

| Cadena | es-AR | Por qué |
| --- | --- | --- |
| `Yesterday` | Ayer | Hermanas: `Today` → «Hoy», `Earlier` → «Antes». `Today` **ya tiene** sitio (`Timeline.tsx`), así que su entrada se puede escribir antes; las otras dos no |
| `idle` | inactivo | Minúscula, como `paused` → «en pausa» y `running` → «en curso» en `common.json`. Masculino porque rotula «el agente»; no hay forma sin género corta para este |

---

## 7. Los gates, medidos

Todos sobre `d53224e20`, con `unset NODE_PATH` antes de cada comando de node.

| # | Gate | Resultado | Umbral |
| --- | --- | --- | --- |
| 1 | Tipos (`pnpm --filter @paperclipai/ui typecheck`) | **0 errores** | 0 ✅ |
| 2 | Suite con la config de upstream (`pnpm exec vitest run src/i18n-es-ar`) | **181 pasan / 24 salteados**, 5 archivos + 1 salteado | sin regresiones ✅ (eran 180 / 19; los 5 salteados nuevos son los de `real-components`, que sólo corren con el plugin) |
| 3 | Suite con la config es-AR (`--config vitest.config.es-ar.ts`) | **25 pasan / 25** | sin regresiones ✅ (eran 20) |
| 4 | Posiciones no literales | **3**: `KanbanBoard.tsx`, `StatusIcon.tsx`, `CompanyEnvironments.tsx` | exactamente 3 ✅ |
| 12 | Cobertura del diccionario | **3.894 entradas · 3.890 cubiertas · 4 sin cubrir** | ≤ 4 ✅ |

Las **4 sin cubrir son las mismas cuatro** de CHA-36 (`Choose agents`,
`Loading permissions…`, `Choose a saved API key or enter a new one`,
`This authorization request expired`): las 14 entradas nuevas entraron con sitio
y ninguna declaración se rompió.

**Archivos tocados: 8, los 8 dentro de `ui/src/i18n-es-ar/`.** Cero archivos de
upstream, cero `pnpm-lock.yaml`, cero `package.json`, y ni `mark-text.ts` ni
`text-sites.ts` tienen una línea de diferencia.

---

## 8. Para otros roles

**Dev / ux-ui** — las 10 declaraciones de la tabla de §5, con archivo, línea y
nombre; las 2 de §5.1 que piden lista blanca y no `TEXT_DECLS`; la advertencia
de gate de §5.2 (`Never`); y las 2 entradas de §6 que van **en el mismo commit**
que la declaración (`Yesterday` → «Ayer», `idle` → «inactivo»), porque sueltas
son diccionario muerto. El mejor cociente pantalla/línea es la fila 3
(`taskDateGroupLabels`): **dos pantallas con una línea**.

**Lead** — tres decisiones que no son mías:

1. **`paused` en Rutinas (§4.5)** no la arregla ninguna de las tres
   herramientas. Si se quiere en español, hay que decidir sobre §7.4 o pedirle
   el cambio a upstream. Hoy es limitación declarada.
2. **`Never` (§5.2)** mueve el gate de las 3 posiciones no literales. Mismo
   patrón que `describeScope` en CHA-39.
3. **La tabla de las 41 de la tarea y el glosario se contradicen en `SKILLS` y
   `Studio`** (§4.1). Apliqué el glosario (quedan en inglés). Si el dueño
   prefiere traducirlos, es un cambio de la fila de CHA-31 y afecta todas las
   pantallas de Skills, no sólo estas dos cadenas.

**QA** — el método de §6.3 de CHA-36 va a seguir marcando `Videos` como «inglés
sin traducir» para siempre, y es correcto: es igual en es-AR (§4.2). Y
`working`/`active`/`paused` van a seguir apareciendo: son §4.4 y §4.5, no deuda.
