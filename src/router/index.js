import VueRouter from 'vue-router'
import Vue from 'vue'

import Home from '../view/Home/Home.vue'
import Meet from '../view/Meet/Meet.vue'
import Classify from '../view/Classify/Classify.vue'
import ShopCar from '../view/ShopCar/ShopCar.vue'
import Person from '../view/Person/Person.vue'
import MainHome from '../view/Home/recommend/MainHome.vue'
import MinorHome from '../view/Home/MinorHome/MinorHome.vue'
import ClassifyDetail  from '../view/Classify/ClassifyDetail/ClassifyDetail.vue'


Vue.use(VueRouter)

export default new VueRouter({
  routes:[
    {
      path:'/home',
      component:Home,
      meta:{
        showFooter:true,
        footer:'/home'
      },
      children:[
        {
          path:'1005111',
          component:MainHome,
          meta:{
            showFooter:true,
            footer:'/home'
          }
        },
        {
          path:':id',
          component:MinorHome,
          meta:{
            showFooter:true,
            footer:'/home'
          }
        },
        {
          path:'',
          redirect:'1005111',
          meta:{
            showFooter:true,
            footer:'/home'
          }
        }
      ]
    },
    {
      path:'/meet',
      component:Meet,
      meta:{
        showFooter:true,
        footer:'/meet'
      }
    },
    {
      path:'/classify',
      component:Classify,
      meta:{
        showFooter:true,
        footer:'/classify'
      },
      children:[
        {
          path:'/classify/:id',
          component:ClassifyDetail,
          meta:{
            showFooter:true,
            footer:'/classify'
          },
        },
        {
          path:'/classify',
          redirect:'/classify/1',
          meta:{
            showFooter:true,
            footer:'/classify'
          },
        }
      ]
    },
    {
      path:'/shopcar',
      component:ShopCar,
      meta:{
        showFooter:true,
        footer:'/shopcar'
      }
    },
    {
      path:'/person',
      component:Person
    },
    {
      path:'/',
      redirect:'/home'
    }
  ]
})
