<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { get, post, put, del } from '../services/apiService'

const router = useRouter()
const products = ref([])

function goToProduct(productId) {
  router.push(`/products/${productId}`)
}

onMounted(async () => {
  try {
    const response = await get('/products')
    products.value = response.data
  } catch (err) {
    console.error('Failed fetch trending products', err)
  }
})
</script>

<template>
  <div class="p-6 max-w-[100rem] mx-auto">
    <h1 class="text-5xl text-center mt-4 mb-10">Top Trending Products</h1>

    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 justify-center"
    >
      <div
        v-for="productResult in products"
        :key="productResult.id"
        class="bg-white hover:bg-red-100 cursor-pointer rounded-lg overflow-hidden shadow-lg border border-slate-200 transition w-full h-[400px] flex flex-col"
        @click="goToProduct(productResult.product.id)"
      >
        <div class="w-full flex-grow relative">
          <img
            :src="productResult.product.imageUrl"
            alt="Product Image"
            class="absolute top-0 left-0 w-full h-full object-contain p-4"
            loading="lazy"
          />
        </div>
        <div class="p-4 w-full flex flex-col">
          <p class="text-base mb-1 text-center">{{ productResult.product.description }}</p>
          <p class="text-sm text-gray-500 mb-2 text-center">
            {{ productResult.product.productCode }}
          </p>
          <p class="text-center mb-2">
            <span
              v-if="productResult.product.stockQty > 0"
              class="inline-block bg-green-200 text-green-900 px-3 py-1 rounded-full text-xs font-semibold"
            >
              In Stock ({{ productResult.product.stockQty }})
            </span>
            <span
              v-else
              class="inline-block bg-red-200 text-red-900 px-3 py-1 rounded-full text-xs font-semibold"
            >
              Out of Stock
            </span>
          </p>
          <p class="text-xl font-semibold text-center">
            £{{ productResult.sellingPrice.unitPrice.toFixed(2) }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>