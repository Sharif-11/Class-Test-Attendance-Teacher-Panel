import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist", // This is the directory Render expects
    emptyOutDir: true,
  },
  server: {
    host: "0.0.0.0", // Required for Render
    port: parseInt(process.env.PORT) || 5174, // Render will provide the PORT via an environment variable
  },
});
