<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

import { RouterView, RouterLink } from 'vue-router';


</script>

<template>

  <nav>
    <RouterLink to="/">Counter</RouterLink> |
    <RouterLink to="/count/10">Counter à partir de 10</RouterLink> |
    <RouterLink to="/todo">Todo</RouterLink>
  </nav>

  <RouterView :key="$route.fullPath">


  </RouterView>

</template>

<style scoped>

</style>
