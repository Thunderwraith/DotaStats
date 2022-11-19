<template lang="pug">
header.header
  p header
  router-link(
    :to="{name: 'main'}"
  ) main
  router-link(
    :to="{name: 'heroes'}"
  ) heroes
router-view
footer.footer
  p footer
</template>

<script>

  import { ref } from 'vue'

  export default {
    setup() {
      const a = ref('composition variable 213')
      return {
        a
      }
    }
  }
</script>

<style lang="sass">
  #app
    display: flex
    justify-content: space-between
    flex-direction: column
    min-height: 100vh
  .header, .footer
    display: flex
    justify-content: center
    align-items: center
    height: 75px
    background: rgba(#000000, 100%)
    *
      padding: 0 10px
</style>