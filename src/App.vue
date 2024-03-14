<script setup>
import {RouterView} from 'vue-router';
import Header from '@/components/Header.vue';
import './assets/main.css';
</script>

<template>
  <header class="bg-black">
    <Header></Header>
  </header>

  <div class="container mx-auto pt-8">

    <div class="container max-lg:mx-auto">
      <RouterView/>
    </div>
  </div>
</template>

<style scoped>

</style>
