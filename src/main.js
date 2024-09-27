import { createApp } from 'vue'
import routerFactory from '@/routers/index.js'
import App from './App.vue'
import '@/assets/styles/main.scss'


const app = createApp(App)


app.use(routerFactory())

app.mount('#app')
