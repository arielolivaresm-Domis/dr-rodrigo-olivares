import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Cita from './pages/Cita';
import CitaGracias from './pages/CitaGracias';
import BlogIndex from './pages/blog/BlogIndex';
import ArtrosisCaderaSintomasTratamiento from './pages/blog/ArtrosisCaderaSintomasTratamiento';
import CuandoOperarCadera from './pages/blog/CuandoOperarCadera';
import RecuperacionReemplazoCadera from './pages/blog/RecuperacionReemplazoCadera';
import ReemplazoTotalCadera from './pages/blog/ReemplazoTotalCadera';
import DisplasiaCaderaAdulto from './pages/blog/DisplasiaCaderaAdulto';
import CirugiaRevisionCadera from './pages/blog/CirugiaRevisionCadera';
import CaderaDeportista from './pages/blog/CaderaDeportista';
import FracturaCadera from './pages/blog/FracturaCadera';
import NecrosisAvascularCadera from './pages/blog/NecrosisAvascularCadera';

export default function App() {
  return (
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
  );
}
