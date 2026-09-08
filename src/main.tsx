import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// Polices auto-hebergees via npm : aucun appel a un CDN tiers,
// donc aucune fuite d'IP des visiteurs vers Google Fonts.
import '@fontsource-variable/inter';
import '@fontsource-variable/space-grotesk';
import '@fontsource/jetbrains-mono/400.css';
import '@fontsource/jetbrains-mono/500.css';

import App from './App';
import { ROUTER_BASENAME } from './lib/base';
import './index.css';

const container = document.getElementById('root');
if (!container) throw new Error('Root element #root not found in index.html');

createRoot(container).render(
  <StrictMode>
    {/* basename : indispensable pour GitHub Pages "projet" (/Portfolio/). */}
    <BrowserRouter basename={ROUTER_BASENAME}>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
