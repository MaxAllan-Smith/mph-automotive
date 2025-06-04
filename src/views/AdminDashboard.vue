<script setup>
// You can later fetch real data and compute these stats
const stats = [
  { label: 'Total Products', value: 128 },
  { label: 'Total Customers', value: 320 },
  { label: 'Monthly Revenue', value: '£12,450' },
  { label: 'Orders This Month', value: 58 },
]
</script>

<template>
  <div class="space-y-8">
    <!-- Welcome Title -->
    <div class="mb-6">
      <h2 class="text-2xl font-bold text-gray-800">Welcome back, Admin 👋</h2>
      <p class="text-gray-500 mt-1">Here's what's happening in your store today.</p>
    </div>

    <!-- Stats Cards -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <div
        v-for="(stat, index) in stats"
        :key="index"
        class="bg-white shadow-md rounded-xl p-5 border border-gray-200"
      >
        <p class="text-sm text-gray-500">{{ stat.label }}</p>
        <p class="mt-2 text-2xl font-semibold text-gray-900">{{ stat.value }}</p>
      </div>
    </div>

    <!-- Chart/Activity Section -->
    <div class="bg-white rounded-xl shadow-md border border-gray-200 p-6">
      <h3 class="text-lg font-semibold text-gray-800 mb-4">Recent Activity / Placeholder Chart</h3>
      <div class="text-gray-500 italic">Analytics coming soon...</div>
      <!-- You can later add a chart.js or echarts component here -->
    </div>
  </div>
</template>
