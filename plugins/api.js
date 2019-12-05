export default function (context, inject) {
  const api = {
    getPosts() {
      return fetch(context.env.API_URL + '/posts').then(res => res.json())
    }
  }
  inject('api', api)
  context.$api = api
}
