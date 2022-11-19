<template lang="pug">
section.default-layout
  .hero-wrapper
    .hero-vid
      video.video(
        autoplay
        muted 
        loop
      )
        source(
          :src="`https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/${pageName.replace('npc_dota_hero_', '')}.webm`"
        )

</template>

<script>

import { useRoute } from 'vue-router'

export default {
  name: 'hero',
  setup() {
    const route = useRoute()
    const pageName = route.params.name

    return {
      pageName
    }
  },
}
</script>