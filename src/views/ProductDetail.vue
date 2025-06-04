<!-- src/views/ProductDetail.vue -->
<script setup>
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import apiClient from '@/services/apiService'

const route = useRoute()
const router = useRouter()

// Main product data
const productResult = ref(null)
const isLoading = ref(true)
const error = ref(null)

// Quantity selector
const quantity = ref(1)

// Related products
const relatedProducts = ref([])
const isRelatedLoading = ref(false)
const relatedError = ref(null)

async function fetchProduct() {
  isLoading.value = true
  error.value = null

  try {
    const productId = route.params.id
    const response = await apiClient.get(`/products/${productId}`)
    productResult.value = response.data
    // After loading main product, fetch related items
    fetchRelatedProducts(productId)
  } catch (err) {
    console.error('Failed to get product details:', err)
    error.value = 'Could not load product. Please try again later.'
  } finally {
    isLoading.value = false
  }
}

async function fetchRelatedProducts(productId) {
  isRelatedLoading.value = true
  relatedError.value = null

  try {
    // Adjust this endpoint as needed; assumes your backend supports /products/{id}/related
    const response = await apiClient.get(`/products/${productId}/related`)
    relatedProducts.value = response.data
  } catch (err) {
    console.error('Failed to fetch related products:', err)
    relatedError.value = 'Could not load related products.'
  } finally {
    isRelatedLoading.value = false
  }
}

// Add to basket handler (stubbed; replace with real API call)
async function addToBasket() {
  if (!productResult.value) return

  try {
    const productId = productResult.value.product.id
    await apiClient.post('/basket', {
      productId,
      quantity: quantity.value,
    })
    // Optionally show a success message or notification
    alert(`Added ${quantity.value} × “${productResult.value.product.description}” to your basket.`)
  } catch (err) {
    console.error('Failed to add to basket:', err)
    alert('Could not add to basket. Please try again.')
  }
}

// Buy now handler (stubbed; adjust as needed)
function buyNow() {
  if (!productResult.value) return
  const productId = productResult.value.product.id
  // Example: navigate to a checkout page with query params
  router.push({
    name: 'Checkout',
    query: { productId, qty: quantity.value },
  })
}

function goBack() {
  router.back()
}

onMounted(fetchProduct)
</script>

<template>
  <div class="p-6 max-w-[80rem] mx-auto">
    <!-- Back button -->
    <button @click="goBack" class="mb-6 inline-flex items-center text-blue-600 hover:text-blue-800">
      ← Back
    </button>

    <!-- Loading state -->
    <div v-if="isLoading" class="text-center py-20">
      <p class="text-lg text-gray-500">Loading product…</p>
    </div>

    <!-- Error state -->
    <div v-else-if="error" class="text-center py-20">
      <p class="text-red-600">{{ error }}</p>
    </div>

    <!-- Product details -->
    <div v-else-if="productResult" class="space-y-12">
      <!-- Top: Image + Info -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Left side: image -->
        <div
          class="w-full h-[400px] flex items-center justify-center border border-slate-200 rounded-lg overflow-hidden bg-white"
        >
          <img
            :src="productResult.product.imageUrl"
            alt="Product Image"
            class="object-contain max-h-full max-w-full p-4"
            loading="lazy"
          />
        </div>

        <!-- Right side: info -->
        <div class="flex flex-col">
          <!-- Title and code -->
          <div>
            <h1 class="text-3xl font-bold mb-2">
              {{ productResult.product.description }}
            </h1>
            <p class="text-md text-gray-700 mb-4">
              <strong>Product Code:</strong>
              {{ productResult.product.productCode }}
            </p>
          </div>

          <!-- Quantity selector and buttons -->
          <div class="flex items-center space-x-4 mb-6">
            <div>
              <label for="qty" class="block text-sm font-medium text-gray-700 mb-1">
                Quantity
              </label>
              <input
                id="qty"
                type="number"
                v-model.number="quantity"
                :min="1"
                :max="productResult.product.stockQty || 1"
                class="w-20 border border-gray-300 rounded-md p-2 text-center"
              />
            </div>
            <button
              @click="addToBasket"
              :disabled="productResult.product.stockQty === 0"
              class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
            >
              Add to Basket
            </button>
            <button
              @click="buyNow"
              :disabled="productResult.product.stockQty === 0"
              class="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:opacity-50"
            >
              Buy Now
            </button>
          </div>

          <!-- Long description -->
          <div>
            <h2 class="text-xl font-semibold mb-2">Product Details</h2>
            <p class="text-gray-700">
              {{ productResult.longDescription || 'No further details available.' }}
            </p>
          </div>
        </div>
      </div>

      <!-- Related Products -->
      <div class="mt-12">
        <h2 class="text-2xl font-bold mb-6">Related Products</h2>

        <!-- Related loading / error -->
        <div v-if="isRelatedLoading" class="text-center py-10">
          <p class="text-gray-500">Loading related products…</p>
        </div>
        <div v-else-if="relatedError" class="text-center py-10">
          <p class="text-red-600">{{ relatedError }}</p>
        </div>

        <!-- Related grid -->
        <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div
            v-for="item in relatedProducts"
            :key="item.product.id"
            @click="router.push(`/products/${item.product.id}`)"
            class="cursor-pointer bg-white hover:bg-gray-100 rounded-lg overflow-hidden shadow border border-slate-200 transition flex flex-col"
          >
            <div class="w-full h-[200px] relative">
              <img
                :src="item.product.imageUrl"
                alt="Related Product"
                class="absolute top-0 left-0 w-full h-full object-contain p-4"
                loading="lazy"
              />
            </div>
            <div class="p-4 flex flex-col flex-grow">
              <p class="text-base mb-1 text-center">
                {{ item.product.description }}
              </p>
              <p class="text-center mb-2">
                <span
                  v-if="item.product.stockQty > 0"
                  class="inline-block bg-green-200 text-green-900 px-2 py-1 rounded-full text-xs font-semibold"
                >
                  In Stock
                </span>
                <span
                  v-else
                  class="inline-block bg-red-200 text-red-900 px-2 py-1 rounded-full text-xs font-semibold"
                >
                  Out of Stock
                </span>
              </p>
              <p class="text-lg font-semibold text-center mt-auto">
                £{{ (item.sellingPrice?.unitPrice || 0).toFixed(2) }}
              </p>
            </div>
          </div>
        </div>

        <!-- No related fallback -->
        <div
          v-if="!isRelatedLoading && !relatedError && relatedProducts.length === 0"
          class="text-center py-10 text-gray-500"
        >
          No related products found.
        </div>
      </div>
    </div>

    <!-- In case API returns null or empty object -->
    <div v-else class="text-center py-20">
      <p class="text-gray-500">No product data available.</p>
    </div>
  </div>
</template>

<style scoped>
/* (Optional) Page‐specific overrides */
</style>
