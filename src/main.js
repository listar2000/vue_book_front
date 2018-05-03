import Vue from 'vue'
import VueRouter from 'vue-router'
import mdui from 'mdui'
import App from './App'

Vue.use(VueRouter)

import Index from './pages/Index'

Vue.prototype.$mdui = mdui
Vue.prototype.$bus = new Vue()

const router = new VueRouter({
  mode: 'history',
  routes: [
    {path: '/', component: Index}
  ]
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})