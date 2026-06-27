import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { tanstackRouterGenerator } from '@tanstack/router-plugin/vite'

export default defineConfig({
    plugins: [
        tanstackRouterGenerator({
            routesDirectory: './src/routes',
            generatedRouteTree: './src/routeTree.gen.ts'
        }),
        react(),
        tailwindcss()
    ],
})
