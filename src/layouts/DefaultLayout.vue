<script setup>
import { RouterView } from 'vue-router'
import BlackBar from '@/components/BlackBar.vue'
import RedBar from '@/components/RedBar.vue'
import Navbar from '@/components/Navbar.vue'
import NavigationMenu from '@/components/NavigationMenu.vue'
import VRMLookup from '@/components/VRMLookup.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <!-- Main header with full navigation -->
    <header class="sticky top-0 z-50 bg-white shadow">
      <BlackBar />
      <RedBar />
      <Navbar />
      <NavigationMenu />
    </header>

    <!-- Main content area -->
    <main class="flex-grow">
      <VRMLookup />
      <RouterView />
    </main>

    <!-- Footer pinned to bottom -->
    <footer class="mt-auto py-8 bg-gray-800 text-gray-200 text-center">
      <p class="text-lg font-light">
        &copy; {{ new Date().getFullYear() }} MPH Automotive. All rights reserved.
      </p>
      <div class="mt-2 space-x-4">
        <router-link to="/about" class="hover:underline">About Us</router-link>
        <router-link to="/contact" class="hover:underline">Contact</router-link>
        <router-link to="/privacy" class="hover:underline">Privacy Policy</router-link>
      </div>
    </footer>
  </div>
</template>
