<script setup>
import { RouterView } from 'vue-router'
import BlackBar from './components/BlackBar.vue'
import RedBar from './components/RedBar.vue'
import Navbar from './components/Navbar.vue'
import NavigationMenu from './components/NavigationMenu.vue'
import VRMLookup from './components/VRMLookup.vue'
</script>

<template>
  <header class="sticky top-0 z-50 bg-white shadow">
    <BlackBar />
    <RedBar />
    <Navbar />
    <NavigationMenu />
  </header>

  <main>
    <VRMLookup />
    <RouterView />
  </main>

  <footer class="mt-16 py-8 bg-gray-800 text-gray-200 text-center">
    <p class="text-lg font-light">
      &copy; {{ new Date().getFullYear() }} MPH Automotive. All rights reserved.
    </p>
    <div class="mt-2 space-x-4">
      <a href="/about" class="hover:underline">About Us</a>
      <a href="/contact" class="hover:underline">Contact</a>
      <a href="/privacy" class="hover:underline">Privacy Policy</a>
    </div>
  </footer>
</template>
