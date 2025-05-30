// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import AuthLayout from '@/layouts/AuthLayout.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import HomePage from '@/views/HomePage.vue'
import LoginPage from '@/views/LoginPage.vue'
import SignupPage from '@/views/SignupPage.vue'
// …other imports

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
      // …other top-level pages like About, Contact, etc.
    ],
  },
]

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})
