<template>
<div>
 <HeaderBar></HeaderBar>
  <div id="Lang" class="language">
      <div class="container-fluid">   
        <div class="lang-header">
            <!--<img class="logo" src="/static/images/Logo-Herbalife.png">-->
          <!--<img id="animation-logo-neon" class="logo" src="/static/images/201-EMEA-VACATIONS.png">Animacion neon rojo-->
          <!--<div class="sign sign-green animated">-->
              <div>
            <img class="logoHer" src="/static/images/Logo-Intro.png">
          </div>
          
        </div> 

        <div v-if="sourceView" class="font-Flat main-title">
            <div v-html="sourceView.acf.welcome_text">
            </div>
        </div>

        <div class="languages">
            <button class="lang-btn" v-on:click="selectLanguage('en')"><img src="/static/images/Bandera_1.png" alt="ingles"></button>
            <button class="lang-btn" v-on:click="selectLanguage('de')"><img src="/static/images/Bandera_2.png" alt="aleman"></button>
            <button class="lang-btn" v-on:click="selectLanguage('es')"><img src="/static/images/Bandera_3.png" alt="español"></button>
            <button class="lang-btn" v-on:click="selectLanguage('cs')"><img src="/static/images/Bandera_4.png" alt="checo"></button>
            <button class="lang-btn" v-on:click="selectLanguage('pt-pt')"><img src="/static/images/Bandera_5.png" alt="portugues"></button>
            <button class="lang-btn" v-on:click="selectLanguage('it')"><img src="/static/images/Bandera_6.png" alt="italiano"></button>
            <button class="lang-btn" v-on:click="selectLanguage('fr')"><img src="/static/images/Bandera_7.png" alt="frances"></button>
            <button class="lang-btn" v-on:click="selectLanguage('tr')"><img src="/static/images/Bandera_8.png" alt="turco"></button>
            <button class="lang-btn" v-on:click="selectLanguage('pl')"><img src="/static/images/Bandera_9.png" alt="polaco"></button>
            <button class="lang-btn" v-on:click="selectLanguage('ro')"><img src="/static/images/Bandera_10.png" alt="rumano"></button>
        </div>
      </div>
  </div>
  </div>
</template>

<script>
    import Vue from 'vue';
    import {
        mapGetters
    } from 'vuex';
    import HeaderBar from '../components/HeaderBar.vue';
    import router from 'vue-router';
    import sign from '../components/sign-green.vue';

    // animations
    import {
        TweenMax,
        TimelineMax
    } from 'gsap';
    import ScrollMagic from 'scrollmagic';
    import AnimationPlugin from '../../node_modules/scrollmagic/scrollmagic/minified/plugins/animation.gsap.min.js';

    export default {
        name: 'Language',
        data() {
            return {
                sourceView: null,
                typePage: 'welcome',
                id: '186',
                defaultLang: '',
                loader: true,
                selected: ''
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
                
            },
            animate() {
                const selector = '#Lang ';
                TweenMax.to(selector + '.lang-header', 2, {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    ease: Elastic.easeOut,
                    force3D: true
                });
                TweenMax.staggerTo(selector + '.languages .lang-btn', 1.5, {
                    opacity: 1,
                    scale: 1,
                    delay: 0.5,
                    ease: Elastic.easeOut,
                    force3D: true
                }, 0.2);
                TweenMax.to(selector + '.animation-2', 1, {
                    opacity: 1,
                    y: 0,
                    delay: 2,
                    force3D: true
                });
                /*
                // iluminar titulo - test
                const color = {
                    gray: 0
                };
                const image = document.getElementById('animation-logo-neon');

                TweenMax.to(color, .1, {
                    gray: .5,
                    onUpdate: applyColor,
                    onUpdateParams: [image],
                    repeat: -1,
                    yoyo: true,
                    repeatDelay: 2
                });
                */

                function applyColor(element) {
                    element.style["-webkit-filter"] = "grayscale(" + color.gray + ")"
                }

                /*
                const SMController = new ScrollMagic.Controller();
                scene.setTween(selector, 0.5, { opacity: 1 });
                let scene = new ScrollMagic.Scene();
                scene.addTo(SMController);
                */
               
            }
        },
        created() {
            if (!localStorage.lang) {
                this.defaultLang = 'en';
                this.selectedLang = 'en';
            } else {
                this.defaultLang = localStorage.lang;
                this.selectedLang = localStorage.lang;
            }
            this.getData(this.typePage, this.id, this.defaultLang).then(() => {
                this.animate()
            });
            console.log('local', localStorage.lang)
        },
        computed: {
            language() {
                return this.$store.state.lang
            }
        },
        components: {
            HeaderBar,
            sign
        }
    }


