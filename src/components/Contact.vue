<template>
<div class="container-fluid">
     <div class="row  body" v-if="sourceView">
         <div class="col-12 ">
            <img src="/static/images/Gafas-Final.png" class="offset-2 col-8 offset-sm-3 col-sm-6 lentes img-fluid" style="" alt="">
         </div>
            <h2 class="col-12 text-center font-one">{{sourceView.title.rendered}}</h2>
            <div class="offset-1 col-10 offset-lg-4 col-lg-4 text-center mb-5 font-two " v-html="sourceView.content.rendered"></div>

             <!-- <router-link :to="{ name: 'faqs'}"  v-if="this.$route.query.param !== 'zanzibar'">
                    <h3 class="font-Flat qas">{{sourceView.acf.contact_faqs}}  -  </h3>
             </router-link>
            <router-link :to="{ path: 'faqs?param=zanzibar'}" v-if="this.$route.query.param === 'zanzibar'">
                <h3 class="font-Flat qas">{{sourceView.acf.contact_faqs}}  -  </h3>
            </router-link>

            <router-link :to="{ name: 'termsandconditions'}" v-if="this.$route.query.param !== 'zanzibar'">
                 <h3 class="font-Flat qas">  {{sourceView.acf.contact_terms_conditions}}</h3>
            </router-link>  
            <router-link :to="{ path: 'termsandconditions?param=zanzibar'}" v-if="this.$route.query.param === 'zanzibar'">
                <h3 class="font-Flat qas">  {{sourceView.acf.contact_terms_conditions}}</h3>
            </router-link>   -->
    </div>
</div>
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
        name: 'contact',
        data() {
            return {
                sourceView: null,
                typePage: 'contact_us',
                id: '140'
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
            chargeInfo() {
                this.$emit('chargeInfo', this.checkerdata);
                this.checkerdata++;
            },
            animate() {
                const selector = '.contact';

                const SMController = new ScrollMagic.Controller();
                const tween = TweenMax.to(selector + ' .absolute', 2, {
                    opacity: 1,
                    delay: .5,
                    force3D: true
                });

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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.lentes{
 margin-top: -8%;
  padding: 0% 0% 3% 0%;
}
.font-one{
   font-family: 'Neue', sans-serif;
   font-size: 3em;
}
.font-two{
   font-family: 'Neue', sans-serif;
      padding: 0% 0% 8% 0%;
}
.body{
    color: rgb(102, 4, 89);
    margin-bottom:-38px;
     background-image: url('/static/images/Final-Fondo-Principal.png' );
     background-size: 100% 112.5%;
     background-repeat: no-repeat;    
}


    // .contact {
    //         min-height: 100vh;
    //         padding-top: 30px;
    //         padding-bottom: 30px;
    //         text-align: center;
    //         position: relative;
    //         /*background: -webkit-linear-gradient(rgba(255,255,255, 0) 0%, #1b1c42 100%);
    //         background: -o-linear-gradient(rgba(255,255,255, 0) 0%, #1b1c42 100%);
    //         background: linear-gradient(rgba(255,255,255, 0) 0%, #1b1c42 100%); */
    //         -webkit-background-size: 100%;
    //         background-size: 100%;
    //         background-repeat: no-repeat;    
    //             overflow-x: hidden;    
    //         .absolute {
    //             position: absolute;
    //             width: 100%;
    //             top: 50%;
    //             left: 50%;
    //             transform: translate(-50%, -50%);
    //             .bgGray {
    //                 padding: 15px;
    //                 display: inline-block;
    //                 @media(min-width: 769px){
    //                     width: 50%;
    //                     min-width: 500px;
    //                 }
    //             }
    //         }
    //         .font-Cae {
    //             color: #fff;
    //             width: 80%;
    //             margin: 0 auto;
    //         }
    //         h3 {
    //             display: inline-block;
    //             margin: 20px 10px 0;
    //         }
    //         @media (min-width: 768px) {
    //             .absolute {
    //                 opacity: 0;
    //             }
    //         }
    //         @media(max-width: 768px) {
    //             .font-Cae {
    //                 width: 100%;
    //                 padding: 0;
    //             }
    //             .absolute {
    //                 opacity: 1 ;
    //                 z-index: 0 ;
    //                 transform: translate(-50%, -50%) ;
    //             }
    //         }
    //     }
</style>