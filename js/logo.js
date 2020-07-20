new Vivus(
  "logo-svg", {
    type: "oneByOne",
    duration: 100,
    animTimingFunction: Vivus.EASE
  },
  svgAnimEnd
);

function svgAnimEnd() {
  document.getElementById('dot-path').classList.add("pulse")
  document.getElementById('subtitle').classList.add("fade-in-up")
  document.getElementById('splash').classList.add("fade-out")
  document.getElementById("header-bg").classList.add("fade-in-bottom-right")

  window.scrollTo(0, 0);

  document.getElementById('splash').addEventListener('animationend', event => {
    if (event.target.id == "splash") {
      event.target.remove()

      document.body.classList.remove("hide-scroll")

      type()
    }
  });
}