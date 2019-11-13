export default function ({ store, redirect, error }) {
  if (store.state.counter === 3) {
    return redirect('/')
  }
  if (store.state.counter > 3) {
    return error({ statusCode: 401, message: 'Counter too high' })
  }
}
