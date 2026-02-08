
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'C:/Program Files/Git/devSolutionTask/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/devSolutionTask"
  },
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/devSolutionTask/dashboard"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 875, hash: '137ca9cdf9ce78a6ba667cc7a27eba27034cd022f25b491f7ec0a23d397226af', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1164, hash: '7f70dda738dbb5aa96eaa8c27a7e9b774452bc78c59623ef363dece2ae184d0e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-7V4XQ77Q.css': {size: 101, hash: 'dEb6t6oMEwU', text: () => import('./assets-chunks/styles-7V4XQ77Q_css.mjs').then(m => m.default)}
  },
};
