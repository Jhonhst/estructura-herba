<template>
<div class="container-fluid">
  <div class="row">
    <div class="col-12">
      <h2 class="title-destination text-center">DESTINATIONS</h2> 
      <p class="info-destination offset-2 col-8 text-center">Welcome to the EMEA 2019 Vacation registration web page for Herbalife, Here you can see.
      </p> 
      <p class="info-destination-dos offset-2 col-8 text-center">the destinations that are offered, once you have quaififed, book your place in the place you prefer.
      </p>
    </div>
  </div>
  <div class="row">
    <div class="offset-2 col-8 gafas">
      <div class="row">
        <div class="fondos offset-3 col-3">
          <div class="button-text">
            <p class="text-center up-text">GREEK</p>
            <p class="text-center down-text">ISLAND CRUISE</p>
          </div>
        </div>
        <div class="fondos offset-3 col-3">
          <div class="button-text">
            <p class="text-center up-text">ANTALYA</p>
            <p class="text-center down-text">TURKEY RESORT</p>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="offset-2 col-3 timer1" >
          <div class="time-boxes" ><p id="days"></p></div>
          <div class="time-boxes" ><p id="hours"></p></div>
          <div class="time-boxes" ><p id="minutes"></p></div>
          <div class="time-boxes" ><p id="seconds"></p></div>
        </div>

        <div class="offset-2 col-3 timer2">
          <div class="time-boxes" ><p id="days2"></p></div>
          <div class="time-boxes" ><p id="hours2"></p></div>
          <div class="time-boxes" ><p id="minutes2"></p></div>
          <div class="time-boxes" ><p id="seconds2"></p></div>
        </div>
      </div> 

      <div class="row">
        <div class="offset-2 col-3 timer1-complement">
          <div class="timer1-boxes"><p>Days.</p></div>
          <div class="timer1-boxes"><p>Hrs.</p></div>
          <div class="timer1-boxes"><p>Mins.</p></div>
          <div class="timer1-boxes"><p>Secs.</p></div>
        </div>

        <div class="offset-2 col-3 timer2-complement">
          <div class="timer1-boxes"><p>Days.</p></div>
          <div class="timer1-boxes"><p>Hrs.</p></div>
          <div class="timer1-boxes"><p>Mins.</p></div>
          <div class="timer1-boxes"><p>Secs.</p></div>
        </div>  
      </div> 
      <div class="row">
        <div class="col-6 ">
          <a href="#" class=" d-none d-md-block boton-login text-center">MORE INFO</a>
        </div>

        <div class="col-6 ">
          <a href="#" class=" d-none d-md-block boton-login text-center">MORE INFO</a>
        </div>
      </div>
    </div>
  </div>

</div>
    <!-- <div class="wrapper-destination"> -->
      <!-- <div class="body-destination"> -->
        <!-- <div class="vacio">.</div>
        <div class="container-fluid">
           <div class="row ">
              <div class="col-12 title-destination text-center ">DESTINATIONS</div>
                  <p class="info-destination offset-2 col-8">Welcome to the EMEA 2019 Vacation registration web page for Herbalife, Here you can see.
                  </p> 
                  <p class="info-destination-dos offset-2 col-8">the destinations that are offered, once you have quaififed, book your place in the place you prefer.
                  </p>
            </div>
        </div>
              <div class="row sunglasses-destination">
                  <div class="button-section col-6">
                    <p class="above-text"> 07<span> &sdot; </span>JUN - 12<span> &sdot; </span>JUN</p>
                      <div class="sunglasses-button">
                           <img src="/../static/images/Boton-Destino.png" class="img-fluid button-image" alt="">
                           <div class="button-text">
                              <p class="up-text">GREEK</p>
                               <p class="down-text">ISLAND CRUISE</p>
                           </div>
                       </div>
                    </div>
                    <div class="button-section-dos col-6">
                       <p class="above-text"> 15<span> &sdot; </span>JUN - 20<span> &sdot;</span>JUN</p>
                       <div class="sunglasses-button">
                         <img src="/../static/images/Boton-Destino.png" class="img-fluid button-image" alt="">
                          <div class="button-text">
                            <p class="up-text">ANTALYA</p>
                            <p class="down-text">TURKEY RESORT</p>
                          </div>
                       </div>
                     </div> 
              </div>


            <div class="container">
              <div class="row">
               <div class="col-6 timer1">
                  <div class="time-boxes" id="days"></div>
                  <div class="time-boxes" id="hours"></div>
                  <div class="time-boxes" id="minutes"></div>
                  <div class="time-boxes" id="seconds"></div>
            </div>

            <div class="col-6 timer2">
                  <div class="time-boxes" id="days2"></div>
                  <div class="time-boxes" id="hours2"></div>
                  <div class="time-boxes" id="minutes2"></div>
                  <div class="time-boxes" id="seconds2"></div>
            </div>

              <br>
              
                <div class="col-6 timer1-complement">
                    <div class="timer1-boxes">Days.</div>
                    <div class="timer1-boxes">Hrs.</div>
                    <div class="timer1-boxes">Mins.</div>
                    <div class="timer1-boxes">Secs.</div>
                </div>
                 <div class="col-6 timer2-complement">
                    <div class="timer2-boxes">Days.</div>
                    <div class="timer2-boxes">Hrs.</div>
                    <div class="timer2-boxes">Mins.</div>
                    <div class="timer2-boxes">Secs.</div>
                </div>
              
             <div class="col-6 ">
               <a href="#" class=" d-none d-md-block boton-login text-center">MORE INFO</a>
            </div>

            <div class="col-6 ">
              <a href="#" class=" d-none d-md-block boton-login text-center">MORE INFO</a>
            </div>
            </div>
         </div>
    </div> -->

