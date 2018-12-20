<template>
  <div class="stage" v-if="sourceView">
    <div class="containerGallery">
        <div class="mainDestination">
          <div class="item">
              <div class="signTitle font-Flat">
                  <h2 v-html="sourceView.content.rendered"></h2>
                  <p>{{sourceView.title.rendered}}</p>
              </div>
          </div>
        </div>
        <photo v-for="(photo, key) in photos"
          v-on:photoClicked="clickNav($event+1)"
          :idx="photo.idx"
          :src="photo.url"
          :is-active="photo.isActive"
          :is-flipped="photo.isFlipped"
          :photo-style="photo.style"
          :key="key"
          :position="photo.position"
        ></photo>
        <nav>
          <ul class="navs" style="display: none;">
            <li class="nav" v-for="n in photos.length"
              :class="{active: n-1==centerPhotoIdx, flipped: n-1==centerPhotoIdx&&centerPhotoFlipped}"
              @click="clickNav(n)"
            ></li>
          </ul>

          <div class="new">
            <button :disabled=nextDisabled class="next" @click="nextImage($event)"><img src="/static/images/Flecha-r.png" alt="next"></button>
            <button :disabled=prevDisabled class="prev" @click="prevImage($event)"><img src="/static/images/Flecha-r.png" alt="next"></button>
          </div>
        </nav>
    </div>
        <img src="/static/images/gas.png" alt="gas" class="gas">
        <img src="/static/images/camera.png" alt="camera" class="camera">
  </div>
  </transition>
</template>

<script>
import Photo from './Photo.vue';

var photos = []
var customPos = []

var getRandomIdx = arr => Math.floor(arr.length * Math.random())
var getRandomVal = range => (range[1]-range[0])*Math.random()+range[0]

// posicion aleatoria de cada elemento menos el seleccionado
function getRandomPos(idx, sections) {
  let section = sections[idx % sections.length]
  return {
    // dar las posiciones a los  elementos
    x: getRandomVal(section.xRange),
    y: getRandomVal(section.yRange)
  }
}

export default {
  props: ['sourceView'],
  data () {
    return {
      centerPhotoIdx: -1,
      centerPhotoFlipped: false,
      photos: [],
      stage: {
        halfWidth: 0,
        halfHeight: 0
      },
      photo: {
        halfWidth: 160,
        halfHeight: 142
      },
      nextDisabled: false,
      prevDisabled: false
    }
  },
  mounted () {
      this.stage.halfWidth = this.$el.offsetWidth / 2
      this.stage.halfHeight = this.$el.offsetHeight / 2

      photos = this.sourceView.acf.slider_image
      this.arrangePhotos(photos)
  },

  components: {
    Photo
  },

  methods: {   
    clickNav (n) {
        this.changePhoto(n)
    },
    changePhoto (n) {
      this.centerPhotoIdx = n - 1
      this.arrangePhotos(photos)
    },
    nextImage(e){
      var containerGallery = document.getElementsByClassName('figure');
      var nextVal;
      this.prevDisabled = false;
      for (var i = 0; i < containerGallery.length; i++) {
          if (containerGallery[i].getAttribute('id') === 'mainPos') {
              nextVal = i+2;
              if(i >= containerGallery.length - 2){
                this.nextDisabled = true;
              }
          }
      }
      this.changePhoto (nextVal);
    },  
    prevImage(e){
      this.nextDisabled = false;
      var containerGallery = document.getElementsByClassName('figure');
      var prevVal;

      for (var i = 0; i < containerGallery.length; i++) {
          if (containerGallery[i].getAttribute('id') === 'mainPos') {
              prevVal = i;
              if(i === 1){
                this.prevDisabled = true;
              }
          }
      }
      this.changePhoto (prevVal);
    },      
    initSections () {
      return [
        { //top left
          xRange: [
            this.photo.halfWidth,
            window.innerWidth-this.photo.halfWidth*2,
          ],
          yRange: [
            this.photo.halfWidth,
            window.innerHeight-this.photo.halfHeight*2,
          ]
        }
      ]
    },
    
    arrangePhotos (photos) {
 
      // positions
      customPos = [
          {
              x: 1,
              y: 28,
              pos: 1
          },
          {
              x: 17,
              y: 6,
              pos:2
          },
          {
              x: 9,
              y: 64,
              pos:3
          },
          {
              x: 86,
              y: 10,
              pos:4
          },
          {
              x: 82,
              y: 55,
              pos: 5
          }
      ]
      if (this.centerPhotoIdx < 0) {
        this.centerPhotoIdx = getRandomIdx(photos)
      }
      photos.forEach((item, idx) => {
        item.src = './' + item.src
        item.idx = idx
        item.isActive = this.centerPhotoIdx == idx
        item.isFlipped = false
        if (item.isActive) {
          // posicion imagen central
          item.position = 'mainPos';
          item.style = {
            left: 40 + '%',
            top: 10 + '%'
          }
        } else {
          // posicion otras imagenes
           let pos = Math.floor(Math.random() * customPos.length) + 0  
            item.style = {
              left: customPos[pos].x + '%',
              top: customPos[pos].y + '%',
            }
            item.position = 'pos'+ customPos[pos].pos;
            customPos.splice(pos, 1);
        }
      })
      this.photos = photos
    }
  },
  watch: {
    sourceView: function (val) {
      photos = val.acf.slider_image
      this.arrangePhotos(photos)
    }
  }
}
</script>

