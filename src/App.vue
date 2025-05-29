<script setup>
import { RouterView } from 'vue-router'
import BlackBar from './components/BlackBar.vue'
import RedBar from './components/RedBar.vue'
import Navbar from './components/Navbar.vue'
import NavigationMenu from './components/NavigationMenu.vue'
import VRMLookup from './components/VRMLookup.vue'
</script>

<template>
  <BlackBar />
  <RedBar />

  <header>
    <Navbar />
    <NavigationMenu />
    <VRMLookup />
  </header>

  <main>
    <RouterView />
  </main>

  <footer></footer>
</template>
