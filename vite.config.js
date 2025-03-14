import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    plugins: [react(), tailwindcss()],
    build: {
        target: "esnext",
        server: {
            host: "0.0.0.0", // Esto permite conexiones desde cualquier IP
            port: 5174, // Mantiene el mismo puerto que estás usando
        },
    },
});
