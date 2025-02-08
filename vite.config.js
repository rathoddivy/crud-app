import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: 'client', // 👈 Ensures Vite looks inside the 'client' folder
  build: {
    outDir: 'dist',
  },
});
