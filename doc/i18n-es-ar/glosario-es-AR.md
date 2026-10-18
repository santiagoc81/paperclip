# Glosario es-AR para la interfaz de Paperclip

**Versión 4.** Este archivo es **el original**: nació como documento de Paperclip
en CHA-1 y desde CHA-21 (corte 2) vive acá. El documento de Paperclip queda como
registro histórico; lo que manda es este archivo.

**Variante:** español rioplatense (es-AR), voseo, registro informal.

Cómo se usa: las traducciones del overlay (`ui/src/i18n-es-ar/dictionary/`)
salen de acá. Si una pantalla necesita un término que no está en estas tablas, se
decide, se traduce y **se agrega acá en la misma tarea**.

## Cambios respecto de la v1

La v1 se escribió sin acceso al repo: fijaba el registro y los términos de
dominio, pero no los había visto en pantalla. La v2 agrega lo que salió de
traducir la sección Configuración (CHA-21):

- Roles de membresía, estados de membresía y vocabulario de invitaciones (§2, §3).
- Vocabulario de Entornos: plantillas, imagen propia, reservas de sandbox,
  vínculos (§2).
- Vocabulario de Conexiones: modelo de decisión, respuesta rápida (§2).
- §8 nueva: las cadenas partidas y los plurales contados, que son un problema
  del overlay y no del idioma.
- §7 ampliada con los términos técnicos que quedan en inglés en estas pantallas.

## Cambios respecto de la v2

La v2 cerró con ocho cadenas inglesas que **no se podían traducir** porque
necesitaban dos españoles distintos según la pantalla. El corte 2 construyó el
mecanismo que faltaba (el mapa por sitio de CHA-38) y las ocho entraron. La v3
cierra el entregable con lo que eso dejó decidido:

- §9 nueva: **las formas por sitio**. Las ocho familias, cada una con el
  discriminante que decide cuál forma va en cada archivo. Es lo que hay que leer
  antes de tocar `dictionary/por-sitio/es-AR.json`.
- §10 nueva: **las limitaciones conocidas del corte 2**, en un solo lugar y cada
  una con su motivo. Hasta ahora vivían repartidas en cinco bitácoras.
- §3 y §5 siguen tal cual: el mapa por sitio **no reemplaza** ninguna decisión
  anterior, le agrega la dimensión del archivo a ocho cadenas.

## Cambios respecto de la v3

La v3 se escribió **antes** de que CHA-42 midiera la columna de Rutinas y de
que CHA-43 cerrara la cola de 41 cadenas, así que dejó cinco formas como
«apuntadas y no cerradas». La v4 las cierra y da de alta lo que esas dos
tareas encontraron. **Esta es la versión que entrega CHA-2.**

- §9 crece de 8 cadenas a **15**: `Author` (CHA-43, §9.4) y las tres de §9.5
  —`Blocked`, `Installed`, `Open Settings`—, que son una **cuarta clase** de
  entrada por sitio: no separan dos sentidos ni pelean contra una caja, le
  corrigen la concordancia a un global que es correcto en el resto de la app.
- §10.5 deja de ser una lista de pendientes: ahora son **decisiones cerradas
  con el número medido al lado**, incluidas las dos que el gate de anchura
  rechazó (`Draft` y `Archivada`) y la limitación que eso deja declarada.
- §5 incorpora `Done` → «Listo» como decisión explícita, para que no se vuelva
  a abrir.
- §9.3 pasa de decisión a hecho: `All` en Búsqueda ya tiene su línea en el mapa.

## 1. Reglas de estilo

| Regla | Sí | No |
|---|---|---|
| **Voseo en el texto corrido** y en instrucciones | «Aceptá la tarea», «si querés», «tenés que conectar» | «Acepta la tarea», «si quieres», «tienes que» |
| **Botones y acciones en infinitivo** (no voseo) | «Guardar», «Crear tarea», «Conectar» | «Guardá», «Creá» |
| **Mayúscula solo en la primera palabra** (sentence case; el inglés usa Title Case, el español no) | «Nueva tarea», «Configuración de la empresa» | «Nueva Tarea», «Configuración De La Empresa» |
| **Nada de español peninsular** | agregar, archivo, hacer clic, computadora, celular | añadir, fichero, pulsar, ordenador, móvil |
| **Sin voz pasiva ni tercera persona impersonal** cuando se le habla al usuario | «No tenés tareas asignadas» | «El usuario no tiene tareas asignadas» |
| **Concordancia de género con el sustantivo** | «Tarea bloqueada», «Agente contratado» | «Tarea bloqueado» |
| **Fecha y hora** formato local | 17/10/2026, 14:30 | 10/17/2026, 2:30 PM |
| **Números** coma decimal, punto de miles | 1.234,56 | 1,234.56 |
| **Placeholders y variables intactos** | «{count} tareas», «Hola, {name}» | traducir o reordenar la variable sin cuidado |

Dos cosas que conviene tener presentes al aplicar:

- **El español ocupa entre 20 % y 25 % más espacio que el inglés.** Botones,
  encabezados de columna y chips de estado son donde primero se rompe el diseño.
  Si un texto no entra, hay que acortarlo, no dejarlo cortado. En las tablas de
  Configuración eso ya pesó: «Invited by» quedó «Invitó», no «Invitado por».
- **La pluralización no es la misma.** Donde el inglés resuelve con `s`, acá hace
  falta forma para 1 y para el resto: «1 tarea» / «2 tareas». Para cero, mejor
  negar: «No hay tareas» antes que «0 tareas».

## 2. Entidades y navegación

| Inglés | es-AR | Nota |
|---|---|---|
| Company | Empresa | |
| Board | Directorio | «board member» → «miembro del directorio» |
| Agent | Agente | |
| Project | Proyecto | |
| Task / Issue | Tarea | Un solo término en español, aunque el inglés use dos |
| Subtask / Child task | Subtarea | |
| Goal | Objetivo | |
| Plan | Plan | |
| Document | Documento | |
| Work product | Entregable | |
| Comment | Comentario | |
| Thread | Hilo | |
| Card | Tarjeta | |
| Run | Ejecución | |
| Routine | Rutina | |
| Connection | Conexión | |
| Approval | Aprobación | |
| Repository | Repositorio | |
| Adapter | Adaptador | |
| Blocker | Bloqueo | «blocked by» → «bloqueada por» |
| Inbox | Bandeja de entrada | «Bandeja» sola si no entra |
| Mine | Mías | Femenino plural: concuerda con «tareas» y es lo que entra en la pestaña, que son sus dos únicos sitios. La v1 decía «Mis tareas» y el corte 2 entregó «Mías»; manda lo entregado |
| Dashboard | Panel | |
| Overview | Resumen | |
| Activity | Actividad | |
| Settings | Configuración | |
| Usage | Uso | |
| Cost / Spend | Costo / Gasto | «costo», no «coste» |
| Assignee | Responsable | |
| Reviewer | Revisor | |
| Status | Estado | «State» también → «Estado» |
| Priority | Prioridad | |
| Label | Etiqueta | |
| Agent prompt / instructions | Instrucciones del agente | |
| Heartbeat | Ciclo de actividad | «Latido» es literal y no comunica nada; si el contexto ya es claro, «ciclo» solo |

### Navegación de Configuración (CHA-21)

| Inglés | es-AR | Nota |
|---|---|---|
| General | General | Igual en los dos idiomas: **no entra al diccionario** |
| Profile | Perfil | |
| Members | Miembros | |
| Secrets | Secretos | |
| Environments | Entornos | |
| Connections | Conexiones | «Connectors» (otra pantalla) → «Conectores» |
| Access | Acceso | Singular: es el nombre de la sección, no una lista |
| Export / Import | Exportar / Importar | Son pantallas de acción, van en infinitivo |
| Experimental | Experimental | Igual en los dos idiomas: **no entra al diccionario** |
| Plugins | Plugins | Se usa en inglés; «complementos» es peninsular |
| Adapters | Adaptadores | |
| Back to app | Volver a la app | |

### Membresías, invitaciones y roles (CHA-21)

| Inglés | es-AR | Nota |
|---|---|---|
| Member | Miembro | |
| Membership | Membresía | «Membership status» → «Estado de la membresía» |
| Join request | Pedido de ingreso | Ya venía de la navegación del corte 1 |
| Invite *(sustantivo)* | Invitación | |
| Invite *(verbo)* | Invitar | |
| Invited by | Invitó | Encabezado de columna: «Invitado por» no entra |
| Inviter | Quién invitó | |
| Humans | Personas | Más natural que «Humanos» |
| Viewer | Lector | |
| Operator | Operador | |
| Admin | Administrador | El valor técnico `admin` no se traduce |
| Owner | Dueño | El mismo término que usa el dueño para sí mismo |

### Entornos (CHA-21)

| Inglés | es-AR | Nota |
|---|---|---|
| Environment | Entorno | |
| Environment variable | Variable de entorno | |
| Execution target | Destino de ejecución | |
| Binding | Vínculo | «bindings need attention» → «vínculos necesitan atención» |
| Template | Plantilla | |
| Custom image | Imagen propia | «imagen personalizada» es más largo y no agrega nada |
| Capture | Captura / capturar | |
| Probe | Sondeo | «Environment probe failed» → «Falló el sondeo del entorno» |
| Sandbox lease | Reserva de sandbox | «arrendamiento» es literal y no comunica; «reserva» sí |
| Provider | Proveedor | |
| Known hosts | Hosts conocidos | El bloque `known_hosts` queda en inglés |
| Strict host key checking | Verificación estricta de la clave del host | |
| Stream *(verbo)* | Transmitir | |

