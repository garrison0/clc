import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_BEL8bW6y.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/admin.astro.mjs');
const _page2 = () => import('./pages/oauth/callback.astro.mjs');
const _page3 = () => import('./pages/oauth.astro.mjs');
const _page4 = () => import('./pages/404.astro.mjs');
const _page5 = () => import('./pages/about.astro.mjs');
const _page6 = () => import('./pages/calendar.astro.mjs');
const _page7 = () => import('./pages/contact.astro.mjs');
const _page8 = () => import('./pages/ministries.astro.mjs');
const _page9 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["node_modules/astro-decap-cms-oauth/src/admin.astro", _page1],
    ["node_modules/astro-decap-cms-oauth/src/oauth/callback.ts", _page2],
    ["node_modules/astro-decap-cms-oauth/src/oauth/index.ts", _page3],
    ["src/pages/404.astro", _page4],
    ["src/pages/about.astro", _page5],
    ["src/pages/calendar.astro", _page6],
    ["src/pages/contact.astro", _page7],
    ["src/pages/ministries.astro", _page8],
    ["src/pages/index.astro", _page9]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = undefined;
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
