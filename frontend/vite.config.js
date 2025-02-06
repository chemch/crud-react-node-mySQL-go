import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// need to set the port that vite will use to the port that the server is running on
export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: process.env.PORT || 3000 
  },
  plugins: [react()],
})
