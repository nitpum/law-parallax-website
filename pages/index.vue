<template>
  <div class="container">
    <Navbar />
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
    <section id="scene2_2">
      <div class="fact" @click="fact = !fact">
        <div class="click">
          <img src="/imgs/home/scene2/fact.png" />
        </div>
        <div class="detail" :class="{ display: fact }">
          <img src="/imgs/home/scene2/fact_detail.png" />
        </div>
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
    <section id="scene3">
      <div class="sky">
        <img src="/imgs/home/scene3/bg.png" />
      </div>
      <div class="star"></div>
      <div class="cloud"></div>
      <div class="top"></div>
      <div id="sign">
        <img src="/imgs/home/scene3/sign.png" />
      </div>
      <div class="countries_container">
        <div id="countries">
          <div class="country">
            <nuxt-link to="england">
              <img src="/imgs/home/scene3/england.png" alt="" />
            </nuxt-link>
          </div>
          <div class="country">
            <nuxt-link to="thai">
              <img src="/imgs/home/scene3/thai.png" alt="" />
            </nuxt-link>
          </div>
          <div class="country china">
            <nuxt-link to="china">
              <img src="/imgs/home/scene3/china.png" alt="" />
            </nuxt-link>
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
      <div v-if="history" class="overlay" @click="closeHistory">
        <div class="card">History</div>
      </div>
    </section>
    <section id="scene4">
      <div class="top">
        <img src="/imgs/home/scene4/top_1.svg" />
      </div>
      <div class="body">
        <div class="heading">
          <img src="/imgs/home/scene4/heading.png" />
        </div>
        <div class="list">
          <div class="item">
            <div class="front">
              <img src="/imgs/home/scene4/item_01.png" alt="" />
            </div>
            <div class="back item-1">
              <img src="/imgs/home/scene4/item_01_back.png" alt="" />
            </div>
          </div>
          <div class="item">
            <div class="front">
              <img src="/imgs/home/scene4/item_02.png" alt="" />
            </div>
            <div class="back">
              <img src="/imgs/home/scene4/item_02_back.png" alt="" />
            </div>
          </div>
          <div class="item">
            <div class="front">
              <img src="/imgs/home/scene4/item_03.png" alt="" />
            </div>
            <div class="back item-3">
              <img src="/imgs/home/scene4/item_03_back.png" alt="" />
            </div>
          </div>
          <div class="item">
            <div class="front">
              <img src="/imgs/home/scene4/item_04.png" alt="" />
            </div>
            <div class="back item-4">
              <img src="/imgs/home/scene4/item_04_back.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="scene5">
      <div class="heading">
        <img src="/imgs/home/scene5/heading.png" alt="" />
      </div>
      <div class="list">
        <div class="line-horizontal">
          <div class="item" @click="openLawPopup('880')">
            <img src="/imgs/home/scene5/880.png" alt="" />
          </div>
          <div class="item" @click="openLawPopup('881')">
            <img src="/imgs/home/scene5/881.png" alt="" />
          </div>
          <div class="item" @click="openLawPopup('887_888')">
            <img src="/imgs/home/scene5/887_888.png" alt="" />
          </div>
          <div class="line-vertical">
            <div class="line"></div>
            <div class="item" @click="openLawPopup('869')">
              <img src="/imgs/home/scene5/869.png" alt="" />
            </div>
            <div class="item" @click="openLawPopup('877')">
              <img src="/imgs/home/scene5/877.png" alt="" />
            </div>
            <div class="blank"></div>
          </div>
          <div class="item" @click="openLawPopup('870_871')">
            <img src="/imgs/home/scene5/870_871.png" alt="" />
          </div>
          <div class="item" @click="openLawPopup('873_874')">
            <img src="/imgs/home/scene5/873_874.png" alt="" />
          </div>
          <div class="item" @click="openLawPopup('879')">
            <img src="/imgs/home/scene5/879.png" alt="" />
          </div>
        </div>
        <div class="last">
          <div class="item" @click="openLawPopup('872')">
            <img src="/imgs/home/scene5/872.png" alt="" />
          </div>
          <div class="horizontal">
            <div class="item" @click="openLawPopup('878')">
              <img src="/imgs/home/scene5/878.png" alt="" />
            </div>
            <div class="item" @click="openLawPopup('882')">
              <img src="/imgs/home/scene5/882.png" alt="" />
            </div>
          </div>
          <div class="item" @click="openLawPopup('875_876')">
            <img src="/imgs/home/scene5/875_876.png" alt="" />
          </div>
        </div>
      </div>
      <div class="overlay" :class="{ hide: !law }">
        <div class="overlay-bg" @click="closeLawPopup" />
        <div class="popup">
          <div class="bg">
            <img src="/imgs/home/scene5/popup_bg.png" alt="" />
          </div>
          <div class="close" @click="closeLawPopup">
            <img src="/imgs/home/scene5/popup_close.png" />
          </div>
          <div class="heading">
            <img :src="`/imgs/home/scene5/${law}_title.png`" alt="" />
          </div>
          <div class="body"></div>
          <div class="example">
            <img src="/imgs/home/scene5/example_button.png" alt="" />
          </div>
          <div class="sound">
            <img src="/imgs/home/scene5/sound_on.png" alt="" />
          </div>
        </div>
      </div>
    </section>
    <section id="scene6">
      <div class="contents">
        <div class="comment_box">
          <div class="heading">
            <img src="/imgs/home/scene6/heading.png" alt="" />
          </div>
          <div class="textarea">
            <div class="bg">
              <img alt="" src="/imgs/home/scene6/input.png" />
            </div>
            <div class="input">
              <textarea> </textarea>
            </div>
          </div>
          <div class="bottom">
            <div class="sent">
              <div class="bg">
                <img src="/imgs/home/scene6/sent.png" alt="" />
              </div>
              <button></button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <footer>
      <img src="/imgs/home/footer.png" alt="" />
    </footer>
  </div>
