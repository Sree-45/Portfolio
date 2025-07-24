import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Avoid problematic URL handling
    fs: {
      strict: false
    }
  },
  build: {
    outDir: 'dist',
    sourcemap: true
  }
});
