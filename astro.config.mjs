import { defineConfig } from "astro/config";
import icon from "astro-icon";
import decapCmsOauth from "astro-decap-cms-oauth";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  output: "server",
  site: "https://melodic-brioche-682b75.netlify.app/",
  integrations: [icon(), decapCmsOauth()],
  adapter: netlify()
});