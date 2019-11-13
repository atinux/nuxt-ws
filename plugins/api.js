export default async function (context, inject) {
  const api = {
    posts() {
      return fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json())
    }
  }

  inject('api', api)
}
