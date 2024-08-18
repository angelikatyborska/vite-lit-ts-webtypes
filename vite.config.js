import { defineConfig } from "vite"
import { watch } from "vite-plugin-watch"

export default defineConfig({
  plugins: [
    watch({
      pattern: "src/components/**/*.ts",
      command: "npm run webtypes",
    }),
  ],
})
