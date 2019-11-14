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
  modules: [
    '@/modules/blog'
  ],
  blog: {
    url: 'https://jsonplaceholder.typicode.com'
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
