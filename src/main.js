import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import axios from 'axios'

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

Vue.config.productionTip = false
Vue.prototype.$axios = axios
axios.defaults.baseURL = '/api/api'
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
