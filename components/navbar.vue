<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-menu">
      <div class="navbar-end">
        <div class="navbar-item">
          <div id="nav-menu-sections">
            <div class="field is-grouped">
              <p class="control">
                <a
                  href="#home"
                  class="button is-link"
                  :class="active === 0 ? 'is-light' : 'is-inverted'"
                >
                  <span class="icon">
                    <span class="material-icons-round">
                      home
                    </span>
                  </span>

                  <span v-if="active === 0">Home</span>
                </a>
              </p>

              <p class="control">
                <a
                  href="#about"
                  class="button is-primary"
                  :class="active === 1 ? 'is-light' : 'is-inverted'"
                >
                  <span class="icon">
                    <span class="material-icons-round">
                      person
                    </span>
                  </span>

                  <span v-if="active === 1">About</span>
                </a>
              </p>

              <p class="control">
                <a
                  href="#work"
                  class="button is-danger"
                  :class="active === 2 ? 'is-light' : 'is-inverted'"
                >
                  <span class="icon">
                    <span class="material-icons-round">
                      description
                    </span>
                  </span>

                  <span v-if="active === 2">Work</span>
                </a>
              </p>

              <!-- <p class="control">
                <a
                  href="#skills"
                  class="button is-warning"
                  :class="active === 3 ? 'is-light' : 'is-inverted'"
                >
                  <span class="icon">
                    <span class="material-icons-round">
                      build
                    </span>
                  </span>

                  <span v-if="active === 3">Skills</span>
                </a>
              </p> -->

              <p class="control">
                <a
                  href="#contact"
                  class="button is-success"
                  :class="active === 3 ? 'is-light' : 'is-inverted'"
                >
                  <span class="icon">
                    <span class="material-icons-round">
                      mail
                    </span>
                  </span>

                  <span v-if="active === 3">Contact</span>
                </a>
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
  name: "navbar",

  props: {
    active: Number
  }
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

a.button {
  transition: background 0.5s ease;
}
</style>
