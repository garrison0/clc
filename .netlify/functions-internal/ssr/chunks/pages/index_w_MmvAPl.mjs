/* empty css                          */
import { e as createAstro, f as createComponent, l as defineStyleVars, r as renderTemplate, m as maybeRenderHead, h as addAttribute, i as renderComponent } from '../astro_LQt5omyL.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$Layout } from './404_TmQCNDHq.mjs';
/* empty css                          */
import moment from 'moment';
import _ from 'lodash';

const $$Astro$1 = createAstro("https://melodic-brioche-682b75.netlify.app/");
const $$ExternalLink = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ExternalLink;
  const { href, fontSize, name } = Astro2.props;
  const $$definedVars = defineStyleVars([{ fontSize }]);
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} class="external-link underline" target="_blank" rel="noopener noreferrer" data-astro-cid-pt6zg3gv${addAttribute($$definedVars, "style")}>${name} <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-astro-cid-pt6zg3gv${addAttribute($$definedVars, "style")}> <g clip-path="url(#clip0_6_12319)" data-astro-cid-pt6zg3gv${addAttribute($$definedVars, "style")}> <path d="M19 19H5V5H12V3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V12H19V19ZM14 3V5H17.59L7.76 14.83L9.17 16.24L19 6.41V10H21V3H14Z" data-astro-cid-pt6zg3gv${addAttribute($$definedVars, "style")}></path> </g> </svg> </a> `;
}, "/Users/garrison/clc/src/components/utils/ExternalLink.astro", void 0);

var data = { serviceTimes:[ { day:"Sunday",
      start:"10:00am",
      title:"Bible Study" },
    { day:"Sunday",
      start:"11:00am",
      title:"Divine Service with Holy Communion" },
    { day:"Sunday",
      start:"5:00pm",
      title:"United Bengali Lutheran Church Worship Service in Bangla" } ],
  announcements:[ { datetime:new Date(1705175749028),
      title:"Guest lecturer visiting Woodside!",
      description:"Next Tuesday, she'll be coming around the mountain (when she comes)." } ] };

const $$Astro = createAstro("https://melodic-brioche-682b75.netlify.app/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const servicesByDay = _.groupBy(data.serviceTimes, ({ day }) => day);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Astronaut - Astro starter template", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="sr-only" id="start" data-astro-cid-j7pv25f6></div> <div class="wrapper" data-astro-cid-j7pv25f6> <main id="main" data-astro-cid-j7pv25f6> <!-- CLC intro section component --> <div class="overlay z-10" data-astro-cid-j7pv25f6></div> <section id="introduction" aria-label="Christ Church introduction" data-astro-cid-j7pv25f6></section> <section aria-label="Livestream service" data-astro-cid-j7pv25f6> <div class="z-40" data-astro-cid-j7pv25f6> <h1 data-astro-cid-j7pv25f6>Christ Church Woodside</h1> <p data-astro-cid-j7pv25f6>
Celebrating God's Gospel to the world throughout the world's borough.
</p> <p data-astro-cid-j7pv25f6>
A congregation of the ${renderComponent($$result2, "ExternalLink", $$ExternalLink, { "href": "https://www.lcms.org/", "name": "Lutheran Church\u2014Missouri Synod.", "data-astro-cid-j7pv25f6": true })} </p> </div> <h3 class="livestream-header" data-astro-cid-j7pv25f6>Livestream service</h3> <iframe width="560" height="315" class="livestream" src="https://www.youtube.com/embed/FNal5F0UDVc?si=l8nHH24OA2qY-OyN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen data-astro-cid-j7pv25f6>
        </iframe> </section> <section aria-label="Service time" data-astro-cid-j7pv25f6> <h3 data-astro-cid-j7pv25f6>Join us</h3> <div data-astro-cid-j7pv25f6> ${Object.keys(servicesByDay).map(
    (day) => renderTemplate`<div data-astro-cid-j7pv25f6> <h4 data-astro-cid-j7pv25f6>${day}</h4> ${servicesByDay[day].map((service) => renderTemplate`<div data-astro-cid-j7pv25f6>${service.start} - ${service.title}</div>`)} </div>`
  )} </div> </section> <section aria-label="Announcements" data-astro-cid-j7pv25f6> <h3 data-astro-cid-j7pv25f6>Announcements</h3> <ul class="announcements-list" data-astro-cid-j7pv25f6> ${data.announcements.map((announcement) => renderTemplate`<li class="announcement" data-astro-cid-j7pv25f6> <small data-astro-cid-j7pv25f6> <bold data-astro-cid-j7pv25f6>${moment(announcement.datetime).format("LL")}</bold> </small> <h3 class="announcement-title" data-astro-cid-j7pv25f6> ${announcement.title} </h3> <small data-astro-cid-j7pv25f6> ${announcement.description} </small> </li>`)} </ul> </section> </main> </div> ` })} `;
}, "/Users/garrison/clc/src/pages/index.astro", void 0);

const $$file = "/Users/garrison/clc/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
