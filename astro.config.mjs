import { defineConfig } from "astro/config";
import icon from "astro-icon";

import decapCmsOauth from "astro-decap-cms-oauth";

// https://astro.build/config
export default defineConfig({
  site: "https://astro-naut-template.vercel.app/",
  integrations: [icon(), decapCmsOauth()]
});