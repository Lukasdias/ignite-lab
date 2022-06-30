import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { imagetools } from "vite-imagetools";
import viteImagemin from "vite-plugin-imagemin";
import svgr from "@honkhonk/vite-plugin-svgr";
import viteCompression from "vite-plugin-compression";

export default defineConfig({
  base: "",
  resolve: {
    alias: [
      { find: "assets", replacement: "/src/assets/" },
      { find: "components", replacement: "/src/components/" },
      { find: "hooks", replacement: "/src/hooks/" },
      { find: "lib", replacement: "/src/lib" },
      { find: "models", replacement: "/src/models/" },
      { find: "pages", replacement: "/src/pages/" },
      { find: "services", replacement: "/src/services/" },
      { find: "styles", replacement: "/src/styles/" },
      { find: "utils", replacement: "/src/utils/" },
    ],
  },
  plugins: [
    react(),
    svgr(),
    imagetools(),
    viteCompression(),
    viteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false,
      },
      optipng: {
        optimizationLevel: 7,
      },
      mozjpeg: {
        quality: 20,
      },
      pngquant: {
        quality: [0.8, 0.9],
        speed: 4,
      },
      svgo: {
        plugins: [
          {
            name: "removeViewBox",
          },
          {
            name: "removeEmptyAttrs",
            active: false,
          },
        ],
      },
    }),
  ],
});
