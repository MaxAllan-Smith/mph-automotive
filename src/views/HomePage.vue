<script setup>
import {
  ArrowRight,
  BadgeCheck,
  Battery,
  Car,
  ChevronRight,
  Disc3,
  Droplets,
  Gauge,
  PackageCheck,
  Search,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Star,
  Truck,
  Wrench,
} from '@lucide/vue'

const categories = [
  {
    name: 'Braking',
    count: '1,240 parts',
    icon: Disc3,
    description: 'Pads, discs, sensors and fitting kits for daily drivers and vans.',
    accent: 'bg-red-600',
  },
  {
    name: 'Service Parts',
    count: '980 parts',
    icon: Wrench,
    description: 'Oil, air, fuel and cabin filters matched to manufacturer intervals.',
    accent: 'bg-zinc-950',
  },
  {
    name: 'Lighting',
    count: '730 parts',
    icon: Sparkles,
    description: 'Bulbs, headlamp units, warning beacons and workshop lighting.',
    accent: 'bg-red-600',
  },
  {
    name: 'Batteries',
    count: '310 parts',
    icon: Battery,
    description: 'AGM, EFB and standard batteries with fitment confidence.',
    accent: 'bg-zinc-950',
  },
  {
    name: 'Engine Oils',
    count: '460 parts',
    icon: Droplets,
    description: 'Correct-grade oils, antifreeze, additives and workshop fluids.',
    accent: 'bg-red-600',
  },
  {
    name: 'Performance',
    count: '285 parts',
    icon: Gauge,
    description: 'Filters, plugs, fluids and upgrades for sharper response.',
    accent: 'bg-zinc-950',
  },
]

const catalogue = [
  {
    category: 'Braking Essentials',
    products: [
      {
        name: 'Brembo Front Brake Disc Set',
        code: 'MPH-BRK-2041',
        price: '64.99',
        fitment: 'Audi A3, VW Golf, Seat Leon',
        tag: 'Best seller',
        image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=900&q=80',
      },
      {
        name: 'Ceramic Brake Pad Kit',
        code: 'MPH-PAD-7742',
        price: '32.50',
        fitment: 'Ford Fiesta, Focus, Transit Connect',
        tag: 'Low dust',
        image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=900&q=80',
      },
      {
        name: 'ABS Wheel Speed Sensor',
        code: 'MPH-ABS-1188',
        price: '21.95',
        fitment: 'BMW 1 Series, 3 Series',
        tag: 'OE match',
        image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=900&q=80',
      },
    ],
  },
  {
    category: 'Service & Maintenance',
    products: [
      {
        name: 'Premium Oil Filter',
        code: 'MPH-FIL-6601',
        price: '8.99',
        fitment: 'Vauxhall Corsa, Astra, Mokka',
        tag: 'Fast moving',
        image: 'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=900&q=80',
      },
      {
        name: '5W-30 Fully Synthetic Oil 5L',
        code: 'MPH-OIL-5305',
        price: '29.99',
        fitment: 'Ford EcoBoost and EcoBlue engines',
        tag: 'ACEA approved',
        image: 'https://images.unsplash.com/photo-1600661653561-629509216228?auto=format&fit=crop&w=900&q=80',
      },
      {
        name: 'Cabin Pollen Filter Carbon',
        code: 'MPH-CAB-4016',
        price: '13.45',
        fitment: 'Audi, BMW, Volkswagen',
        tag: 'Carbon media',
        image: 'https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?auto=format&fit=crop&w=900&q=80',
      },
    ],
  },
  {
    category: 'Lighting & Electrical',
    products: [
      {
        name: 'H7 Night Vision Bulb Twin Pack',
        code: 'MPH-BULB-H7NV',
        price: '18.75',
        fitment: 'Universal H7 fitment',
        tag: 'Road legal',
        image: 'https://images.unsplash.com/photo-1532581140115-3e355d1ed1de?auto=format&fit=crop&w=900&q=80',
      },
      {
        name: 'Start-Stop AGM Battery 096',
        code: 'MPH-BAT-096AGM',
        price: '119.99',
        fitment: 'Modern start-stop cars and vans',
        tag: '4 year warranty',
        image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80',
      },
      {
        name: 'Alternator 150A Exchange Unit',
        code: 'MPH-ALT-150X',
        price: '156.00',
        fitment: 'Transit Custom 2.0 EcoBlue',
        tag: 'Exchange',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80',
      },
    ],
  },
]

