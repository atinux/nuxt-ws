export default async function (context, inject) {
  const url = '<%= options.url %>'
  const api = {
    posts() {
      return fetch(`${url}/posts`).then(res => res.json())
    },
    post(id) {
      return fetch(`${url}/posts/${id}`).then(res => res.json())
    }
  }

  inject('api', api)
}
