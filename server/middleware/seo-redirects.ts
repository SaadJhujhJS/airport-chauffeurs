import { defineEventHandler, getRequestURL, sendRedirect } from 'h3';

const SKIP_PREFIXES = ['/api/', '/_nuxt/', '/__sitemap__/', '/_ipx/'];
const SKIP_EXTENSIONS =
  /\.(xml|txt|ico|png|jpg|jpeg|webp|avif|svg|gif|js|css|woff2?|map|json|webmanifest)$/i;

export default defineEventHandler(async event => {
  const url = getRequestURL(event);
  const { pathname, search } = url;

  if (SKIP_PREFIXES.some(p => pathname.startsWith(p))) return;
  if (SKIP_EXTENSIONS.test(pathname)) return;

  let target = pathname;

  if (target.length > 1 && target.endsWith('/')) {
    target = target.replace(/\/+$/, '');
  }

  if (/[A-Z]/.test(target)) {
    target = target.toLowerCase();
  }

  if (target !== pathname) {
    return sendRedirect(event, `${target}${search}`, 301);
  }
});
