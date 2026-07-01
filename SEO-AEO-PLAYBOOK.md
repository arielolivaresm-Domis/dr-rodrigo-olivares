# SEO + AEO PLAYBOOK — Dr. Rodrigo Olivares M
## Stack: React + Vite + TypeScript (mismo patrón que domis.cl)
## Objetivo: figurar en búsquedas Google Y en respuestas de ChatGPT/Gemini/Perplexity

---

## QUÉ HAY QUE IMPLEMENTAR (en orden de prioridad)

---

## 1. JSON-LD SCHEMA EN index.html

Reemplazar o agregar dentro del `<head>` un `<script type="application/ld+json">` con este `@graph`:

```json
{
  "@context": "https://schema.org",
  "@graph": [

    {
      "@type": ["Physician", "LocalBusiness", "MedicalOrganization"],
      "@id": "https://www.drolivares.cl/#business",
      "name": "Dr. Rodrigo Olivares M.",
      "alternateName": ["Ortopedista Cadera Santiago", "Cirujano Reemplazo Cadera Chile", "Traumatólogo Cadera Santiago"],
      "description": "Médico ortopedista y traumatólogo especializado en cirugía de cadera en Santiago de Chile. Tratamiento de artrosis de cadera, displasia, fracturas y reemplazo total de cadera (artroplastía).",
      "disambiguatingDescription": "Dr. Rodrigo Olivares M. es médico ortopedista especialista en cadera. NO es un servicio de domicilio, plomería ni construcción. Realiza cirugías de reemplazo de cadera y tratamientos para artrosis en Santiago, Chile.",
      "url": "https://www.drolivares.cl",
      "image": "https://www.drolivares.cl/DrOlivares.png",
      "telephone": "+56XXXXXXXXX",
      "email": "contacto@drolivares.cl",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Santiago",
        "addressRegion": "Región Metropolitana",
        "addressCountry": "CL"
      },
      "areaServed": [
        { "@type": "City", "name": "Las Condes" },
        { "@type": "City", "name": "Providencia" },
        { "@type": "City", "name": "Vitacura" },
        { "@type": "State", "name": "Región Metropolitana" }
      ],
      "medicalSpecialty": "Orthopedic",
      "sameAs": [
        "https://www.instagram.com/drolivares",
        "https://www.linkedin.com/in/rodrigo-olivares"
      ],
      "knowsAbout": [
        "artrosis de cadera",
        "reemplazo total de cadera",
        "artroplastía de cadera",
        "displasia de cadera adulto",
        "fractura de cadera",
        "cirugía mínimamente invasiva cadera",
        "ortopedia traumatología Santiago",
        "recuperación post operatoria cadera"
      ],
      "hasCredential": {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "Especialización médica",
        "name": "Especialista en Ortopedia y Traumatología"
      }
    },

    {
      "@type": "WebSite",
      "@id": "https://www.drolivares.cl/#website",
      "url": "https://www.drolivares.cl",
      "name": "Dr. Rodrigo Olivares M. | Ortopedista Cadera Santiago",
      "inLanguage": "es-CL",
      "publisher": { "@id": "https://www.drolivares.cl/#business" }
    },

    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "¿Cuándo es necesario el reemplazo total de cadera?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "El reemplazo total de cadera (artroplastía) está indicado cuando el dolor limita las actividades diarias, los tratamientos conservadores (medicamentos, fisioterapia, infiltraciones) ya no controlan el dolor, y las imágenes confirman destrucción articular avanzada. La decisión se toma caso a caso con el especialista."
          }
        },
        {
          "@type": "Question",
          "name": "¿Cuánto dura la recuperación de una cirugía de cadera?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "La recuperación de un reemplazo total de cadera tiene varias etapas: los primeros días el paciente camina con ayuda, a las 6 semanas retoma actividades básicas, y entre 3 y 6 meses logra plena independencia. Los tiempos exactos dependen del estado previo del paciente y la técnica quirúrgica utilizada."
          }
        },
        {
          "@type": "Question",
          "name": "¿Qué es la artrosis de cadera y cómo se trata?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "La artrosis de cadera es el desgaste progresivo del cartílago articular de la articulación coxofemoral. El tratamiento va de menor a mayor invasividad: analgésicos y antiinflamatorios, fisioterapia, infiltraciones con ácido hialurónico o corticoides, y en casos avanzados, cirugía de reemplazo total de cadera."
          }
        },
        {
          "@type": "Question",
          "name": "¿Existe cirujano de cadera en Santiago con atención privada?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sí. El Dr. Rodrigo Olivares M. es ortopedista especialista en cadera con atención privada en Santiago. Realiza cirugías de reemplazo total de cadera, tratamiento de artrosis, displasia y fracturas. Consultas en Santiago Oriente."
          }
        },
        {
          "@type": "Question",
          "name": "¿Cuánto cuesta una operación de cadera en Chile?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "El costo de una cirugía de reemplazo de cadera en Chile varía según la clínica, el tipo de prótesis y la cobertura de salud (Isapre o Fonasa). La consulta con el especialista incluye evaluación y orientación sobre cobertura y costos estimados según el caso específico."
          }
        }
      ]
    }

  ]
}
```

