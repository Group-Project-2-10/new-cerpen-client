import Vue from 'vue'
import VueRouter from 'vue-router'
import register from '../views/register.vue'
Vue.use(VueRouter)

const routes = [{
  path: '/register',
  name: 'register',
  component: register
}]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
