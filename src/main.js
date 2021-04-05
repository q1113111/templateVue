import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './plugin/index.js'

Vue.config.productionTip = false
Vue.prototype.$log = (...args) => {
  if (process.NODE_ENV === 'develope') {
    console.log(args)
  }
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
