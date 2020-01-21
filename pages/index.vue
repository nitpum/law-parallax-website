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
    <section id="scene4">
      <div class="top">
        <!-- <img src="/imgs/home/scene2/top.png" /> -->
      </div>
      <div id="sign">
        <img src="/imgs/home/scene4/sign.png" />
      </div>
      <div class="countries_container">
        <div id="countries">
          <div class="country">
            <img src="/imgs/home/scene4/england.png" alt="" />
          </div>
          <div class="country">
            <img src="/imgs/home/scene4/thai.png" alt="" />
          </div>
          <div class="country china">
            <img src="/imgs/home/scene4/china.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { TweenMax, TimelineMax } from 'gsap'

var scene1, scene2, scene3, scene4, scene4_2

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

    scene4 = this.$scrollmagic
      .scene({
        triggerElement: '#scene4',
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
    scene4_2 = this.$scrollmagic
      .scene({
        triggerElement: '#scene4',
        triggerHook: 0.5,
        duration: 250,
        offset: '400%'
      })
      .setTween(
        TweenMax.from('.country', 1, {
          scale: 0
        })
      )
      .addIndicators()

    this.$scrollmagic.addScene(scene1)
    this.$scrollmagic.addScene(scene2)
    this.$scrollmagic.addScene(scene4)
    this.$scrollmagic.addScene(scene4_2)

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
    this.$scrollmagic.removeScene(scene4)
    this.$scrollmagic.removeScene(scene4_2)
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

#scene3 {
  width: 100%;
  height: 100vh;
  position: relative;
  background-color: #ffffff;
  z-index: 1;
}

#scene4 {
  background-image: url('/imgs/home/scene4/bg.png');
  background-size: 100% 150%;
  width: 100%;
  height: 120vh;
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
    position: absolute;
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
}
</style>
