import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    // This allows usage of process.env.API_KEY in the code while using VITE_API_KEY in Vercel
    'process.env.API_KEY': 'import.meta.env.VITE_API_KEY'
  }
});