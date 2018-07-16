import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'

Vue.use(Router)
//ok so here is what is going on, Vue is 
//a npm package that works just like angular 
//a little bit, but the components are a lot different
//there is either a way to create a new component
//like there was in angular or there is a file
//where you can just write in new components
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
