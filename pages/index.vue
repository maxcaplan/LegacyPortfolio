<template>
  <div id="coming-soon">
    <div
      class="container is-flex is-justify-content-center is-align-items-center"
    >
      <div class="card">
        <div class="card-content">
          <div class="content">
            <div class="columns is-vcentered">
              <div class="column is-narrow">
                <div class="image">
                  <img id="logo" src="../assets/images/logo/logo.svg" />
                </div>
              </div>

              <div class="column">
                <p class="title">Coming Soon ...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#coming-soon {
  height: 100%;
  background: #eee;
}

.container {
  height: 100%;
}

#logo {
  height: 3rem;
  width: auto;
}
</style>
