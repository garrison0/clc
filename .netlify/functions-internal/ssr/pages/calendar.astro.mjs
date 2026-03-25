/* empty css                                 */
import { c as createComponent, e as renderComponent, d as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CteLEx1_.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_DmULwMn9.mjs';
/* empty css                                    */
export { renderers } from '../renderers.mjs';

const $$Calendar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calendar", "data-astro-cid-sl2ubhge": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="sub-body" data-astro-cid-sl2ubhge> <h1 data-astro-cid-sl2ubhge>Calendar</h1> <div class="calendar-container" data-astro-cid-sl2ubhge> <div class="desk-content" data-astro-cid-sl2ubhge> <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FNew_York&bgcolor=%23ffffff&src=Y2hyaXN0bHV0aGVyYW53b29kc2lkZUBnbWFpbC5jb20&color=%23039BE5" style="border:solid 1px #777" width="100%" height="600" frameborder="0" scrolling="no" data-astro-cid-sl2ubhge></iframe> </div> <div class="phone-content" data-astro-cid-sl2ubhge> <iframe src="https://calendar.google.com/calendar/embed?mode=AGENDA&height=600&wkst=1&ctz=America%2FNew_York&bgcolor=%23ffffff&src=Y2hyaXN0bHV0aGVyYW53b29kc2lkZUBnbWFpbC5jb20&color=%23039BE5" style="border:solid 1px #777" width="100%" height="600" frameborder="0" scrolling="no" data-astro-cid-sl2ubhge></iframe> </div> </div> </div> ` })} `;
}, "/Users/garrison/clc/src/pages/calendar.astro", void 0);

const $$file = "/Users/garrison/clc/src/pages/calendar.astro";
const $$url = "/calendar";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Calendar,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
