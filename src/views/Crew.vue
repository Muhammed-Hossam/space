<!--  eslint-disable  -->
<template>
  <div class="crew"></div>
</template>

<script>
/* eslint-disable */
export default {
  name: "Crew",
  components: {},
};
</script>


<style lang="scss" scoped>
// Mobile First
.crew {
  position: relative;
  width: 100%;
  height: 100vh;
  background: url('../assets/crew/background-crew-mobile.jpg') no-repeat;
  background-size: cover;
  z-index: 0;
  overflow: auto;
}

// Media Query For Tablet
@media (min-width: 576px) and (max-width: 991px) {
  .crew {
    background: url('../assets/crew/background-crew-tablet.jpg') no-repeat !important;
    background-size: cover !important;
  }
}

// Media Query For Desktop
@media (min-width: 992px) {
  .crew {
    background: url('../assets/crew/background-crew-desktop.jpg') no-repeat !important;
    background-size: cover !important;
  }
}
</style>
