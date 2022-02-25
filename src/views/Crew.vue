<!--  eslint-disable  -->
<template>
  <div class="crew w-100 vh-100 overflow-auto">
    <page-subject num="02" subject="Meet Your Crew"></page-subject>

    <div
      id="crewCarousel"
      class="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="false"
    >
      <div class="carousel-indicators position-absolute">
        <button
          type="button"
          data-bs-target="#crewCarousel"
          data-bs-slide-to="0"
          class="active rounded-circle"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#crewCarousel"
          data-bs-slide-to="1"
          class="rounded-circle"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#crewCarousel"
          data-bs-slide-to="2"
          class="rounded-circle"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#crewCarousel"
          data-bs-slide-to="3"
          class="rounded-circle"
          aria-label="Slide 4"
        ></button>
      </div>
      <div class="carousel-inner">
        <carousel-item
          v-for="item in sliderData"
          :key="item.name"
          :active="item.class"
          :imgSrc="item.imgURL"
          :job="item.job"
          :name="item.name"
          :description="item.description"
        ></carousel-item>
      </div>
    </div>
  </div>
</template>
<!-- eslint-disable -->
<script>
/* eslint-disable */
import CarouselItem from "../components/CrewSliderItem.vue";
import PageSubject from "../components/PageSubject.vue";
export default {
  name: "Crew",
  data() {
    return {
      sliderData: [
        {
          class: "active first",
          imgURL: require("../assets/crew/image-douglas-hurley.png"),
          job: "Commander",
          name: "Douglas Hurley",
          description:
            "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
        },
        {
          class: "second",
          imgURL: require("../assets/crew/image-mark-shuttleworth.png"),
          job: "Mission Specialist",
          name: "Mark Shuttleworth",
          description:
            "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
        },
        {
          class: "third",
          imgURL: require("../assets/crew/image-victor-glover.png"),
          job: "Pilot",
          name: "Victor Glover",
          description:
            "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
        },
        {
          class: "fourth",
          imgURL: require("../assets/crew/image-mark-shuttleworth.png"),
          job: "Flight Engineer",
          name: "Anousheh Ansari",
          description:
            "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
        },
      ],
    };
  },
  components: {
    CarouselItem,
    PageSubject,
  },
};
</script>

<style lang="scss" scoped>
// Mobile First
.crew {
  background: url("../assets/crew/background-crew-mobile.jpg") no-repeat;
  background-size: cover;


  #crewCarousel {
    top: 9rem;

    .carousel-indicators {
      top: 17rem;
      margin: 0 auto !important;
      height: fit-content;
      gap: 0.75rem;
      button {
        width: 1rem;
        height: 1rem;
      }
    }
  }
}

// Media Query For Tablet
@media (min-width: 576px) and (max-width: 991px) {
  .crew {
    background: url("../assets/crew/background-crew-tablet.jpg") no-repeat !important;
    background-size: cover !important;

    #crewCarousel {
      .carousel-indicators {
        top: 18.5rem;
      }
    }
  }
}

// Media Query For Desktop
@media (min-width: 992px) {
  .crew {
    background: url("../assets/crew/background-crew-desktop.jpg") no-repeat !important;
    background-size: cover !important;

    #crewCarousel {
      .carousel-indicators {
        width: fit-content;
        margin: 0 !important;
        left: 7rem;
        top: 25rem;
      }
    }
  }
}
</style>
