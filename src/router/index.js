import Vue from 'vue'
import VueRouter from 'vue-router'

import Landing from '../views/Landing.vue'

import Home from '../views/Home.vue'

import Login from '../views/Login.vue'

import Users from '../views/Users.vue'
import UsersList from '../views/UsersList.vue'

import Houses from '../views/Houses.vue'

import News from '../views/News.vue'
import Announcements from '../views/Announcements.vue'

import Visits from '../views/Visits.vue'
import VisitList from '../views/VisitList.vue'

import Resident from '../views/Resident.vue'
import ResidentList from '../views/ResidentList.vue'

import Payments from '../views/Payments.vue'
import PaymentsList from '../views/PaymentsList.vue'

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
  {
    path: '/residents',
    name: 'resident',
    component: Resident
  },
  {
    path: '/residents/list',
    name: 'residentlist',
    component: ResidentList
  },
  {
    path: '/payments',
    name: 'payments',
    component: Payments
  },
  {
    path: '/payments/list',
    name: 'paymentslist',
    component: PaymentsList
  },
  {
    path: '/users',
    name: 'users',
    component: Users
  },
  {
    path: '/users/list',
    name: 'userlist',
    component: UsersList
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
