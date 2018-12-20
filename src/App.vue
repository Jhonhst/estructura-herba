<template>
  <div id="app" :class="[language, this.$route.query.param + 'Page']">
   <!--<HeaderBar></HeaderBar>
   <mainMenu @isMobile="mobileVar"></mainMenu>    -->
    <router-view></router-view>
    <div class="music">
      <Player></Player>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import Player from './components/Player.vue';
// import HeaderBar from './components/HeaderBar.vue';
// import mainMenu from './components/Menu.vue';

export default {
  name: 'app',
  computed: {
      language () {
          return this.$store.state.lang
      }
  },
  components: { //here you declare the component you wanna add
    Player
  }
}
</script>

<style lang="scss">
@import "/static/styles/master.css";
.music {
  position: fixed;
  padding: 5px 15px;
  top: calc(100vh - 50px);
  z-index: 3;
  iframe{
    width: 150px;
  }
  &:before{
    display: none;
  }
}

.container {
  padding-bottom:1000px; 
}


@media(max-width: 768px){

    .container {
      padding-bottom:50px; 
    }

    .music{display: none;}
}
</style>
