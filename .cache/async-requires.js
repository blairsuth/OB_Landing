// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("./../../dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-jsx": () => import("./../../../src/pages/404.jsx" /* webpackChunkName: "component---src-pages-404-jsx" */),
  "component---src-pages-index-jsx": () => import("./../../../src/pages/index.jsx" /* webpackChunkName: "component---src-pages-index-jsx" */),
  "component---src-pages-legal-privacy-jsx": () => import("./../../../src/pages/legal/privacy.jsx" /* webpackChunkName: "component---src-pages-legal-privacy-jsx" */),
  "component---src-pages-legal-terms-jsx": () => import("./../../../src/pages/legal/terms.jsx" /* webpackChunkName: "component---src-pages-legal-terms-jsx" */)
}

