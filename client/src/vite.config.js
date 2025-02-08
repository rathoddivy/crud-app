import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  root: path.resolve(__dirname, 'client'), // 👈 Ensure this points to 'client' if needed
  build: {
    outDir: 'dist', // 👈 Ensure this matches Render's expected output folder
  },
});
