import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import kits from '@/components/kits'
import apps from '@/components/Apps'

axios.defaults.baseURL = './api/'
Vue.prototype.$axios = axios

Vue.config.productionTip = false
Vue.use(kits)
Vue.use(apps)
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
