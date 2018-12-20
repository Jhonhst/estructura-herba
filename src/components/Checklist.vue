<template>
    <div class="checklist" v-if="sourceView">
        <div class="fluid-container bgGray">
            <div class="left">
                <h2 class="font-Flat title">{{sourceView.acf.title_ckecklist}}</h2>
                <p class="note font-Cae" v-html="sourceView.acf.description_checklist"></p>

                <ul class="font-Cae">
                    <li v-for="item in sourceView.acf.checklist">
                        {{item.item}}
                    </li>
                </ul>
            </div>
            <div class="right">
                <div class="font-Cae" v-html="sourceView.content.rendered"></div>
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
                checkerdata: 0
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
    h2.title {
        font-size: 50px;
        letter-spacing: 2px;
    }
    
    .checklist {
        padding: 60px 0;
        font-size: 14px;
        .fluid-container {
            display: flex;
            flex-wrap: wrap;
            /*background: rgba(0, 0, 0, 0.4);*/
            border-radius: 5px;
            padding-top: 40px;
            padding-bottom: 25px;
            position: relative;
            left: -50px;
            &>div {
                width: 50%;
                flex-basis: 50%;
                padding: 0 50px;
            }
        }
        ul {
            opacity: .9;
            padding-left: 15px;
            li {
                margin: 8px 0;
            }
        }
        .note {
            color: $primary_color;
            font-weight: bold;
        }
        .right {
            text-align: left;
            h2 {
                @extend .title;
                font-family: 'Flathead';
                font-style: italic;
                text-transform: capitalize;
                text-transform: uppercase;
            }
        }
        .content-checklist div {
            opacity: .9;
            margin: 10px 0;
        }
        .left h2.title{
            font-size: 50px;

        }
    }
    
    @media(max-width: 767px) {
        .checklist {
            padding-right: 0;
            .fluid-container {
                display: block;
                padding: 10px 0;
                left: 0;
                width: 100%;
                margin: 0;
                &>div {
                    padding: 0 20px;
                    flex-basis: 100%;
                    width: 100%;
                    margin: 40px 0 0;
                }
            }
            h2.title {
                font-size: 30px;
                width: 180px;
                margin: 10px auto;
            }
            .left h2.title{
                font-size: 30px;
            }
        }
    }
</style>