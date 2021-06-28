<template>
  <div id="home-page">
    <navbar id="navbar" />

    <home />
  </div>
</template>

<script>
import navbar from "../components/navbar.vue";
import home from "../components/home.vue";

export default {
  name: "home-page",

  components: {
    navbar,
    home
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
