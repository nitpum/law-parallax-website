<template>
  <div>
    <section id="header"></section>
  </div>
</template>

<script>
var header
export default {
  mounted() {
    header = this.$scrollmagic.scene({
      triggerElement: '#header',
      triggerHook: 0,
      duration: 2000
    })
    this.$scrollmagic.addScene(header)
  },
  beforeDestroy() {
    this.$scrollmagic.removeScene(header)
  }
}
</script>
