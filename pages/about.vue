<template>
  <div>
    <h1>Hello from {{ from }}</h1>
    <client-only placeholder="wait">
      <multiselect v-model="value" :options="options"></multiselect>
    </client-only>
    <nuxt-link to="/">Home page</nuxt-link>
    <my-button>Test</my-button>
  </div>
</template>

<script>
export default {
  layout: 'dark',
  middleware: 'authenticated',
  data () {
    return {
      value: null,
      options: ['list', 'of', 'options']
    }
  },
  asyncData() {
    return {
      from: (process.server ? 'server' : 'client')
    }
  }
}
</script>
