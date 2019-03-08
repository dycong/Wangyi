/*
包含所有路由数组的模块
 */
const Home = () => import('../pages/Home/Home.vue')
const Sort = () => import('../pages/Sort/Sort.vue')
const Shiwu = () => import('../pages/Shiwu/Shiwu.vue')
const Cart = () => import('../pages/Cart/Cart.vue')
const Personal = () => import('../pages/Personal/Personal.vue')

// import Home from '../pages/Home/Home.vue'
// import Sort from '../pages/Sort/Sort.vue'
// import Shiwu from '../pages/Shiwu/Shiwu.vue'
// import Cart from '../pages/Cart/Cart.vue'
// import Personal from '../pages/Personal/Personal.vue'

import Find from '../pages/Shiwu/Find/Find.vue'
import Zhenxuan from '../pages/Shiwu/Zhenxuan/Zhenxuan.vue'

export default [
  {
    path: '/home',
    component: Home
  },
  {
    path: '/sort',
    component: Sort
  },
  {
    path: '/shiwu',
    component: Shiwu,
    children:[
      {
        path: '/shiwu/find',
        component: Find
      },
      {
        path: '/shiwu/zhenxuan',
        component: Zhenxuan
      },
      {
        path: '/shiwu/find',
        redirect: '/find'
      },
    ]
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/personal',
    component: Personal
  },
  {
    path: '/',
    redirect: '/home'
  }
]
