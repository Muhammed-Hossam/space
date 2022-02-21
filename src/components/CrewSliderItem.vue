<!-- eslint-disable -->
<template>
  <div class="carousel-item" :class="active">
    <div class="carousel-img">
      <img :src="imgSrc" class="d-block w-100" alt="..." />
    </div>
    <hr class="d-sm-none" />
    <div class="content">
      <span class="job"> {{ job }} </span>
      <span class="name"> {{ name }} </span>
      <p class="description">{{ description }}</p>
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
    imgSrc: String,
    job: String,
    name: String,
    description: String,
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Bellefair&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Barlow&display=swap");

// Mobile First
.carousel-item {
  &:nth-of-type(2) {
    .carousel-img {
      width: 10.063rem;
    }
  }

  &:nth-of-type(3) {
    .carousel-img {
      width: 12.5rem;
    }
  }

  &:last-of-type {
    .carousel-img {
      width: 10.063rem;
    }
  }

  .carousel-img {
    width: 11.0625rem;
    height: fit-content;
    margin: auto;
    margin-bottom: -1rem;
  }
  hr {
    opacity: 0.5;
    color: #aaa;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
  }
  .content {
    color: white;
    margin-top: 6rem;

    span {
      font-family: "Bellefair", serif;
      display: block;
      text-transform: uppercase;

      &.job {
        font-size: 1rem;
        color: #fff;
        opacity: 0.5;
        line-height: 1.14375rem;
      }
      &.name {
        font-size: 1.5rem;
        margin-bottom: 1rem;
      }
    }
    .description {
      font-family: "Barlow", sans-serif;
      font-size: 1rem;
      width: 22rem;
      margin: 0 auto;
      line-height: 1.5625rem;
      color: #d0d6f9;
    }
  }
}

// Media Query For Tablet
@media (min-width: 576px) and (max-width: 991px) {
  .carousel-item {
    height: calc(100vh - 9rem);

    .carousel-img {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      width: 28.523125rem !important;
      height: 35.75rem;
      bottom: 0;
    }

    &:nth-of-type(3) {
      .carousel-img {
        width: 29.5rem !important;
      }
    }

    .content {
      span.job {
        font-size: 1.5rem;
      }
      span.name {
        font-size: 2.5rem;
      }
    }

    &:first-of-type {
      .content {
        .description {
          width: 29rem;
        }
      }
    }
    &:nth-of-type(2) {
      .content {
        .description {
          width: 32rem;
        }
      }
    }
    &:nth-of-type(3) {
      .content {
        .description {
          width: 37rem;
        }
      }
    }
    &:nth-of-type(4) {
      .content {
        .description {
          width: 32rem;
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
      margin: 0;
      position: absolute;
      right: 9rem !important;
      width: 22rem !important;
      height: 22rem !important;
    }

    &:nth-of-type(3) {
      .carousel-img {
        width: 25rem !important;
      }
    }

    .content {
      display: inline-block;
      position: absolute;
      left: 7rem;
      top: 8rem;
      margin-top: 0;

      span.job {
        font-size: 2rem;
        line-height: 2.25rem;
        text-align: start;
      }
      span.name {
        font-size: 3.5rem;
        line-height: 4rem;
        text-align: start;
        font-weight: 400;
      }
      .description {
        width: 27rem;
        text-align: start;
        margin: 0;
        font-size: 1.125rem;
        line-height: 2rem;
      }
    }
  }
}
</style>
