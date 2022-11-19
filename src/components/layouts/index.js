import Main from './Main.vue'
import Spage from './Spage.vue'
import Hero from './Hero.vue'

export default function iComponents(app) {
  app.component(Main.name, Main)
  app.component(Spage.name, Spage)
  app.component(Hero.name, Hero)
}