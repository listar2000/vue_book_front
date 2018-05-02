// import Vue from 'vue'
// import VueRouter from 'vue-router'
import App from './App.vue'

// Vue.use(VueRouter)

import homepage from './components/homepage'
import chat from './components/chat'

const routes = [
  {path: '/', component: homepage},
  {path: '/chat', component: chat}
];

const router = new VueRouter({
  mode: 'hash',
  routes: routes,
});

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
