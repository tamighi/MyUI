import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      include: "src/lib",
      exclude: ["**/*.stories.ts", "**/*.stories.tsx"],
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/lib/main.ts"),
      name: "myui",
      fileName: "myui",
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
