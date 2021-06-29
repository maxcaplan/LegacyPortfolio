<template>
  <div
    id="custom-menu"
    class="is-hidden-desktop"
    :class="{ 'menu-open': menuOpen }"
  >
    <div id="nav-menu">
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
          <a href="#skills" class="button is-warning" :class="active === 0 ? 'is-light' : 'is-inverted'">
            <span class="icon">
              <span class="material-icons-round">
                build
              </span>
            </span>

            <span v-if="active === 0">Skills</span> 
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

  props: {
    active: Number
  },

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

#nav-menu {
  background-color: #fff;
  border: 1px solid rgb(219, 219, 219);
  border-radius: 0.375rem;
  position: relative;
  height: 42px;
  overflow: hidden;
  opacity: 0.75;
  transition: opacity 0.5s ease;
}

#nav-menu:hover {
  opacity: 1;
}

.current-section-home #nav-menu,
.menu-open #nav-menu {
  opacity: 1;
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

a.button {
  transition: background 0.5s ease;
}
</style>
