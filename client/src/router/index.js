import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Register from '@/components/Register'
import MenuAdmin from '@/components/MenuAdmin'
import Login from '@/components/Login'
import Blog from '@/components/Blog'
import Maincontent from '@/components/Maincontent'
import Article from '@/components/Article'
import Utama from '@/components/Utama'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {
          path: '',
          component: Utama
        },
        {
          path: '/register',
          component: Register
        },
        {
          path: '/login',
          component: Login
        },
        {
          path: '/admin',
          component: MenuAdmin
        },
        {
          path: '/blog',
          component: Blog,
          children: [
            {
              path: '',
              component: Maincontent
            },
            {
              path: ':id',
              name: 'articleSumery',
              component: Article,
              props: true
            }
          ]
        }
      ]
    }
  ]
})
