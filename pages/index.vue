<template>
  <div class="container">
    <div id="header">
      <div id="title">
        <img src="/imgs/home/title.png" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    const header = this.$scrollmagic.scene({
      triggerElement: '#header',
      triggerHook: 0
    })
  }
}
</script>

<style lang="scss">
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

#header {
  background-image: url('/imgs/home/bg.png');
  background-size: cover;
  width: 100%;
  height: 100vh;
}
</style>