### Conexiones (CHA-21)

| Inglés | es-AR | Nota |
|---|---|---|
| Decision model | Modelo de decisión | |
| Fast response | Respuesta rápida | |
| Shared API connection | Conexión de API compartida | |
| Billing | Facturación | |
| Company-sponsored | A cuenta de la empresa | Más claro que «patrocinado por la empresa» |

### General y Perfil (CHA-21)

| Inglés | es-AR | Nota |
|---|---|---|
| Display name | Nombre para mostrar | |
| Appearance | Apariencia | |
| Hiring | Contratación | |
| Danger Zone | Zona de riesgo | |
| Deployment | Despliegue | |
| Backup retention | Retención de los backups | «backup» queda en inglés (§7) |
| Sign out | Cerrar sesión | |

## 3. Estados

Los valores técnicos (`in_review`, `todo`) **no se traducen**: viven en la base y
en la API. Lo que se traduce es la etiqueta que se muestra.

| Valor técnico | Etiqueta es-AR |
|---|---|
| `backlog` | Reserva |
| `todo` | Por hacer |
| `in_progress` | En curso |
| `in_review` | En revisión |
| `done` | Terminada |
| `blocked` | Bloqueada |
| `cancelled` | Cancelada |

### Estados de membresía, de cuenta y de instancia (CHA-21)

Van en masculino porque concuerdan con «estado», que es el sustantivo que los
encabeza en pantalla («Estado de la membresía: Activo»).

| Inglés | es-AR |
|---|---|
| Active | Activo |
| Inactive | Inactivo |
| Pending | Pendiente |
| Suspended | Suspendido |
| Unset | Sin definir |
| Ready | Listo |
| Not ready | No está listo |
| Setup required | Falta configurar |
| Not configured | Sin configurar |

## 4. Prioridades

| Valor técnico | Etiqueta es-AR |
|---|---|
| `critical` | Crítica |
| `high` | Alta |
| `medium` | Media |
| `low` | Baja |

## 5. Acciones y botones

| Inglés | es-AR |
|---|---|
| Save | Guardar |
| Cancel | Cancelar |
| Create | Crear |
| Add | Agregar |
| Edit | Editar |
| Delete | Eliminar |
| Remove | Quitar |
| Close | Cerrar |
| Submit | Enviar |
| Accept | Aceptar |
| Reject | Rechazar |
| Approve | Aprobar |
| Confirm | Confirmar |
| Assign | Asignar |
| Unassign | Quitar asignación |
| Delegate | Delegar |
| Hire | Contratar |
| Archive | Archivar |
| Retry | Reintentar |
| Search | Buscar |
| Filter | Filtrar |
| Sort | Ordenar |
| Refresh | Actualizar |
| Copy | Copiar |
| Download | Descargar |
| Upload | Subir |
| Connect / Disconnect | Conectar / Desconectar |
| Enable / Disable | Activar / Desactivar |
| On / Off | Activado / Desactivado |
| Sign in / Sign out | Iniciar sesión / Cerrar sesión |
| Continue | Continuar |
| Back / Next | Volver / Siguiente |
| Done *(botón)* | Listo |
| Dismiss | Descartar |
| Got it | Entendido |
| Learn more | Más información |
| View all | Ver todo |
| Show more / Show less | Ver más / Ver menos |

### Agregadas en CHA-21

| Inglés | es-AR | Nota |
|---|---|---|
| Test | Probar | «Test connection» → «Probar la conexión» |
| Run test | Probar | |
| Undo | Deshacer | |
| Revert | Revertir | |
| Rollback | Volver atrás | |
| Relink | Volver a vincular | |
| Revoke | Revocar | |
| Reassign | Reasignar | |
| Store as secret | Guardar como secreto | |

Los botones que mandan a otra pantalla llevan artículo: «Abrir Miembros»,
«Administrar la conexión», «Volver a los entornos».

### `Done` es «Listo» en todas las pantallas, y no es negociable (CHA-41)

`Done` aparece como **botón**, como **estado de una tarea** y como **opción de
filtro** (`ActivityFeed.tsx:119`, junto a «En curso» y «En revisión»). En las
tres va **«Listo»**, el mismo español, sin excepción por pantalla.

Queda escrito acá porque ya se intentó abrir una vez: en el repaso del mapa
propuse «Terminado» para el filtro de actividad, por coherencia con sus
hermanos de esa pantalla, y **se rechazó con razón**. El defecto que el dueño
reportó en el corte 1 —y que CHA-15 arregló unificando en «Listo»— era
exactamente éste: *el mismo estado con dos nombres según dónde lo mirás*. La
coherencia **entre** pantallas gana sobre la coherencia **dentro** de una
pantalla, porque es la que el usuario nota cuando navega.

Es la contracara de §9: ahí el mapa por sitio existe para dar dos españoles
cuando el inglés tiene **dos sentidos**. `Done` tiene uno solo, así que el
mapa no aplica.

**Cinco botones de esta sección no tienen una sola forma** porque la misma
palabra inglesa es sustantivo en otra pantalla: `Open`, `Run`, `Comment`,
`Review` y `Type`. La forma la decide el archivo, y están en §9 —no busques una
entrada global para ellas, §9.2 explica por qué no la tienen—.

## 6. Estados de carga, vacíos y errores

| Inglés | es-AR |
|---|---|
| Loading… | Cargando… |
| Saving… | Guardando… |
| Saved | Guardado |
| No results | Sin resultados |
| No tasks yet | Todavía no hay tareas |
| Nothing selected | No seleccionaste nada |
| Something went wrong | Algo salió mal |
| Try again | Probá de nuevo |
| Failed to load | No se pudo cargar |
| Required field | Campo obligatorio |
| Are you sure? | ¿Seguro? |
| This can't be undone | Esto no se puede deshacer |
| Unsaved changes | Cambios sin guardar |
| Permission denied | Permiso denegado |
| Not found | No se encontró |

En los mensajes de error conviene decir qué pasó y qué hacer, en ese orden: «No
se pudo guardar la tarea. Revisá la conexión y probá de nuevo» funciona mejor que
«Error al guardar».

Dos moldes que se repiten en Configuración:

- `Failed to <algo>` → **«No se pudo <algo>»**, nunca «Falló al…».
- `Select an organization to <algo>` → **«Elegí una empresa para <algo>»**.
- Los puntos suspensivos se copian **como estén en el código**: `...` y `…` son
  dos claves distintas para el overlay (§7.1 del ADR 0001).

## 7. Lo que NO se traduce

- **Nombres propios:** Paperclip, Claude, Anthropic, GitHub, Gitea, Opus,
  Sonnet, Haiku, OpenAI, OpenRouter, AWS, Apps.
- **Identificadores técnicos:** valores de estado y prioridad en base y API,
  claves de documento, slugs, nombres de variables de entorno, identificadores
  de tareas (CHA-1).
- **Contenido generado:** lo que escriben los agentes o el usuario en
  comentarios, documentos y descripciones. Eso ya nace en español por separado.
- **Términos de Git:** commit, branch, merge, pull request. En la práctica
  argentina se usan en inglés; traducirlos genera más confusión que claridad.
- **Términos técnicos que en es-AR se usan en inglés** (CHA-21): backup, log,
  host, driver, sandbox, plugin, API, SSH, PEM, KMS, JSON, gzip, DNS, IP, LAN,
  VPN, `known_hosts`, prompt, token, CLI.
- **Palabras que son iguales en los dos idiomas** (General, Experimental, Local,
  Sandbox, Host, Driver, Logo, Plugins): no entran al diccionario. Una entrada
  que no cambia nada es ruido y encima suma superficie de sobretraducción.

### Agregadas en CHA-27 (lote compartido: las 494 largas y las 987 cortas)

El lote compartido es el que toca dos o más de las doce pantallas del alcance,
así que estos términos son los que más se repiten en toda la app.

| Inglés | es-AR | Nota |
|---|---|---|
| Workspace | Espacio de trabajo | «Workspaces» solo, cuando no entra → «Espacios» (ya venía del corte 1) |
| Worktree / branch / commit / diff | worktree / branch / commit / diff | Términos de Git: quedan en inglés (§7) |
| Runner | runner | Queda en inglés; «Runner Inspector» → «Inspector del runner» |
| Trace / frame | trace / frame | Quedan en inglés, igual que en CHA-25 |
| Header *(HTTP)* | Encabezado | «header» suelto es jerga; en una etiqueta de formulario no comunica |
| Timeout | Tiempo de espera | «Timeout seconds» → «Segundos de espera» |
| Adapter | Adaptador | Ya venía de §2 |
| Composer | Redactor | El cuadro donde se escribe el mensaje |
| Claim *(sobre un worktree)* | Reserva | «Worktree claimed by» → «Worktree reservado por» |
| Dirty changes | Cambios sin commitear | «sin guardar» es otra cosa: están guardados, no commiteados |
| Break-glass | De emergencia | «Reconcile anyway (break-glass)» → «Reconciliar igual (de emergencia)» |
| Preset | Preajuste | |
| Raw | Crudo | «Raw frames» → «Frames crudos» |
| Redacted | Censurado | «Exact unredacted frame» → «Frame exacto sin censurar» |
| Parked | En reserva | Concuerda con «Reserva» de `backlog` (§3) y evita el género |
| Running | En curso | Mismo criterio: sirve para ejecución, servicio y agente sin género |
| Manager *(de un agente)* | Jefe | «No manager» → «Sin jefe»; «Reports to» → «Reporta a» |
| Parent / child *(tareas)* | Padre / hija | «Enable parent-child nesting» → «Activar el anidado padre-hija» |

