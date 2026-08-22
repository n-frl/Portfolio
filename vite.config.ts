import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // On charge le .env sans prefixe impose pour pouvoir lire VITE_BASE_PATH ici.
  const env = loadEnv(mode, process.cwd(), '');

  return {
    // GitHub Pages "projet" sert le site depuis /<nom-du-repo>/.
    // Le jour du passage au domaine custom OVH : mettre VITE_BASE_PATH=/
    base: env.VITE_BASE_PATH || '/',
    plugins: [react()],
    resolve: {
      alias: { '@': path.resolve(__dirname, './src') },
    },
    server: { port: 5173, open: true },
    preview: { port: 4173 },
    build: {
      outDir: 'dist',
      sourcemap: false, // pas de sourcemap en prod : inutile ici et alourdit le depot
    },
  };
});
