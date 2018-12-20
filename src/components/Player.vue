<template>
    <div class="player">
      <!--<button v-on:click="playPause">
          <img v-if="isPlaying" src="/static/images/pauseSound.svg" alt="pause">
          <img v-else src="/static/images/playSound.svg" alt="play">
      </button>-->
      <iframe id="sc-widget" width="10px" height="20px" scrolling="no" frameborder="no"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/274572673&amp;color=%23d60058&amp;auto_play=true&buying=false&sharing=false&download=false&show_artwork=false&show_playcount=false&show_user=false">
      </iframe>
    </div>

</template>

<script>
export default {
  name: 'player',
  data() {
    return {
        iframeElement: '',
        widget: '',
        isPlaying: false
    }
  },
  mounted: function(){
      this.iframeElement = document.getElementById('sc-widget');
      this.widget = SC.Widget(this.iframeElement);
      
  },
  methods: {
      playPause() {
        if(this.isPlaying) {
            this.widget.pause();
            this.isPlaying = false;
        }else {
            this.widget.play();
            this.isPlaying = true;
        }
      }
  }
}
</script>
<style>
</style>