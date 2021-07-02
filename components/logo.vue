<template>
  <div id="logo-wrapper" ref="wrapper">
    <div
      id="logo"
      class="is-clickable"
      @mouseenter="animateLogo"
      @mouseleave="animateLogo(false)"
    >
      <span class="icon is-large">
        <svg
          width="92.837mm"
          height="50.972mm"
          class="logo-svg"
          version="1.1"
          viewBox="0 0 92.836731 50.971962"
        >
          <path
            ref="logoPathFirst"
            d="M 8.4947642,42.476255 28.1139,8.4962459"
            fill="none"
            stroke="#00000000"
            stroke-linecap="round"
            stroke-width="16"
          />
          <path
            ref="logoPathLast"
            d="m 67.354131,42.491548 c 9.391796,-4.5e-5 17.00535,-7.613554 17.00535,-17.00535 2.41e-4,-9.392061 -7.613554,-17.0058798 -17.00535,-17.0058798 -6.075022,0.00397 -11.686234,3.2482488 -14.720967,8.5110098 l 0.0068,-4.77e-4 -14.71885,25.485404"
            fill="none"
            stroke="#00000000"
            stroke-linecap="round"
            stroke-width="16"
          />

          <defs>
            <linearGradient
              id="linear"
              ref="gradient"
              x1="-92.797607"
              y1="101.9009"
              x2="92.825981"
              y2="0"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FEC601" offset="0" />
              <stop stop-color="#f45866" offset="0.125" />
              <stop stop-color="#3772ff" offset="0.5" />
              <stop stop-color="#3772ff" offset="1" />
            </linearGradient>
          </defs>
        </svg>
      </span>

      <span class="ml-3 is-size-4 has-text-weight-bold is-hidden-mobile">
        Max Caplan
      </span>
    </div>
  </div>
</template>

<script>
import anime from "animejs/lib/anime.js";

export default {
  name: "logo",

  mounted() {
    this.drawLogo();
  },

  methods: {
    drawLogo() {
      const pathFirst = this.$refs.logoPathFirst;
      const pathLast = this.$refs.logoPathLast;

      let tl = anime.timeline({
        easing: "easeOutQuad",
        duration: 1000
      });

      tl.add({
        targets: this.$refs.wrapper,
        top: 0,
        opacity: 1,
        duration: 500,
        delay: 500
      })
        .add({
          targets: pathFirst,
          begin: () => {
            pathFirst.setAttribute("stroke", "url(#linear)");
          },
          strokeDashoffset: [anime.setDashoffset, 0]
        })
        .add(
          {
            targets: pathLast,
            begin: () => {
              pathLast.setAttribute("stroke", "url(#linear)");
            },
            strokeDashoffset: [anime.setDashoffset, 0]
          },
          "-=500"
        );

      return tl;
    },

    animateLogo(hovered = true) {
      anime({
        targets: this.$refs.gradient,
        x1: hovered ? 0 : -92.797607,
        y1: hovered ? 50.971962 : 101.9009,
        x2: hovered ? 185.63434 : 92.825981,
        y2: hovered ? -50.92894 : 0,
        duration: 500,
        easing: "easeOutCubic"
      });
    }
  }
};
</script>

<style scoped>
#logo-wrapper {
  position: absolute;
  top: -25px;
  left: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  height: 74px;
  opacity: 0;
}

@media only screen and (max-width: 1023px) {
  #logo-wrapper {
    height: 52px;
  }
}

#logo {
  display: flex;
  width: 100%;
  margin-left: 12px;
  color: hsl(0, 0%, 48%);
  transition: all 0.25s ease;
}

#logo:hover {
  color: #3772ff;
}

#logo .icon {
  height: auto;
}

.logo-svg {
  height: fit-content;
}
</style>
