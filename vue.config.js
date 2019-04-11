const Butter = require('buttercms')
const path = require('path')
const PrerenderSpaPlugin = require('prerender-spa-plugin')

let blogPostRoutes = [],
  productionPlugins = []

module.exports = {
  lintOnSave: false,
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      const butter = Butter('cd7317f31d717fc87a1374098f53651830003bed')
      butter.post.list({page: 1, pageSize: 100}).then((response) => {
        blogPostRoutes = response.data['data'].map((post) => `/post/${post.slug}`)
      }).catch((err) => {
        console.error(`Could not fetch posts from ButterCMS! ${err}`)
      }).finally(() => {
        const routes = [
          '/',
          '/talks',
          '/resume',
          '/contact',
          '/talks',
          '/posts',
          ...blogPostRoutes,
        ]

        productionPlugins = [
          new PrerenderSpaPlugin({
            renderAfterTime: 5000,
            staticDir: path.join(__dirname, 'dist'),
            routes: routes,
          }),
        ]

        config.plugins.push(...productionPlugins)
      })
    }
  },
}
