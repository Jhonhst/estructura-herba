<template>
    <div></div>
  <!-- <div class="packageIncludes" v-if="sourceView">
   
            <div v-html="sourceView.content.rendered"></div>

            <router-link :to="{ name: 'faqs'}"  v-if="this.$route.query.param !== 'zanzibar'">
                <h3 class="font-Flat qas">{{sourceView.acf.faqs}}  -  </h3>
            </router-link>
            <router-link :to="{ path: 'faqs?param=zanzibar'}" v-if="this.$route.query.param === 'zanzibar'">
                <h3 class="font-Flat qas">{{sourceView.acf.faqs}}  -  </h3>
            </router-link>

            <router-link :to="{ name: 'termsandconditions'}" v-if="this.$route.query.param !== 'zanzibar'">
                <h3 class="font-Flat qas">  {{sourceView.acf.terms_conditions}}</h3>
            </router-link>  
            <router-link :to="{ path: 'termsandconditions?param=zanzibar'}" v-if="this.$route.query.param === 'zanzibar'">
                <h3 class="font-Flat qas">  {{sourceView.acf.terms_conditions}}</h3>
            </router-link>  

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
    .packageIncludes {
        font-family: 'Caecilia';
        font-size: 14px;
        ul {
            list-style: none;
            font-size: 15px;
            li {
                margin: 10px 0;
            }
        }
        h2 {
            text-transform: lowercase;
        }
        h2::first-letter {
            text-transform: uppercase;
        }
        h3 {
            margin: 0;
            font-size: 50px;
            line-height: 1;
        }
        .qas {
            font-size: 30px;
            margin-top: 30px;
        }
        h3 {display: inline-block}
        & > div > h2 {    margin-bottom: 30px;}
    }
    
    h2,
    h4,
    h3,
    .subtitle {
        font-family: 'Flathead';
        font-style: italic;
        text-transform: capitalize;
        text-shadow: 0 0 11px rgb(255, 255, 255), 0 0 60px rgba(0, 0, 0, 0), 0 0 100px rgba(21, 21, 21, 0.2), -2px 5px 10px rgba(0, 0, 0, 1);
    }
    
    h3,
    .subtitle {
        font-size: 25px;
        margin: 30px 0
    }
    
    .italictext {
        font-size: 11px;
    }
    
    a {
        color: #fff;
        text-decoration: none;
    }

</style>