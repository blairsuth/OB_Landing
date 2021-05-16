
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/blair/Desktop/github test/location/OB_Landing/.cache/dev-404-page.js")),
  "component---src-pages-404-jsx": preferDefault(require("/Users/blair/Desktop/github test/location/OB_Landing/src/pages/404.jsx")),
  "component---src-pages-index-jsx": preferDefault(require("/Users/blair/Desktop/github test/location/OB_Landing/src/pages/index.jsx")),
  "component---src-pages-legal-privacy-jsx": preferDefault(require("/Users/blair/Desktop/github test/location/OB_Landing/src/pages/legal/privacy.jsx")),
  "component---src-pages-legal-terms-jsx": preferDefault(require("/Users/blair/Desktop/github test/location/OB_Landing/src/pages/legal/terms.jsx"))
}

