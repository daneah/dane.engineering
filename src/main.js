import Butter from 'buttercms'
import Vue from 'vue'
import VueAnalytics from 'vue-analytics'

import App from '@/App'
import router from '@/router'
import store from '@/store'
import '@/registerServiceWorker'

Vue.config.productionTip = false

Vue.use(VueAnalytics, {
  id: 'UA-129371342-1',
  router,
  debug: {
    enabled: process.env.NODE_ENV !== 'production',
    sendHitTask: process.env.NODE_ENV === 'production',
  },
})

const butterApiToken = 'cd7317f31d717fc87a1374098f53651830003bed'
const butter = Butter(butterApiToken)
Vue.prototype.$butter = butter
Vue.prototype.$butterApiToken = butterApiToken
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
