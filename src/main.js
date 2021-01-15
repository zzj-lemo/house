import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'

require('./mock/mock')

createApp(App).use(store).use(router).use(VueAwesomeSwiper).mount('#app')
