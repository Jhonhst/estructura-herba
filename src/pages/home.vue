<template>
  <div class="home">
     <HeaderBar></HeaderBar>
     <div  v-if="!hideLoader" id="contentLoader">
            <div class="mainImageLoader">
                <p style="font-size: 0;"> {{checker}} </p>
                <img id="animation-logo-neon" class="logo" src="/static/images/201-EMEA-VACATIONS.png">
                <img src="/static/images/loading.gif" alt="loading" id="loading">
            </div>
      </div>

     <mainMenu @menuScroll="posScroll" :newPos="scrollPos" v-if="sourceView" :class="{thisshow: hideLoader }" class="thishide"></mainMenu>
     <div :class="{thisshow: hideLoader }" class="main-section thishide" v-scroll-spy="scrollPos" >

            <Countdown></Countdown>
            <!--First section of the new page page-->
      
         
            <newDestination ></newDestination>
            <!--Second section of the new page-->
         
         <newHowQualify></newHowQualify><!--Third section of the page-->
         <lastYear></lastYear><!--Fourth section of the page-->
    

         <!-- <newContactUs></newContactUs> -->
         <!--Fifth section of the page-->
        <Destinations class="homeDestinations" @chargeInfo="updateInformation"></Destinations>
        
        <BookNow @chargeInfo="updateInformation"></BookNow>
        <videoH :newPos="scrollPos" ></videoH>
        <div id="plan-info" class="col2 fluid-container " v-if="sourceView" :class="{isIpad: isIpad}">
          <HowQualify :sourceView='sourceView.acf' @chargeInfo="updateInformation"></HowQualify>
          <PackageIncludes :sourceView='sourceView' @chargeInfo="updateInformation"></PackageIncludes>
        </div>
        <div class="noBg">
            <StarQua @chargeInfo="updateInformation"></StarQua>
        </div>
        <div class="noBg">
            <StarRew @chargeInfo="updateInformation"></StarRew>
        </div>
        
        <Contact @chargeInfo="updateInformation"></Contact>
        <mainFooter></mainFooter>
     </div>
  </div>
</template>

<script>
    import Vue from 'vue';
    import BootstrapVue from 'bootstrap-vue';
    import {
        mapGetters
    } from 'vuex';
    import HeaderBar from '../components/HeaderBar.vue';
    import mainMenu from '../components/Menu.vue';

    // animations
    import {
        TweenMax,
        TimelineMax
    } from 'gsap';
    import ScrollMagic from 'scrollmagic';
    import AnimationPlugin from '../../node_modules/scrollmagic/scrollmagic/minified/plugins/animation.gsap.min.js';

    // sections
    import Countdown from '../components/Countdown.vue'; // Loads the timer and the first block of information to the page
    import newDestination from '../components/newDestination.vue';
    import Destinations from '../components/Destinations.vue';
    import newHowQualify from '../components/newHowQualify.vue';
    import HowQualify from '../components/HowQualify.vue';
    import lastYear from '../components/lastYear.vue';
    import newContactUs from '../components/newContactUs.vue';
    import PackageIncludes from '../components/PackageIncludes.vue';
    import videoH from '../components/video.vue';
    import BookNow from '../components/BookNow.vue';
    import StarQua from '../components/StarQua.vue';
    import StarRew from '../components/StarRew.vue';
    import Contact from '../components/Contact.vue';
    import mainFooter from '../components/Footer.vue';

    export default {
        name: 'Home',
        data() {
            return {
                sourceView: null,
                typePage: 'welcome',
                id: '186',
                selected: this.$store.state.lang,
                showMobileMenu: false,
                scrollPos: 0,
                checker: {
                    loaded: 0, // Componentes cargados
                    number: 7 // Numero de componentes
                },
                hideLoader: false,
                isIpad: false
            }
        },
        methods: {
            getData(typePage, id, lang) {
                return this.$http.get(Vue.config.source.ENDPOINT + typePage + '/' + id + '&lang=' + lang)
                    .then(response => {
                        this.sourceView = response.body;
                    }, response => {
                        console.log('Error', Error(response.message));
                    });
            },
            posScroll(pos) {
                this.$scrollTo(pos)
            },
            updateInformation() {
                this.checker.loaded++;
            },
            Check() {
                if (this.checker.loaded >= this.checker.number) {
                    // console.log('Hide Loader')
                    this.hideLoader = true;
                }

                // if(this.sourceView){
                //    this.hideLoader = true;
                // }
            },
            animate() {
                const selector = '#plan-info';

                const SMController = new ScrollMagic.Controller();
                const tween = new TimelineMax()
                    .to(selector + ' .HowQualify', 1.5, {
                        opacity: 1,
                        scale: 1,
                        ease: Elastic.easeOut,
                        force3D: true
                    })
                    .to(selector + ' .packageIncludes', 1.5, {
                        opacity: 1,
                        scale: 1,
                        ease: Elastic.easeOut,
                        force3D: true
                    }, '=-1.5')

                let scene = new ScrollMagic.Scene({
                    triggerElement: selector
                });
                scene.setTween(tween);
                scene.addTo(SMController);

            },
            isMobile() {
                return (screen.width < 769);
            }
        },
        created() {
            if(navigator.userAgent.match(/iPad/i) != null){
                this.isIpad  = true;
            }

            // var isiPad = navigator.userAgent.match(/iPad/i) != null;
            this.getData(this.typePage, this.id, this.$store.state.lang).then(function() {
                if (!this.isMobile() && !this.isIpad){
                    this.animate();
                }
            });

        },
        updated() {
            this.Check();
        },
        components: {
            HeaderBar,
            mainMenu,
            Destinations,
            HowQualify,
            PackageIncludes,
            videoH,
            BookNow,
            StarQua,
            StarRew,
            Contact,
            mainFooter,
            Countdown,
            newDestination,
            newHowQualify,
            lastYear,
            newContactUs
        }
    }
