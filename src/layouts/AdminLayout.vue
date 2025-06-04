<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="min-h-screen flex bg-gray-100 text-gray-800 font-sans">
    <!-- Sidebar -->
    <aside class="w-64 bg-white shadow-md border-r border-gray-200 flex flex-col">
      <div class="h-20 flex items-center justify-center border-b border-gray-200">
        <RouterLink to="/admin">
          <img src="@/assets/logo.png" alt="MPH Automotive Admin" class="h-10" />
        </RouterLink>
      </div>
      <nav class="flex-1 px-4 py-6 space-y-4">
        <RouterLink
          to="/admin/products"
          class="block px-4 py-2 rounded hover:bg-gray-100 font-medium"
        >
          Product Management
        </RouterLink>
        <RouterLink
          to="/admin/pricing"
          class="block px-4 py-2 rounded hover:bg-gray-100 font-medium"
        >
          Pricing Management
        </RouterLink>
        <RouterLink
          to="/admin/customers"
          class="block px-4 py-2 rounded hover:bg-gray-100 font-medium"
        >
          Customer Management
        </RouterLink>
        <!-- Add more links as needed -->
      </nav>
      <div class="p-4 border-t border-gray-200 text-sm text-gray-500">
        &copy; {{ new Date().getFullYear() }} MPH Automotive
      </div>
    </aside>

    <!-- Main content area -->
    <div class="flex-1 flex flex-col overflow-hidden">
      <!-- Top Bar -->
      <header class="h-16 bg-white shadow-sm flex items-center px-6 border-b border-gray-200">
        <h1 class="text-xl font-semibold">Admin Dashboard</h1>
      </header>

      <!-- Main View -->
      <main class="flex-1 overflow-y-auto p-6">
        <RouterView />
      </main>

      <!-- Footer -->
      <footer class="bg-gray-800 text-gray-200 py-4 text-center text-sm">
        Admin Panel &mdash; MPH Automotive. All rights reserved.
      </footer>
    </div>
  </div>
</template>
