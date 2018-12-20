<template>
    <div class="DestinationInformation" v-if="sourceView">
        <div class="container">
            <div class="right bgGray">
                <div class="tempInfo font-Flat" v-html="sourceView.acf.destination_information"></div>
                <div class="flightCost" v-html="sourceView.acf.flight_costs"></div>
            </div>
        </div>
    
    </div>
</template>

<script>
    export default {
        name: 'DestinationInformation',
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
    .DestinationInformation {
        padding: 35px;
        width: 59%;
        display: inline-block;
        margin-left: 8%;
        .right{
            padding: 40px 20px;
            padding-left: 60px;
        }
    }
    .right {
        text-align: right;
    }
    
    .tempInfo {
        font-style: normal;
        font-size: 18px;
        text-transform: initial;
        .big {
            font-size: 34px;
            text-transform: uppercase;
        }
        .temperature {
            text-shadow: 0 0 11px rgb(255, 255, 255), 0 0 60px rgba(0, 0, 0, 0), 0 0 100px rgba(21, 21, 21, 0.2), -2px 5px 10px rgba(0, 0, 0, 1);
            margin-bottom: 20px;
            div {
                font-size: 43px;
                color: $primary_color;
                text-shadow: 0 0 11px $primary_color, 0 0 60px transparent, 0 0 100px rgba(21, 21, 21, 0.2), -2px 5px 10px rgba(0, 0, 0, 1);
                span:nth-child(1) {
                    display: inline-block;
                    margin-right: 25px;
                    padding-right: 25px;
                    border-right: 2px solid $primary_color;
                }
                &:before {
                    content: "";
                    background-image: url(/static/images/Sun.svg);
                    width: 60px;
                    height: 60px;
                    -webkit-background-size: contain;
                    background-size: contain;
                    display: inline-block;
                    margin-right: 10px;
                    position: relative;
                    top: 13px;
                }
            }
        }
        .info {
            border-top: 3px solid white;
            padding-top: 25px;
            font-family: 'Caecilia';
            font-size: 14px;
            padding-left: 20%;
        }
    }
    
    .flightCost {
        font-family: 'Caecilia';
        text-align: right;
        font-size: 14px;
        h2 {
            margin-top: 25px;
            margin-bottom: 25px;
            font-family: 'Flathead';
            font-size: 18px;
            text-shadow: none;
            text-align: right;
            color: $primary_color;
        }
        .col2 {
            float: right;
            max-width: 400px;
            display: flex;
            flex-wrap: wrap;
            &:before {
                display: none;
            }
            div {
                margin: 0 15px;
                column-count: 2;
                line-height: 24px;
                width: calc(50% - 30px);
                flex-basis: calc(50% - 30px);
                p:nth-child(1) {
                    text-align: left;
                }
            }
        }
        .info-cost {
            clear: both;
        }
    }
    
    .left h2.title {
        font-size: 35px;
        margin-bottom: 10px;
    }
    
    @media(max-width: 767px) {
        .DestinationInformation {
            width: 100%;
            padding:0px;
            margin: 0;
            .right{
            padding-left: 0px;
                padding: 10px 20px;
             }
            .container {
                display: block;
                &>div {
                    width: 100%;
                    text-align: left;
                }
            }
            .tempInfo {
                .info {
                    padding: 15px 0;
                }
                .big {
                    line-height: 50px;
                }
                .temperature div {
                    font-size: 30px;
                    &:before {
                        width: 40px;
                        height: 46px;
                        background-repeat: no-repeat;
                    }
                }
            }
            .flightCost {
                text-align: left;
                h2 {
                    text-align: center;
                }
            }
        }
    }
</style>