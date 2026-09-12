<!-- src/components/VRMLookup.vue -->
<script setup>
import { computed, ref } from 'vue'
import { Car, CheckCircle2, Search, SlidersHorizontal } from '@lucide/vue'

const registration = ref('')
const make = ref('')
const model = ref('')
const subModel = ref('')
const engine = ref('')
const year = ref('')
const detailsFound = ref(false)
const vehicleDetails = ref({ make: '', model: '', subModel: '', engine: '', year: '' })

const vehicles = [
  {
    make: 'Audi',
    models: [
      {
        name: 'A3',
        variants: [
          { subModel: 'Sportback S line', engine: '1.5 TFSI', year: '2019' },
          { subModel: 'Black Edition', engine: '2.0 TDI', year: '2021' },
        ],
      },
      {
        name: 'A4',
        variants: [{ subModel: 'Avant Sport', engine: '2.0 TFSI', year: '2020' }],
      },
    ],
  },
  {
    make: 'BMW',
    models: [
      {
        name: '3 Series',
        variants: [
          { subModel: 'M Sport', engine: '2.0 320d', year: '2018' },
          { subModel: 'Touring SE', engine: '2.0 320i', year: '2022' },
        ],
      },
      {
        name: '1 Series',
        variants: [{ subModel: 'Sport', engine: '1.5 118i', year: '2020' }],
      },
    ],
  },
  {
    make: 'Ford',
    models: [
      {
        name: 'Fiesta',
        variants: [
          { subModel: 'Titanium', engine: '1.0 EcoBoost', year: '2017' },
          { subModel: 'ST-Line', engine: '1.0 EcoBoost', year: '2021' },
        ],
      },
      {
        name: 'Transit Custom',
        variants: [{ subModel: 'Limited', engine: '2.0 EcoBlue', year: '2020' }],
      },
    ],
  },
  {
    make: 'Vauxhall',
    models: [
      {
        name: 'Corsa',
        variants: [
          { subModel: 'Elite', engine: '1.2', year: '2012' },
          { subModel: 'SRi', engine: '1.4', year: '2018' },
        ],
      },
      {
        name: 'Astra',
        variants: [{ subModel: 'Design', engine: '1.6 CDTi', year: '2016' }],
      },
    ],
  },
  {
    make: 'Volkswagen',
    models: [
      {
        name: 'Golf',
        variants: [
          { subModel: 'Match', engine: '1.4 TSI', year: '2016' },
          { subModel: 'GTD', engine: '2.0 TDI', year: '2019' },
        ],
      },
      {
        name: 'Transporter',
        variants: [{ subModel: 'Highline', engine: '2.0 TDI', year: '2021' }],
      },
    ],
  },
]

const regMatches = {
  MPH24: { make: 'Ford', model: 'Transit Custom', subModel: 'Limited', engine: '2.0 EcoBlue', year: '2020' },
  MPH123: { make: 'Vauxhall', model: 'Corsa', subModel: 'Elite', engine: '1.2', year: '2012' },
  A3MPH: { make: 'Audi', model: 'A3', subModel: 'Sportback S line', engine: '1.5 TFSI', year: '2019' },
}

const availableModels = computed(() => vehicles.find((vehicle) => vehicle.make === make.value)?.models || [])
const selectedModel = computed(() => availableModels.value.find((item) => item.name === model.value))
const availableVariants = computed(() => selectedModel.value?.variants || [])
const selectedVariant = computed(() => {
  return availableVariants.value.find((variant) => {
    return variant.subModel === subModel.value && variant.engine === engine.value && variant.year === year.value
  })
})

function resetManualFields(level) {
  if (level === 'make') {
    model.value = ''
    subModel.value = ''
    engine.value = ''
    year.value = ''
  }

  if (level === 'model') {
    subModel.value = ''
    engine.value = ''
    year.value = ''
  }
}

function onSubmit(e) {
  e.preventDefault()
  const normalisedReg = registration.value.replace(/\s/g, '').toUpperCase()
  const matchedVehicle = regMatches[normalisedReg] || regMatches.MPH123

  detailsFound.value = true
  vehicleDetails.value = matchedVehicle
}

function selectManualVehicle() {
  if (!selectedVariant.value) return

  detailsFound.value = true
  vehicleDetails.value = {
    make: make.value,
    model: model.value,
    ...selectedVariant.value,
  }
}
</script>

