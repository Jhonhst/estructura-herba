<template>
<div></div>
    <!-- <div class="starRew main-section" v-if="sourceView">
        <h2 class="font-Flat title">{{sourceView.title.rendered}}</h2>
        <div class="container font-Flat">
            <div class="sign">
                <div class="sign-arrow-light-2">
                  <img src="/static/images/Flecha_2_off.png" alt="sign">
                </div>
            </div>
            <div class="table-wrapper">
                <table>
                   <col width="280px">
                   <col width="90px">
                   <col width="90px">
                   <col width="90px">
                   <col width="90px">
                   <col width="90px">
                   <col width="90px">
                    <thead>
                        <tr>
                            <td >{{sourceView.title.rendered}}</td>
                            <td>6+ {{sourceView.acf.star_singular}}</td>
                            <td>5 {{sourceView.acf.star_singular}}</td>
                            <td>4 {{sourceView.acf.star_singular}}</td>
                            <td>3 {{sourceView.acf.star_singular}}</td>
                            <td>2 {{sourceView.acf.star_singular}}</td>
                            <td>1 {{sourceView.acf.star_singular}}</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="subtab">
                            <td>{{sourceView.acf.label_room_credit}}</td>
                            <td v-for="item in sourceView.acf.room_credit">{{item.value}}</td>

                        </tr>
                        <tr class="starts-r" v-for="fila in sourceView.acf.star_rewards">
                            <td>{{fila.description}}</td>
                            <td><i v-if="fila.star.indexOf('6') != -1"><img src="/static/images/star.svg" alt="star"/></i></td>
                            <td><i v-if="fila.star.indexOf('5') != -1"><img src="/static/images/star.svg" alt="star"/></i></td>
                            <td><i v-if="fila.star.indexOf('4') != -1"><img src="/static/images/star.svg" alt="star"/></i></td>
                            <td><i v-if="fila.star.indexOf('3') != -1"><img src="/static/images/star.svg" alt="star"/></i></td>
                            <td><i v-if="fila.star.indexOf('2') != -1"><img src="/static/images/star.svg" alt="star"/></i></td>
                            <td><i v-if="fila.star.indexOf('1') != -1"><img src="/static/images/star.svg" alt="star"/></i></td>
                        </tr>
                    </tbody>
                </table>
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
        name: 'starRew',
        data() {
            return {
                sourceView: null,
                typePage: 'star_reward',
                id: '165',
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
                const selector = '.starRew';

                const SMController = new ScrollMagic.Controller();
                const tween = TweenMax.to(selector + ' .container', 1, {
                    opacity: 1,
                    y: 0,
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
    .starRew {
        padding-top: 30px;
        padding-bottom: 30px;
        position: relative;
        .sign {
            position: absolute;
            width: 130px;
            height: 270px;
            right: 0;
            top: -55px;
            transform: translate(40%, 0);
            z-index: 1;
            img {
                max-width: 100%;
                height: auto !important;
            }
        }
        .container {
            position: relative;
            background-color: #060606;
            width: 90%;
            margin: 0 auto;
            padding: 15px 15px 25px;
            max-width: 1000px;
        }
    }

    table {
        width: 100%;
        font-style: normal;
        border-collapse: separate;
        border-spacing: 10px;
        /**border-collapse: expression('separate', cellSpacing = '10px'); */
    }

    .table-wrapper {
        /*min-width: 980px;*/
        position: relative;
        @media(max-width: 991px){
            overflow: auto;
        }
    }
    thead td {
        background-color: #D60056;
        text-transform: uppercase;
        padding: 7px 15px 5px;
        text-shadow: 0 0px 12px rgb(255, 255, 255), 0 0 60px rgb(255, 255, 255), 0 0 100px rgba(21, 21, 21, 0.1), 0 0 90px rgba(0, 0, 0, 0.1);
    }

    tbody td {
        border: 2px solid #424142;
        padding: 7px 15px 5px;
    }

    tr.subtab {
        color: #7F7F7F;
    }

    tr:not(:first-child) td:nth-child(1) {
        color: #7F7F7F;
    }

    td:not(:first-child) {
        text-align: center;
    }

    td:first-child {
        padding-left: 20px;
        padding-right: 20px;
    }

    td img {
        width: 16px;
    }

    i.hidden img {
        display: none;
    }

    @media(min-width: 768px) {
        .starRew .container {
            transform: translate(0, 10%);
            opacity: 0;
        }
    }

    @media(max-width: 1250px) {
        .starRew {
            .sign {
                display: none;
            }
        }
    }
</style>
