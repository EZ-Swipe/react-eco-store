import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/react-eco-store/",
  plugins: [
    react(),
  ],
    build: {
    chunkSizeWarningLimit: 1000,
  }
});
