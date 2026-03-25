/* empty css                                 */
import { f as createAstro, c as createComponent, m as maybeRenderHead, g as addAttribute, d as renderTemplate, e as renderComponent, F as Fragment } from '../chunks/astro/server_CteLEx1_.mjs';
import 'kleur/colors';
import { $ as $$Layout, d as data } from '../chunks/Layout_DmULwMn9.mjs';
import { $ as $$Header } from '../chunks/Header_CV8uSJHs.mjs';
/* empty css                                      */
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro("https://melodic-brioche-682b75.netlify.app/");
const $$CallButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CallButton;
  const ContactTypes = {
    CONTACT_THE_PASTOR: "Contact our pastor",
    CONTACT_THE_CHURCH_OFFICE: "Contact the church office"
  };
  const { call } = Astro2.props;
  function getHREF(call2) {
    switch (call2) {
      case ContactTypes.CONTACT_THE_PASTOR:
        return "/contact#Meet%20our%20staff";
      case ContactTypes.CONTACT_THE_CHURCH_OFFICE:
        return "/contact#Contact%20the%20church%20office";
    }
  }
  return renderTemplate`${call ? renderTemplate`${maybeRenderHead()}<a${addAttribute(getHREF(call), "href")} rel="noopener noreferrer" target="_blank" data-astro-cid-ngltxtwp><button type="button" data-astro-cid-ngltxtwp>${call}</button></a>` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-ngltxtwp": true })}`}`;
}, "/Users/garrison/clc/src/components/CallButton.astro", void 0);

const $$Astro = createAstro("https://melodic-brioche-682b75.netlify.app/");
const $$Ministry = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Ministry;
  const { ministry, imageOnRight } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="container" data-astro-cid-ymcgoctg> ${imageOnRight ? renderTemplate`<div class="ministry-container" data-astro-cid-ymcgoctg> ${renderComponent($$result, "Header", $$Header, { "text": ministry.title, "data-astro-cid-ymcgoctg": true })} <div class="ministry-description" data-astro-cid-ymcgoctg> ${ministry.description} </div> <div class="calls-to-action-container" data-astro-cid-ymcgoctg> ${ministry.callsToAction ? ministry.callsToAction.map((call) => call.description ? renderTemplate`<h4 class="call-header" data-astro-cid-ymcgoctg>${call.header}</h4>
              <p class="call-description" data-astro-cid-ymcgoctg>${call.description}</p>
              ${renderComponent($$result, "CallButton", $$CallButton, { "call": call.call, "data-astro-cid-ymcgoctg": true })}` : renderTemplate`<h4 class="call-header" data-astro-cid-ymcgoctg>${call.header}</h4>
              ${renderComponent($$result, "CallButton", $$CallButton, { "call": call.call, "data-astro-cid-ymcgoctg": true })}`) : renderTemplate`<div data-astro-cid-ymcgoctg></div>`} </div> </div>
      <div class="img-container right" data-astro-cid-ymcgoctg> <img${addAttribute(ministry.image ? ministry.image.replace("public/", "") : "clc-wowboy.jpeg", "src")} class="ministry-img" data-astro-cid-ymcgoctg> </div>` : renderTemplate`<div class="img-container left" data-astro-cid-ymcgoctg> <img${addAttribute(ministry.image ? ministry.image.replace("public/", "") : "clc-wowboy.jpeg", "src")} class="ministry-img" data-astro-cid-ymcgoctg> </div>
      <div class="ministry-container" data-astro-cid-ymcgoctg> ${renderComponent($$result, "Header", $$Header, { "text": ministry.title, "data-astro-cid-ymcgoctg": true })} <div class="ministry-description" data-astro-cid-ymcgoctg> ${ministry.description} </div> <div class="calls-to-action-container" data-astro-cid-ymcgoctg> ${ministry.callsToAction ? ministry.callsToAction.map((call) => call.description ? renderTemplate`<h4 class="call-header" data-astro-cid-ymcgoctg>${call.header}</h4>
              <p class="call-description" data-astro-cid-ymcgoctg>${call.description}</p>
              ${renderComponent($$result, "CallButton", $$CallButton, { "call": call.call, "data-astro-cid-ymcgoctg": true })}` : renderTemplate`<h4 class="call-header" data-astro-cid-ymcgoctg>${call.header}</h4>
              ${renderComponent($$result, "CallButton", $$CallButton, { "call": call.call, "data-astro-cid-ymcgoctg": true })}`) : renderTemplate`<div data-astro-cid-ymcgoctg></div>`} </div> </div>`} </section> `;
}, "/Users/garrison/clc/src/components/Ministry.astro", void 0);

const $$Ministries = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Ministries" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="sub-body"> <h1>Ministries</h1> <div> ${data.ministries.map(
    (ministry, index) => renderTemplate`${renderComponent($$result2, "Ministry", $$Ministry, { "ministry": ministry, "imageOnRight": index % 2 == 0 })}`
  )} </div> </div> ` })} `;
}, "/Users/garrison/clc/src/pages/ministries.astro", void 0);

const $$file = "/Users/garrison/clc/src/pages/ministries.astro";
const $$url = "/ministries";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Ministries,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
