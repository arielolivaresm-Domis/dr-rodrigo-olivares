import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BlogIndex from './pages/blog/BlogIndex';
import ArtrosisCaderaSintomasTratamiento from './pages/blog/ArtrosisCaderaSintomasTratamiento';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/blog" element={<BlogIndex />} />
      <Route path="/blog/artrosis-cadera-sintomas-tratamiento" element={<ArtrosisCaderaSintomasTratamiento />} />
    </Routes>
  );
}
