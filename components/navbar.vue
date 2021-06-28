<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-menu">
      <div class="navbar-end">
        <div class="navbar-item">
          <div id="nav-menu-sections">
            <div class="field is-grouped">
              <p class="control">
                <button class="button is-link is-light">
                  <span class="icon">
                    <span class="material-icons-round">
                      home
                    </span>
                  </span>
                  <span>Home</span>
                </button>
              </p>

              <p class="control">
                <button class="button is-primary is-inverted">
                  <span class="icon">
                    <span class="material-icons-round">
                      person
                    </span>
                  </span>
                </button>
              </p>

              <p class="control">
                <button class="button is-danger is-inverted">
                  <span class="icon">
                    <span class="material-icons-round">
                      description
                    </span>
                  </span>
                </button>
              </p>

              <p class="control">
                <button class="button is-warning is-inverted">
                  <span class="icon">
                    <span class="material-icons-round">
                      build
                    </span>
                  </span>
                </button>
              </p>

              <p class="control">
                <button class="button is-success is-inverted">
                  <span class="icon">
                    <span class="material-icons-round">
                      mail
                    </span>
                  </span>
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "navbar"
};
</script>

<style scoped>
nav {
  background: #00000000;
}

.is-borderless {
  border: none;
}

#nav-menu-sections {
  border: 1px solid rgb(219, 219, 219);
  border-radius: 0.375rem;
  padding: 0.5rem;
  background: #fff;
}

.field.is-grouped > .control:not(:last-child) {
  margin-right: 0.25rem;
}

.is-warning.is-inverted {
  background: #fff;
}

.is-warning.is-inverted:hover {
  background: #f2f2f2;
}
</style>
