<template>
  <div class="wrapper">
    <section id="scene1">
      <div class="star"></div>
      <div class="cloud"></div>
      <div class="title">
        <img src="/imgs/china/title.png" alt="" srcset="" />
      </div>
      <div id="forest">
        <img src="/imgs/china/forest.png" alt="" />
        <div id="ship_orange">
          <img id="good" src="/imgs/china/ship_orange.png" alt="" srcset="" />
        </div>
        <div id="ship_blue">
          <img src="/imgs/china/ship_blue.png" alt="" srcset="" />
        </div>
        <div id="bg_fade">
          <img src="/imgs/china/fade.png" alt="" srcset="" />
        </div>
      </div>
    </section>
    <section id="scene2">
      <div class="detail">
        <div class="content">
          <img src="/imgs/england/detail.png" alt="" />
          <Button class="sound">
            <img src="/imgs/england/sound_on.png" alt="" srcset="" />
          </Button>
        </div>
        <nuxt-link to="/">
          <Button class="button">
            <img src="/imgs/england/back.png" alt="" />
          </Button>
        </nuxt-link>
      </div>
    </section>
  </div>
</template>

<script>
import { commit } from 'vuex'
import { TweenMax, TimelineMax } from 'gsap'
import Button from '@/components/button'

var scene1, title, ship1, ship2, fade, detail
export default {
  components: {
    Button
  },
  mounted() {
    scene1 = this.$scrollmagic
      .scene({
        triggerElement: '#scene1',
        triggerHook: 0,
        duration: '5000vh'
      })
      .setPin('#scene1')
      .addIndicators()

    title = this.$scrollmagic
      .scene({
        triggerElement: '#scene1',
        triggerHook: 0,
        duration: '100%'
      })
      .setTween(
        new TimelineMax().add([
          TweenMax.to('#scene1 .title', 1, {
            y: '100%',
            opacity: 0
          }),
          TweenMax.to('#forest', 1, {
            y: '-50%'
          })
        ])
      )
    ship1 = this.$scrollmagic
      .scene({
        triggerElement: '#scene1',
        triggerHook: 0,
        offset: '400%',
        duration: '200%'
      })
      .setTween(
        new TimelineMax().add([
          TweenMax.to('#ship_blue', 1, {
            y: '20%',
            left: '46%',
            maxWidth: '20%'
          }),
          TweenMax.to('#ship_orange', 1, {
            y: '40%',
            left: '42%',
            maxWidth: '8%'
          })
        ])
      )
      .addIndicators()

    ship2 = this.$scrollmagic
      .scene({
        triggerElement: '#scene1',
        triggerHook: 0,
        offset: '2350%',
        duration: '200%'
      })
      .setTween(
        new TimelineMax().add([
          TweenMax.to('#ship_blue', 1, {
            y: '30%',
            left: '35%',
            maxWidth: '30%',
            opacity: 0
          }),
          TweenMax.to('#ship_orange', 1, {
            y: '2%',
            left: '46%',
            maxWidth: '20%'
          })
        ])
      )
      .addIndicators()

    fade = this.$scrollmagic
      .scene({
        triggerElement: '#scene2',
        triggerHook: 1,
        duration: '20%'
      })
      .setTween(
        TweenMax.from('#bg_fade', 1, {
          y: '20%'
        })
      )

    detail = this.$scrollmagic
      .scene({
        triggerElement: '#scene2',
        triggerHook: 0.5,
        duration: '40%'
      })
      .setTween(
        TweenMax.from('#scene2 .detail', 1, {
          y: '30vh',
          opacity: 0
        })
      )

    this.$scrollmagic.addScene(scene1)
    this.$scrollmagic.addScene(title)
    this.$scrollmagic.addScene(ship1)
    this.$scrollmagic.addScene(ship2)
    this.$scrollmagic.addScene(fade)
    this.$scrollmagic.addScene(detail)
  },
  beforeDestroy() {
    this.$scrollmagic.removeScene(scene1)
    this.$scrollmagic.removeScene(title)
    this.$scrollmagic.removeScene(ship1)
    this.$scrollmagic.removeScene(ship2)
    this.$scrollmagic.removeScene(fade)
    this.$scrollmagic.removeScene(detail)
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #f4c273;
}

#scene1 {
  width: 100%;
  height: 100vh;
  position: relative;
  background: url('/imgs/china/bg.png');
  background-size: 100% 100%;
  background-repeat: repeat-x;

  .star {
    width: 100%;
    height: 100%;
    position: absolute;
    background: url('/imgs/china/star.png');
    background-size: cover;
  }

  .cloud {
    width: 100%;
    height: 100%;
    top: 100px;
    position: absolute;
    background: url('/imgs/china/cloud.png');
    background-position: top;
    background-repeat: repeat-x;
  }

  .title {
    position: absolute;
    top: 40%;
    width: 100%;
    display: flex;
    justify-content: center;

    img {
      max-width: 960px;
      margin: auto;
    }
  }
}

#forest {
  position: absolute;
  top: 20vh;

  img {
    width: 100%;
  }
}

#ship_orange {
  position: absolute;
  top: 45%;
  left: 40%;
  max-width: 2%;

  img {
    width: 100%;
  }
}

#ship_blue {
  position: absolute;
  top: 50%;
  left: 40%;
  max-width: 10%;

  img {
    width: 100%;
  }
}

#bg_fade {
  position: absolute;
  width: 100%;
  bottom: 0;
  margin-bottom: -10px;
  img {
    width: 100%;
  }
}

#scene2 {
  height: 100vh;
  background-color: #183000;
  background-size: 100% 100%;
  background-repeat: repeat-x;
  position: relative;

  .detail {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-top: 10%;

    .content {
      max-width: 960px;
      position: relative;

      img {
        width: 100%;
      }
    }
  }
}

.button {
  margin-top: 50px;
  max-width: 350px;
}

.sound {
  position: absolute;
  width: 50px;
  height: 50px;
  bottom: 50px;
  right: 50px;
}
</style>
