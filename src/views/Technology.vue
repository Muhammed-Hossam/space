<!--  eslint-disable  -->
<template>
  <div class="tech"></div>
</template>

<script>
/* eslint-disable */
export default {
  name: "Tech",
  components: {},
};
</script>


<style lang="scss" scoped>
// Mobile First
.tech {
  position: relative;
  width: 100%;
  height: 100vh;
  background: url('../assets/technology/background-technology-mobile.jpg') no-repeat;
  background-size: cover;
  z-index: 0;
  overflow: auto;
}

// Media Query For Tablet
@media (min-width: 576px) and (max-width: 991px) {
  .tech {
    background: url('../assets/technology/background-technology-tablet.jpg') no-repeat !important;
    background-size: cover !important;
  }
}

// Media Query For Desktop
@media (min-width: 992px) {
  .tech {
    background: url('../assets/technology/background-technology-desktop.jpg') no-repeat !important;
    background-size: cover !important;
  }
}
</style>
