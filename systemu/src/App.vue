<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Counter from './components/Counter.vue'
import Todo from "./components/Todo.vue"
import { RouterView, RouterLink } from 'vue-router';

</script>

<template>

  <nav>
    <RouterLink to="/">Counter</RouterLink> |
    <RouterLink to="/todo">Todo</RouterLink>
  </nav>

  <RouterView></RouterView>
</template>

<style scoped>

</style>