</script>


<style lang="scss">
    .countdown{
        position: relative;
        z-index: 1;
        // margin-bottom: 10%;
    }
    .destination{
        position: relative;
        z-index: 1;
        // margin-top: 12%;
    }

    .homeDestinations {
        min-height: 100vh
    }
    .thishide {
        opacity: 0;
    }
    .thisshow {
        opacity: 1;
        transition: .1s all ease;
    }
    #contentLoader {
        min-height: 100vh;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
    }
    #loading {
        width: 50px;
        margin: 0 auto;
        display: block;
    }
    .mainImageLoader {
        width: 100%;
    }
    #animation-logo-neon {
        width: 80%;
        max-width: 500px;
        margin: 0 auto;
        animation: 3.5s changeColor infinite;
        display: block;
        @keyframes changeColor{
            0% {
                opacity: 1;
            }
            100% {
                opacity: .6;
            }

        }

    }



    #plan-info{
        max-width: none;
        & > div {
            max-width: 400px;
        }
    }
    .col2 {
        padding-top: 40px;
        padding-bottom: 40px;
        display: flex;
        justify-content: space-around;
        position: relative;
        &>div {
            flex-basis: 40%;
        }
        &:before {
            content: "";
            width: 4px;
            height: calc(100% - 60px);
            background: #0DA244;
            position: absolute;
            top: 30px;
            left: calc(50% - 2px);
        }
        h2,
        h4 {
            text-align: left;
            width: 300px;
            font-size: 50px;
            line-height: 1;
        }
    }
    /*.main-section:first-of-type{
        background: linear-gradient(to bottom, #1b1c42 0%,rgba(255,255,255, 0) 100%);
        -webkit-background-size: 100%;
        background-size: 100%;
        background-repeat: no-repeat;
    }*/
     @media (min-width: 768px) {
        #plan-info:not(.isIpad) .HowQualify,
        #plan-info:not(.isIpad) .packageIncludes {
            transform: scale(.5);
            opacity: 0;
        }
     }
    @media (max-width: 768px) {

        #plan-info {
            .HowQualify,
            .packageIncludes {
                opacity: 1;
                transform: scale(1);
            }
        }
    }

    @media(max-width: 678px) {
        .col2 {
            padding: 20px 25px;
            display: block;
            &:before {
                display: none;
            }
            h2,
            h4 {
                text-align: center;
                width: 70%;
                margin: 0 auto;
                font-size: 35px;
                line-height: 32px;
                margin-bottom: 30px;
            }
        }

    }

</style>
