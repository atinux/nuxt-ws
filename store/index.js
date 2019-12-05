export const state = () => {
  return {
    counter: 0,
  }
}

export const mutations = {
  increment(state) {
    state.counter++
  }
}

export const actions = {
  async nuxtClientInit({ commit }) {
    commit('increment')
  }
}
