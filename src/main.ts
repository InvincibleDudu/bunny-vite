import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router/router'
import i18n from './locales/locale'
import { createPinia } from 'pinia'
import persistedState from 'pinia-plugin-persistedstate'

const app = createApp(App)
const pinia = createPinia()

pinia.use(persistedState)

app.use(router)
app.use(i18n)
app.use(pinia)
app.use(ElementPlus, { zIndex: 3000 })
app.mount('#app')
