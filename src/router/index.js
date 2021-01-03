import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import About from '../views/About.vue'
import All from '../views/All.vue'
import Connect from '../views/Connect.vue'
import Server from '../views/Server.vue'
import Log from '../views/Log.vue'
import Reg from '../views/Reg.vue'
import Details from '../views/Details.vue'
Vue.use(VueRouter)

const routes = [
 
  {
    path:'/',
    component:Index
  },
  {
    path:'/about',
    component:About
  },
  {
    path:'/all',
    component:All
  },
  {
    path:'/connect',
    component:Connect
  },
  {
    path:'/server',
    component:Server
  },
  {
    path:'/log',
    component:Log
  },
  {
    path:'/reg',
    component:Reg
  },
  {
    path:'/details',
    component:Details
  }
]

const router = new VueRouter({
  routes
})

export default router
