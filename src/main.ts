import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router/router'
import i18n from './locales/locale'

const app = createApp(App)

app.use(router)
app.use(i18n)
app.use(ElementPlus, { zIndex: 3000 })
app.mount('#app')

