import { lazy, Suspense, useEffect, useRef } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Cita from './pages/Cita';
import CitaGracias from './pages/CitaGracias';
import BlogIndex from './pages/blog/BlogIndex';

const ArtrosisCaderaSintomasTratamiento = lazy(() => import('./pages/blog/ArtrosisCaderaSintomasTratamiento'));
const CuandoOperarCadera = lazy(() => import('./pages/blog/CuandoOperarCadera'));
const RecuperacionReemplazoCadera = lazy(() => import('./pages/blog/RecuperacionReemplazoCadera'));
const ReemplazoTotalCadera = lazy(() => import('./pages/blog/ReemplazoTotalCadera'));
const DisplasiaCaderaAdulto = lazy(() => import('./pages/blog/DisplasiaCaderaAdulto'));
const CirugiaRevisionCadera = lazy(() => import('./pages/blog/CirugiaRevisionCadera'));
const CaderaDeportista = lazy(() => import('./pages/blog/CaderaDeportista'));
const FracturaCadera = lazy(() => import('./pages/blog/FracturaCadera'));
const NecrosisAvascularCadera = lazy(() => import('./pages/blog/NecrosisAvascularCadera'));

// Fires GA4 page_view on every SPA route change.
// Skips the initial render — index.html's gtag('config') already covers it.
function GATracker() {
  const location = useLocation();
  const isFirst = useRef(true);
  useEffect(() => {
    if (isFirst.current) { isFirst.current = false; return; }
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'page_view', {
        page_location: window.location.href,
        page_title: document.title,
      });
    }
  }, [location.pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <GATracker />
      <Suspense fallback={<div style={{ minHeight: '100vh' }} />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cita" element={<Cita />} />
          <Route path="/cita/gracias" element={<CitaGracias />} />
          <Route path="/blog" element={<BlogIndex />} />
          <Route path="/blog/artrosis-cadera-sintomas-tratamiento" element={<ArtrosisCaderaSintomasTratamiento />} />
          <Route path="/blog/cuando-operar-cadera" element={<CuandoOperarCadera />} />
          <Route path="/blog/recuperacion-reemplazo-cadera" element={<RecuperacionReemplazoCadera />} />
          <Route path="/blog/reemplazo-total-cadera-artroplastia" element={<ReemplazoTotalCadera />} />
          <Route path="/blog/displasia-cadera-adulto" element={<DisplasiaCaderaAdulto />} />
          <Route path="/blog/cirugia-revision-cadera" element={<CirugiaRevisionCadera />} />
          <Route path="/blog/cadera-deportista-artroscopia" element={<CaderaDeportista />} />
          <Route path="/blog/fractura-cadera" element={<FracturaCadera />} />
          <Route path="/blog/necrosis-avascular-cadera" element={<NecrosisAvascularCadera />} />
        </Routes>
      </Suspense>
    </>
  );
}
