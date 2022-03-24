import Counter from '@/views/counter/counter-app.vue'
import TodoApp from '@/views/todo/todo-app.vue'
import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: TodoApp
  },
  {
    path: '/counter',
    name: 'counter',
    component: Counter
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
