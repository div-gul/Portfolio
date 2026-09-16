import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // Relative paths keep the built site working on hosts that serve it from a subfolder.
  base: "./",
  plugins: [react(), tailwindcss()],
  server: { host: "0.0.0.0", port: 8443, strictPort: true },
  preview: { host: "0.0.0.0", port: 8443 },
});
