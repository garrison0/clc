import * as adapter from '@astrojs/netlify/ssr-function.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_B-AFJxSN.mjs';

const _page0  = () => import('./chunks/callback_-vvbGjUG.mjs');
const _page1  = () => import('./chunks/generic_XkG0kgAO.mjs');
const _page2  = () => import('./chunks/admin_l93plHbg.mjs');
const _page3  = () => import('./chunks/index_1pklZLcK.mjs');
const _page4  = () => import('./chunks/index_MDOnSIQI.mjs');
const _page5  = () => import('./chunks/404_SoUp9XfQ.mjs');const pageMap = new Map([["node_modules/astro-decap-cms-oauth/src/oauth/callback.ts", _page0],["node_modules/astro/dist/assets/endpoint/generic.js", _page1],["node_modules/astro-decap-cms-oauth/src/admin.astro", _page2],["node_modules/astro-decap-cms-oauth/src/oauth/index.ts", _page3],["src/pages/index.astro", _page4],["src/pages/404.astro", _page5]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = undefined;

const _exports = adapter.createExports(_manifest, _args);
const _default = _exports['default'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { _default as default, pageMap };
