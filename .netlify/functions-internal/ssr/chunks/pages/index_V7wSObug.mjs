import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, i as renderComponent, l as defineStyleVars, h as addAttribute } from '../astro_m4_q3X-E.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$Image, a as $$Layout } from './404_D-7hq-yL.mjs';
/* empty css                          */

const arrow = new Proxy({"src":"/_astro/arrow-upward.VvL0w42I.svg","width":48,"height":48,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const $$Astro$3 = createAstro("https://melodic-brioche-682b75.netlify.app/");
const $$SkipLink = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$SkipLink;
  return renderTemplate`${maybeRenderHead()}<a href="#main" id="skip-link" data-astro-cid-cqqqsvbn>Skip to main content ${renderComponent($$result, "Image", $$Image, { "alt": "Arrow down", "height": 36, "src": arrow, "width": 36, "data-astro-cid-cqqqsvbn": true })}</a> `;
}, "/Users/garrison/clc/src/components/utils/SkipLink.astro", void 0);

const $$Astro$2 = createAstro("https://melodic-brioche-682b75.netlify.app/");
const $$ExternalLink = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ExternalLink;
  const { href, fontSize, name } = Astro2.props;
  const $$definedVars = defineStyleVars([{ fontSize }]);
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} class="external-link" target="_blank" rel="noopener noreferrer" data-astro-cid-pt6zg3gv${addAttribute($$definedVars, "style")}>${name} <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-astro-cid-pt6zg3gv${addAttribute($$definedVars, "style")}> <g clip-path="url(#clip0_6_12319)" data-astro-cid-pt6zg3gv${addAttribute($$definedVars, "style")}> <path d="M19 19H5V5H12V3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V12H19V19ZM14 3V5H17.59L7.76 14.83L9.17 16.24L19 6.41V10H21V3H14Z" data-astro-cid-pt6zg3gv${addAttribute($$definedVars, "style")}></path> </g> </svg> </a> `;
}, "/Users/garrison/clc/src/components/utils/ExternalLink.astro", void 0);

const $$Astro$1 = createAstro("https://melodic-brioche-682b75.netlify.app/");
const $$BackToTop = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BackToTop;
  return renderTemplate`${maybeRenderHead()}<a aria-label="Back to top" href="#start" id="back-to-top" data-astro-cid-hhu5dpqk> ${renderComponent($$result, "Image", $$Image, { "alt": "", "src": arrow, "data-astro-cid-hhu5dpqk": true })} </a>  `;
}, "/Users/garrison/clc/src/components/utils/BackToTop.astro", void 0);

const $$Astro = createAstro("https://melodic-brioche-682b75.netlify.app/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Astronaut - Astro starter template", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SkipLink", $$SkipLink, { "data-astro-cid-j7pv25f6": true })} ${maybeRenderHead()}<div class="sr-only" id="start" data-astro-cid-j7pv25f6></div> <div class="wrapper" data-astro-cid-j7pv25f6> <main id="main" data-astro-cid-j7pv25f6> <!-- CLC intro section component --> <div class="overlay" data-astro-cid-j7pv25f6></div> <section id="introduction" aria-label="Christ Church introduction" data-astro-cid-j7pv25f6> <div class="overlay-text" data-astro-cid-j7pv25f6> <h1 data-astro-cid-j7pv25f6>Christ Church Woodside</h1> <p data-astro-cid-j7pv25f6>
Celebrating God's Gospel to the world throughout the world's borough.
</p> <p data-astro-cid-j7pv25f6>
A congregation of the ${renderComponent($$result2, "ExternalLink", $$ExternalLink, { "href": "https://www.lcms.org/", "name": "Lutheran Church\u2014Missouri Synod.", "data-astro-cid-j7pv25f6": true })} </p> </div> </section> <section aria-label="Service time" data-astro-cid-j7pv25f6> <h3 data-astro-cid-j7pv25f6>Service times</h3>
Livestream video here!
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
</section> <section aria-label="Announcements" data-astro-cid-j7pv25f6> <h3 data-astro-cid-j7pv25f6>Announcements</h3>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
</section> </main> </div>  <div aria-label="Utilities" data-astro-cid-j7pv25f6> <!-- You could also add a theme switch here or anything considered a utility --> ${renderComponent($$result2, "BackToTop", $$BackToTop, { "data-astro-cid-j7pv25f6": true })} </div> ` })} `;
}, "/Users/garrison/clc/src/pages/index.astro", void 0);

const $$file = "/Users/garrison/clc/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
