import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/index'
import Dashboard from '@/components/Dashboard'
import Containers from '@/components/Containers'
import NotFound from '@/components/NotFound'
import NewContainer from '@/components/Containers/New'
import Setting from '@/components/Setting'
import Login from '@/components/Login'

Vue.use(Router)

var router = new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/containers/',
      name: 'containers',
      component: Containers
    },
    {
      path: '/containers/new',
      name: 'newContainer',
      component: NewContainer
    },
    {
      path: '/setting',
      name: 'setting',
      component: Setting
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '*',
      component: NotFound
    }
  ]
})

router.beforeEach((to, from, next) => {
  store.commit('clearError')
  next()
})

export default router
