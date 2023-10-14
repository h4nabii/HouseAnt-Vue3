import {fileURLToPath, URL} from "node:url";
import {resolve} from "path";
import {defineConfig} from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
    base: "/houseant-front",
    plugins: [
        vue(),
    ],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url))
        }
    },
    server: {
        port: 894
    },
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                database: resolve(__dirname, "database/index.html")
            }, output: {
                // 入口文件名
                entryFileNames: `assets/[name].js`,
                // 块文件名
                chunkFileNames: `assets/[name]-[hash].js`,
                // 资源文件名 css 图片等等
                assetFileNames: `assets/[name]-[hash].[ext]`,
            },
        }
    }
});
