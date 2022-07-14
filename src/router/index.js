import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/MyLogin.vue'
import Home from '@/components/MyHome.vue'
import MyUsers from '@/components/menus/MyUsers.vue'


Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {path:'/login',component:Login},
    {path:'/home',component:Home,
      children:[
      {path:'/home/users',component:MyUsers}
      ]
    },
    {path:'/',redirect:'/login'}
  ]
  
})  
router.beforeEach(function(to,from,next){
  if(to.path ==='/home'){
   const token =localStorage.getItem('token')
   if(token){
     next()
    }else{next('/login')}
   
  }else{next()}
})
export default router
