<template lang="pug">
router-link.hero-card(
  :to="{name: 'single-hero', params: { name: hero.name }}"
  @mouseover='hovered = true'
  @mouseleave='hovered = false'
)
  img.hero-card__image(
    :src="`https://api.opendota.com${hero.img}`"
  )
  div.hero-card__hero-name(
    :class="{'isActive':hovered}"
  )
    p {{ hero.localized_name }}

</template> 

<script>

import { ref } from 'vue'

export default {
  name: 'hero-card',
  props: {
    hero: {},
  },
  setup() {
    const hovered = ref(false)
    return {
      hovered
    }
  }
}
</script>