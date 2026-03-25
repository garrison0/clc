/* empty css                                 */
import { f as createAstro, c as createComponent, h as defineStyleVars, m as maybeRenderHead, g as addAttribute, d as renderTemplate, e as renderComponent } from '../chunks/astro/server_CteLEx1_.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_DmULwMn9.mjs';
/* empty css                                 */
import 'clsx';
import { $ as $$Header } from '../chunks/Header_CV8uSJHs.mjs';
import moment from 'moment';
import _ from 'lodash';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro("https://melodic-brioche-682b75.netlify.app/");
const $$ExternalLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ExternalLink;
  const { href, fontSize, name } = Astro2.props;
  const $$definedVars = defineStyleVars([{ fontSize }]);
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} class="external-link underline" target="_blank" rel="noopener noreferrer" data-astro-cid-pt6zg3gv${addAttribute($$definedVars, "style")}>${name} <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-astro-cid-pt6zg3gv${addAttribute($$definedVars, "style")}> <g clip-path="url(#clip0_6_12319)" data-astro-cid-pt6zg3gv${addAttribute($$definedVars, "style")}> <path d="M19 19H5V5H12V3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V12H19V19ZM14 3V5H17.59L7.76 14.83L9.17 16.24L19 6.41V10H21V3H14Z" data-astro-cid-pt6zg3gv${addAttribute($$definedVars, "style")}></path> </g> </svg> </a> `;
}, "/Users/garrison/clc/src/components/utils/ExternalLink.astro", void 0);

var data = { missionStatement:"Celebrating and sharing God's Gospel for the World Throughout the World's Borough!",
  homepagePhotoMobile:"/public/uploads/img_1228.jpeg",
  serviceTimes:[ { day:"Sunday",
      start:"10:00am",
      title:"Sunday School for Adults and Teens" },
    { day:"Sunday",
      start:"11:00am",
      title:"Divine Service with Holy Communion" },
    { title:"ESL",
      day:"Sunday",
      start:"2:00pm" },
    { title:"Spanish Service of Prayer and Preaching (2nd and 4th Sunday of the month starting in April)",
      day:"Sunday",
      start:"3:30pm - 4:15pm" },
    { day:"Sunday",
      start:"5:00pm",
      title:"United Bengali Lutheran Church Worship Service in Bangla" } ],
  announcements:[ { title:"Upcoming Holy Week Services",
      description:"Join us for Holy Week! Sunday March 29th at 11am kicks off our celebration of Holy Week with Palm/Passion Sunday.\n\nThursday April 2nd at 7:30pm: Maundy Thursday Divine Service.\nFriday April 3rd at 7:30pm: Good Friday Divine Service.\nSaturday April 4th at 8:00pm: Easter Vigil Divine Service.\nSunday April 5th at 11am: Easter Celebration of the Resurrection of our Lord! ",
      datetime:new Date(1773418920000) } ] };

const $$Astro = createAstro("https://melodic-brioche-682b75.netlify.app/");
const $$ImagePanels = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ImagePanels;
  const { src } = Astro2.props;
  const $$definedVars = defineStyleVars([{ image: `url("${src}")` }]);
  return renderTemplate`${maybeRenderHead()}<div class="container" data-astro-cid-7jfodt3d${addAttribute($$definedVars, "style")}> <div class="image-container" data-astro-cid-7jfodt3d${addAttribute($$definedVars, "style")}> <div class="img" data-astro-cid-7jfodt3d${addAttribute($$definedVars, "style")}> <span data-astro-cid-7jfodt3d${addAttribute($$definedVars, "style")}></span> <span data-astro-cid-7jfodt3d${addAttribute($$definedVars, "style")}></span> <span data-astro-cid-7jfodt3d${addAttribute($$definedVars, "style")}></span> <span data-astro-cid-7jfodt3d${addAttribute($$definedVars, "style")}></span> </div> </div> </div> `;
}, "/Users/garrison/clc/src/components/ImagePanels.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const servicesByDay = _.groupBy(data.serviceTimes, ({ day }) => day);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Christ Church - a congregation of the LCMS", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="sr-only" id="start" data-astro-cid-j7pv25f6></div> <div class="wrapper" data-astro-cid-j7pv25f6> <main id="main" data-astro-cid-j7pv25f6> <!-- CLC intro section component --> <section class="first-section" aria-label="Christ Church introduction" data-astro-cid-j7pv25f6> <div class="full-splash-container" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "ImagePanels", $$ImagePanels, { "src": "/wowboy.jpeg", "data-astro-cid-j7pv25f6": true })} </div> <div class="mobile-splash-container" data-astro-cid-j7pv25f6> <img class="standalone-splash-img"${addAttribute(data.homepagePhotoMobile.replace("public/", "") , "src")} data-astro-cid-j7pv25f6> </div> <div class="text-container" data-astro-cid-j7pv25f6> <div class="title-text tracking-wide text-lg font-semibold rounded-lg pt-4" data-astro-cid-j7pv25f6>
Christ Church
</div> <div class="pt-4 mission-statement" data-astro-cid-j7pv25f6> ${data.missionStatement} </div> <div class="pt-4 subtitle" data-astro-cid-j7pv25f6>
A congregation of the ${renderComponent($$result2, "ExternalLink", $$ExternalLink, { "name": "Lutheran Church--Missouri Synod", "href": "https://www.lcms.org/", "data-astro-cid-j7pv25f6": true })} </div> </div> </section> <!-- <section class="second-section" aria-label="Livestream service">
        <Header text="Livestream service" />
        <div class="video-player">
          <iframe
            src="https://www.youtube.com/embed/FNal5F0UDVc?si=l8nHH24OA2qY-OyN" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen>
        </iframe>
        </div> --> <section aria-label="Service time" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Header", $$Header, { "text": "Join us", "data-astro-cid-j7pv25f6": true })} <div class="service-times-container" data-astro-cid-j7pv25f6> ${Object.keys(servicesByDay).map(
    (day) => renderTemplate`<div class="service-day-container" data-astro-cid-j7pv25f6> <h4 data-astro-cid-j7pv25f6>${day}</h4> ${servicesByDay[day].map((service) => renderTemplate`<div class="service-time-container" data-astro-cid-j7pv25f6> <div class="service-time" data-astro-cid-j7pv25f6> ${service.start} </div> <div class="service-title" data-astro-cid-j7pv25f6> ${service.title} </div> </div>`)} </div>`
  )} </div> </section> <section aria-label="Announcements" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Header", $$Header, { "text": "Announcements", "data-astro-cid-j7pv25f6": true })} <ul class="announcements-list" data-astro-cid-j7pv25f6> ${data.announcements.map((announcement) => renderTemplate`<li class="announcement" data-astro-cid-j7pv25f6> <small data-astro-cid-j7pv25f6> <div data-astro-cid-j7pv25f6>${moment(announcement.datetime).format("LL")}</div> </small> <h3 class="announcement-title" data-astro-cid-j7pv25f6> ${announcement.title} </h3> <div class="announcement-description" data-astro-cid-j7pv25f6> ${announcement.description} </div> </li>`)} </ul> </section> </main> </div> ` })} `;
}, "/Users/garrison/clc/src/pages/index.astro", void 0);

const $$file = "/Users/garrison/clc/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
