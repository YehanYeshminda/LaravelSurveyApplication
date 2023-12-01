import { createApp } from 'vue'
import './style.css'
import './index.css'
import App from './App.vue'
import store from './Store'
import router from './Router'

createApp(App)
    .use(store)
    .use(router)
    .mount('#app')