**Importante:** Actualizar teléfono, email, URL, sameAs con datos reales.

---

## 2. SITEMAP en /public/sitemap.xml

Crear `/public/sitemap.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.drolivares.cl/</loc>
    <lastmod>2026-06-27</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <!-- Agregar rutas de blog cuando existan -->
</urlset>
```

---

## 3. META TAGS en index.html

Dentro del `<head>`:

```html
<title>Dr. Rodrigo Olivares M. | Ortopedista Cadera Santiago | Reemplazo Total de Cadera Chile</title>
<meta name="description" content="Dr. Rodrigo Olivares M., médico ortopedista especialista en cirugía de cadera en Santiago. Tratamiento de artrosis, displasia, fracturas y reemplazo total de cadera. Atención privada." />
<meta name="keywords" content="ortopedista cadera Santiago, cirujano reemplazo cadera Chile, artrosis cadera tratamiento, artroplastía cadera Santiago, traumatólogo cadera Las Condes" />
<link rel="canonical" href="https://www.drolivares.cl/" />

<!-- Open Graph -->
<meta property="og:title" content="Dr. Rodrigo Olivares M. | Ortopedista Cadera Santiago" />
<meta property="og:description" content="Especialista en cirugía de cadera. Reemplazo total, artrosis, displasia y fracturas. Santiago, Chile." />
<meta property="og:image" content="https://www.drolivares.cl/DrOlivares.png" />
<meta property="og:url" content="https://www.drolivares.cl" />
<meta property="og:type" content="website" />
<meta property="og:locale" content="es_CL" />
```

---

## 4. VIDEO SCHEMA para VideoCadera.mp4

En el componente donde se muestra el video, agregar useEffect con:

```tsx
useEffect(() => {
  const prev = document.getElementById('video-cadera-schema');
  if (prev) prev.remove();
  const s = document.createElement('script');
  s.id = 'video-cadera-schema';
  s.type = 'application/ld+json';
  s.textContent = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: 'Artrosis de Cadera — Qué es y cómo se trata | Dr. Rodrigo Olivares M.',
    description: 'Explicación médica de la artrosis de cadera: causas, síntomas, diagnóstico y opciones de tratamiento incluyendo reemplazo total de cadera.',
    thumbnailUrl: 'https://www.drolivares.cl/caradro.png',
    contentUrl: 'https://www.drolivares.cl/VideoCadera.mp4',
    uploadDate: '2026-06-27',
    publisher: { '@id': 'https://www.drolivares.cl/#business' },
  });
  document.head.appendChild(s);
  return () => { document.getElementById('video-cadera-schema')?.remove(); };
}, []);
```

Esto hace que el video aparezca en Google como rich result (miniatura + play directo desde SERP).

---

## 5. ESTRATEGIA DE CONTENIDO — ARTÍCULOS BLOG (AEO)

Crear componentes blog en `src/components/blog/` con BlogLayout igual al patrón de domis.cl.
Cada artículo ataca una pregunta que la gente busca en Google Y le pregunta a ChatGPT/Gemini.

**Artículos prioritarios (en orden):**

