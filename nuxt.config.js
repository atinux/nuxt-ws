export default {
  mode: 'spa',
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
  env: {
    API_URL: process.env.API_URL || 'https://jsonplaceholder.typicode.com'
  },
  css: [
    '@/assets/css/main.scss',
    '@/assets/css/main.less'
  ],
  plugins: [
    '@/plugins/vue-multiselect.js',
    '@/plugins/api.js',
    '@/plugins/init.js'
  ]
}
