<template>
</template>

<script>
import Vue from "vue";
import { mapGetters } from "vuex";
import HeaderBar from "../components/HeaderBar.vue";
import router from "vue-router";
import sign from "../components/sign-green.vue";

// animations
import { TweenMax, TimelineMax } from "gsap";
import ScrollMagic from "scrollmagic";
import AnimationPlugin from "../../node_modules/scrollmagic/scrollmagic/minified/plugins/animation.gsap.min.js";

var vm = new Vue({
  methods: {
    foo: function() {
      console.log("bar");
    }
  }
});
export default {
  name: "Language",
  data() {
    return {
      sourceView: null,
      typePage: "welcome",
      id: "186",
      defaultLang: "",
      loader: true,
      selected: ""
    };
  },
  mounted: function() {
    console.log("This is the imagen url", this.$route.query);
    localStorage.setItem("token", this.$route.query.token);
    localStorage.setItem("id_session", this.$route.query.session);
    localStorage.setItem("img_session", this.$route.query.imagen);
    localStorage.setItem("user_name", this.$route.query.fullname);
    localStorage.setItem("bookingid", this.$route.query.bookingid);
    localStorage.setItem("eventid", this.$route.query.eventid);
    if (this.$route.query.param === "zanzibar") {
      window.location.href = "https://emeavacationreg.com/#/?param=zanzibar";
      //window.location.href = "http://localhost:8080/#/?param=zanzibar";
      //this.$router.push('/?param=zanzibar');
    } else {
      window.location.href = "https://emeavacationreg.com:3002";
      //window.location.href = "http://localhost:8080";
      //this.$router.push('/');
    }
  },
  methods: {
    selectLanguage(lang) {
      localStorage.setItem("lang", lang);
                this.$store.commit('selectLang', lang);
                this.getData(this.typePage, this.id, lang);
                this.loader = true;
                // this.$router.push('home');

                if(this.$route.query.param === 'zanzibar') {
                    this.$router.push('home?param=zanzibar');
                }else {
                    this.$router.push('home');
                } 
    }
  },
  computed: {
    language() {
      return this.$store.state.lang;
    }
  },
  components: {
    HeaderBar,
    sign
  }
};
</script>

