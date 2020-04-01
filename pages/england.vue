<template>
  <div class="wrapper">
    <section id="scene1">
      <div class="sky"></div>
      <div class="cloud"></div>
      <div class="heading">
        <div class="title">
          <img src="/imgs/england/title.png" alt="" srcset="" />
        </div>
        <div class="subtitle">
          <img src="/imgs/england/subtitle.png" alt="" srcset="" />
        </div>
      </div>
      <div class="town" id="town">
        <img src="/imgs/england/town.png" alt="" srcset="" />
      </div>
      <div class="town" id="burned_town">
        <img src="/imgs/england/town_burned.png" alt="" srcset="" />
      </div>
      <div class="fire">
        <img src="/imgs/england/fire.svg" alt="" srcset="" />
        <div class="fire_text">
          <img src="/imgs/england/fire_text.svg" alt="" />
        </div>
      </div>
      <div class="burned_text">
        <img src="/imgs/england/burned_text.png" alt="" srcset="" />
      </div>
    </section>
    <div id="bg_fade"></div>
    <section id="scene2">
      <div class="sky"></div>
      <div class="cloud"></div>
      <div class="detail">
        <div class="content">
          <img src="/imgs/england/detail.png" alt="" />
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
        <!-- <nuxt-link to="/#history"> -->
        <a href="/#history">
          <Button class="button">
            <img src="/imgs/england/back.png" alt="" />
          </Button>
        </a>
        <!-- </nuxt-link> -->
      </div>
    </section>
  </div>
</template>

<script>
import { commit, mapState } from 'vuex'
import { TweenMax, TimelineMax } from 'gsap'
import Button from '@/components/button'

var scene1, town, title, fire, burned_town, burned_text, burned_text2, detail

export default {
  components: {
    Button
  },
  computed: {
    ...mapState(['audioIsPlaying'])
  },
  mounted() {
    this.$store.commit('setAudio', new Audio('/sounds/england.mp3'))

    scene1 = this.$scrollmagic
      .scene({
        triggerElement: '#scene1',
        triggerHook: 0,
        duration: 2600
      })
      .setPin('#scene1')

    town = this.$scrollmagic
      .scene({
        triggerElement: '#scene1',
        triggerHook: 0,
        duration: 400
      })
      .setTween(
        TweenMax.from('#town', 1, {
          y: '30%'
        })
      )

    title = this.$scrollmagic
      .scene({
        triggerElement: '#scene1',
        triggerHook: 0,
        duration: 800
      })
      .setTween(
        TweenMax.to('#scene1 .heading', 1, {
          y: '50vh',
          opacity: 0
        })
      )

    fire = this.$scrollmagic
      .scene({
        triggerElement: '#scene1',
        triggerHook: 0,
        offset: 1000,
        duration: 2000
      })
      .setTween(
        TweenMax.to('#scene1 .fire', 1, {
          y: '-200%'
        })
      )

    burned_town = this.$scrollmagic
      .scene({
        triggerElement: '#scene1',
        triggerHook: 0,
        offset: 1200,
        duration: 100
      })
      .setTween(
        new TimelineMax().add([
          TweenMax.to('#town', 1, {
            opacity: 0
          }),
          TweenMax.from('#burned_town', 1, {
            opacity: 0
          })
        ])
      )

    burned_text = this.$scrollmagic
      .scene({
        triggerElement: '#scene1',
        triggerHook: 0,
        offset: 1500,
        duration: 200
      })
      .setTween(
        TweenMax.from('.burned_text', 1, {
          opacity: 0
        })
      )

    burned_text2 = this.$scrollmagic
      .scene({
        triggerElement: '#scene1',
        triggerHook: 0,
        offset: 2000,
        duration: 200
      })
      .setTween(
        TweenMax.to('.burned_text', 1, {
          opacity: 0
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
          y: '80vh',
          opacity: 0
        })
      )

    this.$scrollmagic.addScene(scene1)
    this.$scrollmagic.addScene(town)
    this.$scrollmagic.addScene(title)
    this.$scrollmagic.addScene(fire)
    this.$scrollmagic.addScene(burned_town)
    this.$scrollmagic.addScene(burned_text)
    this.$scrollmagic.addScene(burned_text2)
    this.$scrollmagic.addScene(detail)
  },
  beforeDestroy() {
    this.$scrollmagic.removeScene(scene1)
    this.$scrollmagic.removeScene(town)
    this.$scrollmagic.removeScene(title)
    this.$scrollmagic.removeScene(fire)
    this.$scrollmagic.removeScene(burned_town)
    this.$scrollmagic.removeScene(burned_text)
    this.$scrollmagic.removeScene(burned_text2)
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
  overflow: hidden;
}
#scene1 {
  width: 100%;
  min-height: 100vh;
  height: 100vh;
  background: url('/imgs/england/bg.png');
  background-size: contain;
  background-repeat: repeat-x;
  position: relative;

  .sky {
    width: 100%;
    height: 100%;
    position: absolute;
    background: url('/imgs/england/star.png');
    background-size: cover;
  }

  .cloud {
    width: 100%;
    height: 100%;
    position: absolute;
    background: url('/imgs/england/cloud.png');
    background-position: center;
    background-repeat: repeat-x;
  }

  .heading {
    position: absolute;
    display: flex;
    margin: auto;
    margin-top: 12vh;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .title {
    max-width: 450px;

    img {
      width: 100%;
      margin-bottom: -10%;
    }
  }

  .subtitle {
    max-width: 300px;

    img {
      width: 100%;
    }
  }

  .town {
    position: absolute;
    max-width: 100%;
    bottom: 0;
    margin-bottom: -5px;

    img {
      width: 100%;
      margin-bottom: 0px;
    }
  }

  .fire {
    width: 100%;
    position: absolute;
    top: 100%;

    img {
      width: 100%;
    }
  }

  .fire_text {
    top: 50%;
    position: absolute;
    margin: auto;
    justify-content: center;
    display: flex;
    width: 100%;

    img {
      max-width: 960px;
      width: 100%;
    }
  }

  .burned_text {
    position: absolute;
    width: 100%;
    bottom: 5%;
    display: flex;
    justify-content: center;

    img {
      max-width: 960px;
      width: 100%;
    }
  }
}

#bg_fade {
  height: 50px;
  background: url('/imgs/england/fade.png');
  background-size: contain;
  background-repeat: repeat-x;
}

#scene2 {
  height: 100vh;
  background: url('/imgs/england/bg_2.png');
  background-size: 100% 100%;
  background-repeat: repeat-x;
  position: relative;

  .sky {
    width: 100%;
    height: 100%;
    position: absolute;
    background: url('/imgs/england/star.png');
    background-size: cover;
  }

  .cloud {
    width: 100%;
    height: 100%;
    position: absolute;
    background: url('/imgs/england/cloud.png');
    background-position: top;
    background-repeat: repeat-x;
  }

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
