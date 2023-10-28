import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import JL, {JLCore} from '@juicyllama/frontend-core'
import { Quasar } from 'quasar'
import { createPinia } from 'pinia'
import { createRouter, createWebHashHistory } from 'vue-router'

// import '@quasar/extras/bootstrap-icons/bootstrap-icons.css'
import '@quasar/extras/material-icons/material-icons.css'
// import '@quasar/extras/material-icons-outlined/material-icons-outlined.css'

// import '@quasar/extras/fontawesome-v6/fontawesome-v6.css'
import 'quasar/src/css/index.sass'
import {routes} from './router.js'

const app = createApp(App)
const pinia = createPinia()

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

  app.use(router)
app.use(pinia)
app.use(Quasar, {
    plugins: {}, // import Quasar plugins and add here
})
app.use(JLCore, {
    $pinia: pinia
})
app.use(JL)

app.mount('#app')
