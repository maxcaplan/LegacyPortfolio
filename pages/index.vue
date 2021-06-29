<template>
  <div id="home-page" :class="sectionClass">
    <navbar id="navbar" :active="currentSection" />
    <navbar-small :active="currentSection" />

    <home />

    <about />

    <work />

    <page-footer />
  </div>
</template>

<script>
import navbar from "../components/navbar.vue";
import navbarSmall from "../components/navbar-small.vue";
import pageFooter from "../components/footer.vue";

import home from "../components/home.vue";
import about from "../components/about.vue";
import work from "../components/work.vue";

export default {
  name: "home-page",

  components: {
    navbar,
    navbarSmall,
    pageFooter,
    home,
    about,
    work
  },

  data: function() {
    return {
      sections: [],
      currentSection: 0
    };
  },

  computed: {
    sectionClass() {
      if (this.sections.length > 0) {
        return "current-section-" + this.sections[this.currentSection].id;
      } else {
        return;
      }
    }
  },

  mounted() {
    const sections = document.getElementsByClassName("scroll-section");

    for (let section of sections) {
      const sectionHeight = section.offsetHeight;
      const sectionTop =
        section.offsetTop - (window.innerWidth >= 1023 ? 74 : 52);
      const sectionId = section.getAttribute("id");
      this.sections.push({
        el: section,
        id: sectionId,
        height: sectionHeight,
        top: sectionTop
      });
    }

    this.handleScroll();

    window.addEventListener("resize", this.handleResize);
    window.addEventListener("scroll", this.handleScroll);
  },

  unmounted() {
    window.removeEventListener("resize", this.handleResize);
    window.removeEventListener("scroll", this.handleScroll);
  },

  methods: {
    handleResize() {
      this.sections.forEach(section => {
        let el = section.el;

        const sectionHeight = el.offsetHeight;
        const sectionTop = el.offsetTop - (window.innerWidth >= 1023 ? 74 : 52);

        section.height = sectionHeight;
        section.top = sectionTop;
      });

      this.handleScroll();
    },

    handleScroll() {
      let scrollY = window.pageYOffset;

      for (let i = 0; i < this.sections.length; i++) {
        const section = this.sections[i];

        if (scrollY > section.top && scrollY <= section.top + section.height) {
          this.currentSection = i;
          break;
        }
      }
    }
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
