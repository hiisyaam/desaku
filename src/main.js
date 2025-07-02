import { createApp } from 'vue'
import router from './routes'
import './style.css'

import App from './App.vue'
import animateOnScroll from './directives/animateOnScroll'
import barFill from './directives/barFill'

const app = createApp(App)

app.use(router)
app.directive('animateOnScroll', animateOnScroll)
app.directive('barFill', barFill)
app.mount('#app')
