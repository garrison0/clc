import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'es-module-lexer';
import { p as NOOP_MIDDLEWARE_HEADER, q as decodeKey } from './chunks/astro/server_CteLEx1_.mjs';
import 'clsx';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/garrison/clc/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.D-J6Cgqt.js"}],"styles":[{"type":"external","src":"/_astro/admin.DFNS8MfI.css"}],"routeData":{"type":"page","isIndex":false,"route":"/admin","pattern":"^\\/admin\\/?$","segments":[[{"content":"admin","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro-decap-cms-oauth/src/admin.astro","pathname":"/admin","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/oauth/callback","pattern":"^\\/oauth\\/callback$","segments":[[{"content":"oauth","dynamic":false,"spread":false}],[{"content":"callback","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro-decap-cms-oauth/src/oauth/callback.ts","pathname":"/oauth/callback","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/oauth","pattern":"^\\/oauth$","segments":[[{"content":"oauth","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro-decap-cms-oauth/src/oauth/index.ts","pathname":"/oauth","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BY-ORFJn.js"}],"styles":[{"type":"external","src":"/_astro/admin.DFNS8MfI.css"},{"type":"external","src":"/_astro/about.5hlXrGjd.css"}],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.jMxMonJi.js"}],"styles":[{"type":"external","src":"/_astro/admin.DFNS8MfI.css"},{"type":"external","src":"/_astro/about.5hlXrGjd.css"},{"type":"inline","content":".header[data-astro-cid-6d7a4eqr]{border-bottom:1px solid var(--color-background-border);font-size:20px}a[data-astro-cid-6d7a4eqr]{display:inline-flex;width:-moz-fit-content;width:fit-content;font-size:26px}.hash-link[data-astro-cid-6d7a4eqr]{opacity:0;padding-left:.5rem;transition:opacity .2s ease-in;-webkit-user-select:none;-moz-user-select:none;user-select:none}.hash-link[data-astro-cid-6d7a4eqr]:hover,a[data-astro-cid-6d7a4eqr]:hover .hash-link[data-astro-cid-6d7a4eqr]{opacity:1}\n.container[data-astro-cid-cfk2kmgm]{padding:1rem}.care-header[data-astro-cid-cfk2kmgm]{border-bottom:1px solid var(--color-text-border)}.image-container[data-astro-cid-cfk2kmgm]{margin:1.5rem;width:150px;overflow:hidden;position:relative}.image-container[data-astro-cid-cfk2kmgm] img[data-astro-cid-cfk2kmgm]{border-radius:100%}.card[data-astro-cid-cfk2kmgm]{color:var(--color-background);background:#fff;border-radius:5px;box-shadow:8px 8px 6px 1px #00000080}.card-big[data-astro-cid-cfk2kmgm]{grid-column:span 2}@media (max-width: 660px){.card[data-astro-cid-cfk2kmgm]{grid-column:span 3}}.description[data-astro-cid-cfk2kmgm]{align-self:center;font-size:16px}.description-container[data-astro-cid-cfk2kmgm]{display:flex;margin-top:.5rem}.staff-info[data-astro-cid-cfk2kmgm]{padding:1rem;padding-right:0;padding-left:0}.staff-contact-info[data-astro-cid-cfk2kmgm]{padding:.1rem .5rem;padding-left:0;padding-right:0}.contact-section[data-astro-cid-kh7btl4r]{padding-top:3rem;padding-bottom:1rem}.about-page-description[data-astro-cid-kh7btl4r]{padding-left:20px;padding-bottom:20px;max-width:400px}.pastoral-care-container[data-astro-cid-kh7btl4r]{display:grid;grid-template-columns:repeat(3,1fr);grid-row-gap:30px;grid-column-gap:30px;margin-top:2rem}\n"}],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BY-ORFJn.js"}],"styles":[{"type":"external","src":"/_astro/admin.DFNS8MfI.css"},{"type":"external","src":"/_astro/about.5hlXrGjd.css"},{"type":"inline","content":".calendar-container[data-astro-cid-sl2ubhge]{margin-top:1rem}.calendar-container[data-astro-cid-sl2ubhge] iframe[data-astro-cid-sl2ubhge]{border-radius:3px;box-shadow:8px 8px 4px #00000080}@media all and (min-width: 768px){.desk-content[data-astro-cid-sl2ubhge]{display:block}.phone-content[data-astro-cid-sl2ubhge]{display:none}}@media all and (max-width: 767px){.desk-content[data-astro-cid-sl2ubhge]{display:none}.phone-content[data-astro-cid-sl2ubhge]{display:block}}\n"}],"routeData":{"route":"/calendar","isIndex":false,"type":"page","pattern":"^\\/calendar\\/?$","segments":[[{"content":"calendar","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/calendar.astro","pathname":"/calendar","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.jMxMonJi.js"}],"styles":[{"type":"external","src":"/_astro/admin.DFNS8MfI.css"},{"type":"external","src":"/_astro/about.5hlXrGjd.css"},{"type":"inline","content":".header[data-astro-cid-6d7a4eqr]{border-bottom:1px solid var(--color-background-border);font-size:20px}a[data-astro-cid-6d7a4eqr]{display:inline-flex;width:-moz-fit-content;width:fit-content;font-size:26px}.hash-link[data-astro-cid-6d7a4eqr]{opacity:0;padding-left:.5rem;transition:opacity .2s ease-in;-webkit-user-select:none;-moz-user-select:none;user-select:none}.hash-link[data-astro-cid-6d7a4eqr]:hover,a[data-astro-cid-6d7a4eqr]:hover .hash-link[data-astro-cid-6d7a4eqr]{opacity:1}\n.container[data-astro-cid-hic2z3og]{display:flex}.image-container[data-astro-cid-hic2z3og]{margin:1.5rem;width:250px;overflow:hidden;position:relative}.image-container[data-astro-cid-hic2z3og] img[data-astro-cid-hic2z3og]{border-radius:100%}.card[data-astro-cid-hic2z3og]{color:var(--color-background);background:#fff;border-radius:5px;width:100%;margin-top:1.5rem;box-shadow:8px 8px 4px #00000080}.description[data-astro-cid-hic2z3og]{padding:0rem 3rem 2rem;font-size:16px}.staff-info[data-astro-cid-hic2z3og]{padding:1rem 1.5rem 1rem 1rem;padding-left:0;font-size:18px}.staff-contact-info[data-astro-cid-hic2z3og]{padding:.1rem .5rem;padding-left:0;padding-right:0}@media (max-width: 660px){.description[data-astro-cid-hic2z3og]{padding:0rem 1.5rem 1rem}.container[data-astro-cid-hic2z3og]{flex-direction:column;align-items:center}.staff-info[data-astro-cid-hic2z3og]{padding-left:1.5rem;padding-top:0}}.contact-info-card-image-container[data-astro-cid-uw5kdbxl]{padding-top:1rem;margin:auto}.staff-container[data-astro-cid-uw5kdbxl]{display:flex;flex-direction:column}\n"}],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.jMxMonJi.js"}],"styles":[{"type":"external","src":"/_astro/admin.DFNS8MfI.css"},{"type":"external","src":"/_astro/about.5hlXrGjd.css"},{"type":"inline","content":".header[data-astro-cid-6d7a4eqr]{border-bottom:1px solid var(--color-background-border);font-size:20px}a[data-astro-cid-6d7a4eqr]{display:inline-flex;width:-moz-fit-content;width:fit-content;font-size:26px}.hash-link[data-astro-cid-6d7a4eqr]{opacity:0;padding-left:.5rem;transition:opacity .2s ease-in;-webkit-user-select:none;-moz-user-select:none;user-select:none}.hash-link[data-astro-cid-6d7a4eqr]:hover,a[data-astro-cid-6d7a4eqr]:hover .hash-link[data-astro-cid-6d7a4eqr]{opacity:1}\nbutton[data-astro-cid-ngltxtwp]{background:#6ca55c;padding:.5rem 1rem;margin-top:1rem;font-size:20px;border-radius:5px;color:#fff;position:relative;transition:background .1s ease-in,position .2s ease-in}button[data-astro-cid-ngltxtwp]:hover{background:#496f3e;transform:translateY(-1px)}section[data-astro-cid-ymcgoctg]{padding-top:2rem;padding-bottom:2rem}.container[data-astro-cid-ymcgoctg]{display:flex;flex-direction:row}.ministry-container[data-astro-cid-ymcgoctg]{width:100%}.img-container[data-astro-cid-ymcgoctg]{max-width:45%;display:flex}.img-container[data-astro-cid-ymcgoctg].left{padding-right:4rem}.img-container[data-astro-cid-ymcgoctg].right{padding-left:4rem}@media (max-width: 660px){.ministry-container[data-astro-cid-ymcgoctg]{width:100%}.img-container[data-astro-cid-ymcgoctg]{width:100%;padding-top:2rem;order:2}.container[data-astro-cid-ymcgoctg]{flex-direction:column}.img-container[data-astro-cid-ymcgoctg].left{padding-right:0}.img-container[data-astro-cid-ymcgoctg].right{padding-left:0}.img-container[data-astro-cid-ymcgoctg]{max-width:100%}}.calls-to-action-container[data-astro-cid-ymcgoctg]{padding:0}.ministry-description[data-astro-cid-ymcgoctg]{padding-top:.25rem}.call-header[data-astro-cid-ymcgoctg]{margin-top:2rem;padding-bottom:.25rem;border-bottom:1px solid var(--color-background-border)}.ministry-img[data-astro-cid-ymcgoctg]{padding:0;align-self:center;box-shadow:5px 6px 4px #00000080;border-radius:14px}\n"}],"routeData":{"route":"/ministries","isIndex":false,"type":"page","pattern":"^\\/ministries\\/?$","segments":[[{"content":"ministries","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/ministries.astro","pathname":"/ministries","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.jMxMonJi.js"}],"styles":[{"type":"external","src":"/_astro/admin.DFNS8MfI.css"},{"type":"external","src":"/_astro/about.5hlXrGjd.css"},{"type":"external","src":"/_astro/index.CRZpvTyc.css"},{"type":"inline","content":".header[data-astro-cid-6d7a4eqr]{border-bottom:1px solid var(--color-background-border);font-size:20px}a[data-astro-cid-6d7a4eqr]{display:inline-flex;width:-moz-fit-content;width:fit-content;font-size:26px}.hash-link[data-astro-cid-6d7a4eqr]{opacity:0;padding-left:.5rem;transition:opacity .2s ease-in;-webkit-user-select:none;-moz-user-select:none;user-select:none}.hash-link[data-astro-cid-6d7a4eqr]:hover,a[data-astro-cid-6d7a4eqr]:hover .hash-link[data-astro-cid-6d7a4eqr]{opacity:1}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://melodic-brioche-682b75.netlify.app/","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/garrison/clc/node_modules/astro-decap-cms-oauth/src/admin.astro",{"propagation":"none","containsHead":true}],["/Users/garrison/clc/src/pages/404.astro",{"propagation":"none","containsHead":true}],["/Users/garrison/clc/src/pages/about.astro",{"propagation":"none","containsHead":true}],["/Users/garrison/clc/src/pages/calendar.astro",{"propagation":"none","containsHead":true}],["/Users/garrison/clc/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["/Users/garrison/clc/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/garrison/clc/src/pages/ministries.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:node_modules/astro-decap-cms-oauth/src/admin@_@astro":"pages/admin.astro.mjs","\u0000@astro-page:node_modules/astro-decap-cms-oauth/src/oauth/callback@_@ts":"pages/oauth/callback.astro.mjs","\u0000@astro-page:node_modules/astro-decap-cms-oauth/src/oauth/index@_@ts":"pages/oauth.astro.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/calendar@_@astro":"pages/calendar.astro.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/ministries@_@astro":"pages/ministries.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_BEL8bW6y.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.D-J6Cgqt.js","/astro/hoisted.js?q=2":"_astro/hoisted.jMxMonJi.js","/astro/hoisted.js?q=1":"_astro/hoisted.BY-ORFJn.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/clc.HmyEld1j.jpeg","/_astro/Jost-VariableFont_wght.BgZVHdM1.ttf","/_astro/logo.8o8YLJ3a.png","/_astro/arrow-upward.BW8vTDjY.svg","/_astro/admin.DFNS8MfI.css","/_astro/about.5hlXrGjd.css","/_astro/index.CRZpvTyc.css","/clc-wowboy.jpeg","/wow.jpeg","/wowboy.jpeg","/_astro/hoisted.BY-ORFJn.js","/_astro/hoisted.D-J6Cgqt.js","/_astro/hoisted.jMxMonJi.js","/admin/config.yml","/fonts/anybody-v11-latin-regular.woff2","/fonts/inter-v13-latin-regular.woff2","/uploads/clc-claudio.jpg","/uploads/clc-inside.png","/uploads/clc-john-moran.jpg","/uploads/clc-marlene.jpg","/uploads/clc-pastor-alex.jpg","/uploads/clc-shaun.jpg","/uploads/daab64d4-6854-47fe-b53e-255ae45d97c1.jpeg","/uploads/daniel-icon.webp","/uploads/img_1228.jpeg","/uploads/img_9845.jpeg","/uploads/img_9846.jpeg","/uploads/img_9847.jpeg","/uploads/img_9848.jpeg","/uploads/img_9849.jpeg","/uploads/img_9850.jpeg","/uploads/img_9852.jpeg","/uploads/img_9857.jpeg","/uploads/img_9858.jpeg","/uploads/img_9861.jpeg","/uploads/img_9862.jpeg","/uploads/img_9863.jpeg"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"hmHX77uiU9tyE/xZ7egTz/PwRbPErm7Li4amrYL4N3Q=","experimentalEnvGetSecretEnabled":false});

export { manifest };
