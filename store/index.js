export const state = () => ({
  noscroll: false
})

export const mutations = {
  setScroll(state, payload) {
    state.noscroll = !payload
  }
}
