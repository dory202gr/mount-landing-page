import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: './',
  server: {
    proxy: {
      // Directs any call to /api-kit to Kit's servers
      '/api-kit': {
        target: 'https://app.kit.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api-kit/, ''),
      },
    },
  },
})
