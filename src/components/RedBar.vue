<template>
  <div class="bg-red-600 text-white relative overflow-hidden h-12">
    <transition name="fade">
      <div
        :key="current"
        class="absolute inset-0 flex items-center justify-center px-4 text-center"
      >
        {{ messages[current] }}
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const messages = [
  'UNSURE IF THE PART WILL FIT? SEND US YOUR REGISTRATION AND WE WILL CONFIRM COMPATIBILITY!',
  'PLEASE USE THE LIVE CHAT OR CONTACT FORM IF YOU NEED ANY HELP!',
]

const current = ref(0)
let timer = null

onMounted(() => {
  timer = setInterval(() => {
    current.value = (current.value + 1) % messages.length
  }, 10000)
})
onBeforeUnmount(() => {
  clearInterval(timer)
})
</script>

<style scoped>
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}
</style>
