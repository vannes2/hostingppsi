import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,       // Penting: agar bisa diakses Railway
    port: 4173        // Opsional: agar pasti sama dengan preview
  }
})
