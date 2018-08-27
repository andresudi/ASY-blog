import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import CreateArticle from '@/components/Article/CreateArticle'
import Article from '@/components/Article/Article'
import Profile from '@/components/User/Profile'
import Signin from '@/components/User/Signin'
import Signup from '@/components/User/Signup'

Vue.use(Router)

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/article',
      name: 'Article',
      component: Article
    },
    {
      path: '/article/create',
      name: 'CreateArticle',
      component: CreateArticle
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile 
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    },
  ]
})