const stats = [
  { value: '45k+', label: 'parts indexed' },
  { value: '98%', label: 'orders dispatched same day' },
  { value: '4.9/5', label: 'trade customer rating' },
]

const benefits = [
  { icon: ShieldCheck, title: 'Fitment checked', text: 'Use registration or manual lookup before adding parts to basket.' },
  { icon: Truck, title: 'Fast UK dispatch', text: 'Priority picking for stocked service, braking and lighting parts.' },
  { icon: PackageCheck, title: 'Trade-ready range', text: 'OE-quality brands, clear product codes and practical categories.' },
]
</script>

<template>
  <div class="bg-white text-zinc-950">
    <section class="relative isolate overflow-hidden bg-zinc-950 text-white">
      <img
        src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1800&q=85"
        alt="Automotive engine bay and workshop tools"
        class="absolute inset-0 -z-10 h-full w-full object-cover opacity-35"
        loading="eager"
      />
      <div class="absolute inset-0 -z-10 bg-[linear-gradient(110deg,rgba(9,9,11,0.96)_0%,rgba(9,9,11,0.78)_48%,rgba(220,38,38,0.64)_100%)]"></div>

      <div class="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-20">
        <div class="flex flex-col justify-center">
          <div class="mb-5 inline-flex w-fit items-center gap-2 rounded-md border border-white/15 bg-white/10 px-3 py-2 text-xs font-black uppercase tracking-[0.22em] text-red-100 backdrop-blur">
            <BadgeCheck class="h-4 w-4" aria-hidden="true" />
            Fitment-first parts supply
          </div>
          <h1 class="max-w-4xl text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl">
            MPH Automotive
          </h1>
          <p class="mt-5 max-w-2xl text-lg leading-8 text-zinc-200 sm:text-xl">
            Vibrant, fast-moving car and van parts with catalogue browsing by category, registration lookup and manual vehicle selection built into the storefront.
          </p>
          <div class="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#catalogue"
              class="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-red-600 px-6 text-sm font-black uppercase tracking-wide text-white shadow-lg shadow-red-950/30 transition hover:bg-red-500"
            >
              Shop catalogue
              <ArrowRight class="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="#categories"
              class="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-white/20 bg-white/10 px-6 text-sm font-black uppercase tracking-wide text-white backdrop-blur transition hover:bg-white hover:text-zinc-950"
            >
              Browse categories
            </a>
          </div>
        </div>

        <div class="grid content-end gap-4 sm:grid-cols-3 lg:grid-cols-1">
          <div
            v-for="item in stats"
            :key="item.label"
            class="rounded-lg border border-white/15 bg-white/10 p-5 backdrop-blur-md"
          >
            <p class="text-3xl font-black text-white">{{ item.value }}</p>
            <p class="mt-1 text-sm font-semibold uppercase tracking-wide text-zinc-300">{{ item.label }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="border-y border-zinc-200 bg-zinc-50 px-4 py-5 sm:px-6 lg:px-8">
      <div class="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
        <div v-for="benefit in benefits" :key="benefit.title" class="flex items-start gap-4">
          <span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-red-600 text-white">
            <component :is="benefit.icon" class="h-5 w-5" aria-hidden="true" />
          </span>
          <div>
            <h2 class="text-base font-black">{{ benefit.title }}</h2>
            <p class="mt-1 text-sm leading-6 text-zinc-600">{{ benefit.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <section id="categories" class="px-4 py-14 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-7xl">
        <div class="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p class="text-xs font-black uppercase tracking-[0.24em] text-red-600">Catalogue by category</p>
            <h2 class="mt-2 text-4xl font-black tracking-tight">Parts ordered for quick decisions</h2>
          </div>
          <div class="relative w-full max-w-md">
            <Search class="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" aria-hidden="true" />
            <input
              type="search"
              placeholder="Search brake pads, H7 bulbs, 5W-30 oil..."
              class="h-12 w-full rounded-md border border-zinc-300 bg-white pl-11 pr-4 text-sm font-semibold outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-100"
            />
          </div>
        </div>

        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <a
            v-for="category in categories"
            :key="category.name"
            href="#catalogue"
            class="group rounded-lg border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-red-200 hover:shadow-xl hover:shadow-red-950/10"
          >
            <div class="flex items-start justify-between gap-5">
              <span :class="['flex h-12 w-12 items-center justify-center rounded-md text-white', category.accent]">
                <component :is="category.icon" class="h-6 w-6" aria-hidden="true" />
              </span>
              <ChevronRight class="h-5 w-5 text-zinc-400 transition group-hover:translate-x-1 group-hover:text-red-600" aria-hidden="true" />
            </div>
            <h3 class="mt-5 text-2xl font-black">{{ category.name }}</h3>
            <p class="mt-1 text-sm font-bold uppercase tracking-wide text-red-600">{{ category.count }}</p>
            <p class="mt-3 text-sm leading-6 text-zinc-600">{{ category.description }}</p>
          </a>
        </div>
      </div>
    </section>

    <section id="catalogue" class="bg-zinc-950 px-4 py-14 text-white sm:px-6 lg:px-8">
      <div class="mx-auto max-w-7xl">
        <div class="mb-9 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p class="text-xs font-black uppercase tracking-[0.24em] text-red-300">Featured stock</p>
            <h2 class="mt-2 text-4xl font-black tracking-tight">Popular parts by category</h2>
          </div>
          <div class="inline-flex w-fit items-center gap-2 rounded-md bg-white px-3 py-2 text-sm font-black text-zinc-950">
            <Car class="h-4 w-4 text-red-600" aria-hidden="true" />
            Add vehicle above for exact compatibility
          </div>
        </div>

        <div class="space-y-10">
          <div v-for="group in catalogue" :key="group.category">
            <div class="mb-4 flex items-center justify-between gap-4 border-b border-white/10 pb-3">
              <h3 class="text-2xl font-black">{{ group.category }}</h3>
              <a href="#categories" class="text-sm font-black uppercase tracking-wide text-red-300 hover:text-white">View all</a>
            </div>

            <div class="grid gap-5 md:grid-cols-3">
              <article
                v-for="product in group.products"
                :key="product.code"
                class="overflow-hidden rounded-lg border border-white/10 bg-white text-zinc-950 shadow-xl shadow-black/20"
              >
                <div class="relative h-52 overflow-hidden bg-zinc-200">
                  <img
                    :src="product.image"
                    :alt="product.name"
                    class="h-full w-full object-cover transition duration-500 hover:scale-105"
                    loading="lazy"
                  />
                  <span class="absolute left-3 top-3 rounded-md bg-red-600 px-2.5 py-1 text-xs font-black uppercase tracking-wide text-white">
                    {{ product.tag }}
                  </span>
                </div>
                <div class="p-5">
                  <p class="text-xs font-black uppercase tracking-wide text-zinc-500">{{ product.code }}</p>
                  <h4 class="mt-2 min-h-14 text-xl font-black leading-tight">{{ product.name }}</h4>
                  <p class="mt-3 text-sm leading-6 text-zinc-600">Fits: {{ product.fitment }}</p>
                  <div class="mt-5 flex items-center justify-between gap-4">
                    <p class="text-2xl font-black">£{{ product.price }}</p>
                    <button
                      type="button"
                      class="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-zinc-950 px-4 text-sm font-black uppercase tracking-wide text-white transition hover:bg-red-600"
                    >
                      <ShoppingCart class="h-4 w-4" aria-hidden="true" />
                      Add
                    </button>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="px-4 py-14 sm:px-6 lg:px-8">
      <div class="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div>
          <p class="text-xs font-black uppercase tracking-[0.24em] text-red-600">Trade confidence</p>
          <h2 class="mt-2 text-4xl font-black tracking-tight">Built for customers who need the right part first time</h2>
          <p class="mt-4 text-base leading-7 text-zinc-600">
            MPH Automotive combines familiar catalogue browsing with vehicle-first filtering, clear fitment notes and practical stock signals for fast ordering.
          </p>
        </div>
        <div class="grid gap-4 sm:grid-cols-2">
          <div class="rounded-lg bg-red-600 p-6 text-white">
            <Star class="h-7 w-7" aria-hidden="true" />
            <h3 class="mt-5 text-2xl font-black">Verified-quality ranges</h3>
            <p class="mt-3 text-sm leading-6 text-red-50">Service, braking, electrical and workshop categories are arranged for fast comparison.</p>
          </div>
          <div class="rounded-lg bg-zinc-950 p-6 text-white">
            <Gauge class="h-7 w-7" aria-hidden="true" />
            <h3 class="mt-5 text-2xl font-black">Smooth buying journey</h3>
            <p class="mt-3 text-sm leading-6 text-zinc-300">Registration lookup, manual selection, search and category browsing all sit on the first page.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