Tres reglas que salieron de este lote y valen para todo lo que venga:

1. **`X by` es un verbo en pasado, no un participio.** Es la regla que ya estaba
   en «Invited by → Invitó» y acá se aplica parejo: «Approved by» → «Aprobó»,
   «Rejected by» → «Rechazó», «Proposed by» → «Propuso», «Resolved by» →
   «Resolvió», «Withdrawn by» → «Retiró», «Connected by» → «Conectó». Esquiva
   el género del sujeto, que el overlay no puede saber.
2. **Las etiquetas de estado van en masculino** (§3: concuerdan con «estado»), y
   cuando hay una forma sin género disponible se prefiere esa: «Running» → «En
   curso», «Disconnected» → «Sin conexión», «Unassigned» → «Sin asignar»,
   «Unavailable» → «No disponible».
3. **Una cadena inglesa que necesita dos españoles distintos según la pantalla no
   entra.** El ADR 0001 revisión 2 pide resolverla **por sitio** y ese mecanismo
   todavía no existe en esta rama: el marcado de ADR 0002 emite `__tEs(texto)`
   sin ninguna identidad del sitio, y el único canal que distingue —`tEs(clave,
   inglés)`— cuesta una edición de upstream, con presupuesto cero. Las tres que
   quedaron afuera por esto son `Open`, `Run` y `Comment`, y el motivo de cada
   una está en [CHA-27](CHA-27-lote-compartidos.md). `Review` sí entró, como
   sustantivo («Revisión»), porque se miraron sus sitios y los tres son
   sustantivo.

   **Corrección de CHA-30:** `Review` tiene **17 archivos** con sitio marcado,
   no tres, y en `IssueRunLedger.tsx:750` es **verbo** («Review {ID} for
   recovery context.»), donde «Revisión» se lee mal. La entrada no se tocó
   —cambiarla rompe los sitios donde sí es sustantivo— y queda como cuarto
   candidato a `tEs()`, al lado de `Open`, `Run` y `Comment`. La lección es de
   método: los sitios se cuentan corriendo `markText` sobre todo `ui/src`, no
   grepeando a ojo.

### Agregadas en CHA-30 (lote `tareas`: 154 largas y 386 cortas)

Es la pantalla más cargada del alcance: el detalle de una tarea, su chat, el
visor de archivos, el panel lateral y el libro de ejecuciones.

| Inglés | es-AR | Nota |
|---|---|---|
| Watchdog | Centinela | «Watchdog task» → «Tarea centinela»; «Watchdog agent» → «Agente centinela». «Perro guardián» no entra en una etiqueta |
| Watch / watched | Vigilar / vigilado | «the watched task tree» → «el árbol de tareas vigilado» |
| Goal | Objetivo | Ya venía de §2 |
| Objective | Consigna | Para no escribir «Objetivo del objetivo»: «Goal objective» → «Consigna del objetivo» |
| Steer / steering | Redirigir | «Continued after steering ·» → «Siguió después de redirigir ·» |
| Override *(de modelo)* | Reemplazo | El par del carril es «Primary / Override» → «Principal / Reemplazo» |
| Lane | Carril | «Model lane» → «Carril del modelo» |
| Run ledger | Libro de ejecuciones | |
| Runtime *(duración)* | Tiempo de ejecución | `Runtime {duración}` en el resumen de costos; no es el «runtime» de sistemas |
| Monitor *(sección)* | Monitoreo | Es el sustantivo de la sección, no el verbo |
| Triage | Clasificación | |
| Handoff | Traspaso | «Task handoff» → «Traspaso de la tarea» |
| Subtree | Subárbol | |
| Jobs | Trabajos | Los comandos del espacio de trabajo, no las tareas |
| Schedule *(cron)* | Programación | |
| Lock / Unlock *(documento)* | Bloquear / Desbloquear | |
| Idempotent claim | Reserva idempotente | §7: Claim → Reserva |
| Raw / Rendered | Crudo / Renderizado | |
| Elapsed | Transcurrido | |
| Requester | Quién pidió | Misma forma que «Inviter → Quién invitó» |
| Approvers / Reviewers | Aprobadores / Revisores | |
| Originating | Origen | Encabezado de fila: «Originating» → «Origen», no «Originante» |
| Old / New *(badges de diff)* | Anterior / Nuevo | Ver abajo |
| Hidden follow-up | Seguimiento oculto | |

Estados nuevos, todos en una forma **sin género** o en masculino (§3):

| Inglés | es-AR |
|---|---|
| Queued | En cola |
| In flight | En tránsito |
| Interrupted | Interrumpido |
| Completed | Completado |
| Exhausted | Agotado |
| Unhealthy | Con problemas |
| Out of date | Desactualizado |
| Working now | Trabajando ahora |
| Browsing / Watching | Navegando / Vigilando |

Dos reglas que salieron de este lote:

1. **`Old` / `New` van «Anterior» / «Nuevo», no «Anterior» / «Nueva».** `New` es
   botón en un lugar («Nuevo documento», acortado a «Nuevo» en mobile) y badge
   de diff en cuatro más; «Nuevo» sirve en los dos y «Nueva» sólo en el badge.
   Con «Anterior» el par del diff se lee como se lee un diff en castellano.
2. **Las cadenas que el código arma con una plantilla van por formato, no por
   literal.** El visor de archivos escribe `` `Show rendered ${previewLabel}` ``,
   así que la entrada correcta es la clave `Show rendered {0}`, no
   `Show rendered Markdown`. La medición entrega el literal expandido porque lo
   vio en pantalla; el diccionario tiene que entrar por donde el compilador lo
   vio escrito (ADR 0002 §7.5).

Lo que **no entró** de este lote y conviene no volver a intentar: `Branch`,
`Commit`, `Pull request` y `Diff —` (términos de Git, §7), y `Chat`, `Error`,
`Video`, `Markdown`, `PLAN`, `Tokens`, `CSV ·` (iguales en los dos idiomas).

### Agregadas en CHA-31 (lote `skills`: 135 largas y 281 cortas)

Son tres pantallas: la biblioteca de skills de la empresa, Skill Studio y los
orígenes de skills (con el diálogo de importar desde un proyecto).

| Inglés | es-AR | Nota |
|---|---|---|
| Skill | skill | **Femenino**: «la skill», «las skills instaladas». Queda en inglés (decisión del corte 1); acá se fija el género, que es lo que decide cada adjetivo de estas pantallas |
| Skill Studio / Studio | Skill Studio / Studio | Nombre del producto: no se traduce |
| Fork *(verbo)* | Copiar | «Fork skill» → «Copiar la skill». «Forkear» es jerga y «bifurcar» no se usa |
| Fork *(badge)* | Copia | «Forked» → «Copia»; «Forked from» → «Copiada de» |
| Make a copy | Hacer una copia | La misma acción que `Fork`, dicha más largo también en inglés |
| Library | Biblioteca | «the organization library» → «la biblioteca de la empresa» |
| Store | Tienda | «Back to store» → «Volver a la tienda» |
| Source *(de skills)* | Origen | Ya venía de §2; «Skill sources» → «Orígenes de skills» |
| Provenance | Procedencia | Para no chocar con «Origen», que ya es `Source` |
| Bundled | De fábrica | Forma **sin género**: la misma cadena rotula skills, plugins y equipos |
| Trust level «Safe» | Sin riesgo | Mismo criterio: evita elegir género en una etiqueta reusable |
| Locally modified | Con cambios locales | Idem |
| Up to date | Al día | |
| Update available | Hay una actualización | Forma sin género: sirve para skill, equipo y recurso |
| Read only | Solo lectura | |
| Scan / Scanning | Explorar / Explorando | «Scan failed» → «Falló la exploración» |
| Discovered skills | Skills encontradas | |
| Snapshot | Foto | «Output snapshot» → «Foto de la salida»; «Saving skill snapshots» → «Guardando las fotos de las skills» |
| Run template | Plantilla de ejecución | `Template` → «Plantilla» ya venía de §2 |
| Placeholders *(de una plantilla)* | Variables | Es la etiqueta que lista `{{skillName}}` y compañía; «marcadores de posición» no entra |
| Pin *(de una revisión)* | Fijado | «Pinned source revision» → «Revisión fijada del origen» |
| Star / Starred / Unstar | Destacar / Destacada / Quitar de destacadas | |
| Tagline | Lema | |
| Tags | Etiquetas | Mismo término que `Label` (§2) |
| Agent harness | harness de agentes | Queda en inglés (§7) |
| Working tree | working tree | Término de Git (§7), igual que `worktree` |
| Frontmatter / slug / hash / YAML | frontmatter / slug / hash / YAML | Quedan en inglés y **no entran al diccionario**: son iguales en los dos idiomas |