<template>
  <section class="bg-zinc-950 px-4 py-5 text-white sm:px-6 lg:px-8">
    <div class="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[0.95fr_1.25fr] lg:items-stretch">
      <div class="rounded-lg border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-black/25">
        <div class="mb-4 flex items-center gap-3">
          <span class="flex h-10 w-10 items-center justify-center rounded-md bg-red-600 text-white">
            <Car class="h-5 w-5" aria-hidden="true" />
          </span>
          <div>
            <p class="text-xs font-bold uppercase tracking-[0.24em] text-red-300">Find exact-fit parts</p>
            <h2 class="text-2xl font-black tracking-tight">Vehicle lookup</h2>
          </div>
        </div>

      <form
        @submit="onSubmit"
          class="flex flex-col gap-3 sm:flex-row sm:items-center"
      >
          <div class="inline-flex overflow-hidden rounded-md shadow-xl ring-1 ring-black/30">
            <div class="flex items-center justify-center bg-blue-900 px-3 py-2">
              <span class="text-lg font-black text-white">GB</span>
          </div>
          <input
            v-model="registration"
            type="text"
              placeholder="MPH123"
            aria-label="Enter Vehicle Registration"
            autocomplete="off"
              maxlength="8"
              class="w-[9ch] bg-yellow-400 px-4 py-3 text-center font-charlies-write text-3xl uppercase tracking-wider text-zinc-950 placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

          <button
            type="submit"
            class="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-red-600 px-5 text-sm font-black uppercase tracking-wide text-white transition hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-300"
          >
            <Search class="h-4 w-4" aria-hidden="true" />
            Search
          </button>
      </form>

        <p class="mt-3 text-sm leading-6 text-zinc-300">
          Try MPH123, MPH24 or A3MPH. A live VRM API can be connected here when backend access is ready.
        </p>
      </div>

      <div class="rounded-lg border border-white/10 bg-white p-5 text-zinc-950 shadow-2xl shadow-black/20">
        <div class="mb-4 flex items-center justify-between gap-4">
          <div>
            <p class="text-xs font-black uppercase tracking-[0.22em] text-red-600">Manual selection</p>
            <h3 class="text-xl font-black tracking-tight">Choose make, model and engine</h3>
          </div>
          <SlidersHorizontal class="hidden h-6 w-6 text-zinc-400 sm:block" aria-hidden="true" />
        </div>

        <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          <div class="flex flex-col gap-1.5">
            <label class="text-xs font-bold uppercase tracking-wide text-zinc-600">Make</label>
          <select
            v-model="make"
              @change="resetManualFields('make')"
              class="h-11 rounded-md border border-zinc-300 bg-white px-3 text-sm font-semibold focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-100"
          >
            <option value="">Select Make</option>
              <option v-for="vehicle in vehicles" :key="vehicle.make" :value="vehicle.make">
                {{ vehicle.make }}
              </option>
          </select>
        </div>

          <div class="flex flex-col gap-1.5">
            <label class="text-xs font-bold uppercase tracking-wide text-zinc-600">Model</label>
          <select
            v-model="model"
              :disabled="!make"
              @change="resetManualFields('model')"
              class="h-11 rounded-md border border-zinc-300 bg-white px-3 text-sm font-semibold disabled:bg-zinc-100 disabled:text-zinc-400 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-100"
          >
            <option value="">Select Model</option>
              <option v-for="item in availableModels" :key="item.name" :value="item.name">
                {{ item.name }}
              </option>
          </select>
        </div>

          <div class="flex flex-col gap-1.5">
            <label class="text-xs font-bold uppercase tracking-wide text-zinc-600">Trim</label>
          <select
            v-model="subModel"
              :disabled="!model"
              class="h-11 rounded-md border border-zinc-300 bg-white px-3 text-sm font-semibold disabled:bg-zinc-100 disabled:text-zinc-400 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-100"
          >
            <option value="">Select Sub Model</option>
              <option v-for="variant in availableVariants" :key="variant.subModel" :value="variant.subModel">
                {{ variant.subModel }}
              </option>
          </select>
        </div>

          <div class="flex flex-col gap-1.5">
            <label class="text-xs font-bold uppercase tracking-wide text-zinc-600">Engine</label>
          <select
            v-model="engine"
              :disabled="!subModel"
              class="h-11 rounded-md border border-zinc-300 bg-white px-3 text-sm font-semibold disabled:bg-zinc-100 disabled:text-zinc-400 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-100"
          >
            <option value="">Select Engine</option>
              <option v-for="variant in availableVariants" :key="variant.engine" :value="variant.engine">
                {{ variant.engine }}
              </option>
          </select>
        </div>

          <div class="flex flex-col gap-1.5">
            <label class="text-xs font-bold uppercase tracking-wide text-zinc-600">Year</label>
          <select
            v-model="year"
              :disabled="!engine"
              @change="selectManualVehicle"
              class="h-11 rounded-md border border-zinc-300 bg-white px-3 text-sm font-semibold disabled:bg-zinc-100 disabled:text-zinc-400 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-100"
          >
            <option value="">Select Year</option>
              <option v-for="variant in availableVariants" :key="variant.year" :value="variant.year">
                {{ variant.year }}
              </option>
          </select>
          </div>
        </div>

        <button
          type="button"
          :disabled="!selectedVariant"
          @click="selectManualVehicle"
          class="mt-4 inline-flex h-11 items-center justify-center gap-2 rounded-md bg-zinc-950 px-5 text-sm font-black uppercase tracking-wide text-white transition hover:bg-red-600 disabled:cursor-not-allowed disabled:bg-zinc-300 disabled:text-zinc-500"
        >
          <CheckCircle2 class="h-4 w-4" aria-hidden="true" />
          Confirm vehicle
        </button>

      <transition name="fade">
          <div v-if="detailsFound" class="mt-5 rounded-lg border border-red-100 bg-red-50 p-4">
            <div class="mb-3 flex items-center gap-2 text-red-700">
              <CheckCircle2 class="h-5 w-5" aria-hidden="true" />
              <p class="text-sm font-black uppercase tracking-wide">Vehicle selected</p>
            </div>
            <div class="grid gap-3 text-sm sm:grid-cols-5">
              <div>
                <span class="block text-xs font-bold uppercase text-zinc-500">Make</span>
                <span class="font-black">{{ vehicleDetails.make }}</span>
            </div>
              <div>
                <span class="block text-xs font-bold uppercase text-zinc-500">Model</span>
                <span class="font-black">{{ vehicleDetails.model }}</span>
            </div>
              <div>
                <span class="block text-xs font-bold uppercase text-zinc-500">Trim</span>
                <span class="font-black">{{ vehicleDetails.subModel }}</span>
            </div>
              <div>
                <span class="block text-xs font-bold uppercase text-zinc-500">Engine</span>
                <span class="font-black">{{ vehicleDetails.engine }}</span>
              </div>
              <div>
                <span class="block text-xs font-bold uppercase text-zinc-500">Year</span>
                <span class="font-black">{{ vehicleDetails.year }}</span>
              </div>
            </div>
          </div>
      </transition>
    </div>
  </div>
  </section>
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
