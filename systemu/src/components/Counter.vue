 
<script>
export default {

  data() {
    let initialValue = this.$route.params.start | 0;
    return {
      count: initialValue
    }
  },
}
</script>

<template>
  <button @click="count++">{{ count }}</button>

</template>

<style scoped>

</style>
