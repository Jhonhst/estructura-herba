<template>
    <footer v-if="sourceView">
        <div class="fluid-container font-Cae containerFlex">
                <div class="tfilogo">
                    <img src="/static/images/TFI_BlueWhite.png" alt="logo tfi">
                </div>
                <div class="tfiinfo" v-html="this.sourceView">
                </div>
            <div class="logovisa" v-on:click="javier">
                <ul>
                    <li class="visa"><img src="/static/images/logo_visa_blanco.png" alt="logo"></li>
                    <li class="american"><img src="/static/images/American_Express_logo.png" alt="logo"></li>
                    <li class="master"><img src="/static/images/Mastercard-White-01.png" alt="logo"></li>
                </ul>
            </div>
        </div>
    </footer>
</template>

<script>
import Vue from 'vue';

    export default {
        name: 'Footer',
        data() {
            return {
                sourceView: null,
                typePage: 'welcome',
                id: '186'
            }
        },
        methods: {
            getData(typePage, id, lang) {
                return this.$http.get(Vue.config.source.ENDPOINT + typePage + '/' + id + '&lang=' + lang)
                    .then(response => {
                        this.sourceView = response.body.acf.footer_text;
                    }, response => {
                        console.log('Error', Error(response.message));
                    });
            },
            javier(){
                    alert('hello world!');


            }
        },
        created() {
            this.getData(this.typePage, this.id, this.$store.state.lang);
        }
    }
</script>

<style>

    footer {
        /* background-color:rgb(51, 51, 185); */
        font-size: 1em;
        padding: 10px 10px;
        margin-top: 15px;
        color:#ffffff;
        font-weight:bold;
        /* gradient background */
        background: rgba(35,27,52,1);
        background: -moz-linear-gradient(left, rgba(35,27,52,1) 0%, rgba(50,94,168,1) 100%);
        background: -webkit-gradient(left top, right top, color-stop(0%, rgba(35,27,52,1)), color-stop(100%, rgba(50,94,168,1)));
        background: -webkit-linear-gradient(left, rgba(35,27,52,1) 0%, rgba(50,94,168,1) 100%);
        background: -o-linear-gradient(left, rgba(35,27,52,1) 0%, rgba(50,94,168,1) 100%);
        background: -ms-linear-gradient(left, rgba(35,27,52,1) 0%, rgba(50,94,168,1) 100%);
        background: linear-gradient(to right, rgba(35,27,52,1) 0%, rgba(50,94,168,1) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#231b34', endColorstr='#325ea8', GradientType=1 );
    }
    footer .fluid-container {
        max-width: 1300px;
        min-height: auto !important;
        padding: 0 !important;
        margin: 0 auto;
    }
    footer .containerFlex {
        display: flex;
    }
    footer .tfilogo {
        flex-basis: 10%;
    }
    footer .tfiinfo{
        padding: 0px 0px 0;
        flex-basis: 100%;
        text-align: center;
        font-size: 0.8rem;
        margin-left: 9%;
        /* text-align: justify; */
    }
    footer .tfilogo img{
        width: 100px;
        margin-bottom: 0px;
        margin-top:5px;
        margin-left: 70%;
        
    }
    footer .logovisa {
        margin-top: 0.6%;
        flex-basis: 30%;
        /* margin-left: 10%; */
    }
    footer .logovisa ul {
        padding: 0;
        list-style: none;
        /*display: flex;*/
        align-items: center;
    }
    footer .logovisa ul li {
        display: inline-block;
        margin: 0 !important;
    }
    footer .logovisa ul li img{
        height: 20px;
        width: auto;
    }


    @media(max-width: 768px){
        footer .containerFlex{
            display: block;
        }
        footer .tfiinfo{
            padding: 0px 0;
        }
    }


      /* los media queris es para el footer responsive */
    @media (min-width: 320px) and (max-width: 375px){
        footer .tfilogo {
            margin-right: 47%;
           
        }
        footer .logovisa { 
            margin-left: 22%;
            /* flex-basis: 0; */
        }
    }

    @media (min-width: 376px) and (max-width: 582px){
        footer .tfilogo {
            margin-right: 45%;
        }
        footer .logovisa {
            margin-top: 0.6%;
            margin-left:27%;
        }
    }

    @media (min-width: 583px) and (max-width: 768px){
        footer .tfilogo {
            margin-right: 35%;
        }
        footer .logovisa {
            margin-top: 0.6%;
            margin-left:40%;
        }
    }

    @media (min-width: 769px) and (max-width: 859px){
        footer .tfilogo img{
            margin-left: 70%;
        }
        footer .logovisa {
            margin-top: 0.6%;
            margin-left: 75%;
        }
    }
</style>
