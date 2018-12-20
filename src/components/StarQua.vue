<template>
<div></div>
    <!-- <div class="starQua main-section" v-if="sourceView">
        <h2 class="font-Flat title"><span v-lang.starqualifiers></span></h2>

        <div class="container">
            <button class="star"
            :disabled="(index === 0 || index === 1)"
            v-bind:class="{ active: userStars >= index+1, disabled: (index === 0 || index === 1) }"
            v-for="(buton, index) in butonStar"><img src="/static/images/Estrella_2.png" alt="star"
            v-on:click="userStars = (index === 0 || index === 1) ? userStars : index+1" ></button>
        </div>

        <div class="fluid-container">
            <div v-for="(qualifier, index) in filteredPeople" class="item">
                <figure class="imageQua" v-if="qualifier.photo">
                    <img :src="qualifier.photo.url" alt="image">
                </figure>
                <div class="signButton sign-green">
                    <p class="font-Flat">{{qualifier.name}}</p>
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
        name: 'starQua',
        data() {
            return {
                sourceView: null,
                typePage: 'star_qualifier',
                id: '181',
                userStars: 5,
                butonStar: [1, 2, 3, 4, 5]
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
                const selector = '.starQua';

                const SMController = new ScrollMagic.Controller();
                const tween = TweenMax.staggerTo(selector + ' button', 1, {
                    opacity: 1,
                    scale: 1,
                    delay: 0.5,
                    ease: Elastic.easeOut,
                    force3D: true
                }, 0.1);

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
        },
        computed: {
            filteredPeople() {
                return this.sourceView.acf.qualifiers.filter((qualifier) => qualifier.number_stars == this.userStars)
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .starQua {
        position: relative;
        padding-top: 60px;
        padding-bottom: 30px;
        text-align: center;
        .container {
            width: 80%;
            margin: 30px auto;
            display: flex;
            justify-content: space-around;
            max-width: 1200px;
        }
        .item {
            text-align: center;
            margin: 0px 15px 160px;
            vertical-align: top;
            width: 280px;
            figure {
                margin-bottom: -140px;
            }
            .signButton {
                height: 120px;
                padding: 0;
                position: relative;
                width: 100%;
                left: initial;
                top: 106px;
                p {
                    font-size: 20px;
                    margin-bottom: 0;
                    position: absolute;
                    width: 90%;
                    top: 50%;
                    transform: translate(-50%, -50%);
                    left: 50%;
                }
            }
        }
        .star {
            background-color: transparent;
            background-repeat: no-repeat;
            border: 0;
            -webkit-appearance: none;
            cursor: pointer;
            &.active {
                background-image: url(/static/images/Estrella_1.png);
                -webkit-background-size: contain;
                background-size: contain;
                img {
                    opacity: 0;
                }
            }
            &.disabled {
                cursor: not-allowed;
                //background-image: url(/static/images/Estrella_2.png);
                //-webkit-background-size: contain;
                //background-size: contain;
                //img {
                //    opacity: 0;
                //}
            }
        }
        .imageQua {
         /*-webkit-clip-path: polygon(15% 0, 92% 10%, 90% 84%, 10% 98%);
            clip-path: polygon(15% 0, 92% 10%, 90% 84%, 10% 98%);*/
        }
    }

    @media(min-width: 768px) {
        .starQua button {
            transform: scale(.5);
            opacity: 0;
        }
    }

    @media(max-width: 767px) {
        .container {
            flex-wrap: wrap;
            .star {
                width: 20% !important;
            }
        }
        .starQua .item {
            width: 220px;
            margin-bottom: 130px;
            .signButton {
               top: 100px;
            }
        }
    }
</style>
