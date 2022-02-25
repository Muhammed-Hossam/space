<!-- eslint-disable -->
<template>
  <div class="carousel-item" :class="active">
    <div class="carousel-img m-auto">
      <img :src="imgSrc" class="d-block w-100" alt="..." />
    </div>
    <div class="content">
      <h1 class="text-white text-uppercase mb-3">{{ planetName }}</h1>
      <p class="m-auto mb-3">{{ paragraph }}</p>
      <hr class="m-auto" />
      <div class="info">
        <div class="avg">
          <span>AVG. Distance</span>
          <span class="distance">{{ distance }}</span>
        </div>
        <div class="est">
          <span>EST. Travel Time </span>
          <span class="time">{{ time }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<!-- eslint-disable -->
<script>
/* eslint-disable */
export default {
  props: {
    active: {
      type: String,
      required: false,
    },
    imgSrc: {
      type: String,
      required: true,
    },
    planetName: {
      type: String,
      required: true,
    },
    paragraph: {
      type: String,
      required: true,
    },
    distance: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
// Mobile First
.carousel-item {

  .carousel-img {
    width: 10.625rem;
    height: 10.625rem;
  }
  h1 {
    font-family: "Bellefair", serif;
    font-size: 3.5rem;
    margin-top: 5rem;
  }
  p {
    font-family: "Barlow", sans-serif;
    color: #d0d6f9;
    width: 21rem;
  }
  hr {
    width: 90%;
    background-color: #eee;
    margin-top: 2rem;
    height: 1px;
  }
  .info {
    color: white;
    margin: auto;
    margin-top: 2rem;
    margin-bottom: 2rem;

    .avg {
      margin-bottom: 2rem;
    }

    div {
      display: block;
      span {
        display: block;
        &:first-of-type {
          font-family: "Barlow Condensed", sans-serif;
          font-size: 14px;
          letter-spacing: 2.36px;
          color: #d0d6f9;
          text-transform: uppercase;
        }
        &:last-of-type {
          font-family: "Bellefair", serif;
          font-size: 1.75rem;
          text-transform: uppercase;
        }
      }
    }
  }
}

// Media Query For Tablet
@media (min-width: 576px) and (max-width: 991px) {
  .carousel-item {
    .carousel-img {
      width: 18.75rem;
      height: 18.75rem;
    }
    h1 {
      font-size: 5rem;
      margin-top: 7rem;
      margin-bottom: 1rem;
    }
    p {
      width: 35rem;
    }
    hr {
      margin-top: 4rem;
    }
    .info {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      width: 80%;
    }
  }
}

// Media Query For Desktop
@media (min-width: 992px) {
  .carousel-item {
    .carousel-img {
      position: absolute;
      top: 7rem;
      left: 7rem;
      width: 22.8125rem;
      height: 22.8125rem;
    }
    .content {
      position: absolute;
      right: 5rem;
      top: 3rem;

      h1 {
        font-size: 6.25rem;
        text-align: start;
      }
      p {
        width: 24rem;
        text-align: start;
      }
      hr {
        width: 100%;
      }
      .info {
        text-align: start;
        div {
          display: inline-block;

          &.avg {
            margin-right: 4rem;
          }
        }
      }
    }
  }
}
</style>