Tres reglas que salieron de este lote:

1. **Una etiqueta se mide contra todos sus sitios, no contra su pantalla.**
   `All`, `Private` e `Installed ·` son cadenas del lote `skills`, pero se usan
   en 13, 5 y 3 sitios, y el género del español cambia según la pantalla
   («Todas» las tareas / «Todos» los agentes). Las tres quedaron afuera, con
   archivo y línea en [CHA-31](CHA-31-lote-skills.md), y son las candidatas
   nuevas a `tEs()` al lado de `Open`, `Run`, `Comment` y `Review`.
2. **Cuando hay una forma sin género, se prefiere esa, aunque la pantalla de hoy
   tenga un solo género.** `Bundled` → «De fábrica» y `Safe` → «Sin riesgo»
   entraron así porque la misma cadena ya rotula skills, plugins y equipos. Es
   la regla 2 de CHA-27 aplicada antes de que duela.
3. **Un área nueva de diccionario cuesta dos líneas y ninguna edición de
   upstream**: el `import` de `overlay.ts` y la entrada de `ES_AR_AREAS` en
   `overlay.test.ts`. Conviene abrir archivo nuevo cuando un lote no cae en
   ninguna área existente: `skills.json` nació así, con 371 entradas que en
   `common.json` habrían dejado ilegible el diff del próximo lote.

### Agregadas en CHA-32 (lotes `conectores` y `proyectos`: 440 cadenas)

Dos lotes en una pasada. `conectores` son Conectores, el detalle de una app
conectada, el flujo de conexión, los gateways, los pools de IA y el alta de
email con AgentMail; `proyectos` son las propiedades de un proyecto, su base de
código, los espacios de trabajo de ejecución, el presupuesto y el resumen.

| Inglés | es-AR | Nota |
|---|---|---|
| Connector | Conector | Ya venía de §2; «Connector catalog pages» → «Páginas del catálogo de conectores» |
| Connection pool / pool | pool de conexiones / pool | Queda en inglés y es **masculino**: «este pool», «los pools». Ya venía de las 419 entradas que `connections.json` tenía |
| Identity | Identidad | Ya venía; «Revoke identity» → «Revocar la identidad» |
| Grant *(sustantivo)* | Permiso otorgado | «Remove grant» → «Quitar el permiso otorgado». «Concesión» no se usa |
| Authorization | Autorización | |
| Allowlist | Lista de permitidos | «Set up allowlists ↗» → «Configurar listas de permitidos ↗» |
| Inbox *(de email)* | Bandeja de entrada | «Bandeja» sola cuando no entra, que en estas pantallas es casi siempre |
| Gateway | gateway | Queda en inglés, como ya estaba en `connections.json` |
| Work boundary | Límite de trabajo | El par es «Configure work boundary» → «Configurar el límite de trabajo» |
| Trust *(nivel)* | Confianza | «Low trust» → «confianza baja»; «Review trust settings» → «Revisar la configuración de confianza» |
| Overage | Exceso | La fila de uso que pasa el límite |
| Checkout *(de Git)* | checkout | Término de Git (§7), igual que `worktree` y `branch`. Es el término central de `proyectos`: «los checkouts aislados por tarea» |
| Codebase | Base de código | Es la sección del proyecto donde se define el repo y la carpeta local. «Código base» dice otra cosa |
| Provision / Teardown | Aprovisionamiento / Desmontaje | El par de comandos del worktree derivado |
| Runtime service | Servicio de runtime | `runtime` queda en inglés (§7) |
| Dirty tracked files | Archivos con cambios sin commitear | §7: «sin guardar» es otra cosa |
| Untracked files | Archivos sin seguimiento | |
| Ahead / behind | Adelante / atrás | |
| Summarizer | Summarizer | Nombre del agente que viene con Paperclip: no se traduce (§7) |
| Snapshot | Foto | Ya venía de CHA-31 |
| Soft alert | Aviso | «Soft alert at {n}%» → «Aviso en {n} %»: preserva el orden, y el matiz de «soft» ya lo da el corte duro que está al lado |
| Budget hard stop | Corte duro de presupuesto | |

Estados y etiquetas nuevas, todas **sin género** o en masculino (§3):

| Inglés | es-AR |
|---|---|
| Failed *(etiqueta suelta)* | Falló |
| Needs attention | Necesita atención |
| Not verified | Sin verificar |
| Enabled / Disabled | Activado / Desactivado |
| Observed | Observado |
| Remaining | Restante |
| Unlimited | Sin límite |
| Connection retired | Conexión retirada |
| Close is blocked | El cierre está bloqueado |

Tres reglas que salieron de estos lotes:

1. **Los roles en singular se dicen con «quien», no con un sustantivo.** Un rol
   en castellano obliga a elegir género («el encargado de conexiones»), y el
   overlay no sabe de quién habla. Así que `connection manager` → «quien
   administra las conexiones», y lo mismo resolvió `credential owner` y
   `authorization owner`. Es la regla 2 de CHA-27 llevada de las etiquetas de
   estado a los roles.
2. **Una cadena inglesa que necesita dos españoles puede necesitarlos por
   *orden*, no por género — y ahí `tEs()` no alcanza.** Las dos que quedaron
   afuera de este lote (`connection?` y `’s email address`) no se arreglan
   eligiendo por sitio: se arreglan con la clave punteada de §7.5, porque lo
   que hay que mover es el lugar del nombre dentro de la oración. Conviene
   separar los dos motivos cuando se cuenta el presupuesto de `tEs(`: estas
   **no** compiten por él.
3. **La clave copia el código, pero el valor usa siempre `…`.** `...` y `…` son
   dos claves distintas para el overlay (§6), así que la clave se escribe como
   esté en el `.tsx`; la **traducción**, en cambio, lleva siempre el carácter
   `…`. `Checking...` → «Revisando…». Es una invariante de `overlay.test.ts` y
   es fácil leerla al revés.

### Agregadas en CHA-33 (lotes `agentes` y `rutinas`: 497 cadenas)

Dos lotes en una pasada. `agentes` es el detalle de un agente —instrucciones,
revisiones, API keys, libro de ejecuciones y transcripción—, el alta de un
agente nuevo, la lista de agentes, sus skills y sus canales; `rutinas` es la
lista y el detalle de una rutina, sus disparadores, el editor de variables, el
historial de revisiones y la barra de guardado.

| Inglés | es-AR | Nota |
|---|---|---|
| Trigger *(sustantivo)* | Disparador | El término central de `rutinas`. El verbo ya estaba decidido («Last triggered» → «Se disparó por última vez»); acá se fija el sustantivo. «Trigger type» → «Tipo de disparador»; «Add trigger» → «Agregar un disparador» |
| Fire *(sustantivo)* | Disparo | «Next 5 fires» → «Próximos 5 disparos»; «upcoming fires» → «los próximos disparos» |
| Catch-up | Recuperación | La política de qué hacer con los disparos que se perdieron |
| Schedule | Programación | Ya venía de CHA-30; acá se usa parejo: «Add schedule» → «Agregar una programación», «Schedule frequency» → «Frecuencia de la programación» |
| Built-in | Incluido | Ya estaba en `common.json`. «Built-in agent» → «Agente incluido»; «Built-in variables» → «Variables incluidas» |
| Payload | payload | Queda en inglés, como ya estaba en `connections.json`. «Payload URL» → «URL del payload» |
| Webhook | webhook | Queda en inglés (§7). Es **masculino**: «este webhook», «los webhooks» |
| Preserved edits | Ediciones conservadas | Las que sobreviven a un cambio del archivo de instrucciones; seis cadenas de `AgentDetail.tsx` tenían que decirlo igual |
| Instructions bundle | Paquete de instrucciones | «Managed / External» → «Administrado / Externo» |
| Entry file | Archivo de entrada | El que el agente lee primero |
| Fold *(del audit del sistema)* | Plegado | Cerrar una ejecución como falso positivo porque la tarea de origen ya lo resolvió. Se mantiene la metáfora del inglés: «descartado» choca con `Dismiss` (§5), y el bloque entero es de auditoría, no de uso diario |
| Escalation path | Vía de escalamiento | |
| Reporting chain | Cadena de reporte | «its reporting chain is repaired» → «se repare su cadena de reporte» |
| Direct reports | Reportes directos | Va con «Manager → Jefe» de CHA-27 |
| Transcript | Transcripción | |
| Streaming *(etiqueta en vivo)* | Transmitiendo | §2: `Stream` → Transmitir |
| Requested / Effective *(modelo)* | Pedido / En uso | Son un par en la misma línea. «Efectivo» es literal y no dice nada |
| Provider-reported | Lo informó el proveedor | Regla 1 de CHA-27 aplicada a un participio compuesto: esquiva el género |
| Placeholder *(encabezado de columna)* | Variable | La columna lista `{{taskTitle}}` y compañía. Va con «Placeholders → Variables» de CHA-31 |
| Variables *(etiqueta suelta)* | — | Igual en los dos idiomas: **no entra al diccionario** |

Estados y etiquetas nuevas, en una forma **sin género** o verificadas contra
todos sus sitios (§3):

