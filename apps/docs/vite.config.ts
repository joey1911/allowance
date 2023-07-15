import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['@allowance/bash-design', '@allowance/bash-ui']
  },
  build: {
    commonjsOptions: {
      include: [/bash-design/, /bash-ui/]
    }
  }
})
