<template>
  <div class="wrapper">
    <section id="scene1"></section>
  </div>
</template>

<script>
import { commit } from 'vuex'
import { TweenMax, TimelineMax } from 'gsap'
import Button from '@/components/button'

var scene1, title, fire, burned_town, burned_text, burned_text2, detail

export default {
  components: {
    Button
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  overflow: hidden;
}
</style>
