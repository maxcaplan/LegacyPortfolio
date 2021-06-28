<template>
  <div id="home-wrapper">
    <section id="home" class="section">
      <div class="container">
        <div style="width: 100%;">
          <div class="columns">
            <div class="column is-narrow">
              <h1 class="title is-size-1-touch">
                Hi. <br />
                I'm Max,
              </h1>
              <h2 class="subtitle is-size-3-touch">And I like designing</h2>
            </div>

            <div class="column"></div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "home"
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
