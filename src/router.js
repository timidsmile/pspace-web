import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Register from './views/Register.vue'
import Login from './views/Login.vue'
import UserDetail from './views/UserDetail.vue'
import UserSetting from './views/UserSetting.vue'
import Album from './views/album.vue'
import Circle from './views/Circle.vue'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/page/',
      name: 'home',
      component: Home
    },
    {
      path: '/page/about',
      name: 'about',
      component: About
    },
    {
      path: '/page/register',
      name: 'register',
      component: Register
    },
    {
      path: '/page/login',
      name: 'login',
      component: Login
    },
    {
      path: '/page/userDetail',
      name: 'userDetail',
      component: UserDetail
    },
    {
      path: '/page/userSetting',
      name: 'userSetting',
      component: UserSetting
    },
    {
      path: '/page/album',
      name: 'album',
      component: Album
    },
    {
      path: '/page/circle',
      name: 'circle',
      component: Circle
    }
  ]
})
