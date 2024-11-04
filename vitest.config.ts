import { fileURLToPath } from "node:url";
import { configDefaults, defineConfig, mergeConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import viteConfig from "./vite.config";

export default mergeConfig(
  viteConfig,
  defineConfig({
    plugins: [react()],
    test: {
      environment: 'jsdom',
      exclude: [...configDefaults.exclude, 'e2e/*'],
      root: fileURLToPath(new URL('./', import.meta.url)),
      setupFiles: ['./vitest.setup.ts'],
    },
  })
)
