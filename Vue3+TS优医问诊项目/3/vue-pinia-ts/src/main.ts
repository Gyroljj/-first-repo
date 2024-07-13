import { createApp } from 'vue'

// pinia加到应用中(插件的安装)
import { createPinia } from 'pinia'

import './style.css'
import App from './App.vue'

const pinia = createPinia()

createApp(App).use(pinia).mount('#app')
