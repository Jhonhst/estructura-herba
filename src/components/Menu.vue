<template>
  <div class="MainMenu">
    <div class="menuMobile" v-on:click="showMobileMenu = !showMobileMenu">
      <img src="/static/images/menuMobile.svg" alt="menu mobile">
    </div>
    <transition name="fade">
      <nav v-if="showMobileMenu">

        <div class="logo mobilelogo">
            <img src="/static/images/mainLogo.svg">
            <div class="logoTopHerb">
                <img src="/static/images/Aviso.png" alt="herebalife logo">
            </div>
        </div>

        <ul class="font-Ail" @mouseover="mouseOver" @mouseleave="mouseLeave" v-bind:class="{ hover: hover }">

          <!--<span class="hamburguesa"></span>-->

          <li :class="{active:scrollPos == 0}">
            <a @click="moveMenu(0)">
              <p v-lang.destinations></p><span class="dot"></span>
            </a>
          </li>
          <li :class="{active:scrollPos == 1}">
            <a @click="moveMenu(1)">
              <p v-lang.booknow></p><span class="dot"></span>
            </a>
          </li>
          <li :class="{active:scrollPos == 2}">
            <a @click="moveMenu(2)">
              <p v-lang.videoH></p><span class="dot"></span>
            </a>
          </li>
          <li :class="{active:scrollPos == 3}">
            <a @click="moveMenu(3)">
              <p v-lang.Howtoqualify></p><span class="dot"></span>
            </a>
          </li>
          <li :class="{active:scrollPos == 4}">
            <a @click="moveMenu(4)">
              <p v-lang.starqualifiers></p><span class="dot"></span>
            </a>
          </li>
          <li :class="{active:scrollPos == 5}">
            <a @click="moveMenu(5)">
              <p v-lang.starrewards></p><span class="dot"></span>
            </a>
          </li>
          <li :class="{active:scrollPos == 6}">
            <a @click="moveMenu(6)">
              <p v-lang.contactus></p><span class="dot"></span>
            </a>
          </li>

        </ul>
      </nav>
    </transition>
  </div>
</template>

