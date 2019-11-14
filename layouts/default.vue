<template>
  <div>
    <ul>
      <li><nuxt-link to="/">Home</nuxt-link></li>
      <li><nuxt-link to="/about">About</nuxt-link></li>
      <li><nuxt-link to="/blog">Blog</nuxt-link></li>
      <li>Counter: {{ $store.state.counter }}</li>
    </ul>
    <button @click="$store.commit('increment')">+</button>
    <button v-if="$auth.loggedIn" @click="$auth.logout()">Logout</button>
    <button v-else @click="$auth.loginWith('github')">Login with GitHub</button>
    <nuxt/>
  </div>
</template>
