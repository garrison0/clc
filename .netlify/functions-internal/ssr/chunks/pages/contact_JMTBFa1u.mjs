/* empty css                          */
import { e as createAstro, f as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead } from '../astro_LQt5omyL.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$Layout } from './404_TmQCNDHq.mjs';

const $$Astro = createAstro("https://melodic-brioche-682b75.netlify.app/");
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contact;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contact" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="p-10"> <h1>Contact</h1> <p>
Looks like something is wrong with the URL. Let's take you back to the <a href="/">Homepage</a>!
</p> </div> ` })}`;
}, "/Users/garrison/clc/src/pages/contact.astro", void 0);

const $$file = "/Users/garrison/clc/src/pages/contact.astro";
const $$url = "/contact";

export { $$Contact as default, $$file as file, $$url as url };