</script>


<style lang="scss">
    $primary_color:   #FFFFFF;
    $title_color:#ffffff;
    /*
     * Language Styles
     */
    
    .language {
        min-height: 100vh;
        /*background-position: 50% 15%;*/
        background-size:100% auto;
        background-repeat: no-repeat;

        /*padding-bottom: 170px;*/
        .container {
            max-width: 1170px;
            width: 60%;
            margin: 0px auto;
        }
        .logo {
            width: 60%;
            margin: 0 auto;
            display: block;
        }
        .font-Ail.tx-center {
            font-size: 16px;
            color: #c7c7c7;
        }
    }
    
    .main-title {
        color: $title_color;
        font-style: italic;
        text-align: center;
        h1,
        h2 {
            margin: 5px 5px 10px;
            /*text-shadow: 6px -4px 20px;*/
        }
    }
    
    .languages {
        text-align: center;
        display: flex;
        justify-content: space-around;
        max-width: 750px;
        margin: 10px auto;
        button {
            cursor: pointer;
            background-color: transparent;
            border: none;
            padding:5px;
            
        }
    }
    
    @media (min-width: 768px) {
        .lang-header {
            transform: translate(0, -100%) scale(.45);
            opacity: 0;
        }
        .animation-2 {
            transform: translate(0, 20%);
            opacity: 0;
        }
        .lang-footer {
            padding-top: 2rem;
        }
        #Lang .main-title {
            padding-top: 1rem;
        }
        .languages {
            button {
                transform: scale(.5);
                opacity: 0;
                /*&:hover img {
                    transform: scale(1.2) rotate(-10deg);
                }*/
                img {
                    transition: transform .25s ease-in;
                }
            }
        }
    }
    
    @media(max-width: 767px) {
        .language {
            background-size: cover;
            background-position: 30% 50%;
            .container {
                padding: 60px 15px 20px;
                width: 100%;
            }
            .logo {
                width: 100%;
            }
            .sign {
                width: 70%;
                margin-bottom: 20px;
            }
            .font-Ail.tx-center {
                width: 80%;
                margin: 0 auto;
            }
            .container {
                position: relative;
                z-index: 1;
                &:before {
                    content: "";
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    z-index: -1;
                    // background: -webkit-linear-gradient(rgba(0, 0, 0, .48) 0%, rgba(0, 0, 0, 0.3) 8%, rgba(8, 8, 8, 0.7) 30%, rgba(15, 15, 15, .5) 66%, rgba(15, 15, 15, 0) 100%);
                    // background: -o-linear-gradient(rgba(0, 0, 0, .28) 0%, rgba(0, 0, 0, 0.3) 8%, rgba(8, 8, 8, 0.7) 30%, rgba(15, 15, 15, .5) 66%, rgba(15, 15, 15, 0) 100%);
                    // background: linear-gradient(rgba(0, 0, 0, .28) 0%, rgba(0, 0, 0, 0.3) 8%, rgba(8, 8, 8, 0.7) 30%, rgba(15, 15, 15, .5) 66%, rgba(15, 15, 15, 0) 100%);
                    // top: 0;
                    // left: 0;
                }
            }
            .languages {
                flex-wrap: wrap;
                button {
                    width: 20%;
                }
            }
        }
    }
    @media(min-width: 767px) {
        .logoHer{
            margin-left: 26%;
            width: 50%;
        }
    }
</style>