<template>
  <section id="home">
    <div class="container is-mx-3-touch">
      <div style="width: 100%;">
        <div class="columns">
          <div class="column is-narrow">
            <div class="px-3">
              <h1 class="title is-size-1-touch">
                Hi. <br />
                I'm Max,
              </h1>
              <h2 class="subtitle is-size-3-touch">And I like designing</h2>
            </div>
          </div>

          <div class="column"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "home"
};
</script>

<style scoped>
#home {
  /* height: calc(100% - 74px); */
  height: 100%;
  width: 100%;
  /* margin-top: 74px; */
  position: absolute;
  top: 0;
  left: 0;
}

/* @media only screen and (max-width: 1023px) {
  #home {
    height: calc(100% - 52px);
    margin-top: 52px;
  }
} */

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
