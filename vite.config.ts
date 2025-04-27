import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';

// https://vitejs.dev/config/
export default defineConfig({
  base: "/", // Change this to match your GitHub repository name
plugins: [
  react(),
  viteStaticCopy({
    targets: [
      {
        src: 'CNAME', // the file we just created
        dest: '.'     // root of the dist/ folder
      }
    ]
  })
],
optimizeDeps: {
  exclude: ['lucide-react'],
}
});