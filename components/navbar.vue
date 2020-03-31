<template>
  <nav id="navbar">
    <div id="menu" :class="{ open: open }">
      <div class="wrapper">
        <scrollactive :duration="800" bezier-easing-value=".5,0,.35,1">
          <nuxt-link to="/">
            <div>
              <Button class="menu_item">
                <img src="/imgs/navbar/button_home.png" alt="" srcset="" />
              </Button>
            </div>
          </nuxt-link>
          <a href="#scene2" class="scrollactive-item">
            <Button class="menu_item">
              <img src="/imgs/navbar/button_meaning.png" alt="" srcset="" />
            </Button>
          </a>
          <a href="#history" class="scrollactive-item">
            <Button class="menu_item">
              <img src="/imgs/navbar/button_history.png" alt="" srcset="" />
            </Button>
          </a>
          <a href="#category" class="scrollactive-item">
            <Button class="menu_item">
              <img src="/imgs/navbar/button_category.png" alt="" srcset="" />
            </Button>
          </a>
          <a href="#structure" class="scrollactive-item">
            <Button class="menu_item">
              <img src="/imgs/navbar/button_structure.png" alt="" srcset="" />
            </Button>
          </a>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeBQuK4rTer0Oklx51ys1g8HRNubrhlQw9I2nOgndQgizFLGQ/viewform"
          >
            <Button class="menu_item">
              <img src="/imgs/navbar/button_test.png" alt="" srcset="" />
            </Button>
          </a>
          <a href="#comment" class="scrollactive-item">
            <Button class="menu_item">
              <img src="/imgs/navbar/button_comment.png" alt="" srcset="" />
            </Button>
          </a>
        </scrollactive>
      </div>
    </div>
    <div class="bg">
      <img
        id="bg"
        :class="{ display: !open }"
        src="/imgs/navbar/bg.svg"
        alt=""
        srcset=""
      />
      <img
        id="bg_white"
        :class="{ display: open }"
        src="/imgs/navbar/bg_white.svg"
        alt=""
        srcset=""
      />
      <Button class="close" @onClick="toggle">
        <img :src="buttonSrc" alt="" srcset="" />
      </Button>
    </div>
  </nav>
</template>

<script>
import Button from '@/components/button'

export default {
  name: 'Navbar',
  components: {
    Button
  },
  data() {
    return {
      open: false,
      topScreen: true,
      lastScrollPosition: 0
    }
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll)
  },
  computed: {
    navbarSrc() {
      return this.open ? '/imgs/navbar/bg_white.svg' : '/imgs/navbar/bg.svg'
    },
    buttonSrc: function() {
      return this.open ? '/imgs/navbar/close.png' : '/imgs/navbar/hamburger.png'
    }
  },
  methods: {
    toggle: function() {
      this.open = !this.open
    },
    onScroll() {
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop
      this.lastScrollPosition = currentScrollPosition

      this.topScreen = currentScrollPosition <= 0
    }
  }
}
</script>

<style lang="scss" scoped>
#navbar {
  position: fixed;
  width: 50px;
  height: 100%;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;

  .bg {
    width: 50px;
    position: relative;
    user-select: none;
    -webkit-user-drag: none;
  }
}

#bg {
  opacity: 0;
  transition: all 0.8s;
  user-select: none;
  -webkit-user-drag: none;

  &.display {
    opacity: 1;
    transition: all 0.2s;
  }
}

#bg_white {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0;
  transition: all 0.8s;
  user-select: none;
  -webkit-user-drag: none;

  &.display {
    opacity: 1;
    transition: all 0.2s;
  }
}

.close {
  position: absolute;
  top: 48%;
  width: 50px;
  height: 50px;
  outline: none;

  img {
    width: 40px !important;
    height: 40px;
    padding: 5px;
  }
}

#menu {
  top: 0;
  left: 0;
  position: absolute;
  width: 300px;
  height: 100%;
  background-color: #4c4c4c;
  padding-left: 60px;
  transform: translateX(-100%);
  transition: all 0.8s;

  &.open {
    transform: translateX(0);
    transition: all 0.8s;

    .menu_item {
      opacity: 1;
      transform: translateX(0);
    }
  }

  .menu_item {
    opacity: 0;
    transform: translateX(-100%);
  }

  .wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}

.menu_item {
  width: 200px;
  max-height: 50px;
  margin-bottom: 10px;
  transition: all 0.8s;
}
</style>
