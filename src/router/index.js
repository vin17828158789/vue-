import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    redirect:'/index',
    children:[
      {
        path:'/index',
        name:'Index',
        component: () => import('../views/Index.vue')
      },
      {
        path:'/track',
        name:'Track',
        component: () => import('../views/Track.vue')
      },{
        path:'/user',
        name:'User',
        component: () => import('../views/User.vue')
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
