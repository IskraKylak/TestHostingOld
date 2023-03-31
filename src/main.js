import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'
import 'bulma/css/bulma.css'
import messagePlugin from './utils/message.plugin'

createApp(App).use(messagePlugin).use(store).use(router).mount('#app')
