import { createApp } from 'vue'
import App from './App.vue'
import Footer from './Footer.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)
const footer = createApp(Footer)

app.use(router)

app.mount('#app')
footer.mount('#footer')
