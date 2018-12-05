import Vue from 'vue'
import Router from 'vue-router'
//使用图片懒加载
const Detail = () => import('../pages/Detail/Detail.vue')
const Home = () => import('../pages/Home/Home.vue')
const List = () => import('../pages/List/List.vue')
const Personal = () => import('../pages/Personal/Personal.vue')
const ShopCart = () => import('../pages/ShopCart/ShopCart.vue')

import Interlayer from '../pages/Interlayer/Interlayer.vue'
import Login from '../pages/Login/Login.vue'
Vue.use(Router)

export default new Router({
  routes:[
    {
      path: '/login',
      component: Login,
      meta:{
        isInterlayer: false
      }
    },
    {
      path: '/interlayer',
      component: Interlayer,
      meta:{
        isInterlayer: false
      }
    },
    {
      path: '/detail',
      component: Detail,
      meta:{
        isInterlayer: true
      }
    },
    {
      path: '/home',
      component: Home,
      meta:{
        isInterlayer: true
      }
    },
    {
      path: '/list',
      component: List,
      meta:{
        isInterlayer: true
      }
    },
    {
      path: '/personal',
      component: Personal,
      meta:{
        isInterlayer: true
      }
    },
    {
      path: '/shopcart',
      component: ShopCart,
      meta:{
        isInterlayer: true
      }
    },
    {
      path: '/',
      redirect: '/home',
    },
  ]
})
