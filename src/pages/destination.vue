<template>
  <div class="destination" :class="$route.params.id">
    <!--<h1 v-if="!hideLoader">{{checker}}</h1>-->
    <HeaderBar></HeaderBar>
    <mainDestination :sourceView='sourceView' @updateChecked="updateusefull" ></mainDestination>
    <div class="col2-gallery container">
        <Gallery :sourceView='sourceView' @updateChecked="updateusefull"></Gallery>
        <DestinationInformation :sourceView='sourceView' @updateChecked="updateusefull"></DestinationInformation>
    </div>
    <usefulInfo @updateChecked="updateusefull" :destination='destination'></usefulInfo>
    <Checklist @updateChecked="updateusefull" :destination='destination'></Checklist>
    <!--<fullGallery :sourceView='sourceView'></fullGallery>-->
    <div class="close font-Cae">
      <a @click="toHome" >  <span v-lang.close></span> <img src="/static/images/X.png"/></a>
    </div>
  
  <mainFooter></mainFooter>
  </div>
  
</template>

<script>
    import Vue from 'vue';
    import {
        mapGetters
    } from 'vuex';
    import router from 'vue-router';
    import HeaderBar from '../components/HeaderBar.vue';
    import mainDestination from '../components/DestinationMain.vue';
    import DestinationInformation from '../components/DestinationInformation.vue';
    import usefulInfo from '../components/usefulInfo.vue';
    import Checklist from '../components/Checklist.vue';
    import Gallery from '../components/Gallery.vue';
    import mainFooter from '../components/Footer.vue';
    export default {
        name: 'Destination',
        data() {
            return {
                destination: this.$route.params.id,
                sourceView: null,
                tenerife: 'evia_island',
                tenerifeId: '1099',
                miami: 'mauritius',
                miamiId: '1098',
                zanzibar:'dominican_republic',
                zanzibarId:'1097',
                checker: {
                    loaded: 0, // Componentes cargados
                    number: 5 // Numero de componentes
                },
                hideLoader: false
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

            //  * Metodo para validar cuando se carga un componente hijo
            //  * @constructor

            Check() {
                if (this.checker.loaded >= this.checker.number) {
                    console.log('Hide Loader')
                    this.hideLoader = true;
                }
            },

            updateusefull: function(val) {
                this.checker.loaded++;
            },

            toHome(){
                console.log('home');
                if(this.$route.query.param === 'zanzibar'){
                    this.$router.push('/home?param=zanzibar');
                }else {
                    this.$router.push('/home');
                }
            }
        },
        created() {
            switch (this.destination) {
                case 'tenerife':
                    this.getData(this.tenerife, this.tenerifeId, this.$store.state.lang);
                    break;

                case 'miami':
                    this.getData(this.miami, this.miamiId, this.$store.state.lang);
                    break;

                case 'zanzibar':
                    this.getData(this.zanzibar, this.zanzibarId, this.$store.state.lang);
                    break;
            }
            this.$language = this.$store.state.lang;
        },
        updated() {
            this.Check();
        },
        components: {
            HeaderBar,
            mainDestination,
            DestinationInformation,
            usefulInfo,
            Checklist,
            Gallery,
            mainFooter
        }
    }
</script>


<style>
    .destination {
        position: relative;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: 50% 50%;
        background-attachment: fixed;
    }
    
    .destination>div {
        position: relative;
        z-index: 1;
    }
    
    .destination.tenerife {
        background-image: url(/static/images/bk-tenerife.png);
    }
    .destination.tenerife .mainDestination .signTitle:before{
        background-image: url(/static/images/Flecha_3.png);
        right: -40px;
        height: calc(100% + -70px);
    }

    .destination.miami {
        background-image: url(/static/images/bk-miami.png);
    }
    .destination.zanzibar {
        background-image: url(/static/images/INTERNA_MELIA.png);
    }
    .destination.zanzibar .mainDestination .signTitle:before{
        background-image: url(/static/images/flecha.png);
    }
    .destination .MainMenu {
        position: absolute;
    }
/*
    .destination:before {
        content: "";
        opacity: .5;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 0;
        background-color: #334d7e;
    }*/

    @media(max-width: 767px) {
        .col2-gallery.container {
            display: block;
        }
        .destination{
            /*-webkit-background-size: auto 100vh;
            background-size: 100vw 100vh;
            padding-bottom: 30px;
            background-position: 0% 50%;
            background-repeat: repeat;
            background-attachment: fixed;*/
            background-image: none !important;
            position: relative;
        }
        .destination:before {
            content: "";
            width: 100%;
            height: 100vh;
            background-image: url(/static/images/bk-miami.png);
            -webkit-background-size: cover;
            background-size: cover;
            position:fixed;
            top: 0;
            left: 0;
        }
        .destination.tenerife:before {
            background-image: url(/static/images/bk-tenerife.png);
        }
        .destination.zanzibar:before {
        background-image: url(/static/images/INTERNA_MELIA.png);
        }
    }
</style>