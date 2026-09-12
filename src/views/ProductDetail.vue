<script setup>
import { computed, ref, watch } from 'vue'
import { RouterLink, useRoute, useRouter } from 'vue-router'
import {
  ArrowLeft,
  Box,
  CheckCircle2,
  ChevronRight,
  PackageCheck,
  ShieldCheck,
  ShoppingCart,
  Star,
  Truck,
} from '@lucide/vue'
import { getProductById, getRelatedProducts } from '@/data/catalogue'

const route = useRoute()
const router = useRouter()

const quantity = ref(1)
const selectedImageIndex = ref(0)

const product = computed(() => getProductById(route.params.id))
const relatedProducts = computed(() => getRelatedProducts(route.params.id, 3))
const selectedImage = computed(
  () => product.value?.gallery[selectedImageIndex.value] || product.value?.image,
)
const savings = computed(() => {
  if (!product.value?.wasPrice) return null
  return (product.value.wasPrice - product.value.price).toFixed(2)
})

watch(
  () => route.params.id,
  () => {
    selectedImageIndex.value = 0
    quantity.value = 1
  },
)

function addToBasket() {
  if (!product.value) return
  alert(`Added ${quantity.value} x ${product.value.name} to your basket.`)
}
</script>

<template>
  <div class="bg-zinc-100 text-zinc-950">
    <section v-if="product" class="px-4 py-8 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-7xl">
        <nav
          class="mb-6 flex flex-wrap items-center gap-2 text-sm font-bold text-zinc-500"
          aria-label="Breadcrumb"
        >
          <RouterLink to="/" class="transition hover:text-red-600">Home</RouterLink>
          <ChevronRight class="h-4 w-4" aria-hidden="true" />
          <RouterLink to="/catalogue" class="transition hover:text-red-600"
            >Parts Catalogue</RouterLink
          >
          <ChevronRight class="h-4 w-4" aria-hidden="true" />
          <span class="text-zinc-950">{{ product.name }}</span>
        </nav>

        <button
          type="button"
          class="mb-6 inline-flex items-center gap-2 text-sm font-black uppercase tracking-wide text-red-600 hover:text-zinc-950"
          @click="router.back()"
        >
          <ArrowLeft class="h-4 w-4" aria-hidden="true" />
          Back
        </button>

        <div class="grid gap-8 lg:grid-cols-[minmax(0,1fr)_26rem] lg:items-start">
          <div class="rounded-lg border border-zinc-200 bg-white p-4 shadow-sm">
            <div class="grid gap-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1fr)]">
              <div>
                <div class="relative h-[24rem] overflow-hidden rounded-md bg-zinc-100">
                  <img
                    :src="selectedImage"
                    :alt="product.name"
                    class="h-full w-full object-cover"
                    loading="eager"
                  />
                  <span
                    class="absolute left-4 top-4 rounded-md bg-red-600 px-3 py-1.5 text-xs font-black uppercase tracking-wide text-white"
                  >
                    {{ product.tag }}
                  </span>
                </div>
                <div v-if="product.gallery.length > 1" class="mt-3 grid grid-cols-3 gap-3">
                  <button
                    v-for="(image, index) in product.gallery"
                    :key="image"
                    type="button"
                    :class="[
                      'h-20 overflow-hidden rounded-md border transition',
                      selectedImageIndex === index
                        ? 'border-red-500 ring-2 ring-red-100'
                        : 'border-zinc-200 hover:border-red-300',
                    ]"
                    @click="selectedImageIndex = index"
                  >
                    <img
                      :src="image"
                      :alt="`${product.name} image ${index + 1}`"
                      class="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </button>
                </div>
              </div>

              <div class="flex flex-col">
                <div class="flex flex-wrap items-center gap-2">
                  <span
                    class="rounded-md bg-zinc-950 px-3 py-1.5 text-xs font-black uppercase tracking-wide text-white"
                    >{{ product.categoryGroup }}</span
                  >
                  <span
                    class="rounded-md bg-red-50 px-3 py-1.5 text-xs font-black uppercase tracking-wide text-red-700"
                    >{{ product.brand }}</span
                  >
                </div>

                <p class="mt-5 text-xs font-black uppercase tracking-[0.22em] text-zinc-500">
                  {{ product.code }}
                </p>
                <h1 class="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
                  {{ product.name }}
                </h1>
                <p class="mt-4 text-base leading-7 text-zinc-600">{{ product.summary }}</p>

                <div class="mt-5 flex flex-wrap items-center gap-3">
                  <span
                    class="inline-flex items-center gap-1 rounded-md bg-zinc-100 px-3 py-2 text-sm font-black"
                  >
                    <Star class="h-4 w-4 fill-red-600 text-red-600" aria-hidden="true" />
                    {{ product.rating }} / 5
                  </span>
                  <span
                    class="inline-flex items-center gap-2 rounded-md bg-green-50 px-3 py-2 text-sm font-black text-green-800"
                  >
                    <PackageCheck class="h-4 w-4" aria-hidden="true" />
                    {{ product.stockQty }} in stock
                  </span>
                </div>

                <div class="mt-6 rounded-md border border-zinc-200 bg-zinc-50 p-4">
                  <p class="text-xs font-black uppercase tracking-wide text-zinc-500">Fits</p>
                  <p class="mt-1 text-lg font-black">{{ product.fitment }}</p>
                </div>

                <div class="mt-6 grid gap-3 sm:grid-cols-2">
                  <div
                    v-for="bullet in product.bullets"
                    :key="bullet"
                    class="flex gap-2 text-sm font-semibold leading-6 text-zinc-700"
                  >
                    <CheckCircle2 class="mt-0.5 h-4 w-4 shrink-0 text-red-600" aria-hidden="true" />
                    <span>{{ bullet }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <aside
            class="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm lg:sticky lg:top-60"
          >
            <p class="text-xs font-black uppercase tracking-[0.22em] text-red-600">
              Selected product
            </p>
            <div class="mt-3 flex items-end gap-3">
              <p class="text-4xl font-black">£{{ product.price.toFixed(2) }}</p>
              <p v-if="product.wasPrice" class="pb-1 text-sm font-bold text-zinc-400 line-through">
                £{{ product.wasPrice.toFixed(2) }}
              </p>
            </div>
            <p v-if="savings" class="mt-2 text-sm font-black text-red-600">
              You save £{{ savings }}
            </p>

            <label
              class="mt-5 block text-sm font-black uppercase tracking-wide text-zinc-600"
              for="quantity"
              >Quantity</label
            >
            <input
              id="quantity"
              v-model.number="quantity"
              type="number"
              min="1"
              :max="product.stockQty"
              class="mt-2 h-12 w-full rounded-md border border-zinc-300 px-4 text-lg font-black outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100"
            />

            <button
              type="button"
              class="mt-5 inline-flex h-12 w-full items-center justify-center gap-2 rounded-md bg-red-600 px-5 text-sm font-black uppercase tracking-wide text-white transition hover:bg-red-500"
              @click="addToBasket"
            >
              <ShoppingCart class="h-4 w-4" aria-hidden="true" />
              Add to basket
            </button>

            <div class="mt-5 space-y-3 border-t border-zinc-200 pt-5">
              <p class="flex items-center gap-2 text-sm font-bold text-zinc-700">
                <Truck class="h-4 w-4 text-red-600" aria-hidden="true" />
                Fast UK dispatch on stocked items
              </p>
              <p class="flex items-center gap-2 text-sm font-bold text-zinc-700">
                <ShieldCheck class="h-4 w-4 text-red-600" aria-hidden="true" />
                Fitment support before fitting
              </p>
            </div>
          </aside>
        </div>

        <div class="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_26rem]">
          <section class="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm">
            <h2 class="text-2xl font-black">Specifications</h2>
            <dl class="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <div
                v-for="spec in product.specs"
                :key="spec.label"
                class="rounded-md bg-zinc-50 p-4"
              >
                <dt class="text-xs font-black uppercase tracking-wide text-zinc-500">
                  {{ spec.label }}
                </dt>
                <dd class="mt-1 text-base font-black text-zinc-950">{{ spec.value }}</dd>
              </div>
            </dl>
          </section>

          <section class="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm">
            <h2 class="text-2xl font-black">Need help?</h2>
            <p class="mt-3 text-sm leading-6 text-zinc-600">
              Send your registration and MPH can confirm compatibility before you fit this part.
            </p>
          </section>
        </div>

        <section class="mt-8 rounded-lg border border-zinc-200 bg-white p-5 shadow-sm">
          <div class="mb-5 flex items-center justify-between gap-4">
            <h2 class="text-2xl font-black">Related products</h2>
            <RouterLink
              to="/catalogue"
              class="text-sm font-black uppercase tracking-wide text-red-600 hover:text-zinc-950"
              >View catalogue</RouterLink
            >
          </div>
          <div class="grid gap-5 md:grid-cols-3">
            <RouterLink
              v-for="related in relatedProducts"
              :key="related.id"
              :to="`/products/${related.id}`"
              class="group overflow-hidden rounded-lg border border-zinc-200 bg-white transition hover:border-red-200 hover:shadow-lg"
            >
              <div class="h-40 overflow-hidden bg-zinc-200">
                <img
                  :src="related.image"
                  :alt="related.name"
                  class="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div class="p-4">
                <p class="text-xs font-black uppercase tracking-wide text-red-600">
                  {{ related.brand }}
                </p>
                <h3 class="mt-1 min-h-12 text-base font-black leading-tight">{{ related.name }}</h3>
                <p class="mt-3 text-xl font-black">£{{ related.price.toFixed(2) }}</p>
              </div>
            </RouterLink>
          </div>
        </section>
      </div>
    </section>

    <section v-else class="px-4 py-20 sm:px-6 lg:px-8">
      <div
        class="mx-auto max-w-2xl rounded-lg border border-zinc-200 bg-white p-10 text-center shadow-sm"
      >
        <nav
          class="mb-6 flex items-center justify-center gap-2 text-sm font-bold text-zinc-500"
          aria-label="Breadcrumb"
        >
          <RouterLink to="/" class="transition hover:text-red-600">Home</RouterLink>
          <ChevronRight class="h-4 w-4" aria-hidden="true" />
          <RouterLink to="/catalogue" class="transition hover:text-red-600"
            >Parts Catalogue</RouterLink
          >
          <ChevronRight class="h-4 w-4" aria-hidden="true" />
          <span class="text-zinc-950">Product not found</span>
        </nav>
        <Box class="mx-auto h-12 w-12 text-red-600" aria-hidden="true" />
        <h1 class="mt-5 text-3xl font-black">Product not found</h1>
        <p class="mt-3 text-zinc-600">
          The part may have moved or the catalogue link is no longer available.
        </p>
        <RouterLink
          to="/catalogue"
          class="mt-6 inline-flex h-12 items-center justify-center rounded-md bg-red-600 px-6 text-sm font-black uppercase tracking-wide text-white hover:bg-red-500"
        >
          Return to catalogue
        </RouterLink>
      </div>
    </section>
  </div>
</template>
