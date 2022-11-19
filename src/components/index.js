import commons from './commons'
import layouts from './layouts'

export default function iComponents(app) {
  app.use(commons)
  app.use(layouts)
}