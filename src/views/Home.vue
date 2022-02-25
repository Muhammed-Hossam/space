<!--  eslint-disable  -->
<template>
  <div class="home position-relative w-100 vh-100 overflow-auto">
    <div class="container position-absolute">
      <div class="content">
        <h6 class="fs-3 text-uppercase">So, You Want To Travel To</h6>
        <h1 class="text-white text-uppercase mt-3 mb-5">Space</h1>
        <div class="paragraph">
          <p class="m-auto">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
      </div>
      <router-link
        class="exploreBtn d-inline-block text-decoration-none bg-white rounded-circle text-uppercase text-center fs-5 mb-3 fw-light"
        to="/destination"
        >Explore</router-link
      >
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "Home",
  components: {},
};
</script>

<style lang="scss" scoped>
@keyframes pulse {
  from {
    box-shadow: 0 0 0 #aaaaaa;
  }
}

// Mobile First
.home {
  background: url("../assets/home/background-home-mobile.jpg") no-repeat;
  background-size: cover;
  z-index: 0;

  .container {
    top: 9rem;

    h6,
    p {
      color: #d0d6f9;
    }
    h1 {
      font-family: "Bellefair", serif;
      font-size: 5rem;
      line-height: 6.25rem;
    }
    h6 {
      font-family: "Barlow Condensed", sans-serif;
      letter-spacing: 2.7px;
    }
    .paragraph {
      p {
        font-family: "Barlow", sans-serif;
        font-size: 0.9375rem;
        line-height: 1.5625rem;
        width: 20rem;
      }
    }

    .exploreBtn {
      margin-top: 10rem;
      width: 10rem;
      height: 10rem;
      color: #0b0d17;
      line-height: 10rem;

      &:hover {
        box-shadow: 0 0 0 3rem transparent;
        animation: pulse 1.2s infinite;
      }
    }
  }
}

// Media Query For Tablet
@media (min-width: 576px) and (max-width: 991px) {
  .home {
    background: url("../assets/home/background-home-tablet.jpg") no-repeat !important;
    background-size: cover !important;

    .container {
      top: 14rem;
      left: 50%;
      transform: translateX(-50%);

      h6 {
        font-size: 1.25rem !important;
      }
      h1 {
        font-size: 9.375rem;
        letter-spacing: 3.38px;
        margin-top: 4rem !important;
      }
      .paragraph {
        p {
          width: 25.5rem !important;
        }
      }
    }
  }
}

// Media Query For Desktop
@media (min-width: 992px) {
  .home {
    background: url("../assets/home/background-home-desktop.jpg") no-repeat !important;
    background-size: cover !important;

    .container {
      .content {
        position: absolute;
        top: 7rem;
        left: 5rem;

        h6 {
          font-size: 28px;
          letter-spacing: 4.72px;
          text-align: start;
        }
        h1 {
          font-size: 9.375rem;
          margin-top: 3rem !important;
        }
        .paragraph {
          p {
            font-size: 1.125rem !important;
            width: 28rem !important;
            text-align: start;
          }
        }
      }
      .exploreBtn {
        position: absolute;
        right: -2rem;
        top: 6rem;
        width: 13rem;
        height: 13rem;
        line-height: 13rem;
      }
    }
  }
}
</style>
