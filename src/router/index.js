import Vue from 'vue'
import VueRouter from 'vue-router'
import Landing from '../views/Landing.vue'
import Login from '../views/Login.vue'
import News from '../views/News.vue'
import Home from '../views/Home.vue'
import Houses from '../views/Houses.vue'
import Announcements from '../views/Announcements.vue'
import Visits from '../views/Visits.vue'
import VisitList from '../views/VisitList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'landing',
    component: Landing
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/news',
    name: 'news',
    component: News
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/houses',
    name: 'houses',
    component: Houses
  },
  {
    path: '/announcements',
    name: 'announcements',
    component: Announcements
  },
  {
    path: '/visits',
    name: 'visits',
    component: Visits
  },
  {
    path: '/visits/list',
    name: 'visitlist',
    component: VisitList
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
