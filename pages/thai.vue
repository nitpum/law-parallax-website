<template>
  <div class="wrapper">
    <section id="scene1">
      <div class="wave"></div>
      <div class="sky"></div>
      <div class="bg">
        <img src="/imgs/thai/country.svg" alt="" />
      </div>
      <div class="cloud"></div>
      <div class="history">
        <div class="timeline"></div>
        <div id="age4" class="age">
          <div class="header">
            <img src="/imgs/thai/4/portrait.png" alt="" srcset="" />
          </div>
          <div class="title">
            <img src="/imgs/thai/4/title.png" alt="" />
          </div>
          <div class="node node-1">
            <div class="left">
              <img src="/imgs/thai/4/1_pic.png" alt="" />
            </div>
            <div class="right text">
              <img src="/imgs/thai/4/1_text.png" alt="" />
            </div>
          </div>
          <div class="node node-2">
            <div class="left text">
              <img src="/imgs/thai/4/2_text.png" alt="" />
            </div>
            <div class="right">
              <img src="/imgs/thai/4/2_pic.png" alt="" />
            </div>
          </div>
          <div class="node node-3">
            <div class="left">
              <img src="/imgs/thai/4/3_pic.png" alt="" />
            </div>
            <div class="right text">
              <img src="/imgs/thai/4/3_text.png" alt="" />
            </div>
          </div>
        </div>

        <div id="age5" class="age">
          <div class="header">
            <img src="/imgs/thai/5/portrait.png" alt="" srcset="" />
          </div>
          <div class="title">
            <img src="/imgs/thai/5/title.png" alt="" />
          </div>
          <div class="node node-1">
            <div class="left text">
              <img src="/imgs/thai/5/1_text.png" alt="" />
            </div>
            <div class="right">
              <img src="/imgs/thai/5/1_pic.png" alt="" />
            </div>
          </div>
          <div class="node node-2">
            <div class="left">
              <img src="/imgs/thai/5/2_pic.png" alt="" />
            </div>
          </div>
        </div>

        <div id="age7" class="age">
          <div class="header">
            <img src="/imgs/thai/7/portrait.png" alt="" srcset="" />
          </div>
          <div class="title">
            <img src="/imgs/thai/7/title.png" alt="" />
          </div>
          <div class="node node-1">
            <div class="left">
              <img src="/imgs/thai/7/1_pic.png" alt="" />
            </div>
            <div class="right text">
              <img src="/imgs/thai/7/1_text.png" alt="" />
            </div>
          </div>
          <div class="node node-2">
            <div class="left text">
              <img src="/imgs/thai/7/2_text.png" alt="" />
            </div>
            <div class="right">
              <img src="/imgs/thai/7/2_pic.png" alt="" />
            </div>
          </div>
          <div class="node node-3">
            <div class="left">
              <img src="/imgs/thai/7/3_pic.png" alt="" />
            </div>
            <div class="right text">
              <img src="/imgs/thai/7/3_text.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="scene2">
      <div class="wave"></div>
      <div class="detail">
        <div class="content">
          <img src="/imgs/thai/detail.png" alt="" />
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
        <!-- <nuxt-l to="/#history"> -->
        <a href="/#history">
          <Button class="button">
            <img src="/imgs/thai/back.png" alt="" />
          </Button>
        </a>
        <!-- </nuxt-l> -->
      </div>
    </section>
  </div>
</template>

<script>
import { commit, mapState } from 'vuex'
import { TweenMax, TimelineMax } from 'gsap'
import Button from '@/components/button'

var scene1,
  age4_1,
  age4_2,
  age4_3,
  age4_4,
  age4_5,
  age5_1,
  age5_2,
  age5_3,
  age7_1,
  age7_2,
  age7_3,
  age7_4,
  scene2

