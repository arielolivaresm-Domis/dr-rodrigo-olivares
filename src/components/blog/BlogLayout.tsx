import { useEffect, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';

const BUPA_URL = "https://agendaclinicas.bupa.cl/clinicas/consulta-medica/reserva-consulta-medica?ref=cbs&profesional=Rodrigo+Andres+Olivares+Miranda&especialidad=Traumatologia+Cadera";

export interface BlogFaqItem {
  question: string;
  answer: string;
}

export interface BlogHowToStep {
  name: string;
  text: string;
}

export interface BlogMeta {
  slug: string;
  title: string;
  description: string;
  badge: string;
  datePublished: string;
  dateModified?: string;
  readingTime: string;
  faq?: BlogFaqItem[];
  howTo?: { name: string; steps: BlogHowToStep[] };
}

export function BlogLayout({ meta, children }: { meta: BlogMeta; children: ReactNode }) {
  const url = `https://www.drolivaresm.cl/blog/${meta.slug}`;
  const headline = meta.title.split('|')[0].trim();

  useEffect(() => {
    const prevTitle = document.title;
    document.title = meta.title;

    const metaDescEl = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    const prevDesc = metaDescEl?.getAttribute('content') ?? null;
    metaDescEl?.setAttribute('content', meta.description);

    const canonicalEl = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    const prevCanonical = canonicalEl?.getAttribute('href') ?? null;
    canonicalEl?.setAttribute('href', url);

    const ogUrlEl = document.querySelector('meta[property="og:url"]') as HTMLMetaElement | null;
    const prevOgUrl = ogUrlEl?.getAttribute('content') ?? null;
    ogUrlEl?.setAttribute('content', url);

    const ogTitleEl = document.querySelector('meta[property="og:title"]') as HTMLMetaElement | null;
    const prevOgTitle = ogTitleEl?.getAttribute('content') ?? null;
    ogTitleEl?.setAttribute('content', headline);

    const ogDescEl = document.querySelector('meta[property="og:description"]') as HTMLMetaElement | null;
    const prevOgDesc = ogDescEl?.getAttribute('content') ?? null;
    ogDescEl?.setAttribute('content', meta.description);

    return () => {
      document.title = prevTitle;
      if (prevDesc !== null) metaDescEl?.setAttribute('content', prevDesc);
      if (prevCanonical !== null) canonicalEl?.setAttribute('href', prevCanonical);
      if (prevOgUrl !== null) ogUrlEl?.setAttribute('content', prevOgUrl);
      if (prevOgTitle !== null) ogTitleEl?.setAttribute('content', prevOgTitle);
      if (prevOgDesc !== null) ogDescEl?.setAttribute('content', prevOgDesc);
    };
  }, [meta.title, meta.description, url, headline]);

  useEffect(() => {
    const id = `article-schema-${meta.slug}`;
    const prev = document.getElementById(id);
    if (prev) prev.remove();

    const graph: Record<string, unknown>[] = [
      {
        '@type': 'Article',
        headline,
        description: meta.description,
        url,
        datePublished: meta.datePublished,
        dateModified: meta.dateModified ?? meta.datePublished,
        author: { '@id': 'https://www.drolivaresm.cl/#business' },
        publisher: { '@id': 'https://www.drolivaresm.cl/#business' },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://www.drolivaresm.cl/' },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.drolivaresm.cl/blog' },
          { '@type': 'ListItem', position: 3, name: headline, item: url },
        ],
      },
    ];

    if (meta.faq && meta.faq.length > 0) {
      graph.push({
        '@type': 'FAQPage',
        mainEntity: meta.faq.map(f => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: { '@type': 'Answer', text: f.answer },
        })),
      });
    }

    if (meta.howTo) {
      graph.push({
        '@type': 'HowTo',
        name: meta.howTo.name,
        step: meta.howTo.steps.map((s, i) => ({
          '@type': 'HowToStep',
          position: i + 1,
          name: s.name,
          text: s.text,
        })),
      });
    }

    const s = document.createElement('script');
    s.id = id;
    s.type = 'application/ld+json';
    s.textContent = JSON.stringify({ '@context': 'https://schema.org', '@graph': graph });
    document.head.appendChild(s);
    return () => { document.getElementById(id)?.remove(); };
  }, [meta.slug, meta.title, meta.description, meta.datePublished, meta.dateModified, meta.faq, headline, url]);

  return (
    <div className="min-h-screen bg-white text-slate-600 font-sans">
      <nav className="border-b border-slate-100">
        <div className="container mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-sm flex items-center justify-center font-serif font-bold text-base bg-brand-900 text-white">RO</div>
            <span className="text-sm font-medium text-slate-900 hidden md:block">Dr. Rodrigo Olivares</span>
          </Link>
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-brand-700 transition-colors">
            <ArrowLeft size={16} /> Inicio
          </Link>
        </div>
      </nav>

      <article className="container mx-auto px-6 md:px-12 py-16 max-w-3xl">
        <p className="text-xs tracking-[0.2em] uppercase text-brand-700 font-semibold mb-3">{meta.badge}</p>
        <p className="text-xs text-slate-400 mb-8">
          Por <span className="font-medium text-slate-500">Dr. Rodrigo Olivares M.</span> · {new Date(meta.datePublished).toLocaleDateString('es-CL', { year: 'numeric', month: 'long', day: 'numeric' })} · {meta.readingTime} de lectura
        </p>
        <div className="prose-blog space-y-6 text-slate-600 font-light leading-relaxed">
          {children}
        </div>
      </article>

      <section className="bg-brand-600 py-14 text-white text-center">
        <p className="text-brand-100 mb-3 tracking-wide text-sm uppercase">¿Tienes dudas sobre tu caso?</p>
        <h3 className="font-serif text-2xl md:text-3xl mb-8">Agenda una consulta con el Dr. Olivares</h3>
        <a
          href={BUPA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-white text-brand-700 px-8 py-3 rounded-sm font-medium tracking-wide hover:bg-brand-50 transition-all"
        >
          AGENDAR EN CLÍNICAS BUPA <ArrowUpRight size={18} />
        </a>
      </section>

      <footer className="bg-slate-50 text-slate-900 py-8 border-t border-slate-200">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">Dr. Rodrigo Olivares Miranda © {new Date().getFullYear()}</p>
          <Link to="/blog" className="text-xs text-slate-500 hover:text-brand-700 transition-colors">← Volver al blog</Link>
        </div>
      </footer>
    </div>
  );
}
