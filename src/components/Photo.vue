<template>
  
  <figure class="figure" :class="{active:isActive }" :id="position" :style="{left:photoStyle.left, top:photoStyle.top, transform:photoStyle.transform}" @click="clickPhoto()">
    <img class="photo" :src="src"/>
  </figure>
</template>

<script>
export default {
  props: {
    idx: {
      type: Number,
      required: true
    },
    src: {
      type: String,
      required: true
    },
    isActive: {
      type: Boolean,
      required: true
    },
    isFlipped: {
      type: Boolean,
      required: true
    },
    photoStyle: {
      type: Object,
      required: true
    },
    position: {
      type: String,
      required: true      
    }
  },
  methods: {
    clickPhoto () {
      this.$emit('photoClicked', this.idx)
    }
  }
}
</script>

<style lang="scss">
.figure {
  padding: 0px;
  position: absolute;
  left: 0;
  top: 0;
  margin: 0;
  transform-style: preserve-3d;
  transform-origin: 0 50% 0;
  transition: transform .6s ease-in-out, left .6s ease-in-out, top .6s ease-in-out;
  &:hover {
    cursor: pointer;
  }
  img {
    object-fit: cover;
    box-shadow: 9px 3px 11px rgba(0, 0, 0, 0.7);
  }
  .photo {
    width: 200px;
    height: 245px;
  }

  .figure-caption {
    margin-top: 20px;
    font-size: 14px;
  }


  &.active{
      transition: .4 all ease-in;
      z-index: 2;
  }

  &:before{
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
    -webkit-background-size: contain;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    left: 0;
    top: 0;    
    -webkit-background-size: cover;
    background-size: cover;
  }
}


figure#pos1, figure#pos4{
  &:before{
      background-image: url('/static/images/Cuadro_3.png');
  }
  .photo{
    width: 140px;
    height: 170px;
  }
}


figure#pos2 {
  &:before{
      background-image: url('/static/images/Cuadro_4.png');
  }
  .photo{
    width: 240px;
    height: 299px;
  }
}


figure#pos3{
  &:before{
      background-image: url('/static/images/Cuadro_2.png');
  }
  .photo{
    width: 232px;
    height: 164px;
  }
}


figure#pos5{
  padding: 25px 12px;
  &:before{
      background-image: url('/static/images/marco5.png');
  }
  .photo{
    width: 175px;
    height: 128px;
    position: relative;
    top: -9px;
  }
}
 
figure:nth-of-type(5) {
  &:before{
      background-image: url('/static/images/Cuadro_4.png');
  }
  .photo{
    width: 179px;
    height: 220px;
  }
}

figure#mainPos {
  padding: 30px;
  transition: none;
  &:before{
      background-image: url('/static/images/Marco1.png');
      transition: .2s all ease;
      -webkit-background-size: cover;
      background-size: cover;
  }
  .photo{
    width: 340px;
    height: 480px;
  }

  &:after {
    content: "";
    background-image: url(/static/images/route.png);
    width: 140px;
    height: 140px;
    background-size: contain;
    background-repeat: no-repeat;
    position: absolute;
    right: -138px;
    top: 60px;
  }
}

</style>