<template>
<div>
  <img src="/static/images/Head-Video1.png" alt="" class="d-none d-sm-block img-header">
  <img src="/static/images/movil-2.jpg" alt="" class="d-sm-none img-header">
  <div class="container-fluid">
    <div class="row">
      <div class="text col-12">
        <div class="">
          <p class="text-center information">CRUCERO GRIEGO 7 06 19.// ANTALYA TURQUIA 15 06 19</p> 
        </div>
        <div class="">
          <p class="text-center welcome">WELCOME QUALIFIERS</p> 
        </div>
        <div class="col-12">
          <img style="" class="img-fluid offset-2 col-8 offset-sm-3 col-sm-6"  src="/static/images/Logo-Intro.png">
        </div>
      </div>
    </div>
  </div>
</div>
    <!-- <div class="wrapper">
      <video id="video" class="imagen-fondo" controls poster="/static/images/Head-Video1.png">
        <source src="/static/videos/mov_bbb.mp4" type="video/mp4">
        <source src="/static/videos/mov_bbb.ogg" type="video/ogg">
      </video> -->
      <!--<img src="/static/images/Head-Video1.png" alt="" class="imagen-fondo">-->
      <!-- <img class="imagen-logo" src="/static/images/Logo-Intro.png">
      <div class="titulos">
        <div>
          <p class="">CRUCERO GRIEGO 7 06 19.// ANTALYA TURQUIA 15 06 19</p> 
        </div>
        <div>
          <p class="">WELCOME QUALIFIERS</p> 
        </div>
      </div>
    </div> -->
</template>

<style lang="scss">

.text{
  margin-top:-23%;
}
.information{
  color:#b06050;
  font-size:1.8em;
}
.welcome{
  font-size:6em;
  margin-top:-3%;
}

@media (max-width: 767px){
  .img-header{
    margin-top:-70px;
  }
}
@media (max-width: 425px){
  .information{
    margin-top: -10%;
    font-size: 0.6em;
  }
  .welcome{
    font-size: 1.1em;
  }
}
@media (min-width: 425px) and (max-width: 767px){
  .information{
    margin-top: -10%;
    font-size: 0.6em;
  }
  .welcome{
    font-size: 1.1em;
  }
}

/**************** Sass variables ***************/
// $full-background:cover;
// $auto:auto;
// $auto:auto;
// $relative:relative;
// $text-center:center;
// $no-repeat:no-repeat;
// $inline-block:inline-block;
// $full:100%;
// $half:50%;
// $normal-size-font:1em;
// $double-size-font:2em;
// $zero:0;
// $black:#000;
// $white:#fff;
/**************** Sass variables ***************/

/**************** Mixins***********************/

/**************** Mixins***********************/

/****************Classes******************/

// .imagen-logo{
//   position: $relative;
//   margin-top: -10.5%;
//   width: 45%;
// }
// .wrapper{
  
//   margin-top: -70px;
//   text-align:$text-center;
//   font-size:$normal-size-font;
//   color:$black;
//   width:$full;
//   // background-size:$full-background;
//   background-repeat:$no-repeat;
// }
// .time-boxes{
//     display:$inline-block;
//     font-size:$double-size-font;
//     color:#b06050;
// }
// .font-welcome{
//   color:$white;
//   font-size:6em;
//   margin:$zero;
//   padding:$zero;
// }
// .info-welcome {
//   margin-top:9%;
//   margin-bottom: -1%;
//   color:#b06050;
//   font-size:1.8em;
//   padding:$zero;
// }
// .logo-welcome{
//   margin-top:2%;
//   margin-left:$auto;
//   margin-right:$auto;
//   width:$half;
//   height:$half;
// }
// .imagen-fondo{
//   position: $relative;
//   width: $full;
//   margin-top: -70px;
//   object-fit:cover;
// }

// .titulos{
//   position: $relative;
//   margin-top: -45%;
// }
/****************Classes******************/



/****************Identifiers**********/
// #logo{
//     width:$half;
//     height:$half;
// }
/****************Identifiers**********/

/****************Media queries********************/ 

  /* First background images and titles: styles for mobile and tablets organized from lower to higher resolutions */
  // @media (max-width: 425px){
  //   .imagen-fondo{
  //     min-height: 240px;
  //   }
  //   .font-welcome{
  //     font-size:1.4em;
  //     margin-bottom: 120px;
  //   }
  //   .info-welcome {
  //     margin-top:-220px;
  //     font-size:0.8em;
  //   }
  // }
  // @media (max-width: 1000px){
  //   .imagen-logo{
  //     margin-top: -15%;
  //     width: 60%;
  //   }
  // }
  // @media (min-width: 426px) and (max-width: 768px){
  //   .imagen-fondo{
  //     min-height: 350px;
  //   }
  //   .font-welcome{
  //     font-size:2.4em;
  //      margin-bottom: 170px;
  //   }
  //   .info-welcome {
  //     margin-top:-300px;
  //     font-size:$normal-size-font;
  //   }
  // }
  // @media (min-width: 769px) and (max-width: 1023px){
  //   .imagen-fondo{
  //     min-height: 500px;
  //   }
  //   .font-welcome{
  //     font-size:3.5em;
  //     margin-bottom: 220px;
  //   }
  //   .info-welcome {
  //     margin-top:-450px;
  //     font-size:1.4em;
  //   }
  // }
  //   @media (min-width: 1024px) and (max-width: 1271px){
  //   .font-welcome{
  //     font-size:4.5em;
  //   }
  //   .info-welcome {
  //     font-size:1.8em;
  //   }
  // }
  /****************Media queries for mobile********************/
  
</style>

<script>


</script>