export default {
  components: {
    Button
  },
  computed: {
    ...mapState(['audioIsPlaying'])
  },
  mounted() {
    this.$store.commit('setAudio', new Audio('/sounds/thai.mp3'))

    scene1 = this.$scrollmagic
      .scene({
        triggerElement: '#scene1',
        triggerHook: 0,
        duration: 3300
      })
      .setPin('#scene1')
      .setTween(
        TweenMax.to('.history', 1, {
          y: '-85%'
        })
      )
    // .addIndicators()

    age4_1 = this.$scrollmagic
      .scene({
        triggerElement: '#age4 .header',
        triggerHook: 0,
        duration: 200
      })
      .setTween(
        new TimelineMax().add([
          TweenMax.to('#age4 .header', 1, {
            opacity: 0
          }),
          TweenMax.to('#age4 .title', 1, {
            opacity: 0
          })
        ])
      )
    // .addIndicators()

    age4_2 = this.$scrollmagic
      .scene({
        triggerElement: '#age4 .node-1',
        triggerHook: 0,
        offset: -100,
        duration: 200
      })
      .setTween(
        new TimelineMax().add([
          TweenMax.to('#age4 .node.node-1', 1, {
            opacity: 0
          })
        ])
      )
    // .addIndicators()

    age4_3 = this.$scrollmagic
      .scene({
        triggerElement: '#age4 .node-2',
        triggerHook: 0,
        offset: -100,
        duration: 200
      })
      .setTween(
        new TimelineMax().add([
          TweenMax.to('#age4 .node.node-2', 1, {
            opacity: 0
          })
        ])
      )
    // .addIndicators()

    age4_4 = this.$scrollmagic
      .scene({
        triggerElement: '#age4 .node-3',
        triggerHook: 0,
        offset: -100,
        duration: 200
      })
      .setTween(
        new TimelineMax().add([
          TweenMax.to('#age4 .node.node-3', 1, {
            opacity: 0
          })
        ])
      )
    // .addIndicators()

    age5_1 = this.$scrollmagic
      .scene({
        triggerElement: '#age5 .header',
        triggerHook: 0,
        duration: 300
      })
      .setTween(
        new TimelineMax().add([
          TweenMax.to('#age5 .header', 1, {
            opacity: 0
          }),
          TweenMax.to('#age5 .title', 1, {
            opacity: 0
          })
        ])
      )
    // // .addIndicators()

    age5_2 = this.$scrollmagic
      .scene({
        triggerElement: '#age5 .node-1',
        triggerHook: 0,
        offset: -100,
        duration: 300
      })
      .setTween(
        new TimelineMax().add([
          TweenMax.to('#age5 .node-1', 1, {
            opacity: 0
          })
        ])
      )
    // .addIndicators()
    age5_3 = this.$scrollmagic
      .scene({
        triggerElement: '#age5 .node-2',
        triggerHook: 0,
        offset: -100,
        duration: 300
      })
      .setTween(
        new TimelineMax().add([
          TweenMax.to('#age5 .node-2', 1, {
            opacity: 0
          })
        ])
      )
    // .addIndicators()

    age7_1 = this.$scrollmagic
      .scene({
        triggerElement: '#age7 .header',
        triggerHook: 0,
        duration: 300
      })
      .setTween(
        new TimelineMax().add([
          TweenMax.to('#age7 .header', 1, {
            opacity: 0
          }),
          TweenMax.to('#age7 .title', 1, {
            opacity: 0
          })
        ])
      )
    // // .addIndicators()

    age7_2 = this.$scrollmagic
      .scene({
        triggerElement: '#age7 .node-1',
        triggerHook: 0,
        offset: -100,
        duration: 300
      })
      .setTween(
        new TimelineMax().add([
          TweenMax.to('#age7 .node-1', 1, {
            opacity: 0
          })
        ])
      )
    // // .addIndicators()

    age7_3 = this.$scrollmagic
      .scene({
        triggerElement: '#age7 .node-2',
        triggerHook: 0,
        duration: 300
      })
      .setTween(
        new TimelineMax().add([
          TweenMax.to('#age7 .node-2', 1, {
            opacity: 0
          })
        ])
      )
    // // .addIndicators()

    age7_4 = this.$scrollmagic
      .scene({
        triggerElement: '#age7 .node-3',
        triggerHook: 0,
        offset: -100,
        duration: 300
      })
      .setTween(
        new TimelineMax().add([
          TweenMax.to('#age7 .node-3', 1, {
            opacity: 0
          })
        ])
      )
    // .addIndicators()

    scene2 = this.$scrollmagic
      .scene({
        triggerElement: '#scene2',
        triggerHook: 0.5,
        offset: '100px',
        duration: 300
      })
      .setTween(
        new TimelineMax().add([
          TweenMax.from('#scene2 .detail', 1, {
            y: '80%'
          })
        ])
      )
    // .addIndicators()

    this.$scrollmagic.addScene(scene1)
    this.$scrollmagic.addScene(age4_1)
    this.$scrollmagic.addScene(age4_2)
    this.$scrollmagic.addScene(age4_3)
    this.$scrollmagic.addScene(age4_4)
    this.$scrollmagic.addScene(age5_1)
    this.$scrollmagic.addScene(age5_2)
    this.$scrollmagic.addScene(age5_3)
    this.$scrollmagic.addScene(age7_1)
    this.$scrollmagic.addScene(age7_2)
    this.$scrollmagic.addScene(age7_3)
    this.$scrollmagic.addScene(age7_4)
    this.$scrollmagic.addScene(scene2)
  },
  beforeDestroy() {
    this.$scrollmagic.removeScene(scene1)
    this.$scrollmagic.removeScene(age4_1)
    this.$scrollmagic.removeScene(age4_2)
    this.$scrollmagic.removeScene(age4_3)
    this.$scrollmagic.removeScene(age4_4)
    this.$scrollmagic.removeScene(age5_1)
    this.$scrollmagic.removeScene(age5_2)
    this.$scrollmagic.removeScene(age5_3)
    this.$scrollmagic.removeScene(age7_1)
    this.$scrollmagic.removeScene(age7_2)
    this.$scrollmagic.removeScene(age7_3)
    this.$scrollmagic.removeScene(age7_4)
    this.$scrollmagic.removeScene(scene2)
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
  position: relative;
  overflow: hidden;
  background: #54a2bc;
}

.wave {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('/imgs/thai/wave.svg');
  background-size: 400px;
  background-repeat: repeat;
  z-index: 0;
}

section {
  z-index: 1;
  position: relative;
}

#scene1 {
  width: 100%;
  height: 100vh;
  background: linear-gradient(
    0deg,
    rgba(84, 162, 188, 1) 0%,
    rgba(188, 222, 243, 1) 100%
  );

  .bg {
    text-align: center;
    position: absolute;
    width: 100%;
    height: 100vh;

    img {
      height: 100vh;
      margin: auto;
    }
  }

  .sky {
    width: 100%;
    height: 100%;
    position: absolute;
    // background: url('/imgs/england/star.png');
    background-size: cover;
  }

  .cloud {
    width: 100%;
    height: 100%;
    position: absolute;
    background: url('/imgs/thai/cloud.svg');
    background-size: 100% 100%;
    background-position: top;
    background-repeat: repeat-x;
  }
}

