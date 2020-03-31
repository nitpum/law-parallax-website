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
          <img id="ship" src="/imgs/china/ship_blue.png" alt="" srcset="" />
          <img id="broken_ship" src="/imgs/china/broken_ship.png" alt="" />
          <div class="relative">
            <div id="text1" class="text">
              <img src="/imgs/china/text1.png" alt="" />
            </div>
            <div id="text2" class="text">
              <img src="/imgs/china/text2.png" alt="" />
            </div>
          </div>
        </div>
        <div id="bg_fade">
          <img src="/imgs/china/fade.png" alt="" srcset="" />
        </div>
      </div>
    </section>
    <section id="scene2">
      <div class="detail">
        <div class="content">
          <img src="/imgs/china/detail.png" alt="" />
          <Button class="sound" @onClick="playAudio">
            <img
              v-if="audioIsPlaying"
              src="/imgs/sound_off.png"
              alt=""
              srcset=""
            />
            <img v-else src="/imgs/sound_on.png" alt="" srcset="" />
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
import { commit, dispatch, mapGetters, mapState } from 'vuex'
import { TweenMax, TimelineMax } from 'gsap'
import Button from '@/components/button'

var scene1, title, ship1, ship2, ship3, fade, detail

export default {
  components: {
    Button
  },
  computed: {
    ...mapState(['audioIsPlaying'])
  },
  mounted() {
    this.$store.commit('setAudio', new Audio('/sounds/china.mp3'))

    scene1 = this.$scrollmagic
      .scene({
        triggerElement: '#scene1',
        triggerHook: 0,
        duration: '3000vh'
      })
      .setPin('#scene1')
    // .addIndicators()

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
            y: '15%',
            left: '46%',
            maxWidth: '18%'
          }),
          TweenMax.to('#ship_orange', 1, {
            y: '15%',
            left: '42%',
            maxWidth: '6%'
          })
        ])
      )
    // .addIndicators()

    ship2 = this.$scrollmagic
      .scene({
        triggerElement: '#scene1',
        triggerHook: 0,
        offset: '1950%',
        duration: '10%'
      })
      .setTween(
        new TimelineMax().add([
          TweenMax.to('#ship', 1, {
            opacity: 0
          }),
          TweenMax.to('#text1', 1, {
            display: 'none'
          })
        ])
      )
    // .addIndicators()

    ship3 = this.$scrollmagic
      .scene({
        triggerElement: '#scene1',
        triggerHook: 0,
        offset: '1950%',
        duration: '100%'
      })
      .setTween(
        new TimelineMax().add([
          TweenMax.from('#broken_ship', 1, {
            opacity: 0
          }),
          TweenMax.from('#text2', 1, {
            display: 'none'
          })
        ])
      )
    // .addIndicators()

    fade = this.$scrollmagic
      .scene({
        triggerElement: '#scene2',
        triggerHook: 1,
        duration: '20%'
      })
      .setTween(
        TweenMax.from('#bg_fade', 1, {
          y: '30%'
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
    this.$scrollmagic.addScene(ship3)
    this.$scrollmagic.addScene(fade)
    this.$scrollmagic.addScene(detail)
  },
  beforeDestroy() {
    this.$scrollmagic.removeScene(scene1)
    this.$scrollmagic.removeScene(title)
    this.$scrollmagic.removeScene(ship1)
    this.$scrollmagic.removeScene(ship2)
    this.$scrollmagic.removeScene(ship3)
    this.$scrollmagic.removeScene(fade)
    this.$scrollmagic.removeScene(detail)
  },
  methods: {
    playAudio() {
      this.$store.dispatch('toggleAudio')
    }
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

  div.ralative {
    position: relative;
  }

  .text {
    position: absolute;
    top: 35%;
    right: 0%;
    width: 100%;
    left: 100%;
    z-index: 1000;
  }

  #broken_ship {
    margin-top: -50%;
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
    padding-top: 5%;

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
  margin-top: 20px;
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
