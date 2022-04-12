import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '~/views/Home.vue'
import Users from '~/views/Users.vue'

export enum Routes {
  Home = 'Home',
  Users = 'Users'
}

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: Routes.Home,
    component: Home
  },
  {
    path: '/users',
    name: Routes.Users,
    component: Users
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
