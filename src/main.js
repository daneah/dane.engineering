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
    sendHitTask: process.env.NODE_ENV === 'production'
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
