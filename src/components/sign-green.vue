<template>
    <div class="sign sign-green">
      <div class="light-even"></div>
      <div class="light-odd"></div>
      <img class="logoHer" src="/static/images/Herbalife-Logo.svg">
      <img src="/static/images/Aviso.png" style="opacity: 0;">
    </div>
</template>

<script>
  import Vue from 'vue';

  // animations
  import { TweenMax, TimelineMax } from 'gsap';
  import ScrollMagic from 'scrollmagic';
  import AnimationPlugin from '../../node_modules/scrollmagic/scrollmagic/minified/plugins/animation.gsap.min.js';

  export default {
    name: 'sign',
    //props: ['sourceView'],
    data() {
      return {}
    },
    methods: {
        /*
      animate() {
         console.log('this el:', this);
        console.log('this elm:', this.$el);
        TweenMax.to(this, 0.5, { opacity: 0 });
      }*/
    },
    created() {
        // this.animate();
    },
    computed: {
      animate() {
        console.log('this el:', this);
        console.log('this elm:', this.$el);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  /*
   * Green Sign Styles
   * &::before - odd
   * &::after - even
   */
  .sign-green {
    position: relative;
    background-image: url('/static/images/Aviso_base.png');
    background-repeat: no-repeat;
    background-size: 100% auto;
  }

  .sign-green .content {
    position: relative;
    z-index: 2;
  }

  .sign-green .light-odd,
  .sign-green .light-even {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-repeat: no-repeat;
    background-size: 100% auto;
    z-index: 1;
  }

  .sign-green .light-odd {
    background-image: url('/static/images/Aviso_lights_odd.png');
  }

  .sign-green .light-even {
    background-image: url('/static/images/Aviso_lights_even.png');
  }
</style>
