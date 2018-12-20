<template>
  <div class="headerBar">
    <div class="logo">
    <img class="logo-herbalite" src="/static/images/Logo-Herbalife.png" v-on:click="goLanguage()">
      <!--<div class="logoTopHerb">
            <img src="/static/images/Aviso.png" alt="herebalife logo">
      </div>-->
    
    </div>
    <div class="right">
      <ul class="font-Cae">
        <div v-if="this.$store.state.lang != null">
          <li>
            <!--<router-link :to="{ name: 'language'}">-->
              <!--Home-->
              <p v-lang.lenguage v-on:click="goLanguage()" class="cursorPOinter mt-4" ></p>
            <!--</router-link>            -->
          </li>
          <li v-if="this.$store.state.token != 'null'
            && this.$store.state.bookingid
            && this.$store.state.bookingid != 'undefined'
            && this.$store.state.bookingid != 'null'
            && this.$store.state.eventid
            && this.$store.state.eventid != 'undefined'
            && this.$store.state.eventid != 'null'">
            <a v-bind:href="`https://emeavacationreg.com:3002/loadall/${this.$store.state.eventid}`">
            <p v-lang.mybooking></p></a></li>
          <!-- <li v-if="this.$store.state.user_name != 'null'">
            <a v-bind:href="`https://emeavacationreg.com:3002`">{{this.$store.state.user_name}}</a>
          </li> -->
          <li v-if="this.$store.state.token == 'null'
            || this.$store.state.token == null
            || this.$store.state.token == 'undefined'
            || !this.$store.state.token">
            <!-- si NO existe el parametro zanzibar -->
            <a v-bind:href="`https://emeavacationreg.com:3002/?lang=${this.$store.state.lang || 'en'}`" v-if="!this.$route.query.param || this.$route.query.param != 'zanzibar'" class="boton-login">
              Login
            </a>
            <!-- si existe el parametro zanzibar -->
            <a v-bind:href="`https://emeavacationreg.com:3002/?param=zanzibar&lang=${this.$store.state.lang || 'en'}`" v-if="this.$route.query.param && this.$route.query.param == 'zanzibar'">
              Login
            </a>
          </li>
          <li v-if="this.$store.state.token != 'null' && this.$store.state.token != null && this.$store.state.token != ''"><a v-on:click="closeSession()"><p class="cursorPOinter">Logout</p></a></li>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "headerBar",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  created: function() {
    if (this.$store.state.lang) {
      this.$language = this.$store.state.lang;
    } else {
      this.$language = "en";
    }
  },
  updated() {
    this.$language = this.$store.state.lang;
  },
  methods: {
    goLanguage() {
      if (this.$route.query.param === "zanzibar") {
        this.$router.push("/?param=zanzibar");
      } else {
        this.$router.push("/");
      }
    },
    closeSession() {
      this.$store.state.token = "null";
      this.$store.state.user_name = "null";
      this.$store.state.bookingid = "null";
      localStorage.clear();
      this.$router.push("/");
    }
  }
};
</script>

<style lang="scss" scoped>

.cursorPOinter {
  cursor: pointer;
  color:#FFFFFF;
  font-size:1.25em;
  margin-left: -50%;
  font-weight: bold;
}
.headerBar {
  width: 100%;
  position: absolute;
  z-index: 2;
  background-color:transparent;
  height: 70px;
  display: flex;
  justify-content: space-between;
  
  .logo {
    margin: 0;
    margin-top: 1.6%;
    margin-left: 2%;
    padding-left: 15px;
    display: inline-block;
    /*display:flex;*/
    height: 100%;
    padding: 10px;
    img {
      width: 50%;
      object-fit: contain;
      cursor: pointer;
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
      width: 130px;
      height: 40px;
      // background-image: url("/static/images/Herbalife-Logo.svg");
      background-size: contain;
      background-repeat: no-repeat;
      background-position: 50% 50%;
      position: absolute;
      margin: 2px auto;

      transform: rotate(-4deg);
      left: 0;
      top: 3px;
    }
  }

.boton-login{
    color: #ffffff;
    text-decoration: none;
    background-image: url("/static/images/Btn-Login.png");
    background-repeat:no-repeat;
    background-size:100% 100%;
    font-size:1.25em;
    padding:10% 25% 10% 25%;
}

  .right {
    // align-items: center;
    margin-top: 1%;
    margin-right: 2%;
    // display: flex;
    // ul {
    //   padding: 13px 15px;
    //   list-style: none;
    //   display: inline-block;
    //   color: #b4b4b4;
    //   font-size: 14px;
      li {
        display: inline-block;
        vertical-align: middle;
        margin: 0  0px;
        letter-spacing: 2px;
      }
    //   img {
    //     width: 40px;
    //   }
    // }
  }

  

  .headerBar {
    text-align: center;
    padding: 13px 0;
    position: fixed;
    width: 100%;
  }
  .headerBar .logo {
    float: none;
    width: 80%;
    margin: 0 auto;
    position: relative;
    top: -5px;
    padding: 0;
  }
}
   .cursorPOinter:hover{
    font-size: 130%;
    }
    .login:hover{
      font-size: 130%;
    }


  @media (max-width: 850px) {
    .logo-herbalite{
      margin-top: 10px !important;
      position: absolute;
      width: 30% !important;
      padding: 0px;
      margin: 0px;
    }
  }
  @media (max-width: 425px) {
      .cursorPOinter{
        font-size: 1em;
        // padding: 10px;
        font-weight: bold;
      }
  }
  @media (min-width: 768px) {
    .right{
      margin-right: 5%;
    }
  }
</style>
