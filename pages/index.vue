<template>
  <div>
    <h1>Hello world!</h1>
    <nuxt-link to="/about">About page</nuxt-link>
    <nuxt-link to="/blog">Blog</nuxt-link>
    <multiselect v-model="value" :options="options"></multiselect>
    <my-button>Test</my-button>
  </div>
</template>

<script>
export default {
  head: {
    title: 'Home page'
  },
  data () {
    return {
      value: null,
      options: ['list', 'of', 'options']
    }
  },
}
</script>
