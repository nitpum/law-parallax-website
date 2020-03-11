<template>
  <div class="button">
    <div class="bg">
      <slot />
    </div>
    <button />
  </div>
</template>
<script>
export default {
  name: 'Button',
  props: {
    width: {
      type: Number,
      value: '200px'
    },
    height: {
      type: Number,
      value: '50px'
    }
  }
}
</script>

<style lang="scss" scoped>
.button {
  width: 100%;
  height: 100%;
  position: relative;

  .bg {
    img {
      width: 100%;
    }
  }

  button {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: transparent;
    border: transparent;
  }
}
</style>
