<template>
    <div class="usefulInfo" v-if="sourceView">
      <!--<h1>Check: {{checkerdata}}</h1>-->
        <div class="fluid-container">
            <div class="usefulinformation bgGray">
                <div class="left">
                <h2 class="font-Flat title">{{sourceView.title.rendered}}</h2>
                    <div v-for="(item, index) in sourceView.acf.items" v-if="index < 2">
                        <img :src="item.icon.url" alt="icon" />
                        <h3 class="font-Flat"> {{item.title}}</h3>
                        <p class="font-Cae" v-html="item.description"></p>
                    </div>
                </div>
                <div class="right">
                    <div v-for="(item, index) in sourceView.acf.items" v-if="index >= 2">
                        <img :src="item.icon.url" alt="icon" />
                        <h3 class="font-Flat"> {{item.title}}</h3>
                        <p class="font-Cae" v-html="item.description"></p>
                    </div>
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

    export default {
        name: 'usefulInfo',
        props: ['destination'],
        data() {
            return {
                sourceView: null,
                typePage: 'useful',
                miamiId: '1109',
                tenerifeId: '153',
                zanzibarId: '1110',
                checkerdata: 0,
            }
        },
        methods: {
            getData(typePage, id, lang) {
                return this.$http.get(Vue.config.source.ENDPOINT + typePage + '/' + id + '&lang=' + lang)
                    .then(response => {
                        this.sourceView = response.body;
                        this.checkerdata++;
                    }, response => {
                        console.log('Error', Error(response.message));
                    });
            },
            updateCheck() {
                this.$emit('updateChecked', this.checkerdata);
            }
        },
        created() {

            switch (this.destination) {
                case 'tenerife':
                    this.getData(this.typePage, this.tenerifeId, this.$store.state.lang).then(function() {
                        this.updateCheck();
                    });
                    break;

                case 'miami':
                    this.getData(this.typePage, this.miamiId, this.$store.state.lang).then(function() {
                        this.updateCheck();
                    });
                    break;
          
                case 'zanzibar':
                    this.getData(this.typePage, this.zanzibarId, this.$store.state.lang).then(function() {
                        this.updateCheck();
                    });
                    break;        
    
                }
        }
    }
</script>

<style lang="scss">
    $primary_color: #D60058;
    .usefulInfo {
        padding: 60px 0 150px;
        &:before {
            content: "";
            background-image: url(/static/images/Flecha_2_on.png);
            position: absolute;
            width: 210px;
            height: 440px;
            z-index: 9999999;
            background-size: contain;
            transform: rotateY(180deg) translate(-30%, -100%);
        }
        &:after {
            content: "";
            background-image: url(/static/images/Flecha_2_on.png);
            position: absolute;
            width: 180px;
            height: 380px;
            z-index: 9999999;
            background-size: contain;
            -webkit-transform: translate(-30%, 0%);
            transform: translate(-30%, -30%);
            right: 0;
            z-index:9;
        }
        .fluid-container {
            padding-left: 100px;
        }
        h2 {
            width: 280px;
            text-align: left;
            display: inline-block;
            font-size: 50px;
            margin-bottom: 15px;
        }
        .usefulinformation {
            display: flex;
            flex-wrap: wrap;
            /*background: rgba(0, 0, 0, 0.3);*/
            padding: 40px 15px 20px;
            border-radius: 5px;
            &>div {
                flex-basis: 50%;
                width: 50%;
                padding-left: 70px;
                &>div {
                    margin-top: 30px;
                    padding-right: 30px;
                    position: relative;
                }
            }
            .right {
                padding-top: 30px;
                text-align: left;
            }
            h3 {
                color: $primary_color;
                font-weight: 100;
                margin-bottom: 7px;
                text-shadow: none;
            }
            img {
                width: 50px;
                position: absolute;
                left: -60px;
                top: -15px;
            }
            p {
                opacity: .9;
                font-size: 14px;
                font-weight: 100;
            }
        }
        .left h2.title{
            font-size: 50px;
            position: relative;
            left: -50px;
        }
    }
    
    @media(max-width: 767px) {
        .usefulInfo {
            padding-bottom: 40px;
            &:before, &:after{display: none;}
            .fluid-container {
                width: 100%;
                padding: 0 0px;
            }
            h2.title {
                font-size: 40px;
                text-align: center;
            }
            .usefulinformation {
                display: block;
                padding: 40px 20px 20px;
                &>div {
                    padding: 0;
                    flex-basis: 100%;
                    width: 100%;
                    &>div {
                        padding: 0;
                        padding-left: 50px;
                    }
                }
                .left h2.title{
                    font-size: 30px;
                    left: 0;
                }
                img {
                    width: 40px;
                    left: 0px;
                }
            }
        }
    }
</style>