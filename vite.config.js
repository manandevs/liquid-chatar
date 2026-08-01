import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import Unfonts from "unplugin-fonts/vite";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    Unfonts({
      custom: {
        families: [
          {
            name: "Ronzino",
            src: "./public/fonts/ronzino.woff2",
          },
        ],
      },
    }),
  ],
});