</template>


<script>
// Set the date we're counting down to (Timer 1)
var countDownDate = new Date("July 7, 2019 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  var slas = "/"
  document.getElementById("days").innerHTML = days + "  /   " ;
  document.getElementById("hours").innerHTML = hours + "  /   ";
  document.getElementById("minutes").innerHTML = minutes + "  /   ";
  document.getElementById("seconds").innerHTML = seconds ;

  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timeUp").innerHTML = "Time is up!";
  }
}, 1000);

// Set the date we're counting down to (Timer 2)
var countDownDate2 = new Date("July 15, 2019 15:37:25").getTime();

// Update the count down every 1 second
var x2 = setInterval(function() {

  // Get todays date and time
  var now2 = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate2 - now2;

  // Time calculations for days, hours, minutes and seconds
  var days2 = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours2 = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes2 = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds2 = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("days2").innerHTML = days2 + "  /   ";
  document.getElementById("hours2").innerHTML = hours2 + "  /  ";
  document.getElementById("minutes2").innerHTML = minutes2 + "  /   ";
  document.getElementById("seconds2").innerHTML = seconds2  ;

  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x2);
    document.getElementById("timeUp").innerHTML = "Time is up!";
  }
}, 1000);

</script>

<style lang="scss">
 
  .gafas{
    width:65%;
    height:29%;
    margin-left:auto;
    margin-right:auto;
    background-image:url('/static/images/Gafas-Inicio.png');
    background-repeat:no-repeat;
    background-size: 100% auto;
  }
  .fondos{
    margin-top:12%; 
    background-image:url('/../static/images/Boton-Destino.png');
    background-repeat: no-repeat; 
    margin-left:auto;
    margin-right:auto;
    background-size: 100% auto;
 
  }
  .time-boxes{
     display:inline-block;
  }
  .timer1-boxes{
    display:inline-block;
  }
  .timer1,.timer2{
    margin-top: 20%;
  }

   /**************** Sass variables ***************/
//     $full-background:cover;
//     $auto:auto;
//     $auto:auto;
//     $relative:relative;
//     $text-center:center;
//     $no-repeat:no-repeat;
//     $inline-block:inline-block;
//     $full:100%;
//     $half:50%;
//     $normal-size-font:1em;
//     $double-size-font:2em;
//     $zero:0;
//     $black:#000;
//     $white:#fff;
//     $test-color:blue;
//     $test-border:3px solid red;
//     $brown:#b06050;
//     $color-fuerte:#722942;
//     $display:inline-block;
//     $bold:bold;
// /**************** Sass variables ***************/

// /**************** Mixins***********************/

// /**************** Mixins***********************/

// /****************Classes******************/
//   .empty{
//     position:$relative;
//     height: 1px;;
//   }

//   .button-image{
//     width: $half;
//     margin-left: 26%;
//     margin-top: -4%;
//   }

//   .button-text{
//     margin-top: -16%;
//   }
//   .wrapper-destination{
//     // border:3px solid red;
//     position: relative;
//     // margin-top: -2%;
//     height:1200px;
//     background-size:$full $auto;
//     background-image:url('/static/images/Fondo-Palmeras.png');  
//     // background-repeat: no-repeat;
//     }

//   .title-destination{
//     position: relative;
//     color:#ffffff;
//     text-align:center;
//     margin-top:9%;
//     font-size:3.5em;
//   }
//   .info-destination{
//     color:$brown;
//     text-align:$text-center;
//     font-family: 'Neue', sans-serif;
//   }
//   .info-destination-dos{
//     font-weight: bold;
//     color:$color-fuerte;
//     text-align:center;
//     font-family: 'Neue', sans-serif;
//   }
//   .sunglasses-destination{
//     width:65%;
//     height:29%;
//     margin-left:$auto;
//     margin-right:$auto;
//     background-image:url('/static/images/Gafas-Inicio.png');
//     background-repeat:$no-repeat;
//     background-size: $full $auto;
//   }

