<!-- src/components/VRMLookup.vue -->
<script setup>
import { ref } from 'vue'

const registration = ref('')
const make = ref('')
const model = ref('')
const subModel = ref('')
const engine = ref('')
const year = ref('')
const detailsFound = ref(false)
const vehicleDetails = ref({ make: '', model: '', subModel: '', engine: '', year: '' })

function onSubmit(e) {
  e.preventDefault()
  // TODO: hook up your lookup API here
  detailsFound.value = true
  vehicleDetails.value = {
    make: 'Vauxhall',
    model: 'Corsa',
    subModel: 'Elite',
    engine: '1.2',
    year: '2012',
  }
}
</script>

<template>
  <div class="max-w-5xl mx-auto px-4 py-6">
    <div class="bg-white shadow-lg rounded-lg p-4 space-y-10 border border-slate-200">
      <!-- VRM Input + Button -->
      <form
        @submit="onSubmit"
        class="flex flex-col md:flex-row items-center justify-center gap-4 mt-2"
      >
        <div class="inline-flex overflow-hidden rounded-lg shadow-md">
          <!-- GB panel -->
          <div class="bg-blue-900 px-4 py-2 flex items-center justify-center">
            <span class="text-white font-bold text-2xl">GB</span>
          </div>
          <!-- reg input: only 8ch wide, same text-2xl size -->
          <input
            v-model="registration"
            type="text"
            placeholder="ENTER REG"
            aria-label="Enter Vehicle Registration"
            autocomplete="off"
            class="w-[12ch] bg-yellow-400 placeholder-gray-600 px-4 py-3 text-3xl text-center font-charlies-write uppercase tracking-wider focus:outline-none"
          />
        </div>
      </form>

      <!-- Manual selects (inline, smaller) -->
      <div class="flex flex-wrap items-center justify-center gap-8">
        <!-- Make -->
        <div class="flex flex-col w-40">
          <label class="block text-xs font-medium text-gray-700 mb-1">Make</label>
          <select
            v-model="make"
            class="w-full border border-gray-300 rounded px-2 py-1 text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-200 transition"
          >
            <option value="">Select Make</option>
            <!-- TODO: fill options -->
          </select>
        </div>

        <!-- Model -->
        <div class="flex flex-col w-40">
          <label class="block text-xs font-medium text-gray-700 mb-1">Model</label>
          <select
            v-model="model"
            class="w-full border border-gray-300 rounded px-2 py-1 text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-200 transition"
          >
            <option value="">Select Model</option>
          </select>
        </div>

        <!-- Sub Model -->
        <div class="flex flex-col w-40">
          <label class="block text-xs font-medium text-gray-700 mb-1">Sub Model</label>
          <select
            v-model="subModel"
            class="w-full border border-gray-300 rounded px-2 py-1 text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-200 transition"
          >
            <option value="">Select Sub Model</option>
          </select>
        </div>

        <!-- Engine Size -->
        <div class="flex flex-col w-40">
          <label class="block text-xs font-medium text-gray-700 mb-1">Engine Size</label>
          <select
            v-model="engine"
            class="w-full border border-gray-300 rounded px-2 py-1 text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-200 transition"
          >
            <option value="">Select Engine</option>
          </select>
        </div>

        <!-- Year -->
        <div class="flex flex-col w-40">
          <label class="block text-xs font-medium text-gray-700 mb-1">Year</label>
          <select
            v-model="year"
            class="w-full border border-gray-300 rounded px-2 py-1 text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-200 transition"
          >
            <option value="">Select Year</option>
          </select>
        </div>
      </div>

      <!-- Revealed details -->
      <transition name="fade">
        <div v-if="detailsFound" class="bg-gray-50 border border-gray-200 rounded-lg p-2 mb-2">
          <div class="flex flex-wrap items-center justify-center gap-6">
            <!-- Make -->
            <div class="flex flex-col w-32 items-center">
              <span class="font-bold text-sm text-gray-700 mb-1">Make</span>
              <span class="text-gray-900">{{ vehicleDetails.make }}</span>
            </div>

            <!-- Model -->
            <div class="flex flex-col w-32 items-center">
              <span class="font-bold text-sm text-gray-700 mb-1">Model</span>
              <span class="text-gray-900">{{ vehicleDetails.model }}</span>
            </div>

            <!-- Sub Model -->
            <div class="flex flex-col w-32 items-center">
              <span class="font-bold text-sm text-gray-700 mb-1">Sub Model</span>
              <span class="text-gray-900">{{ vehicleDetails.subModel }}</span>
            </div>

            <!-- Engine Size -->
            <div class="flex flex-col w-32 items-center">
              <span class="font-bold text-sm text-gray-700 mb-1">Engine Size</span>
              <span class="text-gray-900">{{ vehicleDetails.engine }}</span>
            </div>

            <!-- Year -->
            <div class="flex flex-col w-32 items-center">
              <span class="font-bold text-sm text-gray-700 mb-1">Year</span>
              <span class="text-gray-900">{{ vehicleDetails.year }}</span>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<style scoped>
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}
</style>
