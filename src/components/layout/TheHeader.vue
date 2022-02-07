<!--  eslint-disable  -->
<template>
  <div>
    <header role="navigation" class="lg">
      <ul class="nav justify-content-center">
        <li class="nav-item">
          <router-link class="nav-link" aria-current="page" to="/home">
            <span class="num visible text-white fw-bold">00</span>
            Home
          </router-link>
          <span
            class="hover-tab d-block opacity-0 w-100 bg-secondary bg-gradient"
            :class="homeTabActive"
          ></span>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/destination">
            <span class="num visible text-white fw-bold">01</span>
            Destination
          </router-link>
          <span
            class="hover-tab d-block opacity-0 w-100 bg-secondary bg-gradient"
            :class="destTabActive"
          ></span>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/crew">
            <span class="num visible text-white fw-bold">02</span>
            Crew
          </router-link>
          <span
            class="hover-tab d-block opacity-0 w-100 bg-secondary bg-gradient"
            :class="crewTabActive"
          ></span>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/tech">
            <span class="num visible text-white fw-bold">03</span>
            Technology
          </router-link>
          <span
            class="hover-tab d-block opacity-0 w-100 bg-secondary bg-gradient"
            :class="techTabActive"
          ></span>
        </li>
      </ul>
    </header>
    <img src="../../assets/shared/logo.svg" alt="">
  </div>
</template>
<!-- eslint-disable -->
<script>
/* eslint-disable */

export default {
  data() {
    return {};
  },
  computed: {
    homeTabActive() {
      return {
        "bg-white": this.$route.fullPath == "/home",
      };
    },
    destTabActive() {
      return {
        "bg-white": this.$route.fullPath == "/destination",
      };
    },
    crewTabActive() {
      return {
        "bg-white": this.$route.fullPath == "/crew",
      };
    },
    techTabActive() {
      return {
        "bg-white": this.$route.fullPath == "/tech",
      };
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Barlow+Condensed&display=swap");

div {

  header {
    font-family: "Barlow Condensed", sans-serif;
    position: absolute;
    top: 30px;
    right: 0;
    width: 60%;
    background-color: rgba(255, 255, 255, 0.04) !important;
    backdrop-filter: blur(81.55px) !important;
    z-index: 100;
  
    &::after {
      content: '';
      position: absolute;
      width: 46%;
      height: 1px;
      background-color: gray;
      left: -21rem;
      top: 50%;
    }

    .nav {
      .nav-item {
        font-size: 1rem;
        margin-left: 0.7rem;
        margin-right: 0.7rem;
        text-transform: uppercase;
        letter-spacing: 2.7px;
        .hover-tab {
          height: 4px;
        }
        a {
          padding-top: calc(2rem + 4px);
          padding-bottom: 2rem;
        }
      }
    }
    .nav-item:hover > span {
      opacity: 1 !important;
      transition: all 0.7s ease-in-out;
    }
  }
  .bg-white {
    opacity: 1 !important;
    background-color: #fff !important;
  }
  .router-link-exact-active {
    color: #fff !important;
  }

  img {
    position: absolute;
    z-index: 100;
    left: 3rem;
    top: 3.4rem;
  }
}
</style>
