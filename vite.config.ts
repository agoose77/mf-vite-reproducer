import { reactRouter } from "@react-router/dev/vite";
import { federation } from "@module-federation/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import { dependencies } from "./package.json";

export default defineConfig({
  plugins: [
    tailwindcss(),
    reactRouter(),
    federation({
      name: "book-theme",
      filename: "remoteEntry.js",
      shared: {
        react: {
          requiredVersion: dependencies.react,
          singleton: true,
        },
        "myst-to-react": {
          requiredVersion: dependencies["myst-to-react"],
          singleton: true,
        },
      },
      manifest: true,
    }),
  ],
  resolve: {
    tsconfigPaths: true,
  },
});
