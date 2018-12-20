<template>
<div></div>
  <!-- <div class="video main-section" id="videoH">
      <h2 class="font-Flat title" v-lang.videoH></h2>
      <div class="containerVideo">
        <button class="playButton" :class="{ 'active': active }" style="opacity: 0" @click="playPause"><img src="/static/images/playIcon.svg" alt="play"></button>
        <button class="pauseButton" :class="{ 'active': active }" @click="playPause"></button>
        <div id="video"> -->
          <!--<video id="video1" width="100%" height="auto" ref="video1" muted>
            <source src="/static/images/2018-EMEA-Vacations.mp4" type="video/mp4">
            Your browser does not support HTML5 video.
          </video>-->
          <!--<iframe src="https://player.vimeo.com/video/250767655" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen id="iframeVideo"></iframe>-->
<!--         
           <vimeo-player ref="player" :video-id="videoID" @ready="onReady"></vimeo-player>
        </div>
      </div>
  </div> -->
</template>

<script>

  // animations
  import { TweenMax, TimelineMax } from 'gsap';
  import ScrollMagic from 'scrollmagic';
  import AnimationPlugin from '../../node_modules/scrollmagic/scrollmagic/minified/plugins/animation.gsap.min.js';
  import vueVimeoPlayer from 'vue-vimeo-player'
  import Vue from 'vue'
 
  Vue.use(vueVimeoPlayer)

export default {
  name: 'videoH',
  data () {
    return {
      video1: [],
      active: false,
      videoID: '250767655',
      options: {},
      playerReady: false
    }
  },
  props: ['newPos'],
  components: {vueVimeoPlayer},
  methods: {
    playPause() {
      this.active = ! this.active;
      // this.video1 = this.$refs.video1
      console.log(this.active);
      if(this.active){
        this.play();
      }else{
        this.stop();
      }
    },
    onReady() {
        this.playerReady = true
    },
    play () {
        this.$refs.player.play()
        this.$refs.player.mute()
    },
    stop () {
        this.$refs.player.pause()
    },

    animate() {
      const selector = '#videoH';

      const SMController = new ScrollMagic.Controller();
      const tween = TweenMax.from(selector + ' .containerVideo', .5, { x: '-50%', force3D:true });

      let scene = new ScrollMagic.Scene({triggerElement: selector, duration: 400, offset: -50});
      scene.setTween(tween);
      scene.addTo(SMController);
    },
    isMobile() {
      return (screen.width < 769);
    },
    handleScroll () {
      this.video1 = this.$refs.video1
      if(this.newPos === 2 && !this.active){
          this.$refs.player.play()
          this.$refs.player.mute()
          this.active = ! this.active;
          window.removeEventListener('scroll', this.handleScroll);
      }
    }
  },
  created() {
    if (!this.isMobile()) {
        setTimeout(this.animate, 1000);
    }
    window.addEventListener('scroll', this.handleScroll);
  }
}
</script>
<style>
  .video iframe{
    width: 100%;
    height: 410px;
  }
  @media(max-width: 1175px){
    .video iframe{
      width: 100%;
      height: 300px;
    }
  }
  @media(max-width: 640px){
    .video iframe{
      width: 100%;
      height: 150px;
    }
  }
</style>


<style lang="scss" scoped>
  .video{
    padding-top: 30px;
    padding-bottom: 30px;
    .containerVideo{
      position: relative;
      width: 90%;
      margin: 0 auto;
      max-width: 1050px;
      &:before{
        content: "";
        background-image: url(/static/images/Tv-retro1.png);
        background-repeat: no-repeat;
        background-position: 50% 0%;
        -webkit-background-size: cover;
        background-size: cover;
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        margin: 0px auto;
        text-align: center;
      }
    }
    #video{
      padding-top: 55px;
      padding-bottom: 300px;
      width: 70%;
      margin: 0 auto;
      position: relative;
      z-index: -1;
      @media(min-width: 768px)and(max-width: 900px){
        padding-top: 35px;
        padding-bottom: 210px;
      }
    }
    .playButton{
      position: absolute;
      z-index: 1;
      width: 50px;
      height: 50px;
      top: calc(50% - 120px);
      left: 50%;
      transform: translate(-50%, -50%);
      -webkit-appearance: none;
      border: 0;
      background: none;
      opacity: .7;
      cursor: pointer;
      &.active{
        transition: .5s opacity linear;
        opacity: 0;
      }
    }
    .pauseButton {
      position: absolute;
      bottom: 0;
      background: #000;
      border-radius: 50%;
      border: 3px solid #000;
      bottom: 235px;
      right: 143px;
      width: 30px;
      cursor: pointer;
      opacity: .8;
      &:after{
        content: "";
        background-image: url('/static/images/playIcon.svg');
        -webkit-background-size: contain;
        background-size: contain;
        width: 26px;
        height: 26px;
        display: block;
      }
      &.active:after {
        background-image: url('/static/images/pause.svg');
      }
    }

    @media(max-width: 767px){
      &.main-section{
        min-height: initial !important;
      }
      .containerVideo{
        width: 320px;
        height: 300px;
      }
      #video{
        padding: 16px 0;
        width: 80%;
      }
      .playButton{
        top: calc(50% - 55px);
        width: 30px;
        height: 30px;
      }
    }





     /*@media(min-width: 767px) and (max-width: 768px){
      .pauseButton {
        bottom: 161px;
        right: 88px;
      }
    }   */

    @media(max-width: 766px){
      .pauseButton {
        bottom: 20px;
        right: calc(50% - 10px);
      }
    }
  }

    @media(max-width: 1175px){
        .video .containerVideo {
          max-width: 780px;
        }
        .video .pauseButton {
          bottom: 252px;
          right: 101px;
      }
    }

    @media(max-width: 768px){
        .video .pauseButton {
          bottom: 189px;
          right: 90px;
      }
    }

    @media(max-width: 640px){
        .video .pauseButton {
          bottom: 20px;
          right: calc(50% - 20px);
          opacity: 0;
      }
    }    


  // Fix for IE11 and 10 (Edge works well):
  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    .video {
      display: none;
    }
  }


</style>


