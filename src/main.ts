import './assets/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createHead } from '@unhead/vue'
import VueGtag from 'vue-gtag'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(VueGtag, {
  config: {
    id: 'G-4MRJHT8BYG'
  }
})
app.use(createHead())
app.use(createPinia())
app.use(router)

app.mount('#app')
