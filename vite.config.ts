import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/Test3/", // Change this to match your GitHub repository name
  plugins: [react()],
});
