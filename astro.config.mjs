// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import sanity from "@sanity/astro";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    sanity({
      projectId: "x9e0p8hx",
      dataset: "production",
      useCdn: false,
      apiVersion: "2025-01-28",
    }),
    react(),
  ],

  adapter: netlify(),

  output: "static",
});
