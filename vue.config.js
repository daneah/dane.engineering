const path = require('path')
const PrerenderSpaPlugin = require('prerender-spa-plugin')

module.exports = {
  lintOnSave: false,
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      const latestPosts = require('./latest-posts.json')
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
            ...latestPosts['data'].map((post) => `/post/${post.slug}`),
          ],
        }),
      ]
      config.plugins.push(...productionPlugins)
    }
  },
}
