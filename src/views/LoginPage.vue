<script setup>
import apiClient from '@/services/apiService'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const router = useRouter()
const errorMessage = ref('')

async function doLogin() {
  try {
    errorMessage.value = ''
    const { data } = await apiClient.post('auth/login', {
      email: email.value,
      password: password.value,
    })
    localStorage.setItem('jwt', data.token)
    router.push('/')
  } catch {
    errorMessage.value = 'Invalid email or password.'
  }
}
</script>

<template>
  <!-- full height provided by AuthLayout -->
  <div class="h-full w-md flex items-center justify-center p-4">
    <div class="w-full max-w-lg bg-white border-2 border-slate-200 p-8 rounded-lg shadow-lg">
      <h1 class="text-3xl font-bold text-red-600 mb-6 text-center">Log In</h1>

      <form @submit.prevent="doLogin" class="space-y-4">
        <div>
          <label for="email" class="block text-black mb-1">Email</label>
          <input
            id="email"
            v-model="email"
            type="email"
            placeholder="you@example.com"
            required
            class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-600"
          />
        </div>

        <div>
          <label for="password" class="block text-black mb-1">Password</label>
          <input
            id="password"
            v-model="password"
            type="password"
            placeholder="••••••••"
            required
            class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-600"
          />
        </div>

        <button
          type="submit"
          class="w-full py-2 bg-red-600 text-white font-semibold rounded hover:bg-red-700 transition"
        >
          Log In
        </button>
      </form>

      <p v-if="errorMessage" class="text-red-600 text-center mt-4">{{ errorMessage }}</p>

      <p class="mt-6 text-center text-black">
        Don’t have an account?
        <router-link to="/auth/signup" class="text-red-600 font-semibold hover:underline">
          Sign Up
        </router-link>
      </p>
    </div>
  </div>
</template>
