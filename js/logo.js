new Vivus(
    "logo-svg",
    {
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

    document.getElementById('splash').addEventListener('animationend', event => {
      if(event.target.id == "splash") {
        console.log("removing from dom")
        event.target.remove()

        document.getElementById("phrase").classList.add("fade-loop")
        phraseLoop()
      }
    });
  }
  