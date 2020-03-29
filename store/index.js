export const state = () => ({
  noscroll: false,
  audio: null,
  audioIsPlaying: false
})

export const mutations = {
  setScroll(state, payload) {
    state.noscroll = !payload
  },
  setAudioIsPlaying(state, payload) {
    state.audioIsPlaying = payload
  },
  setAudio(state, payload) {
    state.audio = payload
  }
}

export const actions = {
  setAudio({ commit }, payload) {
    commit('setAudio', payload)
    commit('setAudioIsPlaying', false)
  },
  playAudio({ state, commit }, payload) {
    if (!state.audio) return
    if (payload === true) {
      commit('setAudioIsPlaying', true)
      return state.audio.play()
    }
    commit('setAudioIsPlaying', false)
    return state.audio.pause()
  },
  toggleAudio({ state, commit }) {
    if (!state.audio) return
    if (state.audio.paused) {
      commit('setAudioIsPlaying', true)
      state.audio.play()
    } else {
      commit('setAudioIsPlaying', false)
      state.audio.pause()
    }
  },
  removeAudio({ state, commit }) {
    if (state.audio) {
      state.audio.pause()
      state.audio.currentTime = 0
      commit('setAudio', null)
      commit('setAudioIsPlaying', false)
    }
  }
}
