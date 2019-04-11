const path = require('path')
const PrerenderSpaPlugin = require('prerender-spa-plugin')

const productionPlugins = [
  new PrerenderSpaPlugin({
    renderAfterTime: 5000,
    staticDir: path.join(__dirname, 'dist'),
    routes: [
        '/',
        '/talks',
        '/resume',
        '/contact',
        '/talks',
        '/posts',
        '/post/buttercms-in-vue',
        '/post/truly-taking-time-off-a-checklist',
        '/post/flexible-approach-python-api-client-development',
    ],
  }),
]

module.exports = {
  lintOnSave: false,
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      config.plugins.push(...productionPlugins)
    }
  },
}
