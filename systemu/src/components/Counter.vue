 
<script>
import axios from 'axios'
export default {
  async mounted() {
    await this.downloadDogPic()
  },
  data() {


    let initialValue = this.$route.params.start | 0;
    return {
      count: initialValue,
      image: ""
    }
  },

  methods: {
    async increment() {
      this.count++;
      await this.downloadDogPic()
    },
    async downloadDogPic() {
      let response = await axios.get("https://dog.ceo/api/breeds/image/random")

      this.image = response.data.message
    }
  }
}
</script>

<template>

  <p><img :src="image" width="100"></p>

  <button @click="increment()">{{ count }}</button>

</template>

<style scoped>

</style>
