<template>
  <div>
    <h1>Hello from {{ from }}</h1>
    <client-only placeholder="wait">
      <multiselect v-model="value" :options="options"></multiselect>
    </client-only>
    <my-button>Test</my-button>
    <div v-if="$auth.loggedIn">
      <h1>Hello {{ $auth.user.name }}</h1>
      <img :src="$auth.user.avatar_url"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Context } from '@nuxt/types'

export default {
  layout: 'dark',
  middleware: 'authenticated',
  data () {
    return {
      value: null,
      options: ['list', 'of', 'options']
    }
  },
  asyncData(context: Context) {
    return {
      from: (process.server ? 'server' : 'client')
    }
  }
}
</script>
