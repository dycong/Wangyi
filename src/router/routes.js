/*
包含所有路由数组的模块
 */
const Home = () => import('../pages/Home/Home.vue')
const Sort = () => import('../pages/Sort/Sort.vue')
const SortList = () => import('../pages/Sort/SortList.vue')
const Shiwu = () => import('../pages/Shiwu/Shiwu.vue')
const Cart = () => import('../pages/Cart/Cart.vue')
const Personal = () => import('../pages/Personal/Personal.vue')
const Search = () => import('../pages/Search/Search.vue')

import Find from '../pages/Shiwu/Find/Find.vue'
import Zhenxuan from '../pages/Shiwu/Zhenxuan/Zhenxuan.vue'

import Phone from '../pages/Personal/Phone.vue'
import Email from '../pages/Personal/Email.vue'
import Register from '../pages/Personal/Register.vue'


export default [
  {
    path: '/home',
    component: Home,
    meta: {
      showFooter: true
    }
  },
  {
    path: '/sort',
    component: Sort,
    redirect: '/sort/sortList',
    meta: {
      showFooter: true
    },
    children:[
      {
        path: '/sort/sortList',
        component: SortList,
        meta: {
          showFooter: true
        },
      }
    ]
  },
  {
    path: '/shiwu',
    component: Shiwu,
    redirect: '/shiwu/find',
    meta: {
      showFooter: true
    },
    children:[
      {
        path: '/shiwu/find',
        component: Find,
        meta: {
          showFooter: true
        },
      },
      {
        path: '/shiwu/zhenxuan',
        component: Zhenxuan
      },
      {
        path: '/shiwu/find',
        redirect: '/shiwu/find',
        meta: {
          showFooter: true
        },
      },
    ]
  },
  {
    path: '/cart',
    component: Cart,
    meta: {
      showFooter: true
    }
  },
  {
    path: '/personal',
    component: Personal,
    children: [
      {
        path:'/personal/phone',
        component:Phone
      },
      {
        path:'/personal/email',
        component:Email
      },
      {
        path:'/personal/register',
        component:Register
      }
    ]
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '/',
    redirect: '/home'
  }
]
