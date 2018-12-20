<template>
<div></div>
  <!-- <div class="Destinations main-section" v-if="sourceView" id="destinations">
      <div class="fluid-container">
            <h2 class="font-Flat title">{{sourceView.title.rendered}}</h2>
            <center class="font-Cae margin-bottom" v-html="sourceView.content.rendered"></center>

            <div class="items" v-if="!this.$route.query.param || this.$route.query.param != 'zanzibar'">
                
                <div class="item item-1 font-Flat">
                    <router-link :to="{ path: 'destination/tenerife'}">
                        <span class="sign sign1">
                            <div class="sign-arrow-light">
                              <img src="/static/images/Flecha_3_off.png" alt="sign">
                            </div>
                        </span>
                        <img src="/static/images/Imagen-Destino_1.png">
                        <div class="signButton sign-green" v-html="sourceView.acf.destination[0].description_destination"></div>  
                    </router-link>
                    <div class="buttons">
                        <a :href="sourceView.acf.destination[0].book_now_button_url + '?lang=' +this.$store.state.lang" target="_blank">
                            <button class="bnt-bookNow">{{sourceView.acf.button_book_now_text}}</button>
                        </a>
                        <router-link :to="{ path: 'destination/tenerife'}">
                             <button class="bnt-moreinfo">{{sourceView.acf.button_more_info}}</button>
                        </router-link>         
                    </div>
                    <div v-html="sourceView.acf.destination[0].date_destination"></div>
                </div>

                <div class="item item-2 font-Flat">
                    <router-link :to="{ path: 'destination/miami'}">
                        <span class="sign sign2">
                            <img src="/static/images/Flecha_4.png" alt="sign">
                        </span>
                        <img src="/static/images/Imagen-Destino_2.png">
                        <div class="signButton sign-green"  v-html="sourceView.acf.destination[1].description_destination"></div>
                   </router-link>
                    <div class="buttons">
                        <a :href="sourceView.acf.destination[1].book_now_button_url + '?lang=' +this.$store.state.lang" target="_blank">
                            <button class="bnt-bookNow">{{sourceView.acf.button_book_now_text}}</button>
                        </a>
                        <router-link :to="{ path: 'destination/miami'}">
                             <button class="bnt-moreinfo">{{sourceView.acf.button_more_info}}</button>
                        </router-link>         
                    </div>                   
                    <div v-html="sourceView.acf.destination[1].date_destination"></div>
                </div>
            </div>
 -->

