<template>
  <div>
    <ul>
      <li v-for="post of posts" :key="post.id">
        <nuxt-link :to="`/blog/${post.id}`">{{ post.title }}</nuxt-link>
      </li>
    </ul>
    <nuxt-child v-if="$route.params.id" :key="$route.params.id"/>
  </div>
</template>

<script>
export default {
  head: {
    title: 'Blog'
  },
  async asyncData() {
    const posts = await fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json())

    return { posts: posts.slice(0, 10) }
  }
}
</script>
