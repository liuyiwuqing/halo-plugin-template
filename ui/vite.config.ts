import {fileURLToPath, URL} from 'node:url'

import autoprefixer from 'autoprefixer'
import tailwind from 'tailwindcss'

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import Icons from "unplugin-icons/vite";
import {HaloUIPluginBundlerKit} from "@halo-dev/ui-plugin-bundler-kit";

// https://vite.dev/config/
export default defineConfig({
    css: {
        postcss: {
            plugins: [tailwind(), autoprefixer()],
        },
    },
    plugins: [
        vue(),
        Icons({
            autoInstall: true,
            compiler: "vue3",
        }),
        HaloUIPluginBundlerKit(),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    }
})