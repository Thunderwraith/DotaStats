<template lang="pug">
section.default-layout
  .container
    .row
      hero-card(
        v-for='item in heroesStore.heroesWithStats'
        :key='item.id'
        :hero='item'
      )
</template>

<script>

import { onMounted } from "vue";
import { useHeroesStore } from '@store/heroes'

export default {
  setup() {
    const name = 'spage'
    const heroesStore = useHeroesStore()
    const mounted = onMounted(() => {
      heroesStore.getHeroes()
      heroesStore.getStats()
    })

    return {
      name,
      heroesStore,
      mounted
    }
  },
}
</script>