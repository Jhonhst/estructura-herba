<template>
 <div></div>
  <!-- <div class="bookNow main-section" v-if="sourceView" id="booknow">
      <h2 class="font-Flat title">{{sourceView.title.rendered}}</h2>


      <center v-html="sourceView.content.rendered"></center>

      <div v-if="this.$route.query.param || this.$route.query.param === 'zanzibar'" class="item">
        <div v-for="(item, index) in bookButtons" class="item" v-if="index == 2">
            <a :href="item.url_button   " target="_blank">
                <div class="signButton sign-green">
                    <div class="font-Flat" v-html="item.name_button"> -->
                        <!--{{item.name_button}}-->
                    <!-- </div>
                </div>
            </a>
        </div>
      </div>


      <div v-for="(item, index) in bookButtons" class="item" v-if="index < 2">
          <a :href="item.url_button" target="_blank">
              <div class="signButton sign-green">
                <div class="font-Flat" v-html="item.name_button"> -->
                    <!--{{item.name_button}}-->
                <!-- </div>
              </div>
        </a>
      </div>

      <div class="note font-Cae fluid-container bgGray" v-html="sourceView.acf.note">
      </div>
      <div class="sign">
        <div class="sign-arrow-light">
          <img src="/static/images/Flecha_3_off.png" alt="sign">
        </div>
      </div>
  </div> -->
</template>

<script>
    import Vue from 'vue';
    import {
        mapGetters
    } from 'vuex';
    // animations
    import {
        TweenMax,
        TimelineMax
    } from 'gsap';
    import ScrollMagic from 'scrollmagic';
    import AnimationPlugin from '../../node_modules/scrollmagic/scrollmagic/minified/plugins/animation.gsap.min.js';

    export default {
        name: 'BookNow',
        data() {
            return {
                sourceView: null,
                typePage: 'register_here',
                id: '1131',
                bookButtons:[]
            }
        },
        methods: {
            getData(typePage, id, lang) {
                return this.$http.get(Vue.config.source.ENDPOINT + typePage + '/' + id + '&lang=' + lang)
                    .then(response => {
                        this.sourceView = response.body;
                        this.getBookUrl();
                    }, response => {
                        console.log('Error', Error(response.message));
                    });
            },
            chargeInfo() {
                this.$emit('chargeInfo', this.checkerdata);
                this.checkerdata++;
            },
            getBookUrl() {

                this.bookButtons =  this.sourceView.acf.button;

                if(this.$route.query.param === 'zanzibar'){

                    for(var i = 0 ; i < this.bookButtons.length ; i ++){
                        this.bookButtons[i].url_button = this.bookButtons[i].url_button+'?param=zanzibar'+ '&lang=' + this.$store.state.lang;
                    }
                }else {
                    for(var i = 0 ; i < this.bookButtons.length ; i ++){
                        this.bookButtons[i].url_button = this.bookButtons[i].url_button+'?lang=' + this.$store.state.lang;
                    }

                }
            },
            animate() {
                const selector = '#booknow';

                TweenMax.to(selector + ' .sign > div', .7, {
                    x: '10px',
                    yoyo: true,
                    repeat: -1,
                    ease: Linear.easeNone
                });

                const SMController = new ScrollMagic.Controller();
                const tween = new TimelineMax()
                    .to(selector + ' .sign', .5, {
                        scale: 1,
                        x: 0,
                        force3D: true,
                        ease: Expo.easeOut
                    })
                    .staggerTo(selector + ' .item', 1.5, {
                        opacity: 1,
                        scale: 1,
                        delay: 0.5,
                        ease: Elastic.easeOut,
                        force3D: true
                    }, 0.2);

                let scene = new ScrollMagic.Scene({
                    triggerElement: selector
                });
                scene.setTween(tween);
                scene.addTo(SMController);
            }
        },
        created() {
            this.getData(this.typePage, this.id, this.$store.state.lang).then(function() {
                this.animate();
                this.chargeInfo();
            });
        }
       
    }
</script>

<style lang="scss">
    .bookNow {
        padding-top: 30px;
        padding-bottom: 30px;
        position: relative;
        background-image: url(/static/images/PinUp-girl.png);
        background-repeat: no-repeat;
        background-size: 35%;
        background-position: 0% 70%;
            overflow-x: hidden;
        @media(min-width: 1300px) {
            background-size: 25%;
        }
        .item {
            display: block;
            text-align: center;
            margin: 0 auto;
            width: 400px;
        }
        .signButton {
            display: block;
            position: relative;
            bottom: 0;
            left: 0;
            width: 100%;
            background-position: 50% -70%;
            padding: 70px 0;
            h2 {
                margin-top: -25px;
            }
        }
        a {
            color: #fff;
            text-decoration: none;
        }
        .sign {
            position: absolute;
            right: 5%;
            top: 30%;
            transform: translateY(-50%);
            width: 25%;
            max-width: 350px;
            @media(min-width: 1450px) {
                right: 10%;
            }
        }
        .note {
            text-align: center;
            font-size: 12px;
            padding: 15px 0;
            h2 {
                font-family: 'Flathead';
                text-shadow: 0 0 11px rgb(255, 255, 255), 0 0 60px rgba(0, 0, 0, 0), 0 0 100px rgba(21, 21, 21, 0.2), -2px 5px 10px rgba(0, 0, 0, 1);
                letter-spacing: 2px;
                text-transform: capitalize;
                font-size: 30px;
                margin-bottom: 25px;
                margin-top: 20px;
                font-style: italic;
            }
            ul {
                width: 90%;
                margin: 0 auto;
                list-style-type: disc;
                list-style-position: inside;
                line-height: 25px;
                color: #fff;
                font-size: 14px;
            }
        }
    }
    
    @media(min-width: 768px) {
        #booknow .item {
            transform: scale(.5);
            opacity: 0;
        }
        #booknow .sign {
            transform: translate(200%, -50%) scale(.4);
        }
    }
    
    @media(max-width: 767px) {
        .bookNow {
            -webkit-background-size: 80%;
            background-size: 80%;
            background-position: -100% 5%;
            /*margin-top: 90px;*/
            padding-top: 90px;
            &>h2 {
                display: inline-block;
                width: 60%;
                margin-left: 39%;
                margin-bottom: 10px;
                ;
            }
            .sign {
                top: 10px;
                left: 0;
                transform: rotateY(180deg);
                right: auto;
                width: 45%;
                max-width: 200px;
               
            }
            .item {
                float: right;
                width: 100%;
                .signButton {
                    background-position: 50% 50%;
                    padding: 0;
                    padding: 35px 0;
                    h2 {
                        font-size: 33px;
                        margin-top: -5px;
                    }
                    p {
                        font-size: 20px;
                    }
                }
            }
            .note {
                clear: both;
                padding-top: 1px;
                h2 {
                    font-size: 23px;
                    letter-spacing: 1px;
                    margin-bottom: 10px;
                }
                ul {
                    font-size: 16px;
                    line-height: 18px;
                }
                li {
                    margin: 25px 0;
                }
            }
        }
    }
</style>