#scene2 {
  width: 100%;
  height: 100vh;
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
    padding-top: 2%;

    .content {
      max-width: 800px;
      position: relative;

      img {
        width: 100%;
      }
    }
  }
}

.button {
  margin-top: 0px;
  max-width: 250px;
}

.sound {
  position: absolute;
  width: 50px;
  height: 50px;
  bottom: 50px;
  right: 50px;
}

.history {
  position: relative;
  padding-top: 100vh;
}

.timeline {
  position: absolute;
  left: 49.9%;
  width: 1px;
  border-left: 5px dashed #fff;
  height: 80%;
  z-index: 0;
}

.age {
  margin: auto;
  max-width: 960px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    z-index: 2;
  }

  img {
    width: 100%;
  }

  .header {
    max-width: 200px;
    width: 100%;
  }

  .title {
    max-width: 400px;
  }

  .node {
    position: relative;
    width: 32px;
    height: 30vh;
    background: url('/imgs/thai/node.png');
    background-size: 32px 32px;
    background-position: center;
    background-repeat: no-repeat;
    margin: 60px 0;

    .left,
    .right {
      position: absolute;
      height: 100%;
      width: 20vw;
      vertical-align: middle;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        max-width: 250px;
      }

      &.text {
        img {
          max-width: 150px;
        }
      }
    }

    .left {
      right: 100%;
    }

    .right {
      left: 100%;
    }
  }
}
</style>