| Inglés | es-AR |
|---|---|
| Revoked | Revocada |
| Restored | Restaurada |
| Cached | En caché |
| Managed | Administrado |
| Changed: | Cambios: |
| no tracked changes | sin cambios registrados |
| Read-only | Solo lectura |

Tres reglas que salieron de estos lotes:

1. **Una etiqueta que termina en dos puntos y abre una lista no se traduce con
   un verbo.** `Changed:` entró como «**Cambios:**», no como «Cambió:», porque
   lo que sigue es una lista de largo variable y el verbo obliga a elegir
   número («Cambiaron»). El sustantivo no concuerda con nada. Vale para
   cualquier `X:` que encabece una enumeración.
2. **Una palabra que es verbo en un sitio y sustantivo en otro no entra, aunque
   los dos sitios estén en el mismo archivo.** `Type` es «Escribí» en
   `RoutineVariablesEditor.tsx:305` y «Tipo» en la línea 119 del **mismo
   archivo** y en nueve archivos más. Quedó afuera, con archivo y línea en
   [CHA-33](CHA-33-lote-agentes-rutinas.md), y es el candidato a `tEs()` más
   barato de todos los acumulados: un solo sitio hay que marcar.
3. **Una cadena partida puede necesitar dos españoles por el sustantivo que
   viene *después*, no por el suyo.** `Showing the first` es el mismo trozo en
   `CsvPreview.tsx:23` (le siguen **filas**) y en `AgentDetail.tsx:4573` (le
   siguen **KB**): «los primeros» y «las primeras» en el mismo literal. Es un
   motivo nuevo para la lista de §7 y **sí** compite por el presupuesto de
   `tEs(`, a diferencia de las dos de orden de CHA-32.

Lo que **no entró** de estos lotes y conviene no volver a intentar: `Prompt`,
`Harness / Runtime`, `Branch:`, `Error:` y `Worktree:` (términos de §7 o
iguales en los dos idiomas), `Beta`, `Beta ·`, `ID`, `KB`, `TOOLS.md` y
`Variables` (iguales), `OpenRouter`, `Paperclip Runner` y `GitHub` (nombres
propios), y `PAPERCLIP_*`, `{{name}}`, `{{variable_name}}` y `⌘S`
(identificadores y teclas).

### Agregadas en CHA-34 (los seis lotes chicos: 167 cadenas)

Las seis pantallas que cierran el alcance del corte 2: Búsqueda, Panel, Nueva
tarea, Bandeja, Auditoría y Artefactos.

| Inglés | es-AR | Nota |
|---|---|---|
| Scope *(de la búsqueda)* | Ámbito | «Search all scopes» → «Buscar en todos los ámbitos». `Scope` suelto ya es «Alcance» en `common.json`, pero sus seis sitios son aprobaciones, gateways y skills: ninguno es la búsqueda, así que las dos palabras no se cruzan en pantalla |
| Query | Consulta | «Search query» → «Consulta de búsqueda»; «Create task from this query» → «Crear una tarea con esta consulta» |
| Clear *(un campo o un filtro)* | Borrar | «Clear search» → «Borrar la búsqueda»; «Clear all» → «Borrar todo». `Clear` suelto ya era «Limpiar» en `common.json`: son dos claves y el verbo cambia porque acá el objeto es texto escrito, no una lista |
| Loosen *(un filtro)* | Aflojar | «Loosen a filter» → «Aflojar un filtro» |
| Command palette | Paleta de comandos | |
| Identifier lookup | Búsqueda por identificador | |
| Stack *(de artefactos)* | stack | Queda en inglés y es **masculino**: «todos los stacks». Es el montón de artefactos de una tarea; mismo criterio que `pool` y `gateway` (§7) |
| Group by | Agrupar por | `Group` → «Agrupar» ya venía de §5 |
| Spend *(del mes)* | Gasto | «Month Spend» → «Gasto del mes». §2 ya fijaba «costo», no «coste» |
| Success rate | Tasa de éxito | |
| Budget override | Excepción de presupuesto | No es «Reemplazo» (que es `Override` del modelo, CHA-30): acá es el pedido de pasarse del presupuesto |
| Budget incident | Incidente de presupuesto | |
| Utilization | Uso | «92 % utilization this month» → «92 % de uso este mes». «Utilización» es más largo y no agrega nada |
| Smoke *(prueba)* | Smoke | Queda en inglés: `Smoke Lab` es nombre de producto y traducir «smoke» en la tarjeta que manda a esa pestaña dejaría dos palabras para lo mismo. «Integration smoke» → «Smoke de integración» |
| Stopped *(trabajo)* | Frenado | «No work is stopped.» → «No hay nada frenado.» Forma **sin género**, y no choca con `Blocked` → «Bloqueada», que es el estado de una tarea |
| Mark as read | Marcar como leído | Ya estaba en singular femenino para una tarea («Marcar como leída»); «Mark all as read» → «Marcar todo como leído», que con «todo» no concuerda con nada |
| User secret | Secreto de usuario | |
| External reference | Referencia externa | La que apunta a la credencial en el proveedor, en vez de guardar el valor |
| Assignee | Quien la tenga asignada | §2 ya tenía «Responsable» para el encabezado; en texto corrido el rol en singular se dice con «quien» (regla 1 de CHA-32) |
| Park *(un trabajo)* | Frenar | «leave status as Backlog only to deliberately park this» → «…solo si querés frenarla a propósito». «Estacionar» quedó para `parked work` (CHA-25) y acá choca con que `Backlog` sigue en inglés |

Estados y etiquetas nuevas, en una forma **sin género** o verificadas contra
todos sus sitios (§3):

| Inglés | es-AR |
|---|---|
| Archived | En archivo |
| Earlier *(grupo de ítems viejos)* | Anteriores |
| Failed run | Falló la ejecución |
| Unlimited budget | Presupuesto sin límite |
| Awaiting board review | Esperando la revisión del directorio |
| Scheduled heartbeat | Ciclo de actividad programado |
| No linked task | Sin tarea vinculada |
| blocked *(contado)* | con bloqueo |

Tres reglas que salieron de estos lotes:

1. **Un formato puede tirar un hueco, y con eso se descarta la morfología que
   el español no necesita.** `{0} imported agent{1} paused and will not run.`
   lleva en `{1}` el `" is"`/`"s are"` del inglés; `formatted()` reemplaza por
   índice, así que una traducción que no menciona `{1}` lo descarta. La guarda
   de `overlay.test.ts` sólo pide no usar un hueco que la clave no tiene y no
   perder **todos** los huecos. Quedó «Agentes importados en pausa: {0}. No van
   a correr.», que además esquiva el número. **Las cadenas partidas no tienen
   esta salida**: ahí los trozos se concatenan siempre, y una `s` suelta de
   plural inglés queda pegada al sustantivo equivocado.
2. **Una palabra de una letra se decide por la cuenta de sitios, no por lo que
   parece.** `has`, `have`, `it` y `them` tienen **un solo sitio cada una**
   (`MissingUserSecretsBanner.tsx`), así que entraron y arreglaron una oración
   entera; `s` tiene **31** y es intocable. La diferencia no se ve leyendo la
   cadena: hay que correr `markText` sobre todo `ui/src`.
3. **Cuando la cadena hermana de la misma pantalla no está en ningún lote,
   conviene no traducir la propia.** `All stacks` quedó «Todos los stacks»
   porque `No artifact stacks yet.` se queda en inglés: «Todas las pilas» al
   lado de «stacks» es peor que las dos en inglés. La coherencia de la pantalla
   manda sobre la traducción de la cadena.

Lo que **no entró** de estos lotes: `Backlog` (decisión 9.3 del diccionario,
escalada al dueño; hay un test que la fija — ver [CHA-15](CHA-15-nombres-de-estado.md)),
`Worktrees` y `Worktrees ·` (término de Git, §7) y `⌘K` y `⌘K:` (teclas, igual
que `⌘S` en CHA-33).

### Agregadas en CHA-43 (la cola medida de CHA-36 §6.3: 14 entradas)

No son un lote: son la cola que QA midió **mirando la pantalla** en vez de
contando el diccionario. Las 14 tenían sitio marcado **antes** de que escribiera
la entrada —cruzado con el reporte de sitios, una por una—, así que ninguna es
diccionario muerto. El detalle de las 41, con pantalla y causa, está en
[CHA-43](CHA-43-cola-medida.md).

