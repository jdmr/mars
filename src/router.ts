import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import { auth } from './firebase'

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, _from, next) => {
    const user = auth.currentUser
    if (to.path !== '/login' && !user) {
        next('/login')
    } else {
        next()
    }
})

export default router

