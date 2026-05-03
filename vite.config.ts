import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Relative asset paths work for GitHub Pages project sites (username.github.io/repo-name/).
  base: './',
})
