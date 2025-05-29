<!-- src/components/NavigationMenu.vue -->
<script setup>
import { RouterLink } from 'vue-router'

const carOptions = [
  { label: 'BMW', to: '/collections/bmw' },
  { label: 'HONDA', to: '/collections/honda' },
  { label: 'RENAULT', to: '/collections/renault' },
  { label: 'PEUGEOT', to: '/collections/peugeot' },
  { label: 'AUDI', to: '/collections/audi' },
  { label: 'CITROEN', to: '/collections/citreon' },
  { label: 'FORD', to: '/collections/ford' },
  { label: 'VOLKSWAGEN', to: '/collections/volkswagon-1' },
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

      <!-- Other links -->
      <li>
        <RouterLink to="/collections/wiper-blades" class="hover:text-gray-900"
          >WIPER BLADES</RouterLink
        >
      </li>
      <li>
        <RouterLink to="/collections/bulbs" class="hover:text-gray-900">BULBS</RouterLink>
      </li>
      <li>
        <RouterLink to="/collections/oils-antifreeze" class="hover:text-gray-900"
          >OILS &amp; ANTIFREEZE</RouterLink
        >
      </li>
      <li>
        <RouterLink to="/collections/accessories-car-care" class="hover:text-gray-900"
          >ACCESSORIES &amp; CAR CARE</RouterLink
        >
      </li>
      <li>
        <RouterLink to="/collections/performance" class="hover:text-gray-900"
          >PERFORMANCE</RouterLink
        >
      </li>
      <li>
        <RouterLink to="/collections/tools" class="hover:text-gray-900">TOOLS</RouterLink>
      </li>
      <li>
        <RouterLink to="/policies/contact-information" class="hover:text-gray-900"
          >CONTACT</RouterLink
        >
      </li>
    </ul>
  </nav>
</template>
