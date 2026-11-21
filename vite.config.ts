import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

const rootDir = path.resolve(import.meta.dirname, "client");

export default defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    // Conditional plugins loaded inline
    ...(process.env.NODE_ENV !== "production" && process.env.REPL_ID !== undefined
      ? [
          await import("@replit/vite-plugin-cartographer").then((m) => m.cartographer()),
          await import("@replit/vite-plugin-dev-banner").then((m) => m.devBanner()),
        ]
      : []),
  ],

  resolve: {
    alias: {
      "@": path.resolve(rootDir, "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },

  root: rootDir,

  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,

    // 🔧 Performance improvements
    minify: "esbuild",
    sourcemap: false,

    // 🔧 Split vendor chunks for better caching and faster initial load
    rollupOptions: {
      output: {
        manualChunks(id: string) {
          if (id.includes("node_modules")) {
            // React core - loaded on every page
            if (id.includes("react") || id.includes("react-dom") || id.includes("scheduler")) {
              return "react-vendor";
            }
            // UI components - Radix primitives
            if (id.includes("@radix-ui")) {
              return "ui-vendor";
            }
            // Animation library - only needed for some pages
            if (id.includes("framer-motion")) {
              return "animation-vendor";
            }
            // Form handling
            if (id.includes("react-hook-form") || id.includes("@hookform") || id.includes("zod")) {
              return "form-vendor";
            }
            // Data fetching
            if (id.includes("@tanstack")) {
              return "query-vendor";
            }
            // Icons - lucide
            if (id.includes("lucide-react")) {
              return "icons-vendor";
            }
            // Everything else from node_modules
            return "vendor";
          }
        },
        chunkFileNames: "assets/[name]-[hash].js",
        entryFileNames: "assets/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash][extname]",
      },
    },

    assetsInlineLimit: 4096,
  },

  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});