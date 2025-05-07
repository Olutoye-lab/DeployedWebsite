import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import jsconfigPaths from "vite-jsconfig-paths"
import svgr from 'vite-plugin-svgr';


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), jsconfigPaths(), svgr()],
  base: process.env.VITE_BASE_PATH || "/DeployedWebsite"
})
