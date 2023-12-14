import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: '/world-of-halal/',
  server: {
    base: '/world-of-halal/',
    port: 3001,
  },
  plugins: [react()],
});