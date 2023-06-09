import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/warzone-dmz-recipes/',
  plugins: [react()],
  resolve: {
    alias: {
      '@src': '/src',
      '@components': '/src/components',
      '@assets': '/public'
    },
  }
})
