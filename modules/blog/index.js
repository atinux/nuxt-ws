import { join } from 'path'

export default function (moduleOptions) {
  const options = this.nuxt.options.blog
  options.url = options.url || 'https://jsonplaceholder.typicode.com'

  this.addPlugin({
    src: join(__dirname, '/plugin.js'),
    options
  })
}
