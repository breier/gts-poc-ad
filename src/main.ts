import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Emitter from 'tiny-emitter'

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.config.globalProperties.$msalInstance = {}
app.config.globalProperties.$emitter = new Emitter()

app.use(createPinia())
app.use(router)

app.mount('#app')
