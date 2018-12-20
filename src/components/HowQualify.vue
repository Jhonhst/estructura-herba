<template>
 <div></div>
    <!-- <div class="HowQualify" v-if="sourceView">
        <h2 class="font-Flat title">{{sourceView.qualify}}</h2>
        <div class="font-Cae">
            <div v-html="sourceView.welcome_info"></div>
        </div>
    </div> -->
</template>

<script>
    export default {
        name: 'Destinations',
        props: ['sourceView'],
        data() {
            return {

            }
        },
        methods: {
            chargeInfo() {
                this.$emit('chargeInfo', this.checkerdata);
                this.checkerdata++;
            }
        },
        created() {
            this.chargeInfo();
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    $primary_color: #D60058;
    .HowQualify {
        h2 {
            line-height: 1;
            margin-bottom: 30px;
            text-transform: lowercase;
        }
        h2::first-letter {
            text-transform: uppercase;
        }
        p {
            margin: 12px 0;
        }
        div {
            font-size: 15px;
        }
    }
    
    @media(max-width: 767px) {
        .HowQualify {
            position: relative;
            margin-bottom: 45px;
            padding-bottom: 20px;
            border-bottom: 4px solid #0DA244;
        }
    }
</style>