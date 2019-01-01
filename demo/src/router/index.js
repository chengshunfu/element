import Vue from 'vue'
import Router from 'vue-router'
import Home from '.././components/home/Home.vue';
import List from '.././components/home/List.vue';
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
    	path: '/list',
    	component: List
    }
  ]
})
