import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import fs from 'fs';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'copy-404',
      closeBundle() {
        const distDir = path.resolve(import.meta.dirname || process.cwd(), 'dist');
        const indexPath = path.join(distDir, 'index.html');
        const fourOhFourPath = path.join(distDir, '404.html');
        if (fs.existsSync(indexPath)) {
          fs.copyFileSync(indexPath, fourOhFourPath);
        }
      }
    }
  ],
  base: '/iu-acm-chapter/',
});