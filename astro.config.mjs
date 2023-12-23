import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://tattedbeardo89-astro-blog-test.netlify.app",
  integrations: [preact()]
});