import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/index'
import Dashboard from '@/components/Dashboard'
import Containers from '@/components/Containers'
import NotFound from '@/components/NotFound'
import NewContainer from '@/components/Containers/New'
import Setting from '@/components/Setting'
import Login from '@/components/Login'
import Callback from '@/components/Callback'
import Auth from '@/components/Auth'

Vue.use(Router)

var router = new Router({
  base: '/web/',
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard,
      meta: { requiresAuth: true }
    },
    {
      path: '/containers/',
      name: 'containers',
      component: Containers,
      meta: { requiresAuth: true }
    },
    {
      path: '/containers/new',
      name: 'newContainer',
      component: NewContainer,
      meta: { requiresAuth: true }
    },
    {
      path: '/setting',
      name: 'setting',
      component: Setting,
      meta: { requiresAuth: true }
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/callback/:type',
      name: 'callback',
      component: Callback
    },
    {
      path: '*',
      component: NotFound
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    console.log(to)
    Auth.checkAccessToken()

    return
  }

  store.commit('clearError')
  next()
})

export default router
