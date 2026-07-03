# Landing ERP Griba — v2 · Resumen para el equipo

> Documento interno (Veta). Objetivo: que el equipo entienda **qué encontramos, qué cambiamos y por qué**, y pueda decidir una prescripción (cuál corre a paid, qué confirmar con el cliente, qué medir).

---

## TLDR

- **Problema:** la landing ERP actual mide conversión ~**0,3%** (casi nadie agenda). En la reunión del 30/06, Leo (dueño de Griba) pidió un volantazo: el ROI está en riesgo y todavía no hubo una sola reunión calificada de proyecto.
- **Diagnóstico:** la landing actual está **hiper-nichada a distribuidoras** (preventista, depósito, reparto, camión), es **larga** (12 secciones) y el **diferenciador real de Griba está enterrado**. El mensaje no engancha el dolor del comprador.
- **Decisión:** construir una **v2** que adopta un patrón de **landing de alta conversión** (general en rubro, más visceral, foco en el dolor, condensada) pero **manteniendo la estética visual de Griba** (azul, tipografías, fondo claro).
- **Eje nuevo:** el diferenciador que Leo nombró textual —*adaptabilidad + acompañamiento*— pasa a ser el corazón: **"Griba se adapta a vos; los enlatados (Odoo, Finnegan) te hacen esperar una versión"** (el clásico *a medida vs enlatado*).
- **Entrega:** la v2 está **live en la ruta `/v2`**; la actual (`/`) quedó **intacta**, así se pueden comparar y correr A/B.
- **Qué falta para paid:** (1) que Leo **confirme los números** del hero; (2) **cablear el tracking de conversión** (hoy ciego) para que Meta/Google optimicen.

**Recomendación corta:** correr **A/B `/` (actual) vs `/v2`** con el tráfico de paid, midiendo agendas reales, una vez cableado el tracking. Hipótesis: la v2 convierte mejor por dolor más general + diferenciador claro + menos fricción.

---

## Contexto: por qué tocamos la landing

En la reunión del 30/06 (Leo + equipo Veta), Leo planteó que:

- Vienen invertidos ~3–3,5M ARS entre pauta y asesoría, **sin una sola reunión de proyecto cerrada**.
- Los leads que llegan **no responden** (hizo una recampaña con ~10 leads, cero respuesta).
- Su lectura: **falla el mensaje** — a quién le hablamos, qué dolor tocamos, cómo llegamos.
- Su diferenciador, dicho textual: *"cuando me comparan con Odoo o Finnegan, a mí me pasa que les pido algo y no pueden, tienen que esperar una versión. La adaptabilidad que tenemos nosotros, el acompañamiento, la personalización."*

Coincide con nuestro diagnóstico previo de mediciones (Clarity): conversión ~nula, tráfico de baja calidad (mayoría mobile in-app), y **medición ciega** (sin eventos de conversión cableados).

---

## Qué encontramos (diagnóstico)

**De la landing ERP actual:**
- **Mononicho:** headline, CTAs, eyebrow y hasta el mockup hablan solo de distribuidora (preventista/depósito/reparto/camión). Cierra la puerta a cualquier otro rubro.
- **Demasiado larga:** 12 secciones montadas, con 3 bloques que dicen casi lo mismo (flujo + módulos + comparación operativa).
- **Tesis difusa:** la adaptabilidad/acompañamiento —el verdadero "por qué Griba"— vivía enterrada en la sección 10 ("Quiénes somos"), no como argumento central.
- **Le habla al que vende, no al que compra/decide:** todo el relato es el flujo del vendedor, no el dolor del dueño.

**De la landing de referencia de alta conversión (que pidió el cliente como modelo):**
- General en rubro (cualquier PyME) pero **brutal en el dolor** ("Estás pagando sueldos para cargar planillas a mano").
- Un **único eje** claro: *software que se adapta a vos vs SaaS enlatado que te obliga a adaptarte*. → **Es exactamente el pitch de Leo.**
- **Condensada** (~10 secciones) con un embudo probado: dolor → por qué → prueba (calculadora) → cómo → objeciones → CTA.
- Cierra cada objeción de compra (precio, plazo, migración, "y si me quiero ir", cuándo NO conviene).

---

## Qué hicimos (la v2)

Adoptamos la **estructura y narrativa de la landing de referencia** sobre la **estética de Griba**. Tres movimientos centrales:

1. **Desnichar:** soltar el lenguaje exclusivo de distribuidora. Hablarle a cualquier PyME que opera con Excel/WhatsApp y sistemas que no se adaptan. Distribuidora queda como **un ejemplo**, no como el todo.
2. **Subir el diferenciador a sección propia:** la comparación pasa a ser *"se adapta vs enlatado"*, nombrando a **Odoo y Finnegan**, que es lo que vuelve el mensaje creíble y relevante para el cliente.
3. **Condensar:** de 12 a **9 secciones**, fusionando los bloques redundantes.

