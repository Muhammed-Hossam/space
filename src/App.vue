<!--  eslint-disable  -->
<template>
  <TheHeader />
  <router-view />
</template>

<script>
/* eslint-disable */
import TheHeader from "./components/layout/TheHeader.vue";
export default {
  components: {
    TheHeader,
  },
};
</script>

<style lang="scss">
@import "./sass/custom.scss";

@import url("https://fonts.googleapis.com/css2?family=Barlow+Condensed&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Bellefair&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Barlow&display=swap");

html  {
  
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background-color: none;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: rgba(96, 96, 96, 0.4);
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: rgba(96, 96, 96, 0.7);
  }
  
}


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
