// https://vite.dev/config/
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/characters': {
        target: 'http://0.0.0.0:8000',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
