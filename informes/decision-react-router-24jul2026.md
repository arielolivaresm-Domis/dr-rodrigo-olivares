# Decisión: No migrar react-router-dom a v7

**Fecha:** 24 julio 2026  
**Autor:** PharosLab / auditoría Claude Code  
**Estado:** Riesgo aceptado — no es pendiente sin resolver

---

## Contexto

Versión en producción: `react-router-dom@6.30.4` (Declarative Mode, `BrowserRouter`).

`npm audit` reporta 2 vulnerabilidades moderate en v6:

| CVE | Severidad | Descripción | ¿Aplica? |
|---|---|---|---|
| CVE-2025-68470 / GHSA-wrjc-x8rr-h8h6 | moderate | Open redirect via backslash en `<Link>` y `useNavigate` | **NO** — requiere que el atacante controle el href de un `<Link>` con URL externa. Todos los `<Link>` del sitio apuntan a rutas internas hardcodeadas (`/cita`, `/blog/*`). |
| GHSA-337j-9hxr-rhxg | moderate | Arbitrary Constructor Injection via `deserializeErrors()` en SSR hydration | **NO** — requiere Server-Side Rendering. Este sitio es SPA client-side puro (`BrowserRouter`), sin SSR ni hydration server-side. |

---

## Por qué NO se hizo el upgrade a v7

Se evaluó el upgrade a `react-router-dom@7.18.1` en la branch `feat/rr7-upgrade` (25 jul 2026). Resultado del audit en v7:

| CVE | Severidad | Descripción | ¿Aplica? |
|---|---|---|---|
| GHSA-qwww-vcr4-c8h2 | **HIGH** | RSC Mode CSRF bypass — permite ejecución de acciones antes de respuesta 400 | **NO** — requiere React Server Components (RSC) / Framework Mode (`createBrowserRouter` con loaders/actions). Este sitio usa `BrowserRouter` Declarative Mode sin RSC. |

Upgrade de v6 a v7.18.1 **empeora el score de npm audit** de 2 moderate → 2 HIGH, sin reducir el riesgo real (ninguna vuln aplica en ambos casos).

---

## Decisión

Quedarse en `react-router-dom@6.30.4`.

Criterio: las 2 moderate de v6 no aplican a este proyecto. Subir a v7.18.1 introduce 2 HIGH que tampoco aplican, y no ofrece mejoras funcionales necesarias para este sitio (no se usa Data Router, loaders, ni actions).

---

## Cuándo reevaluar

Reconsiderar el upgrade si:
1. Se migra a React Router Framework Mode (loaders/actions) — en ese momento verificar GHSA-qwww-vcr4-c8h2 y derivados.
2. npm audit reporta una vuln que SÍ aplique a `BrowserRouter` Declarative Mode.
3. Se requiere una feature de v7 específica para el proyecto.

---

## Ref técnica

- `src/main.tsx` tiene comentario inline advirtiendo sobre GHSA-qwww-vcr4-c8h2 antes de cualquier migración a Framework Mode.
- Modo confirmado: `import {BrowserRouter} from 'react-router-dom'` — Declarative Mode v6 style.
