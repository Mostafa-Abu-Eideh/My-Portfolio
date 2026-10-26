/// <reference types="vitest/config" />
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/My-Portfolio/',
  // Relative asset paths, so the same build works on GitHub Pages
  // (https://<user>.github.io/Portfolio/) and on any other static host.
  test: {
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    css: false,
  },
})
