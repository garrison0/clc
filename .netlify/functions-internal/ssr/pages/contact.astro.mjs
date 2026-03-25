/* empty css                                 */
import { f as createAstro, c as createComponent, m as maybeRenderHead, g as addAttribute, e as renderComponent, d as renderTemplate } from '../chunks/astro/server_CteLEx1_.mjs';
import 'kleur/colors';
import { a as $$Icon, $ as $$Layout } from '../chunks/Layout_DmULwMn9.mjs';
import { $ as $$Header } from '../chunks/Header_CV8uSJHs.mjs';
/* empty css                                   */
export { renderers } from '../renderers.mjs';

var data = { address:"33-57 58th Street, Woodside, NY 11377",
  email:"clcny@aol.com",
  phone:"(718) 639-3945",
  fax:"(718) 205-1426",
  staffInformation:[ { description:"The Rev. Alex Marque was installed as the pastor of Christ Church Woodside on January 7th, 2023.  Pastor Alex is thrilled to be in Queens, NY proclaiming the good news of the Kingdom of God in Queens and serving the Body of Christ gathered around Word and Sacrament at Christ Church in Woodside! \n\nWhen Pastor Alex isn't leading worship, preaching, counseling, leading bible studies, visiting with the people of Christ Church, getting to know the community, or studying early church history and the church fathers, you will mostly like find him spending time with his wife, playing jazz bass, reading in coffee shops around Queens, taking long walks while listening to audio books, going on dates with his wife to museums and jazz clubs, as well as finding fun bookstores and comic shops...not to mention, finding the best food spots around Queens! \n\nPastor Alex is excited to get to know you and serve you with God's love in Jesus! ",
      email:"revalexchristwoodside@gmail.com",
      name:"Alex Marque",
      title:"Pastor",
      headshot:"/public/uploads/img_9852.jpeg" },
    { name:"Marlene Beckett",
      title:"Administrative Assistant",
      email:"clcny@aol.com",
      phone:"(718) 639-3945",
      description:"",
      headshot:"/uploads/clc-marlene.jpg" },
    { title:"Director of Music",
      name:"Shawn Beckett",
      email:"clcny@aol.com",
      headshot:"/uploads/clc-shaun.jpg" },
    { title:"Church Book Keeper",
      name:"Claudio Bassi",
      email:"clcny@aol.com",
      headshot:"/uploads/clc-claudio.jpg" },
    { title:"Congregational President",
      name:"John Moran",
      email:"clcny@aol.com",
      headshot:"/uploads/clc-john-moran.jpg" } ] };

const $$Astro = createAstro("https://melodic-brioche-682b75.netlify.app/");
const $$StaffInfoCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$StaffInfoCard;
  const { staffMember } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="card" data-astro-cid-hic2z3og> <div class="container" data-astro-cid-hic2z3og> <div class="image-container" data-astro-cid-hic2z3og> <img${addAttribute(staffMember.headshot ? staffMember.headshot.replace("public/", "") : "", "src")} data-astro-cid-hic2z3og> </div> <div class="staff-info" data-astro-cid-hic2z3og> <div class="font-semibold" data-astro-cid-hic2z3og>${staffMember.name}</div> <div data-astro-cid-hic2z3og>${staffMember.title}</div> ${staffMember.phone && renderTemplate`<div class="contact-info staff-contact-info" data-astro-cid-hic2z3og> ${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:phone", "class": "contact-info-icon", "data-astro-cid-hic2z3og": true })} ${staffMember.phone} </div>`} <div data-astro-cid-hic2z3og> ${staffMember.email && renderTemplate`<div class="contact-info staff-contact-info" data-astro-cid-hic2z3og> ${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:email", "class": "contact-info-icon", "data-astro-cid-hic2z3og": true })} ${staffMember.email} </div>`} </div> </div> </div> ${staffMember.description && renderTemplate`<p class="description" data-astro-cid-hic2z3og>${staffMember.description}</p>`} </div> <!-- define:vars={{ image: \`url("\${src}")\` }}  --> `;
}, "/Users/garrison/clc/src/components/StaffInfoCard.astro", void 0);

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contact", "data-astro-cid-uw5kdbxl": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="sub-body" data-astro-cid-uw5kdbxl> <h1 data-astro-cid-uw5kdbxl>Contact</h1> ${renderComponent($$result2, "Header", $$Header, { "text": "Contact the church office", "data-astro-cid-uw5kdbxl": true })} <div class="flex contact-info-container" data-astro-cid-uw5kdbxl> <div class="contact-info-info-container" data-astro-cid-uw5kdbxl> <div class="contact-info" data-astro-cid-uw5kdbxl> ${renderComponent($$result2, "Icon", $$Icon, { "name": "mdi:home", "class": "contact-info-icon", "data-astro-cid-uw5kdbxl": true })} ${data.address} </div> <div class="contact-info" data-astro-cid-uw5kdbxl> ${renderComponent($$result2, "Icon", $$Icon, { "name": "mdi:email", "class": "contact-info-icon", "data-astro-cid-uw5kdbxl": true })} ${data.email} </div> <div class="contact-info" data-astro-cid-uw5kdbxl> ${renderComponent($$result2, "Icon", $$Icon, { "name": "mdi:phone", "class": "contact-info-icon", "data-astro-cid-uw5kdbxl": true })} ${data.phone} </div> <div class="contact-info" data-astro-cid-uw5kdbxl> ${renderComponent($$result2, "Icon", $$Icon, { "name": "mdi:fax", "class": "contact-info-icon", "data-astro-cid-uw5kdbxl": true })} ${data.fax} (Fax)
</div> </div> </div> ${renderComponent($$result2, "Header", $$Header, { "text": "Meet our staff", "data-astro-cid-uw5kdbxl": true })} <div class="staff-container" data-astro-cid-uw5kdbxl> ${data.staffInformation.map(
    (member) => renderTemplate`${renderComponent($$result2, "StaffInfoCard", $$StaffInfoCard, { "staffMember": member, "data-astro-cid-uw5kdbxl": true })}`
  )} </div> </div> ` })} `;
}, "/Users/garrison/clc/src/pages/contact.astro", void 0);

const $$file = "/Users/garrison/clc/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
