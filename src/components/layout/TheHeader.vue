<!--  eslint-disable  -->
<template>
  <header>
    <nav
      class="navbar navbar-expand-sm navbar-dark position-absolute end-0"
      :class="bgBlur"
    >
      <div class="">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          @click="toggle"
        >
          <span class="menu-icon" v-if="!toggler"></span>
          <span class="close-icon" v-else></span>
        </button>
        <div class="collapse navbar-collapse" ref="collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item" :class="activeTab('/home')">
              <router-link class="nav-link" aria-current="page" to="/home">
                <span
                  class="num d-none d-lg-inline-block visible text-white fw-bold"
                  >00</span
                >
                Home
              </router-link>
            </li>
            <li class="nav-item" :class="activeTab('/destination')">
              <router-link class="nav-link" to="/destination">
                <span
                  class="num d-none d-lg-inline-block visible text-white fw-bold"
                  >01</span
                >
                Destination
              </router-link>
            </li>
            <li class="nav-item" :class="activeTab('/crew')">
              <router-link class="nav-link" to="/crew">
                <span
                  class="num d-none d-lg-inline-block visible text-white fw-bold"
                  >02</span
                >
                Crew
              </router-link>
            </li>
            <li class="nav-item" :class="activeTab('/tech')">
              <router-link class="nav-link" to="/tech">
                <span
                  class="num d-none d-lg-inline-block visible text-white fw-bold"
                  >03</span
                >
                Technology
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <img class="logo" src="../../assets/shared/logo.svg" alt="" />
  </header>
</template>
<!-- eslint-disable -->
<script>
/* eslint-disable */

export default {
  data() {
    return {
      toggler: false,
    };
  },
  methods: {
    toggle() {
      this.toggler = !this.toggler;
    },
    activeTab(path) {
      if (this.$route.fullPath == path) {
        return "border-white";
      }
    },
  },
  computed: {
    bgBlur() {
      return { "bg-blur": this.toggler };
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Barlow+Condensed&display=swap");

header {
  .logo {
    position: absolute;
    z-index: 1000;
    left: 2rem;
    top: 3rem;
  }

  nav {
    z-index: 100;
    font-family: "Barlow Condensed", "sans-serif";
    background-color: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(81.55px);
    padding-left: 5rem;
    padding-right: 5rem;
    top: 0;

    button {
      &.navbar-toggler {
        color: transparent !important; // button outline
      }

      .menu-icon,
      .close-icon {
        display: inline-block;
        width: 27px;
        height: 21px;
        margin-top: 1rem;
      }
      .menu-icon {
        background: url("../../assets/shared/icon-hamburger.svg");
        margin-left: 3rem;
      }
      .close-icon {
        background: url("../../assets/shared/icon-close.svg") no-repeat;
        margin-left: 7rem;
      }
    }
    ul {
      gap: 2rem;
      li {
        border-bottom: 4px solid transparent;
        &:hover {
          border-bottom: 4px solid gray;
          transition: all 0.7s ease-in-out;
        }
        padding: 0 !important;
        a {
          padding: 1.5rem 0.5rem;
          font-size: 16px !important;
          letter-spacing: 2.7px !important;

          &.router-link-exact-active {
            color: #fff !important;
          }
        }
      }
    }
  }
  // &::after {
  //   content: "";
  //   display: inline-block;
  //   position: absolute;
  //   z-index: 1100;
  //   height: 1px;
  //   background-color: gray;
  //   width: 35rem;
  //   top: 4.5rem;
  //   left: 10.3125rem;
  //   visibility: hidden;
  // }

  /* Start Media Query */

  // For Mobile
  @media (max-width: 575px) {
    nav {
      background-color: transparent;
      backdrop-filter: none;
      padding-left: 0;
      padding-right: 0;

      &.bg-blur {
        background-color: rgba(255, 255, 255, 0.04) !important;
        backdrop-filter: blur(81.55px) !important;
      }

      ul {
        height: 100vh;
        margin-top: 4rem;
        gap: 4rem !important;

        li {
          border-right: 4px solid transparent;
          border-bottom: 0px solid transparent !important ;
          &:hover {
            border-right: 4px solid gray !important;
            transition: all 0.7s ease-in-out;
          }

          a {
            padding: 0.5rem 2.5rem !important;
          }
        }
      }
    }
  }

  // For Tablet
  @media (max-width: 991px) {
    .logo {
      top: 1rem;
    }
  }

  // For Desktop
  @media (min-width: 992px) {
    &::after {
      content: "";
      display: inline-block;
      position: absolute;
      z-index: 1100;
      height: 1px;
      background-color: gray;
      width: 41%;
      top: 4.5rem;
      left: 10.3125rem;
    }
    nav {
      top: 2rem;
    }
  }

  /* End Media Query */
}
</style>
