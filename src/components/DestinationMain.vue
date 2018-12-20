<template>
    <div class="mainDestination" v-if="sourceView">
        <!--<div class="logoTop">
            <img src="/static/images/mainLogo.svg" alt="logo" class="vacationsLogo">
            <div class="sign">
                <img src="/static/images/Aviso.png">
                <img class="logoHer" src="/static/images/Herbalife-Logo.svg">
            </div>
        </div>-->
        <div class="item">
            <div class="signTitle font-Flat">
                <h2 v-html="sourceView.content.rendered"></h2>
                <p>{{sourceView.title.rendered}}</p>
            </div>
        </div>
        <div class="mainInfo font-Flat" v-html="sourceView.acf.image_information">
        </div>
    </div>
</template>

<script>
    export default {
        name: 'mainDestination',
        props: ['sourceView'],
        data() {
            return {}
        },
        methods: {
            updateCheck() {
                this.$emit('updateChecked', this.checkerdata);
                this.checkerdata++;
            }
        },
        updated() {
            this.updateCheck();
        }
    }
</script>

<style lang="scss">
    $primary_color: #D60058;
    .mainDestination {
        /*height: calc(100vh - 70px);*/
        padding: 60px 35px 100px;
        position: relative;
        .logoTop {
            width: 250px;
            transform: rotate(-3deg);
            visibility: hidden;
        }
        .sign {
            margin: 0 auto 0;
            width: 60%;
            position: relative;
            top: -30px;
            left: -5px;
        }
        .item {
            width: 60%;
            position: relative;
            margin-top: 0;
        }
        .signTitle {
            background-image: url(/static/images/Aviso.png);
            background-size: contain;
            background-repeat: no-repeat;
            background-position: 50% 50%;
            padding: 10% 0;
            width: calc(100% + 40px);
            text-align: center;
            font-weight: 100;
            position: relative;
            &>* {
                transform: rotate(-6deg);
            }
            p {
                font-size: 5vw;
                margin-bottom: -10px;
                position: relative;
                left: 5px;
                text-shadow: black -6px 8px 12px;
            }
            h2 {
                font-weight: 100;
                color: $primary_color;
                text-transform: uppercase;
                font-size: 8vw;
                position: relative;
                margin-top: -33px;
                * {
                    font-size: inherit;
                    text-shadow: black -5px 3px 8px;
                }
            }
            &:before {
                content: "";
                background-image: url(/static/images/Flecha_4.png);
                position: absolute;
                width: 100%;
                height: calc(100% + 20px);
                background-repeat: no-repeat;
                right: 0;
                background-position: 100% 0;
                top: -20px;
                -webkit-background-size: contain;
                background-size: contain;
            }
        }
        .mainInfo {
            position: absolute;
            bottom: 1%;
            right: 4%;
            font-size: 21px;
            font-style: normal;
            line-height: 30px;
            letter-spacing: 1px;
            h3 {
                margin: 0;
            }
        }
    }
    .destination.zanzibar .mainDestination .signTitle h2{
        font-size: 6.3vw;
    }

    /*.destination.miami .mainDestination .signTitle:before {
        background-image: url(/static/images/Flecha_3.png);
        overflow: visible;
        background-image: url(/static/img/Flecha_3.34fb0b8.png);
        transform: rotateY(180deg);
        background-position: -30px 100%;
        height: calc(100% + -30px);
        top: -60px;
    }*/
    
    @media(max-width: 767px) {
        .mainDestination {
            height: auto;
            padding: 70px 30px 15px;
            background-image: none;
            .logoTop {
                margin: 0 auto;
                transform: none;
            }
            .item {
                width: 100%;
                    margin: 40px 0 10px;
            }
            .signTitle {
                width: 100%;
                padding: 47px 0;
                position: relative;
                left: -30px;
                &:before {
                    right: -30px;
                    height: calc(100% + -30px);
                    top: -30px;
                }
                h2 {
                    font-size: 45px;
                    p {
                        font-size: 45px;
                    }
                }
                p {
                    font-size: 30px;
                }
            }
            .mainInfo {
                text-align: center;
                padding-top: 50px;
                position: static;
                font-size: 15px;
            }
        }
        .destination.miami .mainDestination .signTitle:before {
            top: -30px;
            background-position: -10px 100%;
            left: 80%;
            width: 100%;
            height: 100px;
        }
    }
</style>