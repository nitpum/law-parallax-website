<template>
  <div>
    <nuxt />
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  middleware: 'default',
  head() {
    return {
      bodyAttrs: {
        class: this.noscroll ? 'noscroll' : ''
      }
    }
  },
  computed: {
    ...mapState(['noscroll'])
  },
  beforeMounted() {
    this.$store.dispatch('setAudio', null)
  }
}
</script>

<style lang="scss">
* {
  cursor: url('/imgs/cursor.png'), auto;
}
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
.noscroll {
  overflow: hidden;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

button {
  &:hover,
  &:focus {
    transition: all 0.2s ease;
    transform: scale(1.2);
  }
}
</style>
