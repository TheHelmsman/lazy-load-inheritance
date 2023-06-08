import { defineConfig } from "vitest/config";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  test: {
    include: ["**/tests/**/*.{test,spec}.{js,ts}"],
    globals: true,
    environment: "jsdom",
  },
  plugins: [vue()],
});
