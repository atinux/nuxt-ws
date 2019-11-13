<template>
  <div>
    <h1>Hello from {{ from }}</h1>
    <nuxt-link to="/">Home page</nuxt-link>
  </div>
</template>

<script>
export default {
  layout: 'dark',
  middleware: 'authenticated',
  asyncData() {
    return {
      from: (process.server ? 'server' : 'client')
    }
  }
}
</script>
