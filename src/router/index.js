import Vue from 'vue'
import VueRouter from 'vue-router'
import Found from '../views/Found.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Found',
    component: Found
  },
  {
    path: '/video',
    name: 'Video',
    component: () => import('../views/Video.vue')
  }, {
    path: '/person',
    name: 'Person',
    component: () => import('../views/Person.vue')
  }, {
    path: '/tribe',
    name: 'Tribe',
    component: () => import('../views/Tribe.vue')
  }, {
    path: '/account',
    name: 'Account',
    component: () => import('../views/Account.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router