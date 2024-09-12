import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        '@fontawesome/react-fontawesome',
        '@fontawesome/free-solid-svg-icons',
        '@fontawesome/free-brands-svg-icons'
      ]
    }
  }
});
