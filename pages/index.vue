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
    <section id="scene2_2">
      <div class="fact" @click="fact = !fact">
        <img src="/imgs/home/scene2/fact.png" />
        <div class="detail" :class="{ display: fact }">
          <img src="/imgs/home/scene2/fact_detail.png" />
        </div>
      </div>
    </section>
    <section id="scene3">
      <div class="top">
        <!-- <img src="/imgs/home/scene2/top.png" /> -->
      </div>
      <div id="sign">
        <img src="/imgs/home/scene3/sign.png" />
      </div>
      <div class="countries_container">
        <div id="countries">
          <div class="country">
            <img src="/imgs/home/scene3/england.png" alt="" />
          </div>
          <div class="country">
            <img src="/imgs/home/scene3/thai.png" alt="" />
          </div>
          <div class="country china">
            <img src="/imgs/home/scene3/china.png" alt="" />
          </div>
        </div>
      </div>
      <div class="bg">
        <img class="bg7" src="/imgs/home/scene3/bg_07.svg" alt="" />
        <img class="bg6" src="/imgs/home/scene3/bg_06.svg" alt="" />
        <img class="bg5" src="/imgs/home/scene3/bg_05.svg" alt="" />
        <img class="bg4" src="/imgs/home/scene3/bg_04.svg" alt="" />
        <img class="bg3" src="/imgs/home/scene3/bg_03.svg" alt="" />
        <img class="bg2" src="/imgs/home/scene3/bg_02.svg" alt="" />
        <img class="bg1" src="/imgs/home/scene3/bg_01.svg" alt="" />
      </div>

      <!-- <div id="bottom_1">
        <img src="/imgs/home/scene4/bottom.png" alt="" />
      </div> -->
    </section>
    <!-- <section id="scene5">
      <img src="/imgs/home/scene5/bg.png" atl="" />
    </section> -->
  </div>
</template>

<script>
import { TweenMax, TimelineMax } from 'gsap'

var scene1, scene2, scene3, scene3_2, scene3_3

export default {
  data() {
    return {
      fact: false
    }
  },
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

    scene3 = this.$scrollmagic
      .scene({
        triggerElement: '#scene3',
        triggerHook: 0.5,
        duration: 300,
        offset: -120
      })
      .setTween(
        TweenMax.from('#sign', 1, {
          y: -500
        })
      )
      .addIndicators()
    scene3_2 = this.$scrollmagic
      .scene({
        triggerElement: '#scene3',
        triggerHook: 1,
        duration: 250,
        offset: '800%'
      })
      .setTween(
        TweenMax.from('.country', 1, {
          scale: 0
        })
      )
      .addIndicators()
    scene3_3 = this.$scrollmagic
      .scene({
        triggerElement: '#scene3 .bg',
        triggerHook: 0.5,
        duration: 800,
        offset: '-100%'
      })
      .setTween(
        new TimelineMax().add([
          TweenMax.from('#scene3 .bg .bg7', 1, {
            y: '50%'
          }),
          TweenMax.from('#scene3 .bg .bg6', 2, {
            y: '80%'
          }),
          TweenMax.from('#scene3 .bg .bg5', 3, {
            y: '100%'
          }),
          TweenMax.from('#scene3 .bg .bg4', 4, {
            y: '250%'
          }),
          TweenMax.from('#scene3 .bg .bg3', 5, {
            y: '380%'
          }),
          TweenMax.from('#scene3 .bg .bg2', 6, {
            y: '800%'
          }),
          TweenMax.from('#scene3 .bg .bg1', 7, {
            y: '1000%'
          })
        ])
      )
      .addIndicators()

    this.$scrollmagic.addScene(scene1)
    this.$scrollmagic.addScene(scene2)
    this.$scrollmagic.addScene(scene3)
    this.$scrollmagic.addScene(scene3_2)
    this.$scrollmagic.addScene(scene3_3)

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
    this.$scrollmagic.removeScene(scene3)
    this.$scrollmagic.removeScene(scene3_2)
    this.$scrollmagic.removeScene(scene3_3)
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

section {
  width: 100%;
  height: 100vh;
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

#scene2_2 {
  width: 100%;
  height: 100vh;
  position: relative;
  background-color: #ffffff;
  z-index: 11;

  .fact {
    position: absolute;
    right: 10%;
    top: -100px;
    cursor: pointer;

    .detail {
      position: absolute;
      left: -200%;
      opacity: 0;
      transform: scale(0);
      transition: 0.5s all;

      &.display {
        opacity: 1;
        transform: scale(1);
        transition: 0.5s all;
      }
    }
  }
}

#scene3 {
  background-image: url('/imgs/home/scene3/bg.png');
  // background-size: 100% 150%;
  width: 100%;
  min-height: 120vh;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  flex-wrap: wrap;

  .top {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    transform: scaleY(-1);
    z-index: 1;
    background-image: url('/imgs/home/scene2/top.png');
    background-size: contain, 100%;
    background-repeat: repeat-x;
    height: 100%;
    max-height: 200px;
  }

  #sign {
    max-width: 700px;
    top: 0;
    width: 100%;

    img {
      width: 100%;
    }
  }

  .countries_container {
    width: 100%;
    display: flex;
  }
  #countries {
    display: flex;
    margin: auto;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    max-width: 1024px;
    width: 100%;

    .country {
      max-width: 200px;
      margin-left: 30px;

      &.china {
        max-width: 250px;
      }
      img {
        width: 100%;
      }
    }
  }

  .bg {
    display: block;
    position: relative;
    width: 100%;
    height: 100%;

    img {
      width: 100%;
      left: 0;

      &.bg7 {
        position: absolute;
        bottom: 20%;
      }

      &.bg6 {
        position: absolute;
        bottom: 20%;
      }

      &.bg5 {
        position: absolute;
        bottom: 38%;
      }

      &.bg4 {
        position: absolute;
        bottom: 15%;
      }

      &.bg3 {
        position: absolute;
        bottom: 15%;
      }
      &.bg2 {
        position: absolute;
        bottom: 100px;
      }
      &.bg1 {
        position: absolute;
        bottom: 0;
      }
    }
  }

  #bottom_1 {
    position: absolute;
    width: 100%;
    bottom: -60%;
    left: 0;
    z-index: 0;

    img {
      width: 100%;
    }
  }
}
#scene5 {
  width: 100%;
  height: auto;

  img {
    width: 100%;
  }
}
</style>
