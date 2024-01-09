import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import './chunks/astro_m4_q3X-E.mjs';
import 'clsx';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
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
    })
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
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","route":"/oauth/callback","pattern":"^\\/oauth\\/callback$","segments":[[{"content":"oauth","dynamic":false,"spread":false}],[{"content":"callback","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro-decap-cms-oauth/src/oauth/callback.ts","pathname":"/oauth/callback","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.NMl_MOj_.js"}],"styles":[],"routeData":{"type":"page","route":"/admin","pattern":"^\\/admin\\/?$","segments":[[{"content":"admin","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro-decap-cms-oauth/src/admin.astro","pathname":"/admin","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","route":"/oauth","pattern":"^\\/oauth$","segments":[[{"content":"oauth","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro-decap-cms-oauth/src/oauth/index.ts","pathname":"/oauth","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"const o=document.getElementById(\"back-to-top\"),t=()=>{o.style.display=window.scrollY>0?\"block\":\"none\"};window.addEventListener(\"scroll\",t);\n"}],"styles":[{"type":"external","src":"/_astro/index._zIlW0P8.css"},{"type":"inline","content":"a[data-astro-cid-cqqqsvbn]{align-items:center;background:var(--color-purple-light);border-radius:var(--border-radius);color:var(--color-black);display:flex;height:1px;left:-9999px;padding:var(--space-xs);position:absolute;overflow:hidden;top:auto;width:1px}a[data-astro-cid-cqqqsvbn]:focus,a[data-astro-cid-cqqqsvbn]:focus-visible{height:auto;left:8px;position:fixed;text-decoration:none;top:8px;width:auto}img[data-astro-cid-cqqqsvbn]{margin-left:var(--space-xs);transform:rotate(180deg);filter:invert(1)}a[data-astro-cid-pt6zg3gv]{align-items:center;color:var(--color-link);display:inline-flex;font-size:var(--fontSize);gap:var(--space-3xs);width:fit-content}path[data-astro-cid-pt6zg3gv]{fill:var(--color-link)}a[data-astro-cid-hhu5dpqk]{background:var(--color-green);border-radius:var(--border-radius);bottom:var(--space-xs);position:fixed;right:var(--space-xs)}@media (prefers-color-scheme: light){img[data-astro-cid-hhu5dpqk]{filter:invert(1)}}.wrapper[data-astro-cid-j7pv25f6]{margin:0 auto;max-width:868px;padding:0 var(--space-s)}img[data-astro-cid-j7pv25f6]{height:auto;margin:var(--space-l) 0}section[data-astro-cid-j7pv25f6]:not(#introduction){background-color:var(--color-background);z-index:100;position:relative;padding:2rem 2.75rem}section[data-astro-cid-j7pv25f6]:not(#introduction):not(:last-child){padding-bottom:0}.button-wrapper[data-astro-cid-j7pv25f6]{margin:var(--space-xl) 0}.overlay[data-astro-cid-j7pv25f6]{position:absolute;inset:0;background-color:#211b1796;z-index:99}#main[data-astro-cid-j7pv25f6]{position:relative}#introduction[data-astro-cid-j7pv25f6]{display:flex;flex-wrap:wrap;flex-direction:row;align-content:center;justify-content:flex-start;align-items:center;background-image:url(/_astro/clc.B5shJXdY.jpeg);background-repeat:no-repeat,repeat;background-size:cover;margin:0;min-height:35rem}.overlay-text[data-astro-cid-j7pv25f6]{padding:0 25px;z-index:100}#template-button[data-astro-cid-j7pv25f6]{align-items:center;background:var(--color-green);border-radius:var(--border-radius);box-shadow:0 0 30px 0 var(--color-green);color:var(--color-white);display:flex;flex-wrap:wrap;font-size:var(--step-2);gap:var(--space-xs);margin:0 auto;padding:var(--space-2xs) var(--space-xs);text-decoration:none;width:fit-content}#template-button[data-astro-cid-j7pv25f6]:focus,#template-button[data-astro-cid-j7pv25f6]:hover{box-shadow:none}#template-button[data-astro-cid-j7pv25f6] img[data-astro-cid-j7pv25f6]{margin:0}#template-text[data-astro-cid-j7pv25f6]{font-size:var(--step-0);margin:var(--space-2xs) auto 0 auto;width:fit-content}#template-text[data-astro-cid-j7pv25f6] a[data-astro-cid-j7pv25f6]{font-size:var(--step-0)}#template-text[data-astro-cid-j7pv25f6] a[data-astro-cid-j7pv25f6]:after{content:\" ↪\"}h2[data-astro-cid-j7pv25f6]{margin-bottom:var(--space-xs)}h1[data-astro-cid-j7pv25f6]{margin-top:0}p[data-astro-cid-j7pv25f6]{margin:0}p[data-astro-cid-j7pv25f6]+p[data-astro-cid-j7pv25f6]{margin-top:var(--space-s)}pre[data-astro-cid-j7pv25f6]{background:var(--color-grey-dark);border:1px solid var(--color-grey-light);border-radius:var(--border-radius);font-size:var(--step-0);color:var(--color-yellow);overflow:auto;padding:var(--space-s);white-space:nowrap}code[data-astro-cid-j7pv25f6]{word-break:break-all}.code-block[data-astro-cid-j7pv25f6]{color:var(--color-yellow)!important}li[data-astro-cid-j7pv25f6]{margin:0}.smol[data-astro-cid-j7pv25f6]{font-size:var(--step-0)}footer[data-astro-cid-j7pv25f6]{border-top:1px solid var(--color-grey-dark);text-align:center;margin-top:var(--space-3xl);padding:var(--space-l) 0}footer[data-astro-cid-j7pv25f6] p[data-astro-cid-j7pv25f6]{font-size:var(--step-0)}@media (prefers-contrast: more){#template-button[data-astro-cid-j7pv25f6]{background:#006400;box-shadow:0 0 30px #006400;color:#fff}}\n"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index._zIlW0P8.css"},{"type":"inline","content":"header[data-astro-cid-zetdm5md]{margin:0 auto;max-width:666px}a[data-astro-cid-zetdm5md]{color:var(--color-purple-light)}@media (prefers-color-scheme: light){a[data-astro-cid-zetdm5md]{color:var(--color-blue)}}\n"}],"routeData":{"route":"/404","type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://melodic-brioche-682b75.netlify.app/","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/garrison/clc/src/pages/404.astro",{"propagation":"none","containsHead":true}],["/Users/garrison/clc/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/garrison/clc/node_modules/astro-decap-cms-oauth/src/admin.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,s)=>{let n=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),n();break}});for(let e of s.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/node_modules/astro-decap-cms-oauth/src/admin.astro":"chunks/pages/admin_1eMf9gSH.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_9JMb-VO9.mjs","/src/pages/index.astro":"chunks/pages/index_V7wSObug.mjs","/node_modules/astro-decap-cms-oauth/src/oauth/index.ts":"chunks/pages/index_3hSIN9L5.mjs","\u0000@astrojs-manifest":"manifest_B-AFJxSN.mjs","\u0000@astro-page:node_modules/astro-decap-cms-oauth/src/oauth/callback@_@ts":"chunks/callback_-vvbGjUG.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_XkG0kgAO.mjs","\u0000@astro-page:node_modules/astro-decap-cms-oauth/src/admin@_@astro":"chunks/admin_l93plHbg.mjs","\u0000@astro-page:node_modules/astro-decap-cms-oauth/src/oauth/index@_@ts":"chunks/index_1pklZLcK.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_MDOnSIQI.mjs","\u0000@astro-page:src/pages/404@_@astro":"chunks/404_SoUp9XfQ.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.NMl_MOj_.js","/astro/hoisted.js?q=1":"_astro/hoisted.vo8vU9HV.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/logo.tyu0ZjXj.png","/_astro/clc.B5shJXdY.jpeg","/_astro/arrow-upward.VvL0w42I.svg","/_astro/index._zIlW0P8.css","/favicon-astronaut.svg","/seo.png","/_astro/hoisted.NMl_MOj_.js","/admin/config.yml","/fonts/anybody-v11-latin-regular.woff2","/fonts/inter-v13-latin-regular.woff2"]});

export { manifest };
