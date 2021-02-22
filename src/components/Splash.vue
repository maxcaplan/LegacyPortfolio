<template>
  <div id="splash">
    <div id="splash-bg" class="bg-dark d-flex align-items-center">
      <div class="w-100 d-flex justify-content-center">
        <div id="logo-wrapper">
          <div class="row m-0 mb-4">
            <div class="col p-0">
              <div id="svg-container">
                <svg
                  id="logo-svg"
                  width="260"
                  height="100"
                  viewBox="0 0 260 100"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path
                    transform="translate(-19.365087,-99.35078)"
                    d="m 27.542955,191.18566 20.17856,-75.30678 c 1.04324,-3.89296 4.08399,-6.93371 7.97695,-7.97679 0.96315,-0.25815 1.95626,-0.38744 2.9534,-0.38454 5.09309,0.0146 9.54411,3.44173 10.86216,8.36133 l 17.93805,66.94573 c 1.04308,3.89296 4.08383,6.93371 7.97679,7.97679 0.96315,0.25815 1.956264,0.38745 2.953399,0.38454 5.093086,-0.0146 9.544106,-3.44173 10.862336,-8.36135 l 17.93838,-66.94554 c 1.04324,-3.89278 4.08399,-6.93353 7.97695,-7.97661 0.96315,-0.25815 1.95627,-0.38745 2.9534,-0.38452 5.09309,0.0146 9.54411,3.44171 10.86216,8.36131 l 20.17839,75.3064"
                    id="m-path"
                  />
                  <path
                    transform="translate(-19.365087,-99.35078)"
                    id="c-path"
                    d="m 271.18692,131.0684 c -6.99987,-14.40698 -21.61132,-23.55254 -37.62879,-23.55253 -23.10474,8e-5 -41.83479,18.73016 -41.83491,41.83489 1.2e-4,23.10474 18.73017,41.83481 41.83491,41.8349 16.01633,-9e-5 30.62688,-9.14448 37.62722,-23.54995"
                  />
                  <path
                    transform="translate(-19.365087,-99.35078)"
                    id="dot-path"
                    data-ignore="true"
                    d="m 233.55818,134.72479 c -7.99116,-1e-5 -14.62696,6.63579 -14.62695,14.62695 -1e-5,7.99116 6.63579,14.625 14.62695,14.625 7.99116,0 14.62695,-6.63384 14.62695,-14.625 0,-7.99116 -6.63579,-14.62696 -14.62695,-14.62695 z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div class="row m-0">
            <div class="col p-0">
              <p id="subtitle" class="text-light w-100">
                - Developer/Designer -
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vivus from "vivus";

export default {
  name: "Logo",

  mounted() {
    new Vivus(
      "logo-svg",
      {
        type: "oneByOne",
        duration: 100,
        animTimingFunction: Vivus.EASE,
      },
      svgAnimEnd
    );

    function svgAnimEnd() {
      document.getElementById("dot-path").classList.add("pulse");
      document.getElementById("subtitle").classList.add("fade-in-up");
      document.getElementById("splash").classList.add("fade-out");
      document
        .getElementById("header-bg")
        .classList.add("fade-in-bottom-right");
      window.scrollTo(0, 0);
      document
        .getElementById("splash")
        .addEventListener("animationend", (event) => {
          if (event.target.id == "splash") {
            event.target.remove();
            document.body.classList.remove("hide-scroll");
            // type();
          }
        });
    }
  },
};
</script>

<style scoped>
#splash {
  width: 100%;
  height: 100%;

  position: fixed;

  z-index: 9999;

  animation-delay: 3s;
}

#splash-bg {
  width: 100%;
  height: 100%;

  position: relative;
  z-index: 9999;
}

#logo-wrapper {
  max-width: 14rem;
  width: 100%;
  padding: 1rem;
}

#m-path {
  stroke: #ecf0f1;
  stroke-width: 14.6267;
  stroke-linecap: round;
  fill: none;
}

#c-path {
  stroke: #ecf0f1;
  stroke-width: 14.6267;
  stroke-linecap: round;
  fill: none;
}

#dot-path {
  stroke: #ecf0f1;
  stroke-width: 0;

  fill: #ecf0f1;

  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
  filter: opacity(0);
  opacity: 0;
}

#svg-container {
  height: 0;
  width: 100%;

  padding-top: calc((98.296516 / 258.27036) * 100%);
  position: relative;
}

#logo-svg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  animation: fade-in 1s ease forwards;
}

#subtitle {
  font-family: "Raleway", sans-serif;
  font-style: italic;

  text-align: center;

  transform: translateY(0);

  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
  filter: opacity(0);
  opacity: 0;

  animation-delay: 0.5s;
}
</style>
