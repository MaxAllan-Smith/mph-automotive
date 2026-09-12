<script setup>
import { computed, ref, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import {
  ArrowUpDown,
  BadgeCheck,
  Car,
  Check,
  ChevronRight,
  Filter,
  Search,
  ShoppingCart,
  SlidersHorizontal,
  Star,
} from '@lucide/vue'
import { categories, products } from '@/data/catalogue'

const route = useRoute()
const activeCategory = ref('all')
const searchTerm = ref('')
const sortBy = ref('featured')
const stockOnly = ref(false)
const selectedBrands = ref([])

const brands = computed(() => [...new Set(products.map((product) => product.brand))].sort())
const activeCategoryName = computed(() => {
  if (activeCategory.value === 'all') return 'All parts'

  return categories.find((category) => category.id === activeCategory.value)?.name || 'All parts'
})

function categoryProductCount(categoryId) {
  return products.filter((product) => product.categoryId === categoryId).length
}

function brandProductCount(brand) {
  return products.filter((product) => product.brand === brand).length
}

const filteredProducts = computed(() => {
  const query = searchTerm.value.trim().toLowerCase()

  return products
    .filter(
      (product) => activeCategory.value === 'all' || product.categoryId === activeCategory.value,
    )
    .filter((product) => !stockOnly.value || product.stockQty > 0)
    .filter(
      (product) =>
        selectedBrands.value.length === 0 || selectedBrands.value.includes(product.brand),
    )
    .filter((product) => {
      if (!query) return true

      return [product.name, product.brand, product.code, product.fitment, product.categoryGroup]
        .join(' ')
        .toLowerCase()
        .includes(query)
    })
    .sort((first, second) => {
      if (sortBy.value === 'price-low') return first.price - second.price
      if (sortBy.value === 'price-high') return second.price - first.price
      if (sortBy.value === 'rating') return second.rating - first.rating
      if (sortBy.value === 'stock') return second.stockQty - first.stockQty

      return second.reviews - first.reviews
    })
})

const groupedProducts = computed(() => {
  return filteredProducts.value.reduce((groups, product) => {
    if (!groups[product.categoryGroup]) groups[product.categoryGroup] = []
    groups[product.categoryGroup].push(product)
    return groups
  }, {})
})

function toggleBrand(brand) {
  if (selectedBrands.value.includes(brand)) {
    selectedBrands.value = selectedBrands.value.filter((item) => item !== brand)
    return
  }

  selectedBrands.value = [...selectedBrands.value, brand]
}

function resetFilters() {
  activeCategory.value = 'all'
  searchTerm.value = ''
  sortBy.value = 'featured'
  stockOnly.value = false
  selectedBrands.value = []
}

watch(
  () => [route.query.category, route.query.q],
  ([categoryId, query]) => {
    searchTerm.value = typeof query === 'string' ? query : ''

    if (!categoryId) {
      activeCategory.value = 'all'
      return
    }

    activeCategory.value = categories.some((category) => category.id === categoryId)
      ? categoryId
      : 'all'
  },
  { immediate: true },
)
</script>

<template>
  <section id="catalogue" class="bg-zinc-100 px-4 py-10 text-zinc-950 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-7xl">
      <nav
        class="mb-6 flex items-center gap-2 text-sm font-bold text-zinc-500"
        aria-label="Breadcrumb"
      >
        <RouterLink to="/" class="transition hover:text-red-600">Home</RouterLink>
        <ChevronRight class="h-4 w-4" aria-hidden="true" />
        <span class="text-zinc-950">Parts Catalogue</span>
      </nav>

      <div class="mb-7 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
        <div>
          <p class="text-xs font-black uppercase tracking-[0.24em] text-red-600">
            Automotive product catalogue
          </p>
          <h2 class="mt-2 text-4xl font-black tracking-tight">Find the right part faster</h2>
          <p class="mt-3 max-w-3xl text-sm leading-6 text-zinc-600">
            Narrow the catalogue from the left, sort the results above the grid, then open a
            dedicated product page for fitment, specification and ordering detail.
          </p>
        </div>
        <div
          class="inline-flex w-fit items-center gap-2 rounded-md bg-zinc-950 px-3 py-2 text-sm font-black text-white"
        >
          <Car class="h-4 w-4 text-red-400" aria-hidden="true" />
          {{ filteredProducts.length }} matching parts
        </div>
      </div>

      <div class="grid gap-6 lg:grid-cols-[18rem_1fr]">
        <aside class="lg:sticky lg:top-60 lg:self-start">
          <div
            class="overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-xl shadow-zinc-950/5"
          >
            <div class="bg-zinc-950 p-5 text-white">
              <div class="flex items-center justify-between gap-4">
                <div class="flex items-center gap-2 text-sm font-black uppercase tracking-wide">
                  <SlidersHorizontal class="h-4 w-4 text-red-300" aria-hidden="true" />
                  Filters
                </div>
                <button
                  type="button"
                  class="text-xs font-black uppercase tracking-wide text-red-300 hover:text-white"
                  @click="resetFilters"
                >
                  Reset
                </button>
              </div>
              <p class="mt-2 text-xs leading-5 text-zinc-300">
                Refine by category, brand, stock and search term.
              </p>
            </div>

            <div class="space-y-6 p-5">
              <div>
                <label class="mb-2 block text-xs font-black uppercase tracking-wide text-zinc-500"
                  >Search parts</label
                >
                <div class="relative">
                  <Search
                    class="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400"
                    aria-hidden="true"
                  />
                  <input
                    v-model="searchTerm"
                    type="search"
                    placeholder="Part, code, vehicle..."
                    class="h-11 w-full rounded-md border border-zinc-300 bg-white pl-10 pr-3 text-sm font-semibold outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-100"
                  />
                </div>
              </div>

              <div>
                <p class="mb-3 text-xs font-black uppercase tracking-wide text-zinc-500">
                  Categories
                </p>
                <div class="space-y-2">
                  <button
                    type="button"
                    :class="[
                      'flex w-full items-center justify-between rounded-md border px-3 py-2.5 text-left text-sm font-black transition',
                      activeCategory === 'all'
                        ? 'border-red-600 bg-red-600 text-white'
                        : 'border-zinc-200 bg-white text-zinc-800 hover:border-red-200 hover:bg-red-50',
                    ]"
                    @click="activeCategory = 'all'"
                  >
                    <span>All parts</span>
                    <span class="text-xs opacity-75">{{ products.length }}</span>
                  </button>
                  <button
                    v-for="category in categories"
                    :key="category.id"
                    type="button"
                    :class="[
                      'flex w-full items-center justify-between rounded-md border px-3 py-2.5 text-left text-sm font-black transition',
                      activeCategory === category.id
                        ? 'border-red-600 bg-red-600 text-white'
                        : 'border-zinc-200 bg-white text-zinc-800 hover:border-red-200 hover:bg-red-50',
                    ]"
                    @click="activeCategory = category.id"
                  >
                    <span>{{ category.name }}</span>
                    <span class="text-xs opacity-75">{{ categoryProductCount(category.id) }}</span>
                  </button>
                </div>
              </div>

              <div>
                <p class="mb-3 text-xs font-black uppercase tracking-wide text-zinc-500">Brand</p>
                <div class="space-y-2">
                  <label
                    v-for="brand in brands"
                    :key="brand"
                    class="flex cursor-pointer items-center justify-between gap-3 rounded-md border border-zinc-200 px-3 py-2.5 text-sm font-bold transition hover:border-red-200 hover:bg-red-50"
                  >
                    <span class="flex min-w-0 items-center gap-2">
                      <input
                        type="checkbox"
                        class="h-4 w-4 rounded border-zinc-300 text-red-600 focus:ring-red-500"
                        :checked="selectedBrands.includes(brand)"
                        @change="toggleBrand(brand)"
                      />
                      <span class="truncate">{{ brand }}</span>
                    </span>
                    <span class="text-xs text-zinc-400">{{ brandProductCount(brand) }}</span>
                  </label>
                </div>
              </div>

              <button
                type="button"
                :class="[
                  'inline-flex h-11 w-full items-center justify-center gap-2 rounded-md px-4 text-sm font-black uppercase tracking-wide transition',
                  stockOnly ? 'bg-red-600 text-white' : 'bg-zinc-950 text-white hover:bg-red-600',
                ]"
                @click="stockOnly = !stockOnly"
              >
                <Check class="h-4 w-4" aria-hidden="true" />
                In stock only
              </button>
            </div>
          </div>
        </aside>

        <div>
          <div class="mb-5 rounded-lg border border-zinc-200 bg-white p-4 shadow-sm">
            <div class="flex flex-col justify-between gap-4 md:flex-row md:items-center">
              <div>
                <p class="text-xs font-black uppercase tracking-wide text-red-600">
                  {{ activeCategoryName }}
                </p>
                <h3 class="mt-1 text-2xl font-black">{{ filteredProducts.length }} parts found</h3>
              </div>
              <label class="relative block w-full md:w-64">
                <span class="sr-only">Sort products</span>
                <ArrowUpDown
                  class="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400"
                  aria-hidden="true"
                />
                <select
                  v-model="sortBy"
                  class="h-12 w-full appearance-none rounded-md border border-zinc-300 bg-white pl-11 pr-4 text-sm font-black text-zinc-950 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-100"
                >
                  <option value="featured">Featured first</option>
                  <option value="price-low">Price: low to high</option>
                  <option value="price-high">Price: high to low</option>
                  <option value="rating">Highest rated</option>
                  <option value="stock">Most stock</option>
                </select>
              </label>
            </div>
          </div>

          <div v-if="filteredProducts.length" class="space-y-10">
            <div v-for="(groupProducts, groupName) in groupedProducts" :key="groupName">
              <div
                class="mb-4 flex items-center justify-between gap-4 border-b border-zinc-300 pb-3"
              >
                <h3 class="text-2xl font-black">{{ groupName }}</h3>
                <span class="text-sm font-black uppercase tracking-wide text-red-600"
                  >{{ groupProducts.length }} shown</span
                >
              </div>

              <div class="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                <article
                  v-for="product in groupProducts"
                  :key="product.id"
                  class="overflow-hidden rounded-lg border border-zinc-200 bg-white text-zinc-950 shadow-sm transition hover:-translate-y-1 hover:border-red-200 hover:shadow-xl hover:shadow-red-950/10"
                >
                  <RouterLink :to="`/products/${product.id}`" class="block">
                    <div class="relative h-56 overflow-hidden bg-zinc-200">
                      <img
                        :src="product.image"
                        :alt="product.name"
                        class="h-full w-full object-cover transition duration-500 hover:scale-105"
                        loading="lazy"
                      />
                      <span
                        class="absolute left-3 top-3 rounded-md bg-red-600 px-2.5 py-1 text-xs font-black uppercase tracking-wide text-white"
                      >
                        {{ product.tag }}
                      </span>
                      <span
                        class="absolute right-3 top-3 rounded-md bg-white px-2.5 py-1 text-xs font-black uppercase tracking-wide text-zinc-950"
                      >
                        {{ product.stockQty }} in stock
                      </span>
                    </div>
                    <div class="p-5">
                      <div class="flex items-center justify-between gap-3">
                        <p class="text-xs font-black uppercase tracking-wide text-zinc-500">
                          {{ product.code }}
                        </p>
                        <p class="inline-flex items-center gap-1 text-xs font-black text-zinc-700">
                          <Star class="h-3.5 w-3.5 fill-red-600 text-red-600" aria-hidden="true" />
                          {{ product.rating }}
                        </p>
                      </div>
                      <h4 class="mt-2 min-h-14 text-xl font-black leading-tight">
                        {{ product.name }}
                      </h4>
                      <p class="mt-2 text-sm font-bold text-red-600">
                        {{ product.brand }} · {{ product.badge }}
                      </p>
                      <p class="mt-3 text-sm leading-6 text-zinc-600">
                        Fits: {{ product.fitment }}
                      </p>
                      <div class="mt-5 flex items-center justify-between gap-4">
                        <div>
                          <p class="text-2xl font-black">£{{ product.price.toFixed(2) }}</p>
                          <p
                            v-if="product.wasPrice"
                            class="text-xs font-bold text-zinc-400 line-through"
                          >
                            £{{ product.wasPrice.toFixed(2) }}
                          </p>
                        </div>
                        <span
                          class="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-zinc-950 px-4 text-sm font-black uppercase tracking-wide text-white transition hover:bg-red-600"
                        >
                          Details
                          <ChevronRight class="h-4 w-4" aria-hidden="true" />
                        </span>
                      </div>
                    </div>
                  </RouterLink>
                </article>
              </div>
            </div>
          </div>

          <div v-else class="rounded-lg border border-zinc-200 bg-white p-10 text-center shadow-sm">
            <Filter class="mx-auto h-10 w-10 text-red-600" aria-hidden="true" />
            <h3 class="mt-4 text-2xl font-black">No parts match those filters</h3>
            <p class="mt-2 text-sm text-zinc-600">
              Clear the filters or search by a broader product, brand or vehicle term.
            </p>
            <button
              type="button"
              class="mt-5 inline-flex h-11 items-center justify-center rounded-md bg-red-600 px-5 text-sm font-black uppercase tracking-wide text-white hover:bg-red-500"
              @click="resetFilters"
            >
              Reset catalogue
            </button>
          </div>
        </div>
      </div>

      <div class="mt-10 grid gap-4 lg:grid-cols-3">
        <div class="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm">
          <BadgeCheck class="h-6 w-6 text-red-600" aria-hidden="true" />
          <h3 class="mt-4 text-xl font-black">Fitment confidence</h3>
          <p class="mt-2 text-sm leading-6 text-zinc-600">
            Every product card carries practical fitment text and full detail pages include
            compatibility notes.
          </p>
        </div>
        <div class="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm">
          <ShoppingCart class="h-6 w-6 text-red-600" aria-hidden="true" />
          <h3 class="mt-4 text-xl font-black">Basket-ready layout</h3>
          <p class="mt-2 text-sm leading-6 text-zinc-600">
            The detail pages include quantity controls, dispatch messaging, returns notes and
            related products.
          </p>
        </div>
        <div class="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm">
          <Star class="h-6 w-6 text-red-600" aria-hidden="true" />
          <h3 class="mt-4 text-xl font-black">Trade-grade comparison</h3>
          <p class="mt-2 text-sm leading-6 text-zinc-600">
            Sort by price, rating or stock to make fast workshop purchasing decisions.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
