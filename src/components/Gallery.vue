<template>
    <div class="all-cont">
        <div class="gallery-cont" v-if="sourceView" >
            <h2 class="title font-Flat"> {{sourceView.acf.gallery_destination}}</h2>
            <div class="gallery">
                <slick ref="slick" :options="slickOptions">
                    <div class="image" v-for="image in sourceView.acf.slider_image" @click="showModal()">
                        <img :src="image.url" alt="image">
                    </div>
                </slick>
            </div>
            <div class="openGallery" @click="showModal()">
                <img src="/static/images/Mano.png" alt="open">
            </div>
        </div>
        <transition name="fade">
            <div v-if="show" class="gallery-main-cont">
                <fullGallery :sourceView='sourceViewSend'></fullGallery>
                <div class="close font-Cae"><a @click="showModal()" class=""><span v-lang.close></span> <img src="/static/images/X.png"></a></div>
            </div>
        </transition>
    </div>
</template>

<script>
import Slick from 'vue-slick';
import '../../node_modules/slick-carousel/slick/slick.css';
import fullGallery from '../components/fullGallery.vue';

    export default {
        name: 'gallery',
        props: ['sourceView'],
        data() {
            return {
                sourceViewSend: '',
                show: false,
                slickOptions: {
                    slidesToShow: 1,
                    // fade: true
                    // Any other options that can be got from plugin documentation 
                },
            }
        },
        components: {
            Slick,
            fullGallery
        },
        methods: {
            next() {
                this.$refs.slick.next();
            },

            prev() {
                this.$refs.slick.prev();
            },

            reInit() {
                // Helpful if you have to deal with v-for to update dynamic lists 
                this.$refs.slick.reSlick();
            },
            updateCheck() {
                this.$emit('updateChecked', this.checkerdata);
                this.checkerdata++;
            },
            showModal(){
                this.show =!this.show
                var body = document.body;
                if(this.show === false){
                    body.classList.remove('galleryFull')
                    body.classList.add('closeGallery')
                }else {
                    body.classList.add('galleryFull')
                    body.classList.remove('closeGallery')
                }
            }
        },
        updated() {
            this.updateCheck()
            this.sourceViewSend = this.sourceView
        },
        created() {
            this.$language = this.$store.state.lang;
        }
    }
</script>

<style lang="scss">
body.galleryFull{
    overflow: hidden;    
    .destination .col2-gallery{
        z-index: 2;
    }
}
    .all-cont{
        display: inline-block;
        width: 30%;
        padding-left: 6%;
    }
    .gallery-cont {
        position: relative;
        width: 360px;
        /*width: 30%;*/
        display: inline-block;
        h2.title{
            margin-bottom: 20px;
            font-weight: 100;
        }
    }

    .gallery-main-cont{
        position: fixed ;
        height: 100vh;
        width: 100%;
        z-index: 2;
        top: 0;
        left: 0;
        .close {
            position: relative;
            z-index:9;
        }
    }

    .openGallery img{
        width: 40px;
        height: 40px;
        margin: 0 auto;
        display: block;
        cursor: pointer;
    }
    .gallery {
        .slick-list {
            width: calc(100% - 140px);
            margin: 0 auto;
        }
        .slick-arrow {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            left: 0;
            z-index: 2;
            background-image: url(/static/images/Flecha-r.png);
            width: 70px;
            height: 30px;
            -webkit-background-size: cover;
            background-size: cover;
            background-color: transparent;
            font-size: 0;
            background-position: 50% 50%;
            cursor: pointer;
        }
        .slick-next {
            left: auto;
            right: 0;
        }
        .slick-prev {
            transform: rotateY(180deg) translateY(-50%);
        }
        .image {
            position: relative;
            padding: 15px;
            cursor: pointer;
        }
        .image:before {
            content: "";
            background-image: url(/static/images/Marco1.png);
            -webkit-background-size: cover;
            background-size: cover;
            position: absolute;
            width: 100%;
            height: 100%;
            z-index: 2;
            top: 0;
            left: 0;
        }
    }
    
    @media(max-width: 767px) {
        .all-cont{
            width: 100%;
            padding-left: 0%;
        }
        .gallery-cont {
            width: 100%;
            padding: 0 30px;
            display: inline-block;
            margin-top: 50px;
            h2.title {
                margin-bottom: 15px;
            }
        }
        .gallery {
            margin: 0px 0px 50px;
            .slick-list {
                width: 100%;
            }
            .slick-arrow {
                bottom: -50px;
                top: auto;
            }
        }
        .gallery-main-cont .close {
            z-index: 99999 !important;
        }
        .galleryFull  .destination > .close {
            display: none;
        }
    }


/*
* SHOW GALLERY
*/
.fade-enter-active, .fade-leave-active {
  opacity: 1;
  transform: translateY(0%);
  transition: all .8s;
  /*transform: scale(1);*/
}
.fade-enter, .fade-leave-to{
  opacity: 0;
  transform: translateY(-100%);
  transition: all .8s;
  /*transform: scale(2.2);*/
}
</style>