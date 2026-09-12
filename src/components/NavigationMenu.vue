<!-- src/components/NavigationMenu.vue -->
<script setup>
import { RouterLink } from 'vue-router'

const carOptions = [
  { label: 'BMW', to: { path: '/catalogue', query: { q: 'BMW' } } },
  { label: 'HONDA', to: { path: '/catalogue', query: { q: 'Honda' } } },
  { label: 'RENAULT', to: { path: '/catalogue', query: { q: 'Renault' } } },
  { label: 'PEUGEOT', to: { path: '/catalogue', query: { q: 'Peugeot' } } },
  { label: 'AUDI', to: { path: '/catalogue', query: { q: 'Audi' } } },
  { label: 'CITROEN', to: { path: '/catalogue', query: { q: 'Citroen' } } },
  { label: 'FORD', to: { path: '/catalogue', query: { q: 'Ford' } } },
  { label: 'VOLKSWAGEN', to: { path: '/catalogue', query: { q: 'Volkswagen' } } },
]

const categoryLinks = [
  { label: 'WIPER BLADES', to: { path: '/catalogue', query: { q: 'wiper blades' } } },
  { label: 'BULBS', to: { path: '/catalogue', query: { category: 'lighting' } } },
  { label: 'OILS & ANTIFREEZE', to: { path: '/catalogue', query: { category: 'fluids' } } },
  {
    label: 'ACCESSORIES & CAR CARE',
    to: { path: '/catalogue', query: { q: 'accessories car care' } },
  },
  { label: 'PERFORMANCE', to: { path: '/catalogue', query: { category: 'performance' } } },
  { label: 'TOOLS', to: { path: '/catalogue', query: { q: 'tools' } } },
]
</script>

<template>
  <nav class="bg-white border-t border-b border-gray-200">
    <ul
      class="flex flex-wrap justify-center space-x-6 py-3 text-md font-semibold text-gray-700 uppercase"
      role="list"
    >
      <!-- SELECT CAR dropdown -->
      <li class="relative">
        <details class="group">
          <summary
            class="flex items-center cursor-pointer list-none select-none"
            role="button"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <span>SELECT CAR</span>
            <svg
              class="ml-1 h-4 w-4 text-gray-500 transition-transform duration-200 group-open:rotate-180"
              viewBox="0 0 10 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M9.354.646a.5.5 0 00-.708 0L5 4.293 1.354.646a.5.5 0 10-.708.708l4 4a.5.5 0 00.708 0l4-4a.5.5 0 000-.708z"
                fill="currentColor"
              />
            </svg>
          </summary>

          <ul
            class="absolute left-0 top-full mt-1 w-44 bg-white shadow-lg rounded z-10 py-1"
            role="list"
          >
            <li v-for="opt in carOptions" :key="opt.label">
              <RouterLink :to="opt.to" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                {{ opt.label }}
              </RouterLink>
            </li>
          </ul>
        </details>
      </li>

      <li v-for="item in categoryLinks" :key="item.label">
        <RouterLink :to="item.to" class="hover:text-gray-900">{{ item.label }}</RouterLink>
      </li>
      <li>
        <RouterLink to="/catalogue" class="hover:text-gray-900">ALL PARTS</RouterLink>
      </li>
    </ul>
  </nav>
</template>
