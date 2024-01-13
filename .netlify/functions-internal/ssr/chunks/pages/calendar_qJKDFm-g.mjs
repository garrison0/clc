/* empty css                          */
import { e as createAstro, f as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead } from '../astro_LQt5omyL.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$Layout } from './404_TmQCNDHq.mjs';

const $$Astro = createAstro("https://melodic-brioche-682b75.netlify.app/");
const $$Calendar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Calendar;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calendar" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="p-10"> <h1>Calendar</h1> <p>
Calendar component goes here...
</p> </div> ` })}`;
}, "/Users/garrison/clc/src/pages/calendar.astro", void 0);

const $$file = "/Users/garrison/clc/src/pages/calendar.astro";
const $$url = "/calendar";

export { $$Calendar as default, $$file as file, $$url as url };
