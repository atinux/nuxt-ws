<template>
  <div>
    <h1>Hello from {{ from }}</h1>
    <nuxt-link to="/">Home page</nuxt-link>
    <button @click="$store.commit('increment')">+</button>
  </div>
</template>

<script>
export default {
  layout: 'dark',
  asyncData() {
    return {
      from: (process.server ? 'server' : 'client')
    }
  }
}
</script>
