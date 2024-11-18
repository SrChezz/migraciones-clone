<script setup>
import { RouterView } from 'vue-router';
import TheSidebar from './components/TheSidebar.vue';
</script>

<template>
  <div class="min-h-screen bg-gray-100">
    <TheHeader />
    <RouterView />
    <TheFooter />
  </div>
</template>

<style>
body {
  background-color: #f7f7f7;
}
</style>
