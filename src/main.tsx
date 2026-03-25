import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const loadFonts = () => void import('./fonts.css');
if ('requestIdleCallback' in window) {
  requestIdleCallback(loadFonts, { timeout: 2000 });
} else {
  setTimeout(loadFonts, 0);
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
