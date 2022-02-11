<!--  eslint-disable  -->
<template>
  <div class="home">
    <div class="container">
      <div class="content">
        <h6>So, You Want To Travel To</h6>
        <h1>Space</h1>
        <div class="paragraph">
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
      </div>
      <router-link class="exploreBtn" to="/destination">Explore</router-link>
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
@import url("https://fonts.googleapis.com/css2?family=Barlow+Condensed&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Bellefair&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Barlow&display=swap");

@keyframes pulse {
  from {
    box-shadow: 0 0 0 #aaaaaa;
  }
}

// Mobile First
.home {
  position: relative;
  width: 100%;
  height: 100vh;
  background: url("../assets/home/background-home-mobile.jpg") no-repeat;
  background-size: cover;
  z-index: 0;
  overflow: auto;


  .container {
    position: absolute;
    top: 9rem;

    h6,
    p {
      color: #d0d6f9;
    }
    h1 {
      font-family: "Bellefair", serif;
      color: white;
      font-size: 5rem;
      line-height: 6.25rem;
      text-transform: uppercase;
      margin-top: 1rem;
      margin-bottom: 3rem;
    }
    h6 {
      font-family: "Barlow Condensed", sans-serif;
      font-size: 1rem;
      letter-spacing: 2.7px;
      text-transform: uppercase;
    }
    .paragraph {
      p {
        font-family: "Barlow", sans-serif;
        font-size: 15px;
        line-height: 25px;
        width: 20rem;
        margin: auto;
      }
    }

    .exploreBtn {
      display: inline-block;
      text-decoration: none;
      margin-top: 10rem;
      width: 10rem;
      height: 10rem;
      background-color: white;
      color: #0b0d17;
      border-radius: 50%;
      line-height: 10rem;
      font-size: 20px;
      text-transform: uppercase;
      font-weight: 100;
      text-align: center;

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
        font-size: 1.25rem;
      }
      h1 {
        font-size: 9.375rem;
        letter-spacing: 3.38px;
        margin-top: 4rem;
      }
      .paragraph {
        p {
          width: 25.5rem;
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
          margin-top: 3rem;
        }
        .paragraph {
          p {
            font-size: 1.125rem;
            width: 28rem;
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
