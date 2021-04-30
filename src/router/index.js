import Vue from 'vue'
import VueRouter from 'vue-router'
// import { component } from 'vue/types/umd'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/BuyingLeads', // 求购信息
    component: () => import('../views/BuyingLeads.vue')
  },
  {
    path: '/Exhibition', // 展会信息
    component: () => import('../views/Exhibition.vue')
  },
  {
    path: '/New', // 新闻信息
    component: () => import('../views/new.vue')
  },
  {
    path: '/Seller', // 卖家管理后台
    component: () => import('../views/Seller.vue'),
    children: [
      {
        path: '/', // 基本信息
        component: () => import('../views/Sellers/BasicLnformation.vue')
      },
      {
        path: '/Seller/productRelease', // 发布产品
        component: () => import('../views/Sellers/productRelease.vue')
      },
      {
        path: '/Seller/LnCharge', // 分类管理
        component: () => import('../views/Sellers/LnCharge.vue')
      },
      {
        path: '/Seller/productCategory', // 产品分类
        component: () => import('../views/Sellers/productCategory.vue')
      },
      {
        path: '/Seller/MyOffer',
        component: () => import('../views/Sellers/MyOffer.vue')
      }
    ]
  },
  {
    path: '/StoreConstruction',
    component: () => import('../views/StoreConstruction.vue')
  },
  {
    path: '/Decorationedit',
    component: () => import('../views/Decorationedit.vue')
  }
  // {
  //   path: '*', // 通配符  *
  //   redirect: '/Seller'
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
