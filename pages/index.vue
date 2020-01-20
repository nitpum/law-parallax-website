<template>
  <div class="container">
    <div id="header">
      <div class="star"></div>
      <div class="cloud"></div>
      <div id="title">
        <img src="/imgs/home/title.png" />
      </div>
      <div class="footer">
        <img src="/imgs/home/scene2/top.png" />
      </div>
    </div>
    <div id="scene2"></div>
  </div>
</template>

<script>
import { TweenMax } from 'gsap'

export default {
  mounted() {
    const header = this.$scrollmagic
      .scene({
        triggerElement: '#header',
        triggerHook: 'onEnter'
      })
      .on('leave', function(event) {})

    const scene2 = this.$scrollmagic
      .scene({
        triggerElement: '#scene2',
        triggerHook: 1,
        duration: 2000
      })
      .setTween(
        TweenMax.to('#title', 1, {
          y: '200%'
        })
      )

    this.$scrollmagic.addScene(header)
    this.$scrollmagic.addScene(scene2)

    this.$scrollmagic.handleScrollTo = function(target) {
      TweenMax.to(window, 0.5, {
        scrollTo: {
          y: target
        }
      })
    }
  }
}
</script>

<style lang="scss">
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

#header {
  background-image: url('/imgs/home/bg.png');
  background-size: cover;
  width: 100%;
  height: 100vh;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .star {
    background-image: url('/imgs/home/star.png');
    width: 100%;
    height: 100%;
    position: absolute;
    display: none;
  }

  .cloud {
    background-image: url('/imgs/home/cloud.png');
    background-size: cover;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 0;
  }

  #title {
    width: 100%;
    max-width: 50%;
    z-index: 1;
    img {
      max-width: 100%;
    }
  }

  .footer {
    position: absolute;
    bottom: -10%;
    left: 0;
    right: 0;
    z-index: 2;
    img {
      width: 100%;
      height: auto;
    }
  }
}

#scene2 {
  position: relative;
  width: 100%;
  height: 200vh;
  z-index: 2;
  background-color: #ffffff;
}
</style>
