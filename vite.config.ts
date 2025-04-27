import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Test3/", // Change this to match your GitHub repository name
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});