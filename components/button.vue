<template>
  <div class="button">
    <div class="bg">
      <slot />
    </div>
    <button @click="$emit('onClick')" />
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
  transition: all 0.2s ease;
  &:hover,
  &:focus {
    transform: scale(1.1);
  }

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
    border: 0px transparent;
    outline: none;
  }
}
</style>
