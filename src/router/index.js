import { createRouter, createWebHistory } from 'vue-router'
import AuthLayout from '@/layouts/AuthLayout.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import AdminLayout from '@/layouts/AdminLayout.vue'

import HomePage from '@/views/HomePage.vue'
import LoginPage from '@/views/LoginPage.vue'
import SignupPage from '@/views/SignupPage.vue'
import ProductDetail from '@/views/ProductDetail.vue'
import AdminDashboard from '@/views/AdminDashboard.vue'

// Simulated auth store (replace with your real store)
import { useAuthStore } from '@/stores/auth' // Pinia store

const routes = [
  {
    path: '/auth',
    component: AuthLayout,
    children: [
      { path: 'login', component: LoginPage },
      { path: 'signup', component: SignupPage },
    ],
  },
  {
    path: '/',
    component: DefaultLayout,
    children: [
      { path: '', component: HomePage },
      { path: 'products/:id', component: ProductDetail },
    ],
  },
  {
    path: '/admin',
    component: AdminLayout,
    children: [{ path: '', component: AdminDashboard }],
    meta: { requiresAuth: true, requiresAdmin: true },
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

// Global Navigation Guard
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()

  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    return next('/auth/login')
  }

  if (to.meta.requiresAdmin && !authStore.user?.isAdmin) {
    return next('/') // or show a 403 page
  }

  next()
})

export default router
