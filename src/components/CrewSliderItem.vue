<!-- eslint-disable -->
<template>
  <div class="carousel-item" :class="active">
    <div class="carousel-img m-auto">
      <img :src="imgSrc" class="d-block w-100" alt="..." />
    </div>
    <hr class="d-sm-none my-0 mx-auto opacity-50" />
    <div class="content text-white mb-3">
      <span class="job d-block text-uppercase fs-6 opacity-50"> {{ job }} </span>
      <span class="name d-block text-uppercase fs-4 mb-3"> {{ name }} </span>
      <p class="description fs-6 my-0 mx-auto">{{ description }}</p>
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
    margin-bottom: -1rem;
  }
  hr {
    color: #aaa;
    width: 90%;
  }
  .content {
    margin-top: 6rem;

    span {
      font-family: "Bellefair", serif;

      &.job {
        line-height: 1.14375rem;
      }
    }
    .description {
      font-family: "Barlow", sans-serif;
      width: 22rem;
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
      height: 35.75rem !important;
      bottom: 0;
    }

    &:nth-of-type(3) {
      .carousel-img {
        width: 30.5rem !important;
      }
    }

    .content {
      span.job {
        font-size: 1.5rem !important;
      }
      span.name {
        font-size: 2.5rem !important;
      }
    }

    &:first-of-type {
      .content {
        .description {
          width: 29rem !important;
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
      display: inline-block !important;
      position: absolute;
      left: 7rem;
      top: 8rem;
      margin-top: 0;

      span.job {
        font-size: 2rem !important;
        line-height: 2.25rem !important;
        text-align: start;
      }
      span.name {
        font-size: 3.5rem !important;
        line-height: 4rem !important;
        text-align: start;
        font-weight: 400;
      }
      .description {
        width: 27rem;
        text-align: start;
        margin: 0;
        font-size: 1.125rem !important;
        line-height: 2rem;
        margin-right: 0 !important;
        margin-left: 0 !important;
      }
    }
  }
}
</style>
