function navbarSize() {
  if ((window.scrollY / window.innerHeight) * 100 > 20) {
    document.getElementById("navbar").classList.add("shrink");
  } else {
    document.getElementById("navbar").classList.remove("shrink");
  }
}

window.addEventListener("scroll", navbarSize);
