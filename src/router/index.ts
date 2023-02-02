import { setupLayouts } from 'virtual:generated-layouts'
import { createRouter, createWebHistory } from 'vue-router'
import routes from '~pages'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   redirect: to => {
    //     const userData = JSON.parse(localStorage.getItem('userData') || '{}')
    //     const userRole = userData && userData.role ? userData.role : null

    //     console.log(userData)

    //     if (userRole === 'admin')
    //       return { name: 'dashboards-analytics' }
    //     if (userRole === 'client')
    //       return { name: 'access-control' }

    //     return { name: 'login', query: to.query }
    //   },
    // },
    ...setupLayouts(routes),
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
