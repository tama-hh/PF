import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        day2: resolve(__dirname, "day2.html"),
        day3: resolve(__dirname, "day3.html"),
        day4: resolve(__dirname, "day4.html"),
      },
    },
  },
});