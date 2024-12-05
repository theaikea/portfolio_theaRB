import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import MyStuffView from '../views/MyStuffView.vue'
import ContactView from '../views/ContactView.vue'
import ProjectView from '../views/ProjectView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/mystuff',
      name: 'mystuff',
      component: MyStuffView
    }
    ,
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    }
    ,
    {
      path: '/project/:slug',
      name: 'project',
      component: ProjectView
    }


  ]
})

export default router
