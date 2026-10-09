import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'dev-server-api',
      configureServer(server) {
        server.middlewares.use('/api/signup', (req, res) => {
          if (req.method === 'POST') {
            let body = '';
            req.on('data', (chunk) => {
              body += chunk;
            });
            req.on('end', () => {
              try {
                const data = JSON.parse(body || '{}');
                console.log('⚡ [Backend Server] Received passenger manifest entry:', data);

                res.setHeader('Content-Type', 'application/json');
                res.statusCode = 200;
                res.end(
                  JSON.stringify({
                    success: true,
                    message: `Welcome to the crew, ${data.full_name || 'Passenger'}! Server confirmed entry on /api/signup.`,
                  })
                );
              } catch {
                res.statusCode = 400;
                res.end(JSON.stringify({ success: false, message: 'Invalid payload.' }));
              }
            });
          } else {
            res.statusCode = 405;
            res.end();
          }
        });
      },
    },
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'motion-vendor': ['framer-motion'],
          'ui-vendor': ['lucide-react', 'canvas-confetti'],
        },
      },
    },
    chunkSizeWarningLimit: 600,
  },
});
