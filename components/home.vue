<template>
  <div id="home-wrapper">
    <logo />

    <section id="home" class="section scroll-section">
      <div class="container">
        <div style="width: 100%;">
          <div class="columns">
            <div class="column is-narrow">
              <h1 class="title is-size-1-touch">
                Hi. <br />
                I'm Max,
              </h1>
              <h2 class="subtitle is-size-3-touch">
                <span class="has-background-link-light has-text-link-dark px-2 py-1"
                  >And I like</span
                >
                designing
              </h2>
            </div>

            <div class="column"></div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import logo from "./logo.vue";

export default {
  name: "home",

  components: {
    logo
  }
};
</script>

<style scoped>
#home-wrapper {
  height: calc(100vh - 74px);
  width: 100%;
}

#home {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

#home .container {
  height: 100%;
  display: flex;
  align-items: center;
}

.title {
  font-size: 4rem;
}

.subtitle {
  font-size: 2.5rem;
}
</style>
