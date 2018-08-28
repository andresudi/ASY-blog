import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

import CreateArticle from '@/components/Article/CreateArticle'
import MyArticle from '@/components/Article/MyArticle'
import EditArticle from '@/components/Article/EditArticle'
import FullArticle from '@/components/Article/FullArticle'

import Signin from '@/components/User/Signin'
import Signup from '@/components/User/Signup'

Vue.use(Router)

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/article/',
      name: 'Article',
      component: () => import('./views/Article.vue'),
      children: [
        {
          path: '/article/myarticle',
          name: 'MyArticle',
          component: MyArticle
        },
        {
          path: '/article/edit/:id',
          name: 'EditArticle',
          component: EditArticle
        },
      ]
    },
    {
      path: '/article/create',
      name: 'CreateArticle',
      component: CreateArticle
    },
    {
      path: '/article/edit/:id',
      name: 'EditArticle',
      component: EditArticle
    },
    {
      path: '/article/detail/:id',
      name: 'FullArticle',
      component: FullArticle
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
