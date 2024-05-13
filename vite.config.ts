import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  server: {
    proxy: {
        '/chili/': {
            target: 'https://chili.ekstern.dev.nav.no',
            changeOrigin: true,
            secure: true,
            rewrite: (path) => path.replace(/^\chili/, ''),
        },
    },
},
})
