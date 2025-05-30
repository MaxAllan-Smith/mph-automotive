<script setup>
import { RouterView, RouterLink } from 'vue-router'
</script>

<template>
  <div class="h-screen flex flex-col bg-gray-50 overflow-hidden">
    <!-- Minimal header with logo -->
    <header class="py-6 bg-white shadow flex justify-center">
      <RouterLink to="/">
        <img src="../assets/logo.png" alt="MPH Automotive" class="h-13" />
      </RouterLink>
    </header>

    <!-- Center the form; flex-1 ensures footer stays at bottom -->
    <main class="flex-1 flex items-center justify-center px-4">
      <div class="w-full h-full flex items-center justify-center">
        <RouterView />
      </div>
    </main>

    <!-- Footer pinned to bottom -->
    <footer class="py-4 bg-gray-800 text-gray-200 text-center flex-none">
      <p class="text-lg font-light">
        &copy; {{ new Date().getFullYear() }} MPH Automotive. All rights reserved.
      </p>
      <div class="mt-2 space-x-4">
        <RouterLink to="/about" class="hover:underline">About Us</RouterLink>
        <RouterLink to="/contact" class="hover:underline">Contact</RouterLink>
        <RouterLink to="/privacy" class="hover:underline">Privacy Policy</RouterLink>
      </div>
    </footer>
  </div>
</template>
