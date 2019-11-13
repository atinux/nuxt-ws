<template>
  <div>
    <ul>
      <li><nuxt-link to="/">Home</nuxt-link></li>
      <li><nuxt-link to="/about">About</nuxt-link></li>
      <li><nuxt-link to="/blog">Blog</nuxt-link></li>
      <li>Counter: {{ $store.state.counter }}</li>
    </ul>
    <nuxt/>
  </div>
</template>
