import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig, type Plugin } from 'vite'

function devBaseRedirect(): Plugin {
  return {
    name: 'dev-base-redirect',
    apply: 'serve',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = req.url || '';
        // If request does not start with /FARE and is not a Vite internal URL, redirect to /FARE/...
        if (
          !url.startsWith('/FARE') &&
          !url.startsWith('/@') &&
          !url.startsWith('/__vite') &&
          !url.startsWith('/node_modules') &&
          !url.startsWith('/src')
        ) {
          const target = `/FARE${url.startsWith('/') ? url : `/${url}`}`;
          res.writeHead(302, { Location: target });
          res.end();
          return;
        }
        next();
      });
    },
  };
}

export default defineConfig({
  base: '/FARE/',
  plugins: [
    react(),
    tailwindcss(),
    devBaseRedirect(),
  ],
})
