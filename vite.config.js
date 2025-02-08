export default defineConfig({
  root: 'client', // Set Vite root to 'client' folder
  plugins: [react()],
  build: {
    outDir: 'dist', // Output folder
  }
});
