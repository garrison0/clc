export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('./pages/404_D-7hq-yL.mjs').then(n => n._);

export { page };
