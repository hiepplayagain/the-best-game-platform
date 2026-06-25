import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { tanstackRouterGenerator } from '@tanstack/router-plugin/vite'

export default defineConfig({
    plugins: [
        tanstackRouterGenerator(),
        react(),
        tailwindcss()
    ],
})