</template>

<script>
import { commit } from 'vuex'
import { TweenMax, TimelineMax } from 'gsap'
import Navbar from '@/components/navbar'

var scene1,
  scene2,
  scene3,
  scene3_2,
  scene3_3,
  scene4,
  scene4_2,
  scene4_3,
  scene5,
  scene5_2

export default {
  components: {
    Navbar
  },
  data() {
    return {
      fact: false,
      history: false,
      law: 0
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
        triggerHook: 0.5,
        duration: '10%',
        offset: '400%'
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
    scene4 = this.$scrollmagic
      .scene({
        triggerElement: '#scene4',
        triggerHook: 1,
        duration: 200,
        offset: '-40%'
      })
      .setTween(
        TweenMax.from('#scene4 .top', 1, {
          y: '50%'
        })
      )
      .addIndicators()
    scene4_2 = this.$scrollmagic
      .scene({
        triggerElement: '#scene4',
        triggerHook: 0.5,
        duration: 200
      })
      .setTween(
        TweenMax.from('#scene4 .heading', 1, {
          y: '-200px',
          opacity: 0
        })
      )
      .addIndicators()
    scene4_3 = this.$scrollmagic
      .scene({
        triggerElement: '#scene4 .heading',
        triggerHook: 0.5,
        duration: 200
      })
      .setTween(
        TweenMax.from('#scene4 .item', 1, {
          scale: 0
        })
      )
      .addIndicators()
    scene5 = this.$scrollmagic
      .scene({
        triggerElement: '#scene5 .heading',
        triggerHook: 0.5,
        duration: 300,
        offset: '-50%'
      })
      .setTween(
        new TimelineMax().add([
          TweenMax.from('#scene5 .heading', 1, {
            opacity: 0
          }),
          TweenMax.from('#scene5 .list', 3, {
            y: '100%'
          })
        ])
      )
      .addIndicators()

    this.$scrollmagic.addScene(scene1)
    this.$scrollmagic.addScene(scene2)
    this.$scrollmagic.addScene(scene3)
    this.$scrollmagic.addScene(scene3_2)
    this.$scrollmagic.addScene(scene3_3)
    this.$scrollmagic.addScene(scene4)
    this.$scrollmagic.addScene(scene4_2)
    this.$scrollmagic.addScene(scene4_3)
    this.$scrollmagic.addScene(scene5)

    // this.$scrollmagic.handleScrollTo = function(target) {
    //   TweenMax.to(window, 0, {
    //     scrollTo: {
    //       y: target
    //     }
    //   })
    // }
  },
  beforeDestroy() {
    this.$scrollmagic.removeScene(scene1)
    this.$scrollmagic.removeScene(scene2)
    this.$scrollmagic.removeScene(scene3)
    this.$scrollmagic.removeScene(scene3_2)
    this.$scrollmagic.removeScene(scene3_3)
    this.$scrollmagic.removeScene(scene4)
    this.$scrollmagic.removeScene(scene4_2)
    this.$scrollmagic.removeScene(scene4_3)
    this.$scrollmagic.removeScene(scene5)
  },
  methods: {
    openHistory() {
      this.$store.commit('setScroll', false)
      this.history = true
    },
    closeHistory() {
      this.$store.commit('setScroll', true)
      this.history = false
    },
    openLawPopup(id) {
      this.law = 887
      this.$store.commit('setScroll', false)
    },
    closeLawPopup() {
      this.law = 0
      this.$store.commit('setScroll', true)
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

section {
  width: 100%;
  height: 100vh;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100000;

  .overlay-bg {
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    position: absolute;
  }

  &.hide {
    display: none;
  }
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
  height: 60vh;
  position: relative;
  background-color: #ffffff;
  z-index: 11;

  .fact {
    position: absolute;
    right: 10%;
    top: 0px;
    cursor: pointer;

    .click {
      max-width: 150px;

      img {
        width: 100%;
      }
    }

    .detail {
      position: absolute;
      left: 0;
      max-width: 800px;
      opacity: 0;
      transform: scale(0);
      transition: 0.5s all;

      &.display {
        left: -500%;
        opacity: 1;
        transform: scale(1);
        transition: 0.5s all;
      }

      img {
        width: 100%;
      }
    }
  }
}

#scene3 {
  background-size: 100% 100%;
  width: 100%;
  min-height: 120vh;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  flex-wrap: wrap;

  .sky {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 160vh;
    img {
      width: 100%;
      height: 100%;
    }
  }

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

  .star {
    width: 100%;
    height: 100%;
    position: absolute;
    background-image: url('/imgs/home/scene3/star.png');
  }

  .cloud {
    width: 100%;
    height: 100%;
    position: absolute;
    background-image: url('/imgs/home/scene3/cloud.png');
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

  .overlay {
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100000;
  }

  .card {
    max-width: 960px;
    width: 100%;
    height: 500px;
    background-color: #fff;
  }
}

#scene4 {
  width: 100%;
  height: auto;
  margin-top: 65vh;
  z-index: 10;
  position: relative;

  img {
    width: 100%;
  }

  .top {
    height: 120vh;
    width: 100%;
    overflow: visible;
    z-index: 9;
  }
  .body {
    height: 100vh;
    width: 100%;
    position: absolute;
    top: 30%;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .list {
    display: flex;
    flex-direction: row;
    max-width: 1024px;
    width: 100%;
    margin: auto;

    img {
      max-width: 100%;
    }

    .item {
      -webkit-backface-visibility: hidden; /* Safari */
      backface-visibility: hidden;
      position: relative;
      max-width: 25%;
      width: 100%;

      &:hover {
        z-index: 100;
        .front {
          transform: rotateY(180deg);
        }
        .back {
          transform: rotateY(0deg);
          top: 0;
          width: 50vw;
          max-width: 500px;
          transition: transform 0.8s, width 0.4s ease 0.6s,
            height 0.4s ease 0.6s, left 0.25s ease 0.6s;

          &.item-1 {
            left: 100%;
          }
          &.item-3 {
            left: -100%;
          }
          &.item-4 {
            left: -200%;
          }
        }
      }

      .front {
        -webkit-backface-visibility: hidden; /* Safari */
        backface-visibility: hidden;
        transition: transform 0.8s;
        transform-style: preserve-3d;
      }

      .back {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transform: rotateY(180deg);
        -webkit-backface-visibility: hidden; /* Safari */
        backface-visibility: hidden;
        transition: transform 0.2s linear 0.2s, width 0.2s, height 0.2s,
          left 0.4s;
        transform-style: preserve-3d;
      }
    }
  }

  .heading {
    max-width: 700px;
    margin: auto;
  }
}

#scene5 {
  position: relative;
  background-color: #493022;
  height: 300vh;
  padding-top: 60%;
  box-sizing: border-box;
  background: url('/imgs/home/scene5/bg.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position-y: bottom;

  .heading {
    justify-content: center;
    text-align: center;
    img {
      margin: auto;
      max-width: 700px;
      width: 100%;
    }
  }
  .list {
    margin-top: 100px;
  }

  .line-horizontal {
    position: relative;
    overflow: visible;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-end;
    max-width: 1024px;
    max-height: 420px;
    margin: auto;

    &:before {
      bottom: 80px;
      position: absolute;
      content: '';
      background-color: #ffffff;
      width: 80%;
      height: 5px;
      // z-index: 0;
    }
  }

  .line-vertical {
    width: 140px;
    min-height: 140px;
    position: relative;
    overflow: visible;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .line {
    position: absolute;
    bottom: 80px;
    left: 50%;
    background-color: #ffffff;
    width: 5px;
    height: 300px;
    z-index: 0;
  }
  .blank {
    width: 140px;
    height: 140px;
  }

  .item {
    width: 140px;
    height: 140px;
    max-width: 140px;
    max-height: 140px;
    z-index: 10;

    img {
      width: 100%;
    }
  }

  .last {
    max-width: 960px;
    width: 100%;
    margin: auto;
    margin-top: 80px;
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .horizontal {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 960px;
  }

  .overlay {
    &:not(.hide) {
      .popup {
        transform: scale(1);
        transition: all 0.5s ease 2s;
      }
    }
  }

  .popup {
    position: relative;
    transition: all 0.5s ease 2s;
    transform: scale(0);

    .bg {
      img {
        width: 100%;
      }
    }

    .heading {
      position: absolute;
      top: 2%;
      left: 12%;
      width: 80%;
      height: 30%;
      display: flex;
      justify-content: center;

      img {
        width: 100%;
        max-width: 250px;
      }
    }

    .close {
      width: 50px;
      height: 50px;
      position: absolute;
      top: -20px;
      right: -20px;
      img {
        width: 100%;
      }
    }

    .example {
      position: absolute;
      width: 250px;
      right: 50%;
      bottom: 10%;

      img {
        width: 100%;
      }
    }

    .sound {
      position: absolute;
      width: 40px;
      height: 40px;
      right: 10%;
      bottom: 12%;
      img {
        width: 100%;
      }
    }

    .body {
      position: absolute;
      bottom: 5%;
      left: 12%;
      width: 80%;
      height: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
#scene6 {
  background-color: #493022;
  margin-top: -100vh;
  margin-bottom: -60vh;
  padding-top: 100vh;
  padding-bottom: 60vh;
  min-height: 220vh;

  .contents {
    max-width: 680px;
    width: 100%;
    margin: auto;
  }

  .comment_box {
    position: relative;

    .heading {
      max-width: 250px;
      width: 100%;
      img {
        width: 100%;
      }
    }

    .textarea {
      position: relative;

      .bg {
        width: 100%;
        img {
          width: 100%;
          user-select: none;
        }
      }
      .input {
        position: absolute;
        width: 80%;
        height: 80%;
        top: 10%;
        left: 10%;
      }
      textarea {
        width: 100%;
        height: 100%;
        background-color: transparent;
        border: transparent;
      }
    }

    .bottom {
      padding-top: 30px;
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
    }

    .sent {
      max-width: 150px;
      width: 100%;
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
  }
}

footer {
  height: fit-content;
  background-color: transparent;

  img {
    width: 100%;
    height: 100%;
    margin: 0;
  }
}
</style>
