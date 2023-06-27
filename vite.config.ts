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
      VITE_YELP_API_TOKEN: JSON.stringify('UMJ-jTpabefy4TjFStJoCVLvLW2DW9w9v_HNMfnj0zDYK1aOKUvYoxZzooTRsG5EpPExQ1JrI48DJU_PHaLMYGzOakCljxRPxATlGH0DDWrTMRfD4d_CiHNVDvGHZHYx'),
      VITE_YELP_API_URL: JSON.stringify('https://api.yelp.com'),
    },
  },
})
