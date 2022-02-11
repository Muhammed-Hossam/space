<!--  eslint-disable  -->
<template>
  <div class="destination">
    <div
      id="carouselExampleIndicators"
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
              data-bs-target="#carouselExampleIndicators"
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
              data-bs-target="#carouselExampleIndicators"
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
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
              href="#"
              >TITAN</a
            >
          </li>
        </ul>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="../assets/destination/image-moon.png"
            class="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src="../assets/destination/image-mars.png"
            class="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src="../assets/destination/image-titan.png"
            class="d-block w-100"
            alt="..."
          />
        </div>
      </div>
    </div>
  </div>
</template>
<!-- eslint-disable -->
<script>
/* eslint-disable */
export default {
  name: "Destination",
  components: {},
};
</script>

<style lang="scss" scoped>
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

  .carousel-indicators {
    .nav {
      .nav-item {
        a {
          width: auto;
          height: auto;
          text-indent: 0 !important;
          background-color: transparent;
        }
      }
    }
  }

  .carousel-item {
    width: 30rem;
    height: 30rem;
  }
}

// Media Query For Tablet
@media (min-width: 576px) and (max-width: 991px) {
  .destination {
    background: url("../assets/destination/background-destination-tablet.jpg")
      no-repeat !important;
    background-size: cover !important;
  }
}

// Media Query For Desktop
@media (min-width: 992px) {
  .destination {
    background: url("../assets/destination/background-destination-desktop.jpg")
      no-repeat !important;
    background-size: cover !important;
  }
}
</style>
