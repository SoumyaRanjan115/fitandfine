<<<<<<< HEAD
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
=======
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/',            // 🔥 REQUIRED for Vercel
>>>>>>> 8bff2cf9889b423589be9e2273d5ab564ac73cec
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
<<<<<<< HEAD
});
=======
})
>>>>>>> 8bff2cf9889b423589be9e2273d5ab564ac73cec
