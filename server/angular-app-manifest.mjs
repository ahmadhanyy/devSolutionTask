
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/dashboard"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 839, hash: 'fab61aac1367d1572a9ed0433f6d189622d478b5be78a8a0f75b3af2c3033049', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1128, hash: 'df4ef010069ccd90b744cec2dcc6631921e8abf9ed23ef288fa015791ad29172', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 252, hash: '70fded1a23c1727b8dbdfae3b840cf7bca033e0a34323a24cbab74440942707a', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 18859, hash: '628c487b4e98f9bd3adbd641a7ba25a7ff80dc8d739bd8b20c25fe08ddc9b0da', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'styles-7V4XQ77Q.css': {size: 101, hash: 'dEb6t6oMEwU', text: () => import('./assets-chunks/styles-7V4XQ77Q_css.mjs').then(m => m.default)}
  },
};
