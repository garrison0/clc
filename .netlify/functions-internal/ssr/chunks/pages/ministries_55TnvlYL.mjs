/* empty css                          */
import { e as createAstro, f as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead } from '../astro_LQt5omyL.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$Layout } from './404_TmQCNDHq.mjs';

const $$Astro = createAstro("https://melodic-brioche-682b75.netlify.app/");
const $$Ministries = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Ministries;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Ministries" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="p-10"> <h1>Ministries</h1> <p>
Looks like something is wrong with the URL. Let's take you back to the <a href="/">Homepage</a>!
</p> </div> ` })}`;
}, "/Users/garrison/clc/src/pages/ministries.astro", void 0);

const $$file = "/Users/garrison/clc/src/pages/ministries.astro";
const $$url = "/ministries";

export { $$Ministries as default, $$file as file, $$url as url };
