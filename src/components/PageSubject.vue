<!-- eslint-disable -->
<template>
  <div class="page-subject">
    <span class="num">{{ num }}</span>
    <span class="subject">{{ subject }}</span>
  </div>
</template>
<!-- eslint-disable -->
<script>
/* eslint-disable */
export default {
  props: ["num", "subject"]
};
</script>

<style lang="scss" scoped>
// Mobile First
.page-subject {
  position: absolute;
  width: 100%;
  left: 50%;
  transform: translateX(-50%);
  top: 5rem;
  font-family: "Barlow Condensed", sans-serif;
  letter-spacing: 2.7px;

  .num {
    font-size: 1rem;
    font-weight: bold;
    color: #777;
  }

  .subject {
    font-size: 1rem;
    color: #eee;
    margin-left: 1rem;
    text-transform: uppercase;
  }
}

// Media Query For Tablet
@media (min-width: 576px) and (max-width: 991px) {
  .page-subject {
    left: 0;
    transform: translateX(0);
    top: 6rem;
    text-align: start;
    margin-left: 2rem;
    display: inline !important;
    width: auto;

    span {
      font-size: 20px;
    }
  }
}

// Media Query For Desktop
@media (min-width: 992px) {
  .page-subject {
    left: 5.40625rem;
    transform: translateX(0);
    top: 10.25rem;
    text-align: start;
    margin-left: 2rem;
    display: inline !important;
    width: auto;

    span {
      font-size: 1.75rem !important;
    }
  }
}
</style>
