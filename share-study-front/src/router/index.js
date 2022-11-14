import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PrivateMessage  from '../views/PrivateMessageView.vue'
import QAView  from '../views/QAView.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/message',
    name: 'message',
    component: PrivateMessage
  },
    {
    path: '/QA',
    name: 'QA',
    component: QAView
  },
]

const router = new VueRouter({
  routes
})

export default router
