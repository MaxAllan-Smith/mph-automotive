<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <!-- Navbar Wrapper to center content -->
  <div class="bg-white flex justify-center">
    <!-- Navigation Bar Container -->
    <nav class="w-full max-w-6xl px-4 py-4 flex items-center justify-between">
      <!-- Logo -->
      <div class="flex-shrink-0">
        <RouterLink to="/" class="focus:outline-none">
          <img
            src="../assets/logo.png"
            alt="Logo"
            class="h-13 w-auto rounded-lg duration-200 hover:scale-104"
          />
        </RouterLink>
      </div>

      <!-- Search Bar -->
      <div class="flex mx-4">
        <div class="relative">
          <input
            type="text"
            placeholder="Search..."
            class="w-xl pl-4 pr-10 py-2 rounded-lg text-gray-800 bg-slate-200"
          />
          <button class="absolute right-2 top-1/2 transform -translate-y-1/2 focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-4.35-4.35m1.4-5.15a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>

      <!-- Account & Cart -->
      <div class="flex items-center space-x-2">
        <!-- Account Icon with updated SVG -->
        <RouterLink
          to="/account"
          class="p-2 header__icon header__icon--account link focus-inset small-hide rounded-full bg-transparent transform transition-transform duration-200 hover:scale-110"
        >
          <svg height="25" width="25" xmlns="http://www.w3.org/2000/svg">
            <image height="25" width="25" href="../assets/account.svg" />
          </svg>
          <span class="sr-only">Log in</span>
        </RouterLink>

        <!-- Cart Icon with updated SVG -->
        <RouterLink
          to="/cart"
          id="cart-icon-bubble"
          class="p-2 header__icon header__icon--cart link focus-inset rounded-full bg-transparent transform transition-transform duration-200 hover:scale-110"
        >
          <svg height="33" width="33" xmlns="http://www.w3.org/2000/svg">
            <image height="33" width="33" href="../assets/basket.svg" />
          </svg>
          <span class="sr-only">Cart</span>
        </RouterLink>
      </div>
    </nav>
  </div>
</template>

<style scoped>
/* Component-specific styles (if any) */
</style>