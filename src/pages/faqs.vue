<template>
  <div class="faqs" v-if="sourceView">
      <HeaderBar></HeaderBar>
      <div class="fluid-container">
            <h2 class="title font-Flat" v-html="sourceView.title.rendered"></h2>

            <ul class="font-Cae">
                <li v-for="question in sourceView.acf.questions">
                    <p><strong>{{question.question}}</strong></p>
                    <p class="answer" v-html="question.answer"></p>
                </li>
            </ul>
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
        name: 'faqs',
        data() {
            return {
                sourceView: null,
                typePage: 'faq',
                id: '584'
            }
        },
        methods: {
            getData(typePage, id, lang) {
                return this.$http.get(Vue.config.source.ENDPOINT + typePage + '/' + id + '&lang=' + lang)
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
            this.$language = this.$store.state.lang;
        },
        components: {
            HeaderBar,
            mainFooter
        }
    }
</script>


<style lang="scss">
    .faqs p {
        margin-bottom: 10px;
    }
    .faqs .fluid-container {
        padding: 50px 20px 10px 35px;
        min-height: 100vh;
        /*padding-bottom: 190px;*/
        ul {
            font-size: 14px;
        }
        li {
            margin: 10px 0;
        }
        .answer {
            opacity: .9;
        }
    }
      .faqs  .close{
            position: absolute;
            top: 80px;
            right: 15px;        
        }
</style>