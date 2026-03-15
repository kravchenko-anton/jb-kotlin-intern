import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
  optimizeDeps: {
    include: ["@rescui/colors"],
  },
  ssr: {
    noExternal: [
      "@rescui/colors",
      "@rescui/button",
      "@rescui/card",
      "@rescui/typography",
      "@rescui/ui-contexts",
      "@rescui/tab-list",
      "@rescui/icons",
    ],
  },
});
