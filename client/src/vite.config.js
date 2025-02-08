import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: 'client', // 👈 Change this if your frontend is inside 'client'
  build: {
    outDir: 'dist',
  },
});
