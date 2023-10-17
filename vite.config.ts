import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv' // * นำเข้าโมดูล dotenv

dotenv.config()
export default defineConfig({
  server: {port: parseInt(process.env.VITE_PORT)},
  plugins: [react()],
})
