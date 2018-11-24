const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')

module.exports = {
  configureWebpack: () => {
    if (process.env.NODE_ENV !== 'production') return;
    return {
      plugins: [
        new PrerenderSPAPlugin({
          staticDir: path.resolve(__dirname, 'dist'),
          routes: [
            '/contact',
          ]
        }),
      ]
    }
  }
}
