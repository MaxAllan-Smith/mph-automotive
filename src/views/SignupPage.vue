<script setup>
import apiClient from '@/services/apiService'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const fullName = ref('')
const email = ref('')
const password = ref('')
const router = useRouter()
const errorMessage = ref('')

async function doRegister() {
  try {
    errorMessage.value = ''
    await apiClient.post('auth/register', {
      fullName: fullName.value,
      email: email.value,
      password: password.value,
    })
    router.push('/auth/login')
  } catch {
    errorMessage.value = 'Registration failed. Please try again.'
  }
}
</script>

<template>
  <!-- full height provided by AuthLayout -->
  <div class="h-full w-md flex items-center justify-center p-4">
    <div class="w-full max-w-lg bg-white border-2 border-slate-200 p-8 rounded-lg shadow-lg">
      <h1 class="text-3xl font-bold text-red-600 mb-6 text-center">Create Account</h1>

      <form @submit.prevent="doRegister" class="space-y-4">
        <div>
          <label for="fullName" class="block text-black mb-1">Full Name</label>
          <input
            id="fullName"
            v-model="fullName"
            type="text"
            placeholder="Your full name"
            required
            class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-600"
          />
        </div>

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
          Sign Up
        </button>
      </form>

      <p v-if="errorMessage" class="text-red-600 text-center mt-4">{{ errorMessage }}</p>

      <p class="mt-6 text-center text-black">
        Already have an account?
        <router-link to="/auth/login" class="text-red-600 font-semibold hover:underline">
          Log In
        </router-link>
      </p>
    </div>
  </div>
</template>
