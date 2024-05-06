import { defineConfig } from "vite";
import injectHTML from "vite-plugin-html-inject";
import { resolve } from "path";

export default defineConfig({
  plugins: [injectHTML()],
  build: {
    rollupOptions: {
      input: {
        visual: resolve(__dirname, "visual.html"),
        raspil: resolve(__dirname, "index.html"),
      },
    },
  },
});