| Inglés | es-AR | Nota |
| --- | --- | --- |
| Overview | Resumen | Ya estaba en §2 y **no estaba en el diccionario**. Un solo español alcanza para los 11 sitios: en Agentes, Rutinas, Skills, Costos, Casos y gateways es siempre la primera pestaña. Convive con `Summary` → «Resumen», que ya existía: dos ingleses, un español, que es la dirección permitida |
| Tools | Herramientas | Consistente con «Permisos de las herramientas» (`settings.json`) |
| Governance | **Gobernanza** | Forma nueva. Rotula la sección de la ficha de agente que agrupa Permisos / Confianza, API keys y Revisiones: no es «gobierno» (el órgano) sino la práctica. Hermanas: «Agente» y «Tiempo de ejecución». En pantalla se lee GOBERNANZA, y mide igual que `GOVERNANCE` |
| Permissions / Trust | Permisos / Confianza | Las dos mitades ya estaban fijadas (`Permissions` → «Permisos» en `common.json`, `Trust (nivel)` → «Confianza» en CHA-32). La barra se conserva |
| API Keys | **API keys** | «API key» queda en inglés y en minúscula desde CHA-33 («Las API keys le permiten…», «Crear una API key»). Acá sólo se normaliza la mayúscula del título |
| Succeeded | **Salió bien** | Forma nueva, y **sin género** por la regla 2 de §7: la hermana de la misma leyenda es `Failed` → «Falló», que es un verbo. Rotula ejecuciones (f) en el Panel y decisiones (f) en el historial, pero una forma sin género no obliga a elegir si mañana rotula un `run` masculino |
| Author | Autor / **Autoría** | Homógrafa nueva: ver §9.4 |
| Discover | Descubrir | Consistente con «Discover skills» → «Descubrir skills» (CHA-31) |
| Sources | Orígenes | Ya estaba en CHA-31 («Skill sources» → «Orígenes de skills»); los tres sitios son orígenes de skills |
| Skills you create, edit, and test. | Las skills que creás, editás y probás. | Voseo, y «skills» en femenino como fija CHA-31 |
| Not enabled for any agents | Sin habilitar para ningún agente | Rotula una skill. «Sin habilitar» y no «No habilitada» para no elegir género: la cadena hermana `Available to install` tampoco lo elige |
| Loading audit links… | Cargando los enlaces de auditoría… | Molde de §6, igual que «Cargando la actividad de la rutina…» |
| Delivery | Entrega | Consistente con «Delivered» → «Entregado» y «Advanced delivery settings» → «Configuración avanzada de la entrega» |
| Images | Imágenes | Consistente con `Images ·` → «Imágenes ·» (`issues.json`) |

Lo que **no entró** de esta cola, y ninguna por falta de forma: `Skills` y
`Studio` quedan en inglés por CHA-31 (nombre del producto); `Claude Code` y
`Local` por decisión del Lead (nombres propios, §7); `Videos` porque **es igual
en es-AR** —«videos», sin tilde, que es la forma rioplatense— y una entrada
`"Videos": "Videos"` sería diccionario muerto con otro nombre; y las que quedan
por mecanismo, en §10.6.

## 8. Cadenas partidas y plurales contados

Esto no es una regla de idioma: es cómo llega el texto al overlay, y define qué
se puede traducir y qué no. Se verifica compilando el `.tsx` y mirando los hijos
reales del JSX, no leyendo el código a ojo.

- **Una oración cortada por un `<code>`, un nombre o un chip llega como varias
  cadenas.** Cada trozo se traduce por separado y el orden de los trozos no se
  puede cambiar. Si el castellano necesita otro orden, la traducción por trozos
  no sirve y hay que ir por la clave punteada de §7.5.
- **Los espacios al borde los repone el overlay**: la clave del diccionario va
  siempre sin espacios al borde.
- **Los plurales contados (`{n} items`) casi nunca se pueden traducir por
  patrón.** Dos razones:
  1. Muchas veces el número y el sustantivo son **dos hijos distintos** del JSX
     (`{days} days` llega como `" days"`), así que alcanza con el literal
     `"days"` → `"días"`.
  2. Cuando sí llega armado (`${weeks} weeks`), el test de §7.4 pide el literal
     singular y lo deriva cambiando `(\d+)` por `1`, o sea espera
     `"1 weeks"` —que no existe—. Mientras eso siga así, conviene **enumerar**
     si el conjunto es cerrado (los presets de retención de backups son
     `[3,7,14]`, `[1,2,4]`, `[1,3,6]`) y dejar el caso anotado si es abierto.
- **`window.confirm` y `window.alert` no pasan por JSX**: no se traducen nunca.
  Si un texto importante vive ahí, es un pedido para Dev UX/UI, no una entrada
  de diccionario.

## 9. Las formas por sitio: una cadena inglesa, dos españoles

Desde CHA-38 hay un segundo canal de traducción: el **mapa por sitio**,
`ui/src/i18n-es-ar/dictionary/por-sitio/es-AR.json`, con clave
**`archivo + inglés`** (la ruta relativa a `ui/src/`, sin el número de línea, así
sobrevive a que upstream edite el archivo más arriba). Nació con **8 cadenas**
en CHA-38 y hoy tiene **54 archivos, 67 entradas y 15 cadenas**; el reparto
archivo por archivo de las ocho originales está en
[CHA-38](CHA-38-mapa-por-sitio.md).

Las 15 no son todas la misma cosa, y confundirlas es el error que más caro
sale. Son **cuatro clases**, y cada una tiene su propia regla:

| Clase | Cuáles | Por qué hay una entrada por sitio |
|---|---|---|
| **1. Dos sentidos** (§9.1) | `All`, `Private`, `Installed ·`, `Open`, `Run`, `Comment`, `Review`, `Type` | el inglés es un homógrafo y el español no: hacen falta dos palabras |
| **2. No entra en la caja** (§10.5) | `On`, `Off`, `Archived` | un solo sentido, pero el español global no cabe en un ancho fijo de upstream |
| **3. Dos sentidos, uno global** (§9.4) | `Author` | ídem clase 1, pero el sentido común vive en el global y el mapa desvía un solo sitio |
| **4. Concordancia** (§9.5) | `Blocked`, `Installed`, `Open Settings` | el global es correcto en el resto de la app y concuerda mal en un sitio |

**Esta sección reemplaza tres reglas de §7** —la 3 de CHA-27, la 1 de CHA-31 y
la 2 de CHA-33—, que decían «no entra» para estas ocho cadenas porque el
mecanismo no existía. Quedan escritas como registro de *por qué* no entraban, que
sigue siendo útil para reconocer el caso; lo que vale para traducir hoy es esto.

Lo que fija el glosario no es el reparto: es el **discriminante**, o sea la
pregunta que hay que contestar para saber qué forma va en un archivo nuevo. Son
tres, y se contestan **mirando el sitio en el código**, nunca la cadena sola:

1. **¿Cuál es el sustantivo elidido, y de qué género es?** Decide `All`,
   `Private` e `Installed ·`. Es §1 («concordancia de género con el sustantivo»)
   aplicada a un sustantivo que no está escrito en ninguna parte.
2. **¿Es verbo o sustantivo?** Decide `Open`, `Run`, `Comment`, `Review` y
   `Type`.
3. **Si es verbo: ¿es un botón o una oración?** Decide la forma del verbo, y es
   §1 otra vez: **infinitivo en los botones, voseo en el texto corrido**. Por eso
   `Run` tiene «Ejecutar» *y* «Ejecutá», y `Review` «Revisar» *y* «Revisá».

### 9.1 Las ocho familias

| Inglés | Formas | Qué decide cuál |
|---|---|---|
| `All` | **Todas** / **Todos** | el género del sustantivo elidido: «Todas» las tareas, las aprobaciones, las decisiones y las skills; «Todos» los agentes, los artefactos, los ítems de actividad y los pedidos de ingreso |
| `Private` | **Privada** / **Privado** | lo que rotula: «Privada» la tarea, la skill y el alcance de Skill Studio; «Privado» el proyecto (`ProjectProperties.tsx`, el único sitio masculino) |
| `Installed ·` | **Instaladas ·** / **Instalados ·** | ídem: «Instaladas ·» las skills; «Instalados ·» los equipos (`TeamCatalog.tsx`). El `·` es parte de la clave, y el espacio del borde lo repone el overlay (§8) |
| `Open` | **Abrir** / **Abierto** / **Abiertas** | «Abrir» cuando es la acción —13 de los 15 sitios—; «Abierto» el estado de un pull request; «Abiertas» la cuenta de tareas abiertas de `UserProfile.tsx` |
| `Run` | **Ejecutar** / **Ejecutá** / **Ejecución** | «Ejecutar» el botón; «Ejecutá» la instrucción dentro de una oración (`Run <code>cd …</code>.`); «Ejecución» el sustantivo (§2) |
| `Comment` | **Comentar** / **Comentario** | «Comentar» el botón; «Comentario» el sustantivo —el tipo de resultado de Búsqueda— (§2) |
| `Review` | **Revisá** / **Revisar** / **Revisión** | «Revisá» la instrucción en una oración; «Revisar» el botón; «Revisión» el sustantivo, que es la **entrada global** de `navigation.json` y sirve para 13 de los 17 sitios |
| `Type` | **Tipo** / **Escribí** | «Tipo» el sustantivo —etiqueta de filtro o de columna—; «Escribí» el verbo (`Type {token} to confirm`) |

Dos aclaraciones que evitan volver a discutirlas:

- **El plural no siempre es homógrafo.** `Comments` → «Comentarios» es entrada
  **global** (CHA-39): sus tres sitios son el sustantivo plural. El homógrafo es
  el singular. Lo mismo vale al revés para `Installed`, ver §9.5.
- **«Revisar» para los dos botones queda confirmado** (CHA-41). Es la única de
  las ocho formas que no salió de una bitácora de traducción —la propuso Dev UX/UI
  en CHA-38 por analogía—, y la analogía es correcta: es la regla 3 de arriba,
  la misma que ya había decidido `Open`→«Abrir», `Run`→«Ejecutar» y
  `Comment`→«Comentar». Los dos sitios son botones
  (`PluginManager.tsx:326` y `ProfileDetail.tsx:348`), «Revisión» ahí está mal, y
  el infinitivo es lo que pide §1. No hay forma mejor: «Revisalo» obliga a
  elegir el objeto y «A revisar» es un rótulo de estado, no una acción.

