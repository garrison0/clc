/* empty css                                 */
import { c as createComponent, e as renderComponent, d as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CteLEx1_.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_DmULwMn9.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Page not found - 404" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="sub-body"> <h1>Page not found - 404</h1> <p>
Looks like something is wrong with the URL. Let's take you back to the <a href="/">Homepage</a>!
</p> </div> ` })}`;
}, "/Users/garrison/clc/src/pages/404.astro", void 0);

const $$file = "/Users/garrison/clc/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
