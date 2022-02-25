<!--  eslint-disable  -->
<template>
  <div class="tech position-absolute w-100 vh-100 overflow-auto">
    <page-subject num="03" subject="Space Lanuch 101"></page-subject>

    <div
      id="techCarousel"
      class="carousel vert slide"
      data-bs-ride="carousel"
      data-bs-interval="false"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#techCarousel"
          data-bs-slide-to="0"
          class="active rounded-circle opacity-100"
          aria-current="true"
          aria-label="Slide 1"
        >
          1
        </button>
        <button
          type="button"
          data-bs-target="#techCarousel"
          data-bs-slide-to="1"
          class="rounded-circle opacity-100"
          aria-label="Slide 2"
        >
          2
        </button>
        <button
          type="button"
          data-bs-target="#techCarousel"
          data-bs-slide-to="2"
          class="rounded-circle opacity-100"
          aria-label="Slide 3"
        >
          3
        </button>
      </div>
      <div class="carousel-inner">
        <carousel-item
          v-for="item in sliderData"
          :key="item.step"
          :active="item.class"
          :step="item.step"
          :paragraph="item.text"
        ></carousel-item>
      </div>
    </div>
  </div>
</template>
<!-- eslint-disable -->
<script>
import PageSubject from "../components/PageSubject.vue";
import CarouselItem from "../components/TechSliderItem.vue";
/* eslint-disable */
export default {
  name: "Tech",
  components: {
    PageSubject,
    CarouselItem,
  },

  data() {
    return {
      sliderData: [
        {
          class: "active",
          step: "Launch Vehicle",
          text: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
        },
        {
          class: "",
          step: "Spaceport",
          text: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
        },
        {
          class: "",
          step: "Space Capsule",
          text: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
// Mobile First
.tech {
  background: url("../assets/technology/background-technology-mobile.jpg")
    no-repeat;
  background-size: cover;
  z-index: 0;

  #techCarousel {
    margin-top: 9rem;
    color: #fff !important;

    .carousel-indicators {
      top: 14rem;
      height: fit-content;
      margin-bottom: 0;
      gap: 1rem;

      button {
        font-family: "Bellefair", serif;
        text-indent: 0;
        width: 2.5rem;
        height: 2.5rem;
        background: transparent;
        border: 1px solid rgba(255, 255, 255, 0.3);
        color: #fff;
        font-size: 1rem;

        &.active {
          border-color: #fff;
          background-color: #fff;
          color: #000;
        }
        &:hover {
          border-color: #fff;
          transition: all 0.5s ease-in-out;
        }
      }
    }
  }
}

// Media Query For Tablet
@media (min-width: 576px) and (max-width: 991px) {
  .tech {
    background: url("../assets/technology/background-technology-tablet.jpg")
      no-repeat !important;
    background-size: cover !important;

    #techCarousel {
      .carousel-indicators {
        top: 23rem;
      }
    }
  }
}

// Media Query For Desktop
@media (min-width: 992px) {
  .tech {
    background: url("../assets/technology/background-technology-desktop.jpg")
      no-repeat !important;
    background-size: cover !important;

    #techCarousel {
      .carousel-indicators {
        flex-direction: column;
        width: fit-content;
        margin: 0;
        left: 7rem;
        top: 8rem;

        button {
          width: 4rem;
          height: 4rem;
          font-size: 1.5rem;
        }
      }
    }
  }
  .vert .carousel-item-next.carousel-item-start,
  .vert .carousel-item-prev.carousel-item-end {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  .vert .carousel-item-next,
  .vert .active.carousel-item-start {
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }

  .vert .carousel-item-prev,
  .vert .active.carousel-item-end {
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }
}
</style>