//   .timer1{
//     font-weight:$bold;
//     left: 20%;
//     color:brown;
//   }
//   .timer2{
//     font-weight:$bold;
//     left: 5%
//   }
//   .time-boxes{
//     padding:2%;
//   }
//   .cajas{
//     display:$display;
//     font-size:1.5em;
//     margin-left:3%;
//   }
//   .timer1-complement{
//     margin-top:-2.6%;
//     font-weight:$bold;
//     left: 19.5%;
//   }
//   .timer2-complement{
//     margin-top:-2.6%;
//     font-weight:$bold;
//     left: 5.5%;
//   }
//   .timer1-boxes{
//     display:$display;
//     padding:3%;
//   }
//   .timer2-boxes{
//     display:$display;
//     padding:3%;
//   }
//   .button-box1{
//     margin-left: 53%;
//     font-size:1em;
//     background-repeat:no-repeat;
//     text-align:center;
//     background-image:url("/static/images/Btn-Login.png");
//     background-size:100% 100%;
//     padding:2% 5%;;
//     font-weight:bold;
//   }
//   .button-box1:hover{
//     text-decoration: none;
//     color: white;
//     font-size:1.1em;
//   }

  // .button-box2{
  //   margin-left: 23%;
  //   font-size:1em;
  //   background-repeat:no-repeat;
  //   text-align:center;
  //   background-image:url('/static/images/Btn-Login.png');
  //   background-size:100% 100%;
  //   padding:2% 5%;;
  //   font-weight:bold;
  // }
  // .button-box2:hover{
  //   text-decoration: none;
  //   color: white;
  //   font-size:1.1em;
  // }

  // .buttonSeparator{

  //   width:50%;

  // }

  // .timerSeparator{

  //   color:#ffffff;
  //   font-size:2em;
  // }

  // .sunglasses-button{
  //   display:$display;
  //   background-repeat:$no-repeat;
  //   background-size:$full $full;
  //   width:$full;
  //   height:20%;
  // }

  // .up-text{
  //   padding:$zero;
  //   margin:$zero;
  //   text-align:$text-center;
  //   font-size:$double-size-font;
  // }
  // .down-text{
  //   padding:$zero;
  //   margin-top:-10px;
  //   text-align:$text-center;
  //   font-size:$normal-size-font;
  //   color:$white;
  // }
  // .above-text{
  //   text-align:center;
  //   width:100%;
  //   font-size:1.4em;
  //   color:$brown;
  //   padding:$zero;
  //   margin-top:22%;
  // }


/************ media queris***********/
// @media (min-width: 1440px) {
//      .wrapper-destination{
//        margin-top: 17%;
//      }
// }
//    @media (max-width: 425px){
//     .wrapper-destination{
//       height: 400px;
//     }
    
//     .title-destination{
//       font-size:1.4em;
//     }
//     .info-destination{
//       text-align: center;
//       font-size:0.8em;
//     }

//     .button-section{
//       margin-top: 30%;
//     }
//     .button-section-dos{
//       margin-top: 30%;
//     }
//     .texto-boton{
//       margin-top: -50%;
//     }
//     .above-text{
//        font-size:0.6em;
//        margin-bottom: -3%;
//     }
//      .up-text{

//       font-size:0.8em;
//      }
//      .down-text{
//        font-size:0.4em;
//      }
//     .info-destination-dos{
//       font-size:0.8em;
//     }
//     .imagen-boton{
//       width: 80%;
//       margin-left: 15%;
//       margin-top: -50%;
//     }
//     .button-box1{
//       margin-top:-30%;
//       font-size: 0.5em;
//     }
//     .button-box1{
//        font-size: 1em;
//     }
//     .time-boxes{
//       font-size: 0.8em;
//       padding: 0px;
//     }
//     .timer1{
//        margin-left: -6%;
//     }
//   }
//   @media (min-width: 426px) and (max-width: 768px){
//     .imagen-fondo{
//       min-height: 350px;
//     }
//     .title-destination{
//       font-size:2.4em;

//     }
//     .info-welcome {
//       margin-top:-300px;
//       font-size:1em;
//     }
//   }
//   @media (min-width: 769px) and (max-width: 1023px){
//     .imagen-fondo{
//       min-height: 500px;
//     }
//     .title-destination{
//       font-size:3.5em;
    
//     }
//     .info-welcome {
//       margin-top:-450px;
//       font-size:1.4em;
//     }
//   }
//     @media (min-width: 1024px) and (max-width: 1271px){
//     .title-destination{
//       font-size:4.5em;
//     }
//     .info-welcome {
//       font-size:1.8em;
//     }
//   }
/************ media queris ***********/
  // .button-section{

  /****************Media queries********************/ 

</style>





