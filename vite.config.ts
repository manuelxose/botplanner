import { defineConfig } from 'vite'; import react from '@vitejs/plugin-react';
export default defineConfig({ root: 'web', plugins: [react()], server: { proxy: { '/api': 'http://localhost:4100', '/health': 'http://localhost:4100' } }, build: { outDir: '../public/dist', emptyOutDir: true } });