<!-- si es zanzibar -->
            <!-- <div class="destacado" v-if="this.$route.query.param === 'zanzibar'">
                <div class="item item-1 font-Flat">
                    <router-link :to="{ path: 'destination/tenerife?param=zanzibar'}">
                        <span class="sign sign1">
                            <div class="sign-arrow-light">
                              <img src="/static/images/Flecha_3_off.png" alt="sign">
                            </div>
                        </span>
                        <img src="/static/images/Imagen-Destino_1.png">
                        <div class="signButton sign-green" v-html="sourceView.acf.destination[0].description_destination"></div>  
                    </router-link>
                    <div class="buttons">
                        <a :href="sourceView.acf.destination[0].book_now_button_url + '&lang=' +this.$store.state.lang" target="_blank">
                            <button class="bnt-bookNow">{{sourceView.acf.button_book_now_text}}</button>
                        </a>
                        <router-link :to="{ path: 'destination/tenerife?param=zanzibar'}">
                             <button class="bnt-moreinfo">{{sourceView.acf.button_more_info}}</button>
                        </router-link>         
                    </div>
                    <div v-html="sourceView.acf.destination[0].date_destination"></div>
                </div>

                <div class="item item-destacado font-Flat">
                    <router-link :to="{ path: 'destination/zanzibar?param=zanzibar'}">
                        <span class="sign sign3">
                            <img src="/static/images/flecha.png" alt="sign">
                        </span>
                        <img src="/static/images/Imagen-Destino_3.png">
                        <div class="signButton sign-green"  v-html="sourceView.acf.destination[2].description_destination"></div>
                   </router-link>
                    <div class="buttons">
                        <a :href="sourceView.acf.destination[2].book_now_button_url + '&lang=' +this.$store.state.lang" target="_blank">
                            <button class="bnt-bookNow">{{sourceView.acf.button_book_now_text}}</button>
                        </a>
                        <router-link :to="{ path: 'destination/zanzibar?param=zanzibar'}">
                             <button class="bnt-moreinfo">{{sourceView.acf.button_more_info}}</button>
                        </router-link>         
                    </div>                   
                    <div v-html="sourceView.acf.destination[2].date_destination"></div>
                </div>

                <div class="item item-2 font-Flat">
                    <router-link :to="{ path: 'destination/miami?param=zanzibar'}">
                        <span class="sign sign2">
                            <img src="/static/images/Flecha_4.png" alt="sign">
                        </span>
                        <img src="/static/images/Imagen-Destino_2.png">
                        <div class="signButton sign-green"  v-html="sourceView.acf.destination[1].description_destination"></div>
                   </router-link>
                    <div class="buttons">
                        <a :href="sourceView.acf.destination[1].book_now_button_url + '&lang=' +this.$store.state.lang" target="_blank">
                            <button class="bnt-bookNow">{{sourceView.acf.button_book_now_text}}</button>
                        </a>
                        <router-link :to="{ path: 'destination/miami?param=zanzibar'}">
                             <button class="bnt-moreinfo">{{sourceView.acf.button_more_info}}</button>
                        </router-link>         
                    </div>                   
                    <div v-html="sourceView.acf.destination[1].date_destination"></div>
                </div>
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
        name: 'Destinations',
        data() {
            return {
                sourceView: null,
                typePage: 'destination',
                id: '110',
                destinationsInfo:[]
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
            animate() {
                const selector = '.main-section';
                
                TweenMax.to('#destinations .item', .5, {
                    x: 0,
                    force3D: true
                });


                const SMController = new ScrollMagic.Controller();
                const tween = new TimelineMax()
                    .to('#destinations .title', .5, {
                        force3D: true,
                        opacity: .8
                    })
                    .to('#destinations .item-2', .5, {
                        y: '-5%',
                        force3D: true
                    }, '-=.5')
                    .to('#destinations .item-1', .5, {
                        y: '-5%',
                        force3D: true
                    }, '-=.43')

                let scene = new ScrollMagic.Scene({
                    triggerElement: selector,
                    duration: 500,
                    offset: -350
                });
                scene.setTween(tween);
                scene.addTo(SMController);
            },
             getBookUrl() {

                 this.destinationsInfo =  this.sourceView.acf.destination;

                 if(this.$route.query.param === 'zanzibar'){

                    for(var i = 0; i < this.destinationsInfo.length; i++){
                        this.destinationsInfo[i].book_now_button_url = this.destinationsInfo[i].book_now_button_url+'?param=zanzibar';
                    }
                 }
            }
        },
        created() {
            this.getData(this.typePage, this.id, this.$store.state.lang).then(function() {
                this.chargeInfo();
                setTimeout(this.animate, 800);
            });
            // console.log(this.$route.query.param);
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    $primary_color: #D60058;
    .Destinations {
        padding: 50px 50px;
        font-family:Espacio;
    &:hover {
        
    }
    
    
    
    }
    .margin-bottom {
        display: block;
        margin-bottom: 50px;
    }
    .items {
        text-align: center;
    }
    .item {
        cursor: pointer;
        display: inline-block;
        margin: 4% 40px 0;
        font-style: normal;
        letter-spacing: 1px;
        text-align: center;
        width: 320px;
        position: relative;
        .signButton {
            position: absolute;
            bottom: 40px;
            background-image: url(/static/images/Aviso.png);
            background-size: contain;
            background-repeat: no-repeat;
            background-position: 50% 50%;
            padding: 70px 0;
            width: calc(100% + 40px);
            left: -30px;
            &>* {
                transform: rotate(-6deg);
            }
            p {
                font-size: 30px;
                margin-bottom: -10px;
                position: relative;
                left: 5px;
                text-shadow: black -3px 3px 6px;
            }
            h2 {
                color: $primary_color;
                text-transform: uppercase;
                font-size: 47px;
                position: relative;
                margin-top: -33px;
                text-shadow: black 0px 1px 2px;
            }
            a {
                color: white
            }
        }
        .dateArr {
            position: relative;
            top: 40px;
            font-size: 90%;
            width: calc(100% + 60px);
            position: relative;
            left: -30px;
        }
        .sign {
            position: absolute;
        }
        .sign1 {
            transform: rotateY(180deg) translate(55%, -23%);
        }
        .sign2 {
            transform: translate(30%, -20%);
            width: 230px;
            right: 0;
            top: 0;
        }
        .sign3{
            transform: translate(0%, -20%);
            width: 150px;
            right: 0;
            top: 0;            
        }
    }
    

    /*Destacados*/
    .destacado {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: baseline;
        margin-bottom: 120px;
            .item:not(.item-destacado){
                width: 230px;
                margin: 0 0 20px;
                position:relative;
                bottom: -100px;
                .signButton{
                    padding: 42px 0;
                    h2{
                        font-size: 35px;
                    }
                    p{
                        font-size: 20px;
                    }
                }
                .sign2{
                    width: 150px;
                }
                .buttons {
                    bottom: 20px;
                    button{
                        font-size:12px;
                        padding: 11px 12px 14px 18px;
                        line-height: 1;
                    }
                }
                .dateArr{
                    font-size: 68%;
                }
            }
        .item-destacado{
            width: 360px;
            margin: 0 12px;
            .signButton{
                h2{
                    font-size: 55px;
                }
                p{
                    font-size: 40px;
                }
            } 
        }
    }
    .buttons{
        position: absolute;
        left: 15px;
        bottom: 37px;
        transform: rotate(-11deg);
        z-index: 3;
        width: 100%;
        display: flex;
    }
    .buttons button{
        font-family: 'Flathead';
        color: #77b932;
        font-size: 17px;
        padding: 15px 20px 15px 25px;
        background-color: transparent;
        background-image: url('/static/images/whiteSign1.png');
        background-size: 100% 100%;
        background-repeat: no-repeat;
        text-align: center;
        text-transform: lowercase;
        &:hover {
            filter: grayscale(100%);
            cursor: pointer;
        }
    }
    .buttons button.bnt-moreinfo{
        background-image: url('/static/images/whiteSign2.png');
    }
    @media (min-width: 769px) {
        .item-1 {
            transform: translate(-50%, 0);
        }
        .item-2 {
            transform: translate(50%, 0);
        }
        .item .sign>img {
            transition: transform .25s ease-in-out;
            transform: translate(15%, 0);
        }
        .item:hover .sign>img {
            transform: translate(5%, 0);
        }
    }
     @media(max-width: 769px) and (min-width: 650px) {
        .Destinations{
            padding-top: 100px;
        }

     }
    @media(max-width: 769px) {
        .items {
            padding: 20px 20px 0;
            max-width: 400px;
            margin: 0 auto;
        }
        .destacado {
            max-width: 400px;
            margin: 0 auto;
        }
        .destacado .item:not(.item-destacado){
            bottom: 0;
            .signButton {
                h2 {
                    font-size: 35px;
                }
                p {
                    font-size: 25px;
                    left: 0;
                }
            }
            .dateArr{
                top: 30px;
            }

        }
        .item {
            width: 100%;
            margin: 0 0 100px;
            h4 {
                position: relative;
                top: 50px;
            }
            .dateArr{
                top: 60px;
            }
            .sign1 {
                width: 180px;
                transform: rotateY(180deg) translate(38%, 9%);
            }
            .sign2 {
                width: 150px;
            }
            .sign3{
                width: 70px;
            }
            .signButton{
                    padding: 42px 0;
            }
        }

        .buttons{
            bottom: 5px;
            button {
                font-size: 13px;
                padding: 13px 15px 16px 19px;
            }
        } 

        .destacado .item-destacado{
            margin: 30px 0 70px;
            width: 280px;       
            .signButton {
                h2 {
                    font-size: 35px;
                }
                p {
                    font-size: 25px;
                    left: 0;
                }
            }
            .dateArr{
                font-size: 12px;
            }                
        }
    }

    .pt-pt.zanzibarPage .item .dateArr{
        top: 50px;
    }
    .pl.zanzibarPage .item .dateArr{
        top: 60px;
    }

</style>