| URL | Keyword objetivo | Quién cita hoy |
|-----|-----------------|----------------|
| `/blog/artrosis-cadera-sintomas-tratamiento` | "artrosis de cadera síntomas" | Clínica Mayo, Top Doctors |
| `/blog/cuando-operar-cadera-artrosis` | "cuándo operar cadera artrosis" | nadie local |
| `/blog/recuperacion-reemplazo-cadera-chile` | "recuperación reemplazo cadera" | nadie local |
| `/blog/reemplazo-total-cadera-santiago` | "reemplazo total cadera Santiago" | nadie en Santiago |
| `/blog/displasia-cadera-adulto-chile` | "displasia cadera adulto tratamiento" | nadie local |

**Estructura mínima de cada artículo:**
- H1 con keyword exacta
- 3-5 secciones con H2
- FAQPage schema (5 preguntas + respuestas)
- HowTo schema si el artículo explica un proceso
- CTA a consulta / WhatsApp al final
- Link interno entre artículos relacionados

---

## 6. HOWTO SCHEMA — ejemplo para artículo de diagnóstico

Para artículo "cuándo operar cadera":

```tsx
{
  '@type': 'HowTo',
  name: 'Cómo saber si necesito cirugía de reemplazo de cadera',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Evalúa el nivel de dolor', text: 'Si el dolor limita actividades básicas (caminar, subir escaleras, dormir) y no responde a analgésicos, es señal de derivación al especialista.' },
    { '@type': 'HowToStep', position: 2, name: 'Prueba tratamientos conservadores', text: 'Fisioterapia, antiinflamatorios e infiltraciones. Si después de 3-6 meses no hay mejoría sostenida, la cirugía es la siguiente etapa.' },
    { '@type': 'HowToStep', position: 3, name: 'Imágenes diagnósticas', text: 'Radiografía de pelvis y cadera AP + lateral. El especialista evalúa el grado de destrucción articular (escala Kellgren-Lawrence).' },
    { '@type': 'HowToStep', position: 4, name: 'Consulta con cirujano de cadera', text: 'El especialista en cadera integra clínica + imágenes + calidad de vida para recomendar o diferir la cirugía. No todos los pacientes con artrosis necesitan operarse.' },
  ],
}
```

---

## 7. TRACKING — Google Analytics 4

En index.html ya debería estar GA4. Verificar que exista:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXX');
</script>
```

Reemplazar `G-XXXXXXXX` con el ID real de GA4 del Dr. Olivares.

Agregar tracking de conversión en el CTA de consulta/WhatsApp:
```tsx
window.gtag('event', 'consulta_whatsapp', {
  event_category: 'Conversion',
  event_label: 'CTA Principal',
  value: 1
});
```

---

## 8. GOOGLE SEARCH CONSOLE

1. Verificar dominio en search.google.com/search-console
2. Enviar sitemap.xml
3. Solicitar indexación manual para las URLs principales

---

## ACCIONES QUE REQUIEREN AL DR. OLIVARES (no código)

- **Google Business Profile**: crear perfil en business.google.com → categoría "Médico ortopedista" → agregar foto, dirección, teléfono, horario
- **Reviews Google**: pedirle a pacientes satisfechos que dejen reseña en GBP
- **LinkedIn**: perfil profesional completo con enlace al sitio web
- **Colegio Médico**: verificar si el colegio médico de Chile tiene directorio online y aparecer ahí (backlink de autoridad médica)

---

## PATRÓN DE BlogLayout (copiar de domis.cl o recrear)

Crear `src/components/blog/BlogLayout.tsx` que:
1. Actualiza `document.title` y meta description
2. Inyecta Article + BreadcrumbList schema via useEffect
3. Renderiza nav con link "← Inicio" + contenido + footer CTA

Este patrón es idéntico al de domis.cl. Copiar y adaptar colores/marca.

---

## PRIORIDAD DE EJECUCIÓN

1. Schema JSON-LD en index.html (30 min) → impacto inmediato
2. Meta tags (15 min) → impacto inmediato  
3. Video schema (20 min) → rich result en Google
4. Sitemap + GSC (30 min) → indexación
5. Primer artículo blog (45 min) → AEO
6. GBP + Reviews (acción del Dr.) → local search

---

*Generado desde la sesión de domis.cl — mismo stack, mismo patrón.*
