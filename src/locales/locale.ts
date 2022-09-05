import { createI18n } from 'vue-i18n'
import en from './en.json'
import zhCN from './zh-CN.json'

export default createI18n({
   locale: localStorage.getItem('locale') ?? 'en', // set locale
   fallbackLocale: 'en', // set fallback locale
   legacy: false,
   messages: { en, 'zh-CN': zhCN }, // set locale messages
   // If you need to specify other options, you can set other options
   // ...
})
