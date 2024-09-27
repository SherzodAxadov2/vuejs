import { createRouter, createWebHistory } from 'vue-router'

import AppView from "@/pages/AppView.vue";


export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'AppView',
      component: AppView
    },
  ]
})

const routerFactory = () => {

  return router
}

export default routerFactory
