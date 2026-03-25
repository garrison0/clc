import { f as createAstro, c as createComponent, m as maybeRenderHead, g as addAttribute, d as renderTemplate } from './astro/server_CteLEx1_.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                              */

const $$Astro = createAstro("https://melodic-brioche-682b75.netlify.app/");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Header;
  const { text } = Astro2.props;
  const encodedText = encodeURI(text);
  const headerLink = "#" + encodedText;
  return renderTemplate` ${maybeRenderHead()}<div${addAttribute(encodedText, "id")} class="header" data-astro-cid-6d7a4eqr> <a id="hash-link"${addAttribute(headerLink, "href")} class="font-light" data-astro-cid-6d7a4eqr>${text} <span class="hash-link" data-astro-cid-6d7a4eqr>#</span> </a> </div> `;
}, "/Users/garrison/clc/src/components/utils/Header.astro", void 0);

export { $$Header as $ };