<style lang="scss">
.containerGallery{
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
    height: 100vh;
    max-height: 740px;
    top: 50%;
    transform: translateY(-50%);    
}

.destination .stage {
  /*display: none;*/
  position: absolute ;
  height: 100vh;
  width: 100%;
  z-index: 2;
  top: 0;
  left: 0;
  background-color: #eee;
  perspective: 1800px;
  background-image: url('/static/images/background-gallery.png');
  -webkit-background-size: cover;
  background-size: cover;
  background-position: 100% 100%;
  top: 50%;
  transform: translateY(-50%);


  .navs {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 50px;
    text-align: center;
  }


  .new {
    text-align: center;
    list-style: none;
    button {
      position: absolute;
      left: 0;
      right: 0;
      top: 42%;
      width: 150px;
      cursor: pointer;
      background-color: transparent;
      border: 0;
    }
    button[disabled="disabled"]{
      opacity: .5;
    }
    .next{
      left: calc(50% + 300px);
    }
    .prev {
      left: calc(50% - 290px);
      transform: rotateY(180deg);
      top: 48%;
    }
  }
  .mainDestination{
    height: auto;
    .signTitle:before{
      display: none;
    }
    .item {
      width: 456px;
      z-index: 4;
      left: 32%;
      top: 0;
      margin: 0;
    }
    .signTitle{
      transform: rotate(-5deg);
    }
    .signTitle h2 p{
      font-size: 58px;
    }
    .signTitle p {
      font-size: 30px;
    }
  }
  /*background assets*/
  img.gas{
    height: 408px;
    position: absolute;
    bottom: 0;
    right: 0;
    width: auto;
  }
  img.camera{
    width: 190px;
    position: absolute;
    bottom: 0;
    left: 0;
  }
}
@media(max-width: 999px){
  .figure:not(#mainPos){
    display: none;
  }
  .figure#mainPos{
    left: 50% !important;
    top: 50% !important;
    transform: translate(-50%, -50%);
    padding: 20px;
    width: 100%;
    .photo{
      width: 100%;
      height: 100%;
    }
  }
  .destination .stage{
    .mainDestination .item{
      left: 0;
      width: 100%;
      max-width: 300px;
    }
    .new{
      position: absolute;
      bottom: 70px;
      width: 100%;    
      button{
        width: 100px;
      }
      .next{
        right: 15px;
        left: auto;
      }
      .prev{
        left: 15px;
      }
    }
  } 
  img.camera, img.gas{
    display:  none
  }
}
</style>
