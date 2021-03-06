import { authGuard } from '@bcwdev/auth0provider-client'
import { createRouter, createWebHashHistory } from 'vue-router'

function loadPage(page) {
  return () => import(`./pages/${page}.vue`)
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: loadPage('HomePage')
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: loadPage('AboutPage')
  // },
  {
    path: '/account',
    name: 'Account',
    component: loadPage('AccountPage'),
    beforeEnter: authGuard
  },
  {
    path: '/boards',
    name: 'BoardsPage',
    component: loadPage('BoardsPage'),
    beforeEnter: authGuard
  },
  {
    path: '/boards/:id',
    name: 'BoardDetailsPage',
    component: loadPage('BoardDetailsPage'),
    beforeEnter: authGuard
  }
]

const router = createRouter({
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  history: createWebHashHistory(),
  routes
})

export default router