### Estructura final de la v2 (9 secciones)
1. **Hero** — dolor visceral ("Estás pagando sueldos para que tu equipo cargue lo mismo dos veces") + 3 cifras de prueba.
2. **Dolor** — *"Tu equipo no es lento. Tu sistema sí."* + 3 dolores generales.
3. **Por qué Griba** — 2 columnas *enlatado rígido vs se-adapta-a-vos*, nombrando Odoo/Finnegan. (corazón del mensaje)
4. **Calculadora ROI** — costo **anual** de operar a mano (más visceral), con puente a la demo.
5. **Cómo trabaja Griba** — 4 tarjetas de **resultado** generales (un solo sistema / stock real / cuentas claras / decisiones con datos), no el flujo del vendedor.
6. **Acompañamiento** — el diferenciador humano subido de jerarquía + cómo es la implementación.
7. **Demo** — *"No hace falta que sepas qué sistema necesitás. Solo qué no te está funcionando."* + calendario.
8. **FAQ** — 6 objeciones de compra (incluye "cuándo NO es para mí").
9. **CTA final.**

### Guardarraíles de copy que respetamos
- **Nada de "a medida desde cero":** Griba es un ERP-producto que se *configura/adapta*, no software factory. El copy usa siempre *configurar/adaptar/acomodar*, nunca "desarrollo a medida".
- **Vocabulario simple:** sacamos jerga como *"lock-in"* → "te llevás tus datos cuando quieras".
- **Sin cifras inventadas** salvo las 3 del hero, que están **pendientes de validar con Leo**.
- **Loss-frame sin culpar al equipo:** "no es tu equipo, es tu sistema".

---

## v1 (actual, `/`) vs v2 (nueva, `/v2`)

| Dimensión | v1 (actual) | v2 (nueva) |
|---|---|---|
| **Público** | Solo distribuidoras | PyME general (distribuidora = un ejemplo) |
| **Hook** | "Tu distribuidora necesita saber qué vendió/entregar/cobrar" | "Estás pagando sueldos para que tu equipo cargue lo mismo dos veces" |
| **Eje / por qué** | Difuso, enterrado en "Quiénes somos" | Central: se adapta vs enlatado (Odoo/Finnegan) |
| **Longitud** | 12 secciones | 9 secciones |
| **Sección "cómo"** | Flujo del vendedor (pedido→reparto→cobro) | 4 resultados generales |
| **Calculadora** | Costo mensual | Costo anual (más impacto) |
| **Tono** | Operativo / explicativo | Visceral / loss-frame |
| **Vocabulario** | Incluye jerga ("lock-in") | Simple |
| **Estética** | Azul Griba | **Misma** azul Griba |

> Nota de naming: en este repo conviven la **landing actual** (servida en `/`) y la **v2** (servida en `/v2`). El número de versión es nominal; lo importante es el contraste de enfoque de la tabla.

---

## Conclusiones / hipótesis a validar

1. **El nicho de distribuidora estaba dejando tráfico afuera.** Abrir a PyME general debería ampliar la base de leads calificables sin perder a la distribuidora (sigue como ejemplo).
2. **El diferenciador de Leo es el ángulo más fuerte y no se estaba usando.** "Se adapta a vos vs el enlatado que te hace esperar" es lo que Leo cierra en orgánico — llevarlo al centro debería mejorar la calidad del lead.
3. **Menos fricción = más agenda.** Landing más corta, CTA siempre visible (también mobile), calendario que carga bien.
4. **Nada de esto se puede confirmar sin medición.** Hoy el tracking está ciego; sin cablearlo no sabremos si la v2 convierte mejor.

---

## Recomendación / próximos pasos

1. **Cablear el tracking de conversión** (WhatsApp + calendario → eventos a Meta/Google). **Es la palanca #1**: sin esto, ni la mejor landing optimiza la pauta.
2. **Confirmar con Leo las 3 cifras del hero** (+100 empresas / 10 años / todo el país). Hoy están marcadas como pendientes en el código.
3. **Correr A/B real:** `/` (actual) vs `/v2`, 50/50 del tráfico de paid, midiendo **agendas reales** (no clics), 2–3 semanas.
4. **Pauta a alta intención** (búsqueda) y apagar Display/partners de baja calidad (ya identificado en mediciones).
5. **Caso real:** pedirle a Leo nombre + cita + métricas de un cliente para reactivar la sección "Caso real" (hoy desmontada; el componente quedó listo para volver a usar).

---

## Estado técnico

- **Live en `/v2`** (push a `main` → deploy automático de Netlify). La v1 (`/`) quedó intacta.
- Compila limpio (`tsc` + `vite build` en verde).
- Componentes nuevos aislados en `src/components/v2/` + `src/LandingV2.tsx`; ruteo en `src/App.tsx`. No se tocó ningún componente de la v1.
