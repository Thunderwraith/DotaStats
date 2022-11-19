import { ref, inject, computed } from 'vue'
import { defineStore } from 'pinia'


export const useHeroesStore = defineStore('heroes', () => {

  const axios = inject('axios')

  const heroes = ref([])
  const heroesStats = ref([])

  const heroesWithStats = computed(() => {
    const result = []
    heroes.value.forEach(hero => {
      const stat = heroesStats.value.find(stat => stat.id === hero.id)
      const el = { ...hero, ...stat }
      result.push(el)
    })
    return result
  })

  const getHeroes = () => {
    const url = 'https://api.opendota.com/api/heroes'
    axios.get(url)
      .then(({ data }) => {
        heroes.value = data.sort((a, b) => a.localized_name > b.localized_name ? 1 : -1)
      })
  }

  const getStats = () => {
    const url = 'https://api.opendota.com/api/heroStats'
    axios.get(url)
      .then(({ data }) => {
        heroesStats.value = data
      })
  }

  return {
    heroes,
    heroesWithStats,
    getHeroes,
    getStats,
  }
})
