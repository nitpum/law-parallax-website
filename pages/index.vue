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
        <div class="container">
          <div class="click">
            <img src="/imgs/home/scene2/fact.png" />
          </div>
          <div class="detail">
            <img src="/imgs/home/scene2/fact_detail.png" />
          </div>
        </div>
      </div>
    </section>
    <section id="scene2">
      <div class="paper">
        <div id="paper_cloud">
          <img src="/imgs/home/scene2/paper_bottom.svg" />
        </div>
        <div id="paper_left">
          <img class="paper-edge" src="/imgs/home/scene2/paper_side.svg" />
        </div>
        <div id="paper_body">
          <img id="paper_text" src="/imgs/home/scene2/paper_center.png" />
        </div>
        <div id="paper_right">
          <img class="paper-edge" src="/imgs/home/scene2/paper_side.svg" />
        </div>
      </div>
    </section>
    <section id="scene3">
      <div class="sky">
        <img src="/imgs/home/scene3/bg.png" />
      </div>
      <div class="star"></div>
      <div class="cloud"></div>
      <div id="history" style="position: absolute; top: 15%;"></div>
      <div class="top"></div>
      <div id="sign">
        <img src="/imgs/home/scene3/sign.png" />
      </div>
      <div class="countries_container">
        <div id="countries">
          <div class="country">
            <nuxt-link to="england">
              <Button>
                <img src="/imgs/home/scene3/england.png" alt="" />
              </Button>
            </nuxt-link>
          </div>
          <div class="country">
            <nuxt-link to="thai">
              <Button>
                <img src="/imgs/home/scene3/thai.png" alt="" />
              </Button>
            </nuxt-link>
          </div>
          <div class="country china">
            <nuxt-link to="china">
              <Button>
                <img src="/imgs/home/scene3/china.png" alt="" />
              </Button>
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
        <div id="category" class="heading">
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
      <div id="structure" class="heading">
        <img src="/imgs/home/scene5/heading.png" alt="" />
      </div>
      <div class="list">
        <div class="line-horizontal" style="margin-bottom: -200px">
          <Button class="item law-other" @onClick="openLawPopup('880')">
            <img src="/imgs/home/scene5/880.png" alt="" />
          </Button>
          <Button
            class="item law-other"
            @onClick="openLawPopup('870_871', 870, 871)"
          >
            <img src="/imgs/home/scene5/870_871.png" alt="" />
          </Button>
        </div>
        <div class="line-horizontal" style="margin-bottom: -50px;">
          <Button class="item law-other" @onClick="openLawPopup('881')">
            <img src="/imgs/home/scene5/881.png" alt="" />
          </Button>
          <div class="line-vertical" style="margin-bottom: 100px;">
            <div class="item">
              <Button id="law-869" @onClick="openLawPopup('869')">
                <img src="/imgs/home/scene5/869.png" alt="" />
              </Button>
              <div class="arrow_down">
                <img src="/imgs/home/scene5/arrow_down.png" alt="" />
              </div>
            </div>
            <div class="blank" style="height: 50px"></div>
            <div class="item">
              <div class="arrow_all">
                <img src="/imgs/home/scene5/arrow_body.png" alt="" />
              </div>
              <Button id="law-877" @onClick="openLawPopup('877')">
                <img src="/imgs/home/scene5/877.png" alt="" />
              </Button>
            </div>
          </div>
          <Button class="item law-other" @onClick="openLawPopup('879')">
            <img src="/imgs/home/scene5/879.png" alt="" />
          </Button>
        </div>
        <div class="line-horizontal">
          <Button
            class="item law-other"
            @onClick="openLawPopup('887_888', 887, 888)"
          >
            <img src="/imgs/home/scene5/887_888.png" alt="" />
          </Button>

          <div class="last" style="margin-bottom: -100px">
            <div class="horizontal">
              <Button class="item law-other" @onClick="openLawPopup('872')">
                <img src="/imgs/home/scene5/872.png" alt="" />
              </Button>
              <Button
                class="item law-other"
                @onClick="openLawPopup('875_876', 875, 876)"
              >
                <img src="/imgs/home/scene5/875_876.png" alt="" />
              </Button>
            </div>
            <div class="horizontal">
              <Button class="item law-other" @onClick="openLawPopup('882')">
                <img src="/imgs/home/scene5/882.png" alt="" />
              </Button>
              <Button class="item law-other" @onClick="openLawPopup('878')">
                <img src="/imgs/home/scene5/878.png" alt="" />
              </Button>
            </div>
          </div>

          <Button
            class="item law-other"
            @onClick="openLawPopup('873_874', 873, 874)"
          >
            <img src="/imgs/home/scene5/873_874.png" alt="" />
          </Button>
        </div>
      </div>
      <div class="overlay" :class="{ hide: !law }">
        <div class="overlay-bg" @click="closeLawPopup" />
        <div class="popup">
          <div class="bg">
            <img src="/imgs/home/scene5/popup_bg.png" alt="" />
          </div>
          <div class="close" @click="closeLawPopup">
            <Button>
              <img src="/imgs/home/scene5/popup_close.png" alt="" />
            </Button>
          </div>
          <div class="heading">
            <img :src="`/imgs/home/scene5/${law}_title.png`" alt="" />
          </div>
          <div v-if="law1 !== 0" class="option">
            <Button @onClick="setCurrentLaw(law1)">
              <img :src="`/imgs/home/scene5/${law1}_option.png`" alt="" />
            </Button>
            <Button @onClick="setCurrentLaw(law2)">
              <img :src="`/imgs/home/scene5/${law2}_option.png`" alt="" />
            </Button>
          </div>
          <div class="body">
            <img :src="`/imgs/home/scene5/${law}_detail.png`" alt="" />
            <iframe
              v-if="law !== 0"
              width="100%"
              height="450px"
              :src="`https://www.youtube.com/embed/${videos[law]}`"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <!-- <div class="example">
            <Button>
              <img src="/imgs/home/scene5/example_button.png" alt="" />
            </Button>
          </div> -->
          <Button class="sound" @onClick="playAudio">
            <img
              v-if="audioIsPlaying"
              src="/imgs/home/scene5/sound_off.png"
              alt=""
              srcset=""
            />
            <img v-else src="/imgs/home/scene5/sound_on.png" alt="" srcset="" />
          </Button>
        </div>
      </div>
    </section>
    <footer>
      <img src="/imgs/home/footer_text.png" alt="" />
    </footer>
  </div>
