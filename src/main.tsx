import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
// DO NOT migrate to createBrowserRouter/Framework Mode without reviewing
// GHSA-qwww-vcr4-c8h2 (RSC CSRF, HIGH, affects v7.12-8.2) — only applies
// to Framework/RSC mode; BrowserRouter (Declarative Mode) is not affected.
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
