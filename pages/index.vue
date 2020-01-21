<template>
  <div class="container">
    <section id="scene1">
      <div class="star"></div>
      <div class="cloud"></div>
      <div id="title">
        <img src="/imgs/home/title.png" />
      </div>
      <div class="footer">
        <img src="/imgs/home/scene2/top.png" />
      </div>
    </section>
    <section id="scene2">
      <div class="paper">
        <div id="paper_top">
          <img class="paper-edge" src="/imgs/home/scene2/paper_top.svg" />
        </div>
        <div id="paper_body">
          <img id="paper_text" src="/imgs/home/scene2/paper_text.png" />
        </div>
        <div id="paper_bottom">
          <div id="paper_cloud">
            <img src="/imgs/home/scene2/paper_bottom.svg" />
          </div>
          <img class="paper-edge" src="/imgs/home/scene2/paper_top.svg" />
        </div>
      </div>
    </section>
    <section id="scene3"></section>
  </div>
</template>

<script>
import { TweenMax, TimelineMax } from 'gsap'

var scene1, scene2

export default {
  mounted() {
    scene1 = this.$scrollmagic
      .scene({
        triggerElement: '#scene1',
        triggerHook: 0,
        duration: 1000
      })
      .setTween(
        TweenMax.to('#title', 1, {
          y: '150%'
        })
      )
      .addIndicators()

    scene2 = this.$scrollmagic
      .scene({
        triggerElement: '#scene2',
        triggerHook: 0,
        offset: '0%',
        duration: 1000
      })
      .setPin('#scene2')
      .setTween(
        new TimelineMax().add([
          TweenMax.to('#paper_body', 1, {
            height: '350px'
          }),
          TweenMax.to('#paper_text', 2, {
            height: 'auto'
          })
        ])
      )
      .addIndicators()

    this.$scrollmagic.addScene(scene1)
    this.$scrollmagic.addScene(scene2)

    this.$scrollmagic.handleScrollTo = function(target) {
      TweenMax.to(window, 0.5, {
        scrollTo: {
          y: target
        }
      })
    }
  },
  beforeDestroy() {
    this.$scrollmagic.removeScene(scene1)
    this.$scrollmagic.removeScene(scene2)
  }
}
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

#scene1 {
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
  height: 100vh;
  z-index: 10;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  .paper {
    width: 100%;
    max-width: 500px;
    position: relative;

    #paper_top {
      z-index: 3;
      margin-bottom: -10px;
    }

    #paper_body {
      background-image: url('/imgs/home/scene2/paper_body.png');
      background-size: 100% auto;
      background-position: center;
      background-repeat: no-repeat;
      width: 70%;
      margin: auto;
      z-index: 2;
      overflow: hidden;
      padding: 0px 20px 0 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 0;

      img {
        width: 95%;
        height: 0;
        z-index: 0;
      }
    }

    #paper_bottom {
      margin-top: -15px;
      z-index: 3;
      position: relative;
    }

    #paper_cloud {
      z-index: -10;
      position: absolute;
      top: -7%;
      left: 0;
      width: 100%;
    }
  }
}

#scene3 {
  width: 100%;
  height: 100vh;
}
</style>