</template>

<script>
import { commit, mapState } from 'vuex'
import { TweenMax, TimelineMax } from 'gsap'
import Button from '@/components/button'
import Navbar from '@/components/navbar'

var scene1,
  scene2,
  scene2_2,
  scene3,
  scene3_2,
  scene3_3,
  scene4,
  scene4_2,
  scene4_3,
  scene5,
  scene5_1,
  scene5_2,
  scene5_3,
  scene5_4,
  scene5_5

export default {
  components: {
    Navbar,
    Button
  },
  computed: {
    ...mapState(['audioIsPlaying'])
  },
  data() {
    return {
      fact: false,
      history: false,
      law: 0,
      law1: 0,
      law2: 0,
      videos: {
        869: 'n_ZbpgrAT3E',
        870: 'DNB7TS_6qNk',
        871: 'Kgi-WzaPApA',
        872: 'Zyf-MKyVfxw',
        873: '0YAf1_AK40c',
        874: 'YZq0rxdB_IM',
        875: 'TMkXFrfPVlo',
        876: 'iMV0cr-duEU',
        877: 'LPRJmdTcNqY',
        878: 'roGf9LTR6EM',
        879: '-_BuPLUcI70',
        880: '9Vkwlqs01sI',
        881: 'nyMhmCMKqOU',
        882: '-2DN2qO60-0',
        887: '0dSt2rdagW4',
        888: 'HLUfkgkTvtI'
      }
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
    // .addIndicators()

    scene2_2 = this.$scrollmagic
      .scene({
        triggerElement: '#scene2_2',
        triggerHook: 0,
        offset: '0%',
        duration: 1000
      })
      .setPin('#scene2_2')
      .setTween(
        new TimelineMax().add([
          TweenMax.to('#scene2_2 .click', 1, {
            scale: 0.3,
            top: '-25%',
            right: '-10%'
          }),
          TweenMax.from('#scene2_2 .detail', 1, {
            scale: 0
          })
        ])
      )
    // .addIndicators()

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
          // TweenMax.to('#paper_left', 1, {
          //   height: '350px'
          // }),
          TweenMax.from('#paper_body', 2, {
            width: 0
          })
        ])
      )
    // .addIndicators()

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
    // .addIndicators()

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
    // .addIndicators()

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
    // .addIndicators()

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
    // .addIndicators()

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
    // .addIndicators()

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
    // .addIndicators()

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
          })
        ])
      )
    // .addIndicators()

    scene5_1 = this.$scrollmagic
      .scene({
        triggerElement: '#law-869 ',
        triggerHook: 0.5,
        duration: 100
      })
      .setTween(
        new TimelineMax().add([
          TweenMax.from('#law-869', 1, {
            opacity: 0
          })
        ])
      )
    // .addIndicators()

    scene5_2 = this.$scrollmagic
      .scene({
        triggerElement: '.item .arrow_down',
        triggerHook: 0.5,
        duration: 100
      })
      .setTween(
        new TimelineMax().add([
          TweenMax.from('.item .arrow_down', 1, {
            opacity: 0
          })
        ])
      )
    // .addIndicators()

    scene5_3 = this.$scrollmagic
      .scene({
        triggerElement: '#law-877',
        triggerHook: 0.5,
        duration: 100
      })
      .setTween(
        new TimelineMax().add([
          TweenMax.from('#law-877', 1, {
            opacity: 0
          })
        ])
      )
    // .addIndicators()

    scene5_4 = this.$scrollmagic
      .scene({
        triggerElement: '#law-877',
        triggerHook: 0.5,
        duration: 50,
        offset: 50
      })
      .setTween(
        new TimelineMax().add([
          TweenMax.from('.item .arrow_all', 5, {
            opacity: 0
          })
        ])
      )
    // .addIndicators()

    scene5_5 = this.$scrollmagic
      .scene({
        triggerElement: '#law-877',
        triggerHook: 0.5,
        duration: 50,
        offset: 100
      })
      .setTween(
        new TimelineMax().add([
          TweenMax.from('.item.law-other', 10, {
            opacity: 0
          })
        ])
      )
    // .addIndicators()

    this.$scrollmagic.addScene(scene1)
    this.$scrollmagic.addScene(scene2)
    this.$scrollmagic.addScene(scene2_2)
    this.$scrollmagic.addScene(scene3)
    this.$scrollmagic.addScene(scene3_2)
    this.$scrollmagic.addScene(scene3_3)
    this.$scrollmagic.addScene(scene4)
    this.$scrollmagic.addScene(scene4_2)
    this.$scrollmagic.addScene(scene4_3)
    this.$scrollmagic.addScene(scene5)
    this.$scrollmagic.addScene(scene5_1)
    this.$scrollmagic.addScene(scene5_2)
    this.$scrollmagic.addScene(scene5_3)
    this.$scrollmagic.addScene(scene5_4)
    this.$scrollmagic.addScene(scene5_5)

    // this.$scrollmagic.handleScrollTo = function(target) {
    //   TweenMax.to(window, 0, {
    //     scrollTo: {
    //       y: target
    //     }
    //   })
    // }
    // console.log('mounted')
    this.$nextTick(function() {
      // Code that will run only after the
      // entire view has been rendered
      // console.log(window.location.hash)
      if (this.$route.hash) {
        // console.log('scroll')

        const el = document.querySelector(this.$route.hash)
        const scrollY = el.getBoundingClientRect().top
        // console.log(el)
        // console.log(scrollY)
        setTimeout(() => {
          // console.log('scroll')
          window.scrollTo({ top: scrollY, behavior: 'smooth' })
        }, 100)
      }
    })
  },
  beforeDestroy() {
    this.$scrollmagic.removeScene(scene1)
    this.$scrollmagic.removeScene(scene2)
    this.$scrollmagic.removeScene(scene2_2)
    this.$scrollmagic.removeScene(scene3)
    this.$scrollmagic.removeScene(scene3_2)
    this.$scrollmagic.removeScene(scene3_3)
    this.$scrollmagic.removeScene(scene4)
    this.$scrollmagic.removeScene(scene4_2)
    this.$scrollmagic.removeScene(scene4_3)
    this.$scrollmagic.removeScene(scene5)
    this.$scrollmagic.removeScene(scene5_1)
    this.$scrollmagic.removeScene(scene5_2)
    this.$scrollmagic.removeScene(scene5_3)
    this.$scrollmagic.removeScene(scene5_4)
    this.$scrollmagic.removeScene(scene5_5)
  },
  methods: {
    playAudio() {
      this.$store.dispatch('toggleAudio')
    },
    setCurrentLaw(id) {
      this.law = id
      this.$store.dispatch('setAudio', new Audio(`/sounds/law/${id}.mp3`))
    },
    openHistory() {
      this.$store.commit('setScroll', false)
      this.history = true
    },
    closeHistory() {
      this.$store.commit('setScroll', true)
      this.history = false
    },
    openLawPopup(id, option1, option2) {
      if (option1) {
        this.law1 = option1
        this.law2 = option2
        this.setCurrentLaw(option1)
      } else {
        this.law1 = 0
        this.law2 = 0
        this.setCurrentLaw(id)
      }
      this.$store.commit('setScroll', false)
    },
    closeLawPopup() {
      this.setCurrentLaw(0)
      this.$store.dispatch('removeAudio')
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
  flex-direction: row;
  justify-content: center;
  align-items: center;

  .paper {
    width: 100%;
    margin: auto;
    max-width: 960px;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    #paper_left {
      z-index: 3;
      max-width: 100px;
      width: 100%;
      margin-right: -10px;

      img {
        width: 100%;
      }
    }

    #paper_right {
      z-index: 3;
      position: relative;
      max-width: 100px;
      width: 100%;
      margin-left: -10px;

      img {
        width: 100%;
      }
    }

    #paper_body {
      max-width: 650px;
      width: 100%;
      height: 50vh;
      max-height: 390px;
      z-index: 2;
      overflow: hidden;
      background-image: url('/imgs/home/scene2/paper_center_bg.png');
      background-size: 100% 100%;
      background-repeat: no-repeat;

      img {
        width: 100%;
        height: 100%;
        z-index: 0;
      }
    }

    #paper_cloud {
      z-index: -10;
      position: absolute;
      bottom: -7%;
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
  padding-top: 200px;

  .fact {
    position: relative;
    width: 100%;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    .container {
      max-width: 960px;
      width: 100%;
      position: relative;
      display: flex;
      justify-content: top;
      align-items: center;
      overflow: visible;
    }

    .click {
      position: absolute;
      max-width: 300px;
      width: 100%;

      img {
        width: 100%;
      }
    }

    .detail {
      position: absolute;
      left: 0;
      max-width: 800px;
      width: 100%;

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
          max-width: 450px;
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
    max-width: 960px;
    padding-top: 200px;
    margin: auto;
  }

  .line-horizontal {
    position: relative;
    overflow: visible;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    max-width: 1024px;
    max-height: 420px;
    margin: auto;
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
    position: relative;

    img {
      width: 100%;
    }

    .arrow_down {
      position: absolute;
      width: 30px;
      left: 40%;
      bottom: -40%;
    }

    .arrow_all {
      position: absolute;
      width: 600px;
      max-width: 600px;
      left: 50%;
      margin-left: -300px;
      top: -25%;
    }
  }

  .last {
    max-width: 300px;
    width: 100%;
    margin: auto;
    margin-top: 80px;
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;

    .horizontal {
      width: 100%;
    }
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
      width: 40%;
      left: 32%;
      bottom: 10%;
      display: flex;
      justify-content: center;
      text-align: center;

      img {
        width: 100%;
        max-width: 250px;
      }
    }

    .sound {
      position: absolute;
      width: 40px;
      height: 40px;
      right: 10%;
      top: 15%;
      // bottom: 12%; // for old position
      img {
        width: 100%;
      }
    }

    .option {
      display: flex;
      flex-direction: row;
      position: absolute;
      left: 3%;
      width: 97%;
      bottom: 58%;
    }

    .body {
      position: absolute;
      top: 42%;
      left: 10%;
      width: 85%;
      // height: 33%;
      height: 50%;
      justify-content: center;
      align-items: center;
      overflow-y: auto;

      img {
        width: 100%;
      }
    }
  }
}

footer {
  height: fit-content;
  padding-top: 100px;
  margin-bottom: -10px;
  background-color: #8b5531;
  background-image: url('/imgs/home/footer.png');
  background-size: 100% 100%;

  img {
    width: 100%;
    height: 100%;
    margin: 0;
  }
}
</style>
