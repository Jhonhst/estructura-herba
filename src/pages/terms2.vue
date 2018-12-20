<template>
  <div class="terms" v-if="sourceView">
      <HeaderBar></HeaderBar>
      <div class="fluid-container">
            <h2 class="title font-Flat">{{sourceView.title.rendered}}</h2>

            <div class="info font-Cae" v-html="sourceView.content.rendered"></div>
      </div>
      <div class="close font-Cae" @click="toHome"> <span v-lang.close></span> <img src="/static/images/X.png"/></div>
      <mainFooter></mainFooter>
  </div>
</template>

<script>
    import Vue from 'vue';
    import {
        mapGetters
    } from 'vuex';
    import HeaderBar from '../components/HeaderBar.vue';
    import mainFooter from '../components/Footer.vue';
    export default {
        name: 'termsandconditions',
        data() {
            return {
                sourceView: null,
                typePage: 'terms_and_conditions',
                id: '1967'
            }
        },
        methods: {
            getData(typePage, id, lang) {
                return this.$http.get(Vue.config.source.ENDPOINT + typePage + '/' + id + '&lang=' + 'en')
                    .then(response => {
                        this.loader = false;
                        this.sourceView = response.body;
                    }, response => {
                        console.log('Error', Error(response.message));
                    });
            },
            toHome(){
                console.log('home');
                if(this.$route.query.param === 'zanzibar'){
                    this.$router.push('/home?param=zanzibar');
                }else {
                    this.$router.push('/home');
                }
            }
        },
        created() {
            this.getData(this.typePage, this.id, this.$store.state.lang);
            // this.$language = this.$store.state.lang;
        },
        components: {
            HeaderBar,
            mainFooter
        }
    }
</script>


<style lang="scss">
    .terms .fluid-container {
        padding: 50px 20px;
        min-height: 100vh;
    }
    .terms p {
        margin-bottom: 10px;
    }
    .terms .close{
        position: absolute;
        top: 80px;
        right: 15px;        
    }
</style>