### 9.2 Las siete que **no** tienen entrada global, y es a propósito

Siete de las ocho viven **sólo** en el mapa (la excepción es `Review`, que ya
tenía «Revisión»). Es contraintuitivo para `Open`, donde el reparto es 13 sitios
a 2 y lo barato parecería una entrada global más dos excepciones. **No se puede**,
y el motivo hay que conocerlo antes de "arreglarlo":

`TEXT_DECLS` envuelve el `return` entero de una función, así que lo que llega a
buscarse no es un literal de un archivo y el marcado **no tiene dónde colgarle el
sitio**. Una de las funciones envueltas es `statusLabel` de
`components/StatusIcon.tsx`, y `statusLabel("open")` devuelve `"Open"`: con una
entrada global, el glifo de estado diría **«Abrir»** donde tiene que decir
«Abierta», y el mapa por sitio no lo podría corregir porque esa llamada no lleva
sitio. Hay un test que fija que las siete no tienen entrada global
(`por-sitio.test.ts`, grupo 3): si alguien agrega una, se pone rojo.

La salvedad vale **sólo para el `return` de una función**. Para un `const`
—`SCOPE_LABELS` de `Search.tsx`, por ejemplo— el canal de declaraciones **sí**
le pasa el sitio al mapa, así que esas cadenas se pueden resolver por archivo
(CHA-39 §2).

### 9.3 El género de `All` en Búsqueda: **Todos**

Quedaba abierto desde CHA-39 y se decide acá, porque es una pregunta de
concordancia y no de mecanismo. Las siete pestañas de Búsqueda son All, Tareas,
Comentarios, Documentos, Artefactos, Agentes y Proyectos: el sustantivo elidido
es **«los ámbitos»** —así lo dice la cadena hermana, `All scopes` → «Todos los
ámbitos»— y cinco de los seis hermanos son masculinos. Va **«Todos»**, con una
línea en el mapa para `pages/Search.tsx`, **que ya está puesta** (CHA-41).

El sitio es `SCOPE_LABELS`, o sea un `const`, no el `return` de una función: es
justo la salvedad del párrafo de arriba, y es lo que hace que esta cadena se
pueda resolver por archivo. Antes de esta línea la primera pestaña de Búsqueda
salía en inglés, porque `All` no tiene —ni puede tener— entrada global.

### 9.4 `Author`: «Autoría» la sección, «Autor» la persona (CHA-43)

La novena homógrafa, y la encontró la cola de CHA-36 §6.3. Dos sentidos, dos
archivos:

- `components/SkillsContextualSidebar.tsx:61` rotula la **sección** de las
  skills propias —abajo dice «Las skills que creás, editás y probás.» y después
  «My Skills»—, o sea la acción de crearlas: **«Autoría»**. En pantalla se lee
  AUTORÍA, porque el `uppercase` es CSS.
- `pages/PluginSettings.tsx:208` rotula el dato `plugin.manifestJson.author`,
  o sea una **persona**: **«Autor»**.

Es la primera entrada del mapa cuyo segundo español sale del **diccionario
global** y no de una segunda entrada, y por eso no entra en la garantía de §9.2.
Se puede porque **ninguno de sus dos sitios es una declaración**: los dos son
`jsx-text`, así que el marcado les pasa el archivo a los dos y el global no
puede llegar por la ventana de atrás a ningún sitio derivado —que es justo el
riesgo que §9.2 existe para evitar—. Ventaja de repartirlo así: si upstream
renombra `SkillsContextualSidebar.tsx`, el encabezado cae a «Autor», o sea se
degrada a **español**, no a inglés.

### 9.5 La cuarta clase: el global está bien y concuerda mal en un sitio (CHA-41)

Las tres salieron de repasar las 58 entradas del mapa contra el código, y
ninguna es un homógrafo: el inglés tiene **un solo sentido**. Lo que falla es
la **concordancia** —género, número— entre un global que es correcto para el
resto de la app y el sustantivo que ese sitio en particular rotula.

| Inglés | Global | Por sitio | Dónde y por qué |
|---|---|---|---|
| `Blocked` | **Bloqueada** (`common.json`) | **Bloqueadas** | `pages/Inbox.tsx` y `pages/LegacyInbox.tsx`. El global rotula el chip de **una** tarea; acá es la pestaña que filtra **las** tareas bloqueadas, al lado de «Mías / Recientes / Sin leer / Todas» |
| `Installed` | **Instaladas** (`skills.json`) | **Instalado** | `pages/TeamCatalog.tsx:739`. El global es de skills; ese badge es **un equipo**, o sea género *y* número al revés. Es la hermana de `Installed ·`, que CHA-38 sí había mapeado |
| `Open Settings` | *(no tiene)* | **Abrir la configuración** | `pages/PluginManager.tsx:326`. No es concordancia sino hueco, pero entra acá por el mismo motivo práctico: es la **otra rama del ternario** de `Review`, así que con una lista de plugins mezclada se ven las dos a la vez, una en cada idioma |

**La regla para reconocer la clase:** si al leer el sitio te das cuenta de que
el español global *diría algo cierto pero mal concordado*, es esta clase y se
arregla con una línea del mapa. Si el español global *diría otra cosa*, es la
clase 1 y hace falta decidir el discriminante primero (§9.1).

**Lo que esta clase no habilita:** sacar el global. Las tres veces el global
sirve donde está —«Bloqueada» para la tarea, «Instaladas» para las skills— y
quitarlo dejaría en inglés media app para arreglar un rótulo. El mapa desvía
un sitio; no reemplaza una decisión de §3 ni de §5.

**`Installed` y `Installed ·` conviven en el mismo archivo**, y eso es seguro:
`buscarPorSitio` resuelve por **igualdad exacta** sobre la cadena completa, con
un único recorte de los espacios del borde (§8). No hay búsqueda por prefijo,
así que la clave corta no se come a la larga ni al revés. Si alguna vez el
mecanismo pasara a resolver por prefijo, estas dos son el primer caso que se
rompe.

## 10. Limitaciones conocidas del corte 2

Lo que **queda sin traducir a propósito**, con el motivo de cada caso. Están acá
para que nadie las vuelva a "arreglar": cada intento ya se hizo y empeoraba algo.

**Ésta es la lista única.** Si una cadena del corte 2 se ve en inglés en
pantalla y no está acá, es deuda y se traduce; si está acá, hay un motivo
escrito y volver a abrirla cuesta más de lo que arregla.

| § | Qué queda afuera | Por qué, en una línea |
|---|---|---|
| 10.1 | 5 frases con interpolación | el overlay traduce trozo por trozo y no reordena |
| 10.2 | `Type` y `Run`, 6 sitios | los dos sentidos viven en el **mismo** archivo y la clave del mapa no los separa |
| 10.3 | la pantalla `Paperclip couldn’t start` | vive fuera de `ui/src`: traducirla costaría tocar upstream |
| 10.4 | las 267 cadenas del alcance | clasificadas aparte, en `cierre-corte2.md` §3 |
| 10.5 | `Draft` en la columna de Rutinas, y «Archivo» donde iría un adjetivo | el ancho fijo de 48 px es de upstream |
| 10.6 | `working`, `active`, `paused`, `archived`, `My Projects` | tres causas de mecanismo distintas, ninguna de diccionario |

### 10.1 Orden de palabras: el overlay no reordena

El mecanismo traduce **trozo por trozo** y los concatena en el orden del inglés
(§8). Cuando el español necesita otro orden, la traducción por trozos no sirve, y
**no se arregla** ni con una entrada vacía ni partiendo la frase en el
diccionario: lo único que lo arregla es la clave punteada de §7.5 del ADR 0001,
que cuesta una edición de un archivo de upstream.

| Cadena | Dónde | Qué pasa |
|---|---|---|
| `Showing the first {n} rows` / `the first 64 KB` | `CsvPreview.tsx:23`, `AgentDetail.tsx:4573` | el adjetivo va antes del número y el sustantivo llega en el trozo siguiente, que difiere entre sitios: «los primeros» (KB) y «las primeras» (filas) |
| `…connection?` | CHA-32 | hay que mover el nombre dentro de la oración |
| `…’s email address` | CHA-32 | ídem: el genitivo inglés se invierte en español |
| `All {group.name} tools` | `WizardToolsStep.tsx:205` | «Todas» ahí deja «Todas Slack tools (3)». **Sin entrada**, queda en inglés |
| `Open {nombre} app settings` | `ConnectionSetupFlow.tsx:4030` | **las dos partes ya están traducidas** —«Abrir» por sitio y `app settings` → «configuración de la app» en `common.json` desde CHA-27—, así que sale «Abrir Box configuración de la app». No es una entrada que falte: es el orden |

El último merece subrayarse porque invita al error: si se lo lee como un hueco de
diccionario, se termina agregando una entrada que no cambia nada. Lo verificaron
el Lead y QA por separado (CHA-36 §8).

### 10.2 Dos colisiones dentro de un mismo archivo: 6 sitios en inglés

