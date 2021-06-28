<template>
  <div
    id="custom-menu"
    class="is-hidden-desktop"
    :class="{ 'menu-open': menuOpen }"
  >
    <div id="nav-menu-sections-small">
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

      <button
        id="hamburger-button"
        @click="menuToggle"
        class="button is-borderless"
      >
        <div class="icon">
          <div v-show="!menuOpen" class="material-icons-round">
            menu
          </div>

          <span v-show="menuOpen" class="material-icons-round">
            close
          </span>
        </div>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "navbar-small",

  data: function() {
    return {
      menuOpen: false
    };
  },

  methods: {
    menuToggle() {
      this.menuOpen = !this.menuOpen;
      console.log("hello world");
    }
  }
};
</script>

<style scoped>
.is-borderless {
  border: none;
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

#nav-menu-sections-small {
  background-color: #fff;
  border: 1px solid rgb(219, 219, 219);
  border-radius: 0.375rem;
  position: relative;
  height: 42px;
  overflow: hidden;
}

#custom-menu .field {
  margin-right: 40px;
  overflow: hidden;
}

#custom-menu.menu-open .field {
  overflow-x: scroll;
}

#hamburger-button {
  position: absolute;
  right: 0;
  top: 0;
  border-radius: 0;
}

.menu-open #hamburger-button {
  background: #f2f2f2;
}

#custom-menu {
  position: fixed;
  top: 0;
  right: 0;
  margin-top: 8px;
  margin-left: 12px;
  margin-right: 12px;
  width: 40px;
  z-index: 1000 !important;
  transition: all ease 0.5s;
}

#custom-menu.menu-open {
  width: calc(100% - 24px) !important;
}
</style>
