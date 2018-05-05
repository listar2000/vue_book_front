import Vue from 'vue'
import VueRouter from 'vue-router'
import mdui from 'mdui'
import App from './App'

Vue.use(VueRouter)

import Index from './pages/Index'
import Loading from './components/Loading'
import MsgDialog from './components/MsgDialog'
import TestPage from './pages/TestPage'
import ErrorPage from './pages/ErrorPage'
import AboutUsPage from './pages/AboutUsPage'
import BookListPage from './pages/BookListPage'

Vue.prototype.$mdui = mdui
Vue.prototype.$bus = new Vue()

const vue_router = new VueRouter({
  mode: 'history',
  routes: [
    {path: '/', component: Index},
    {path: '/loading', component: Loading},
    {path: '/dialog', component: MsgDialog},
    {path: '/test', component: TestPage},
    {path: '/error', component: ErrorPage},
    {path: '/about', component: AboutUsPage},
    {path: '/card', component: BookListPage},
  ]
})

new Vue({
  el: '#app',
  router: vue_router,
  render: h => h(App)
})