La clave del mapa es `archivo + inglés`, **no la línea**. Cuando los dos sentidos
conviven en el **mismo** archivo, el mapa no los puede separar:

| Archivo | Cadena | Los dos sentidos |
|---|---|---|
| `components/RoutineVariablesEditor.tsx` | `Type` | **119** sustantivo (`<Label>Type</Label>`) y **304** verbo (`Type {{variable_name}} anywhere in the title…`) |
| `pages/SkillStudio.tsx` | `Run` | **2527** verbo (el botón de ejecutar) y **3100 / 3107 / 3122** sustantivo (títulos de pane) |

**Los dos quedan en inglés por decisión**, 6 sitios en total, y el motivo es
distinto en cada uno:

- En `RoutineVariablesEditor.tsx` cualquier entrada le pega también a la 304, y
  ahí el error **no cae al inglés**: cae a una oración mal escrita («Tipo
  `{{variable_name}}` en cualquier parte del título…»). Eso rompe el «se degrada,
  no rompe» que hace confiable al mecanismo.
- En `SkillStudio.tsx` ninguna opción arma una oración mal escrita, pero las dos
  **mal etiquetan**: por mayoría iría «Ejecución» y eso deja el botón principal
  de la pantalla diciendo «Ejecución».

**Está diferido, no olvidado**: lo recupera un discriminante por **clase de
sitio** (`jsx-text` vs. `jsx-attr`), que separa limpio a `SkillStudio.tsx` y
sobrevive a las ediciones de upstream. A `RoutineVariablesEditor.tsx` no le
alcanza —sus dos sitios son `jsx-text`— y necesita además distinguir el nodo que
es todo el contenido de su elemento del que es un fragmento con hermanos. Es una
ampliación de la clave y una decisión de arquitectura, no una entrada de
glosario.

### 10.3 La pantalla `Paperclip couldn’t start` queda en inglés

Vive en `ui/index.html`, **fuera de `ui/src`**: traducirla cuesta tocar un
archivo de upstream, y el criterio del dueño desde el primer día es cero
ediciones de upstream. Es decisión del dueño, no una omisión.

### 10.4 Las 267 cadenas del alcance que quedaron afuera

Están clasificadas una por una, con la cuenta por motivo, en §3 de
[`cierre-corte2.md`](cierre-corte2.md) —y la cola de 41 cadenas que se ven en
pantalla y que esa clasificación no nombra, en §6.3 de
[CHA-36](CHA-36-validacion-cierre-corte2.md)—. No se repiten acá a propósito: la
cuenta se mide, y una copia se desactualiza.

### 10.5 El ancho fijo de la columna de Rutinas: tres de cuatro, y la cuarta en inglés

**Cerrado.** `RoutineList.tsx:188-190` muestra el estado de la rutina en un
`<span className="w-12 text-xs text-muted-foreground">`: **48 px fijos**, y el
archivo es de upstream, así que no se ensancha. El defecto D-3 de CHA-36 era
que «Desactivado» —el español global de `Off`— ocupa 75 px y se corta a la
mitad, sin puntos suspensivos.

CHA-42 midió cada forma candidata sobre ese span real, con la tipografía del
build. **La tabla completa está en [CHA-42](CHA-42-tres-defectos.md) §3**; lo
que el glosario fija es el resultado:

| Inglés | Forma | px | Por qué |
|---|---|---:|---|
| `On` | **Activa** | 36 | entra holgada. Femenino: el sujeto es la rutina. El mapa es por archivo, así que no desordena el par global «Activado / Desactivado» de §5 |
| `Off` | **Inactiva** | 45 | entra. Va con `Inactive` → «Inactivo» de §3. «Apagada» (53) se lee «Apagad» y quedó afuera |
| `Archived` | **Archivo** | 44 | entra, y **arregla un recorte que ya existía en inglés**: `Archived` mide 52 px en una caja de 48. El global «En archivo» (43) entra pero **se parte en dos renglones** y le cambia el alto a la fila |
| `Draft` | **inglés** | 29 | «Borrador» mide 51 y cortado queda «Borrado», que es *otra palabra* y dice algo falso. No tiene entrada en ningún lado |

**El gate, dicho como regla para la próxima vez:** en este sitio, la forma que
pase de **48 px** no entra; se deja el inglés y se reporta el número. Medir es
de QA y el arnés quedó documentado en CHA-42 §3. **Medí antes de cambiar una
de estas cuatro.**

#### La limitación que esto deja declarada: «Archivo» es un sustantivo

`Archived` es un **adjetivo** —el estado de la rutina— y «Archivo» es un
**sustantivo**. En esa columna se puede leer como *un archivo de disco*, que
es un registro equivocado. El adjetivo correcto es «Archivada» y **mide 58 px**:
cortada queda «Archiva», que además se lee como el verbo en imperativo.

**No se arregla, se declara.** No hay forma castellana que sea adjetivo y entre
en 48 px, y el ancho es de upstream. Si algún día ese span se ensancha, el
cambio que corresponde es «Archivo» → «Archivada», y está escrito acá para que
quien lo vea sepa que fue una concesión medida y no un descuido.

#### Y la regla que esto derogó: «las cuatro o ninguna»

La v3 de este glosario decía que las cuatro formas entraban juntas o ninguna,
por coherencia de la columna. **Esa regla queda sin efecto**, y conviene saber
por qué se escribió y por qué no sirve: se escribió *antes* de tener los
números, y una vez que el gate de anchura está delante es inaplicable —no se
puede pedir coherencia entre cuatro formas cuando una de las cuatro no cabe—.

Lo que **sí** sobrevive de aquel razonamiento es el caso que lo motivaba: una
entrada de identidad (`"Off": "Off"`) deja la columna diciendo «Activa» para
unas rutinas y `Off` para otras, y **ningún test la rebota** —la guarda de
«ninguna traducción es idéntica al inglés» recorre `ES_AR_AREAS`, no el mapa—.
Eso sigue siendo lo peor que se puede hacer acá, y es exactamente lo que se
evitó al poner «Inactiva». Tres de cuatro en castellano sin un solo recorte es
mejor final que dos y dos.

`Draft` queda en inglés y **no es lo mismo**: no tiene entrada, ni global ni
por sitio, así que cae al inglés por el camino normal del mecanismo. Es una
cadena sin traducir, no una traducción que dice «Draft».

#### Lo que esta columna **no** arregla: `paused` y `archived` en minúscula

Las mismas palabras aparecen en el mismo archivo en minúscula (`:138`) y
**ésas no las toca nadie**, porque la regla de la comparación (§7.4) bloquea la
cadena en ese archivo a propósito. Está explicado en §10.6 b). Vale leerlo
junto con esta sección: en una misma lista, `On` se pudo arreglar y `paused` no,
y la diferencia no se ve mirando la pantalla.

### 10.6 Tres clases que la cola de CHA-36 §6.3 agregó a esta lista (CHA-43)

Las tres aparecen en la tabla de las 41 como si fueran cadenas faltantes, y
ninguna lo es. Están acá con el motivo exacto para que la próxima medición no
las vuelva a abrir.

**a) El dato del API impreso crudo.** `working` en la lista de Agentes y
`active` en la de Proyectos **no son literales del código**: salen de
`StatusBadge.tsx:39` y `:57`, los dos `status.replace(/_/g, " ")` sobre el valor
que mandó el API. No pasan por ningún sitio marcado, así que no hay entrada ni
declaración que las alcance: es la invariante de §4 del ADR funcionando, no una
falla. La única salida sería un mapa de etiquetas en upstream, que es un cambio
de producto.

Y conviene decirlo al revés, porque es lo que hace confusa la tabla: `idle`
**sí** es un literal (`StatusBadge.tsx:51`, `status === "active" ? "idle" :
status`), así que a esa le falta una declaración y nada más. Dos palabras
pegadas en la misma pantalla, dos causas distintas.

**b) La regla de la comparación §7.4, que es la que menos se ve venir.**
`paused` en la lista de Rutinas está en `RoutineList.tsx:138`
(`isArchived ? "archived" : isDraft ? "draft" : "paused"`), que es un hijo de JSX
entre literales: una posición que el marcado cubre. Pero el **mismo archivo**
compara `routine.status === "paused"` en :101 y :136, así que §7.4 bloquea la
cadena *en ese archivo* a propósito, para que el español no llegue antes que la
lógica. Resultado: **ni una entrada ni una declaración ni el mapa por sitio la
arreglan** —el mapa sólo desvía sitios que ya se marcan—, y la entrada
«en pausa» de `common.json` seguirá sin llegar ahí. `archived` está en el mismo
caso. Es la contracara del `On` que CHA-42 sí pudo arreglar: ése está en :189, en
mayúscula, y nadie lo compara.

**c) Un literal sin nombre al que declarar.** `My Projects` está en
`Projects.tsx:192` como elemento de un arreglo de tuplas escrito en el JSX
(`[["My Projects", …], ["Other Projects", …]]`): no es atributo, ni clave, ni
texto de JSX, y **no hay ninguna declaración nombrada** que envolver, así que
`TEXT_DECLS` no la puede alcanzar. Cubrirla pide una posición nueva en la lista
blanca —el elemento de arreglo—, que es una decisión de `text-sites.ts` y no de
diccionario.
