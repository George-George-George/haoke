import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '@/views/login.vue'
import index from '@/views/home/index.vue'
import find from '@/views/home/find.vue'
import message from '@/views/home/message.vue'
import home from '@/views/home/home'
import my from '@/views/home/my.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    component: login
  },
  {
    path: '/index',
    component: index,
    children: [
      { path: 'home', component: home },
      { path: 'find', component: find },
      { path: 'message', component: message },
      { path: 'my', component: my }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
