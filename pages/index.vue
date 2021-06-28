<template>
  <div id="home-page">
    <navbar id="navbar" />
    <navbar-small />

    <home />

    <about />

    <work />
  </div>
</template>

<script>
import navbar from "../components/navbar.vue";
import navbarSmall from "../components/navbar-small.vue";

import home from "../components/home.vue";
import about from "../components/about.vue";
import work from "../components/work.vue";

export default {
  name: "home-page",

  components: {
    navbar,
    navbarSmall,
    home,
    about,
    work
  }
};
</script>

<style scoped>
#home-page {
  min-height: 100%;
  padding-top: 74px;
}

@media only screen and (max-width: 1023px) {
  #home-page {
    min-height: 100%;
    padding-top: 52px;
  }
}

#navbar {
  position: fixed;
  top: 0;
  width: 100%;
  /* height: 74px; */
  /* height: 52px; */
}
</style>
