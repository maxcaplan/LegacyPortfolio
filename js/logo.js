new Vivus(
    "logo-svg",
    {
      type: "oneByOne",
      duration: 100,
      animTimingFunction: Vivus.EASE
    },
    callback
  );
  
  function callback() {
    document.getElementById('dot-path').classList.add("pulse")
    document.getElementById('subtitle').classList.add("fade-in-up")
    document.getElementById('splash').classList.add("fade-out")
  }
  