<!-- eslint-disable -->
<template>
  <div class="carousel-item" :class="active">
    <div class="carousel-img">
      <div class="img"></div>
    </div>
    <div class="content">
      <span class="term">The Terminology ...</span>
      <span class="steps">{{ step }}</span>
      <div class="paragraph">
        <p>{{ paragraph }}</p>
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
    step: String,
    paragraph: String,
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Barlow+Condensed&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Bellefair&display=swap");

.carousel-item {
  .carousel-img {
    width: 100%;
    height: 10.625rem;
    margin-bottom: 8rem;

    .img {
      width: 100%;
      height: 100%;
      background-size: cover;
      background-repeat: no-repeat;
    }
  }
  &:first-of-type {
    .carousel-img {
      .img {
        background-image: url("../assets/technology/image-launch-vehicle-landscape.jpg");
      }
    }
  }
  &:nth-of-type(2) {
    .carousel-img {
      .img {
        background-image: url("../assets/technology/image-spaceport-landscape.jpg");
      }
    }
  }
  &:last-of-type {
    .carousel-img {
      .img {
        background-image: url("../assets/technology/image-space-capsule-landscape.jpg");
      }
    }
  }

  .content {
    span {
      display: block;
      text-transform: uppercase;
      margin-bottom: 0.625rem;
      &.term {
        font-family: "Barlow Condensed", sans-serif;
        font-size: 0.875rem;
        letter-spacing: 2.36px;
        color: #d0d6f9;
      }
      &.steps {
        font-family: "Bellefair", serif;
        font-size: 24px;
      }
    }
    .paragraph {
      margin-top: 1rem;
      p {
        font-family: "Barlow Condensed", sans-serif;
        font-size: 0.9375rem;
        text-align: center;
        line-height: 1.5625rem;
        color: #d0d6f9;
        width: 21.8rem;
        margin: auto;
      }
    }
  }
}

// Media Query For Tablet
@media (min-width: 576px) and (max-width: 991px) {
  .carousel-item {
    .carousel-img {
      height: 19.375rem;
    }
    .content {
      margin-top: 9rem;

      span.term {
        font-size: 1rem;
        letter-spacing: 2.7px;
      }
      span.steps {
        font-size: 2.5rem;
      }
      .paragraph {
        p {
          font-size: 1rem;
          line-height: 1.75rem;
        }
      }
    }
  }
}

// Media Query For Desktop
@media (min-width: 992px) {
  .carousel-item {
    height: calc(100vh - 9rem);

    .carousel-img {
      position: absolute;
      right: 0;
      top: 3rem;
      width: 25.1875rem;
      height: 25.9375rem;

      .img {
        width: 100%;
        height: 100%;
        background-size: cover;
        background-repeat: no-repeat;
      }
    }

    &:first-of-type {
      .carousel-img {
        .img {
          background-image: url("../assets/technology/image-launch-vehicle-portrait.jpg");
        }
      }
    }
    &:nth-of-type(2) {
      .carousel-img {
        .img {
          background-image: url("../assets/technology/image-spaceport-portrait.jpg");
        }
      }
    }
    &:last-of-type {
      .carousel-img {
        .img {
          background-image: url("../assets/technology/image-space-capsule-portrait.jpg");
        }
      }
    }
    .content {
      display: inline-block;
      position: absolute;
      left: 14rem;
      top: 8rem;
      text-align: start;

      span.steps {
        font-size: 3.5rem;
      }
      .paragraph {
        p {
          width: 22.4rem;
          text-align: start;
          margin: 0;
        }
      }
    }
  }
}
</style>
