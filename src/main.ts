import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 1. Bootstrap e Ícones
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'

// 2. O seu Reset CSS Global (caminho correto)
import './shared/main.css'

const app = createApp(App)

app.use(router)
app.mount('#app')