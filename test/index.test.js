import { resolve } from 'path'
import { Nuxt, Builder } from 'nuxt'

let nuxt

describe('basic browser', () => {
  beforeAll(async () => {
    const rootDir = resolve(__dirname, '..')
    let config = {}
    try { config = require(resolve(rootDir, 'nuxt.config.js')) } catch (e) {}
    config = config.default || config
    config.rootDir = rootDir // project folder
    config.dev = false // production build
    nuxt = new Nuxt(config)
    await nuxt.ready()
    nuxt.server.listen(4000, 'localhost')
  })

  test('Open /', async () => {
    const { html } = await nuxt.renderRoute('/', {})
    expect(html).toContain('<h1>Hello world!</h1>')
  })

  afterAll(async () => {
    await nuxt.close()
  })
})