<script>
    import Vue from 'vue';
    import {
        mapGetters
    } from 'vuex';

    export default {
        name: 'mainMenu',
        data() {
            return {
                showMobileMenu: false,
                scrollPos: 0,
                hover: true
            }
        },
        props: ['newPos'],
        methods: {
            isMobile() {
                if (screen.width > 768) {
                    this.showMobileMenu = true;
                }
                // this.$emit('isMobile', this.showMobileMenu);
            },
            moveMenu(pos) {
                window.removeEventListener('scroll', this.handleScroll);
                this.$emit('menuScroll', pos)
                window.addEventListener('scroll', this.handleScroll);
                // if(screen.width < 768){
                //   this.showMobileMenu = false;
                // }
                if (screen.width < 769) {
                    this.showMobileMenu = false;
                }
            },
            mouseOver: function() {
                this.hover = true;
            },
            mouseLeave: function() {
                if(window.pageYOffset < 450 && screen.width > 768){
                    this.hover = true;
                }else {
                    this.hover = false;
                }
            },
            handleScroll: function(event) {
                this.scrollPos = this.newPos
                if(this.hover){;
                    this.hover = false;
                }
                if(window.pageYOffset < 450 && screen.width > 768){
                    this.hover = true;
                }
            }
        },
        created() {
            if(!this.$store.state.lang){
                this.$language = 'en';
            }else {
                this.$language = this.$store.state.lang;
            }
            this.isMobile();

            window.addEventListener('scroll', this.handleScroll);
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

    .menuMobile,
    .mobilelogo {
        display: none;
    }

    .MainMenu {
        text-transform: uppercase;
        clear: both;
        position: fixed;
        height: 100vh;
        z-index: 2;
        right: 0;
        top: 0;
        &:after {
            content: "";
            width: 2px;
            height: 100%;
            background-color: #474644;
            position: absolute;
            right: 63px;
            z-index: -1;
        }
    }

    nav {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        text-align: right;
        right: 10px;

        /*.hamburguesa{
            display: block;
            width: 28px;
            height: 3px;
            background-color: white;
            position: absolute;
            right: 8px;
            top: 50%;
            transform: translateY(50%);
            &:after,
            &:before {
                content: "";
                display: block;
                width: 28px;
                height: 3px;
                background-color: white;
                position: relative;
            }
            &:before {
                top: -8px;
            }
            &:after {
                bottom: -5px;
            }
        }*/

        ul {
            font-size: 16px;
            list-style: none;
            padding-right: 50px;
        }
        @media(min-width: 769px) {
            ul.hover li p {
                animation: goIn 1s forwards;
            }
            @keyframes goIn {
                from {
                    opacity: 0;
                    transform: translateX(-30px);
                    /*width: 0;*/
                }
                to {
                    opacity: 1;
                    width: auto;
                    transform: translateX(0px);
                }
            }
            ul.hover {
                li:hover p {
                    opacity: 1 !important;
                    color: #fff;
                }
            }
        }
        li {
            margin: 7px 0;
            cursor: pointer;
            white-space: nowrap;
            p {
                display: inline-block;
                vertical-align: middle;
                color: #F0F0F0;
                @media(min-width: 769px) {
                    animation: goOut 1s forwards;
                }
            }
            @keyframes goOut {
                from {
                    opacity: .6;
                    width: auto;
                    transform: translateX(0px);
                }
                to {
                    opacity: 0;
                    width: 0;
                    transform: translateX(-30px);
                    overflow: hidden;
                }
            }
            .dot {
                margin-left: 10px;
                display: inline-block;
                vertical-align: middle;
                width: 7px;
                height: 32px;
                background-color: white;
                border-radius: 1px;
                box-shadow: 0 0 10px white, 0 0 116px rgba(0, 0, 0, 0.58), 0 0 100px rgb(21, 21, 21), 0 0 20px rgba(0, 0, 0, 1);
            }
        }
        li.active {
            p {
                text-shadow: 0 0 11px rgb(255, 255, 255), 0 0 60px rgba(0, 0, 0, 0), 0 0 100px rgba(255, 255, 255, 0.51), 0 0 90px rgb(255, 255, 255);
                font-weight: 600;
                height: auto;
            }
            .dot {
                position: relative;
                box-shadow: 0 0px 0px 0px rgba(255, 255, 255, 0.5), 0px 0px 6px 3px rgba(165, 61, 117, 0.70);
                &:before {
                    content: "";
                    width: 7px;
                    height: 32px;
                    background-color: white;
                    border: 2px solid #a53d75;
                    position: absolute;
                    left: -2px;
                    top: -1px;
                    box-shadow: 0 0px 0px 0px rgba(255, 255, 255, 0.5), 0px 0px 27px 0px rgba(165, 61, 117, 0.70);
                    z-index: -1;
                    border-radius: 1px;
                }
            }
        }
        li:hover {
            .dot {
                box-shadow: 0 0 20px white, 0 0 116px rgb(255, 255, 255), 0 0 100px #ffffff, 0 0 10px white;
            }
        }
        /*ul:hover {
            .hamburguesa,.hamburguesa:before, .hamburguesa:after{
                box-shadow: 0 0 20px white, 0 0 116px rgb(255, 255, 255), 0 0 100px #ffffff, 0 0 10px white;
                transition: .5s all ease;
            }
        }*/
        &:after {
            content: "";
            background-image: url(/static/images/Flecha.png);
            background-position: 50% 50%;
            background-size: contain;
            position: absolute;
            width: 50px;
            height: 98px;
            right: 28px;
            bottom: -15%;
            -webkit-transform: translateY(100%);
            transform: translateY(100%);
            background-repeat: no-repeat;
        }
    }

    @media(max-width: 768px) {
        .MainMenu {
            left: 0;
            right: auto;
            position: fixed;
            min-width: auto;
            top: 70px;
            z-index: 9;
            height: calc(100% - 66px);
            nav {
                background-color: rgba(0, 0, 0, 0.92);
                right: auto;
                transform: none;
                top: -70px;
                text-align: left;
                position: relative;
                padding: 100px 50px 30px 20px;
                height: calc(100% + 66px);
                width: 100%;
                z-index: -1;
                &:after {
                    display: none
                }
                /*.hamburguesa {
                    display: none;
                }*/
                ul {
                    font-size: 20px;
                    li {
                        margin: 20px 0;
                        padding-left: 30px;
                        height: 32px;
                        position: relative;
                        span,
                        a span {
                            position: absolute;
                            left: 7px;
                            top: 0;
                            margin: 0 !important;
                        }
                    }
                    li:hover span {
                        position: absolute;
                        left: 7px;
                    }
                    li.active span {
                        position: absolute;
                        left: 7px;
                    }
                }
            }
            &:after {
                top: 0;
                left: 30px;
                display: none;
            }
        }
        /*
    .MainMenu.active {
      width: 80%;
      nav{
        display:block;
      }
      &:after{
        display: block;
      }
    }*/
        .menuMobile {
            display: inline-block;
            padding: 20px;
            position: absolute;
            top: -68px;
            img {
                width: 24px;
            }
        }
    }
    /*
  * TRANSITIONS
*/

    .fade-enter-active,
    .fade-leave-active {
        transition: opacity .5s
    }

    .fade-enter,
    .fade-leave-to
    /* .fade-leave-active below version 2.1.8 */

    {
        opacity: 0
    }

    @media(max-width:640px){
        .mobilelogo{
            display: block;
                }
            .logo {
            margin: 0;
            padding-left: 15px;
            display: inline-block;
            /*display:flex;*/
            padding: 10px;
            position: absolute;
            top: 10px;
            right: 5px;
            img {
            width: 100px;
            object-fit: contain;
            }
            .logoTopHerb {
            position: relative;
            display: inline-block;
            vertical-align: top;
            }
            .logoTopHerb img {
            border-left: 1px solid #d84058;
            }
            .logoTopHerb:after {
            content: "";
            width: 78px;
            height: 40px;
            background-image: url("/static/images/Herbalife-Logo.svg");
            background-size: contain;
            background-repeat: no-repeat;
            background-position: 50% 50%;
            position: absolute;
            margin: 2px auto;
            transform: rotate(-4deg);
            left: 10px;
            top: -1px;
            }
        }
    }
</style>
