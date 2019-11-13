<template>
  <div>
    <h1>{{ post.title }}</h1>
    <pre>{{ post.body }}</pre>
    <nuxt-link to="/blog">Back to blog</nuxt-link>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: this.post.title,
      meta: [
        { hid: 'description', name: 'description', content: this.post.body.slice(0, 126) }
      ]
    }
  },
  async asyncData({ app, params }) {
    const post = await app.$api.post(params.id)

    return { post }
  }
}
</script>
