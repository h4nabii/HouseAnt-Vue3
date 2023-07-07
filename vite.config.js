import {fileURLToPath, URL} from "node:url";
import {resolve} from "path";
import {defineConfig} from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
    ],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url))
        }
    },
    server: {
        port: 5173
    },
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                database: resolve(__dirname, "database/index.html")
            }
        }
    }
});
