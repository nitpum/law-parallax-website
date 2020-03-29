export const state = () => ({
  noscroll: false,
  audio: null,
  audioIsPlaying: false,
  bgm: null
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
  },
  setBGM(state, payload) {
    // stop current playing before set new one
    if (state.bgm != payload) {
      if (state.bgm) {
        state.bgm.pause()
      }
    }
    state.bgm = payload
    state.bgm.volume = 0.1
    state.bgm.loop = true

    state.bgm.addEventListener(
      'ended',
      function() {
        this.currentTime = 0
        if (this.paused) this.play()
      },
      false
    )
    if (state.bgm.paused) state.bgm.play()
  }
}

export const actions = {
  setAudio({ state, commit }, payload) {
    if (state.audio) state.audio.pasue()
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
