/* eslint-disable import/order */
import '@/@iconify/icons-bundle'
import App from '@/App.vue'
import layoutsPlugin from '@/plugins/layouts'
import lodash from '@/plugins/lodash'
import vuetify from '@/plugins/vuetify'
import { loadFonts } from '@/plugins/webfontloader'
import router from '@/router'
import '@/styles/styles.scss'
import provideGlobal from '@/typescript/global/private/propertyGlobal.private'
import windowDefineProperty from '@/typescript/global/public/propertyGlobal.public'
import '@core/scss/template/index.scss'
import { createPinia } from 'pinia'
import { createApp } from 'vue'

loadFonts()

// Create vue app
const app = createApp(App)

app.provide('$msg', 'hello')

// Use plugins
app.use(vuetify)
app.use(createPinia())
app.use(router)
app.use(layoutsPlugin)
app.use(lodash)

windowDefineProperty(app)
provideGlobal(app)

// Mount vue app
app.mount('#app')
