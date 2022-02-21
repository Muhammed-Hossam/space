<!--  eslint-disable  -->
<template>
  <div class="destination">
    <page-subject num="01" subject="Pick your Destination"></page-subject>
    <div
      id="destCarousel"
      data-bs-interval="false"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators">
        <ul class="nav justify-content-center">
          <li class="nav-item">
            <a
              class="nav-link active"
              type="button"
              data-bs-target="#destCarousel"
              data-bs-slide-to="0"
              aria-current="true"
              aria-label="Slide 1"
              href="#"
              >MOON</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              type="button"
              data-bs-target="#destCarousel"
              data-bs-slide-to="1"
              aria-label="Slide 2"
              href="#"
              >MARS</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              type="button"
              data-bs-target="#destCarousel"
              data-bs-slide-to="2"
              aria-label="Slide 3"
              href="#"
              >EUROPA</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              type="button"
              data-bs-target="#destCarousel"
              data-bs-slide-to="3"
              aria-label="Slide 4"
              href="#"
              >TITAN</a
            >
          </li>
        </ul>
      </div>
      <div class="carousel-inner">
        <carousel-item
          active="active"
          :imgSrc="require('../assets/destination/image-moon.png')"
          planetName="Moon"
          :paragraph="moonParagraph"
          distance="384,400 KM"
          time="3 Days"
        ></carousel-item>

        <carousel-item
          :imgSrc="require('../assets/destination/image-mars.png')"
          planetName="Mars"
          :paragraph="marsParagraph"
          distance="225 Mil. km"
          time="9 Months"
        ></carousel-item>

        <carousel-item
          :imgSrc="require('../assets/destination/image-europa.png')"
          planetName="Europa"
          :paragraph="europaParagraph"
          distance="628 Mil. km"
          time="3 years"
        ></carousel-item>

        <carousel-item
          :imgSrc="require('../assets/destination/image-titan.png')"
          planetName="Titan"
          :paragraph="titanParagraph"
          distance="1.6 Bil. km"
          time="7 years"
        ></carousel-item>
      </div>
    </div>
  </div>
</template>
<!-- eslint-disable -->
<script>
/* eslint-disable */
import CarouselItem from "../components/DestSliderItem.vue";
import PageSubject from "../components/PageSubject.vue";

export default {
  name: "Destination",
  components: {
    CarouselItem,
    PageSubject,
  },
  computed: {
    moonParagraph() {
      return "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.";
    },
    marsParagraph() {
      return "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!";
    },
    europaParagraph() {
      return "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.";
    },
    titanParagraph() {
      return "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.";
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Barlow+Condensed&display=swap");

// Mobile First
.destination {
  position: relative;
  width: 100%;
  height: 100vh;
  background: url("../assets/destination/background-destination-mobile.jpg")
    no-repeat;
  background-size: cover;
  z-index: 0;
  overflow: auto;

  .carousel {
    top: 9rem;
    .carousel-inner {
      height: 100%;
      overflow: initial;
    }
    .carousel-indicators {
      top: 12rem;
      width: 100%;
      margin-left: 0;
      height: fit-content;
      .nav {
        width: 100%;
        flex-wrap: nowrap;
        .nav-item {
          a {
            font-family: "Barlow Condensed", sans-serif;
            width: auto;
            height: auto;
            text-indent: 0 !important;
            background-color: transparent;
            color: #d0d6f9;
            font-size: 14px;
            letter-spacing: 2.36px;
            text-transform: uppercase;
            margin-left: 1rem;
            margin-right: 1rem;
            border-width: 3px;
            padding-bottom: 5px;

            &:hover {
              border-bottom-color: gray !important;
              transition: all 0.7s ease-in-out;
            }

            &.active {
              border-bottom-color: white;

              &:hover {
                border-bottom-color: white !important;
              }
            }
          }
        }
      }
    }
  }
}

// Media Query For Tablet
@media (min-width: 576px) and (max-width: 991px) {
  .destination {
    background: url("../assets/destination/background-destination-tablet.jpg")
      no-repeat !important;
    background-size: cover !important;

    .carousel {
      top: 11rem;
      height: calc(100% - 11rem);

      .carousel-indicators {
        top: 21rem;
      }
    }
  }
}

// Media Query For Desktop
@media (min-width: 992px) {
  .destination {
    background: url("../assets/destination/background-destination-desktop.jpg")
      no-repeat !important;
    background-size: cover !important;

    .carousel {
      .carousel-indicators {
        top: 5rem;
        display: inline-block;
        width: auto;
        position: absolute;
        right: -2rem;
        .nav {
          justify-content: flex-end !important;
          .nav-item {
            .nav-link {
              font-size: 1rem;
            }
          }
        }
      }
    }
  }
}
</style>
