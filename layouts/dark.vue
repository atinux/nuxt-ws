<template>
  <div>
    <ul>
      <li><nuxt-link to="/">Home</nuxt-link></li>
      <li><nuxt-link to="/about">About</nuxt-link></li>
      <li><nuxt-link to="/blog">Blog</nuxt-link></li>
    </ul>
    <nuxt/>
  </div>
</template>

<script>
export default {
  head: {
    bodyAttrs: {
      layout: 'dark'
    }
  }
}
</script>

<style lang="scss">
body[layout="dark"] {
  background: #333;
  color: white;
  a {
    color: silver;
  }
}
</style>
