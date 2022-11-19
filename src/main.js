import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import components from './components'

import axios from 'axios'
import VueAxios from 'vue-axios'

import './styles/index.sass'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(VueAxios, axios)
app.provide('axios', app.config.globalProperties.axios)

app.use(components)

app.mount('#app')
