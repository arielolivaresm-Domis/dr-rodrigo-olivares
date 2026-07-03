# Reglas de este proyecto (drolivaresm.cl)

## Prohibido
- **NUNCA** correr `vercel --prod` o `vercel deploy --prod` manualmente desde esta carpeta.
  Publica a drolivaresm.cl al instante, sin revisión.
- No hacer `vercel link` a otro proyecto, ni tocar `.vercel/project.json`.

## Cómo probar cambios
- Correr local: `npm run dev` (o el script equivalente) — no toca producción.
- Si querés una URL real de preview: `vercel deploy` (SIN `--prod`).

## Cómo publicar a producción (el único método permitido)
1. Commit en rama `main`.
2. `git push`.
3. Vercel deploya automático a drolivaresm.cl.

## Info del proyecto
- Repo: github.com/arielolivaresm-Domis/dr-rodrigo-olivares
- Rama de producción: `main`
- Dominio: drolivaresm.cl / www.drolivaresm.cl
- Proyecto Vercel: `dr-rodrigo-olivares` (org: ariel-oms-projects)

## Protocolo de emergencia (si algo rompe producción)
**Opción A — vos mismo, sin código, en 1 minuto:**
1. vercel.com/dashboard → proyecto `dr-rodrigo-olivares` → tab **Deployments**
2. Buscá el último deploy **Ready** de ANTES de que empezara el problema
3. Click **⋯** al lado de ese deploy → **Promote to Production**
4. Confirmá — el sitio vuelve al instante, sin rebuild ni espera

**Opción B — pedirle a un agente (Claude, etc.):**
"Volvé drolivaresm.cl a como estaba antes de [hora/evento]" — el agente revisa
`vercel ls dr-rodrigo-olivares` y promueve el deploy correcto.

**Nunca** intentar arreglar en caliente editando código directo en producción.
Primero rollback, después se investiga con calma en local.
