import { fileURLToPath, URL } from "node:url";
import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [vue()],
  base: "/",
  resolve: {
    alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) },
  },
  build: {
    outDir: "backend/app/static",
    emptyOutDir: true,
  },
  server: {
    port: 5173,
    proxy: { "/api": { target: "http://127.0.0.1:8001", changeOrigin: true } },
  },
});
