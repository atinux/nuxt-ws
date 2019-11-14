import fetch from 'node-fetch'

export default {
  head: {
    title: 'Hello Workshop',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Basic description' }
    ],
    link: [
      // { rel: "stylesheet", href: "https://cdn.jsdelivr.net/gh/kognise/water.css@latest/dist/dark.min.css" }
    ]
  },
  generate: {
    async routes() {
      const posts: any[] = await fetch('https://jsonplaceholder.typicode.com/posts', {}).then(res => res.json())

      let routes = ['/blog']
      routes = routes.concat(posts.map(post => `/blog/${post.id}`))

      return routes
    }
  },
  buildModules: [
    '@nuxt/typescript-build'
  ],
  modules: [
    '@/modules/blog',
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    '@nuxtjs/pwa'
  ],
  blog: {
    url: 'https://jsonplaceholder.typicode.com'
  },
  auth: {
    redirect: {
      callback: '/callback'
    },
    // Options
    strategies: {
      github: {
        client_id: '4420a6ce8bcdf49d97a5',
        client_secret: '<REPLACE WITH SLACK MESSAGE>'
      }
    }
  },
  css: [
    '@/assets/css/main.scss',
    '@/assets/css/main.less'
  ],
  plugins: [
    '@/plugins/vue-multiselect',
    '@/plugins/components'
  ]
}
