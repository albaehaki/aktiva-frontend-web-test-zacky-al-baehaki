import { defineConfig } from "vitest/config"
import react from "@vitejs/plugin-react"
import dotenv from 'dotenv';

dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
  },
  build: {
    outDir: "build",
    sourcemap: true,
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "src/setupTests",
    mockReset: true,
  },
  define: {
    'process.env': {
      VITE_YELP_API_TOKEN: JSON.stringify('your token'),
      VITE_YELP_API_URL: JSON.stringify('url api'),
    },
  },
})
