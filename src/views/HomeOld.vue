<template>
  <div class="bg-dark hide-scroll">
    <div id="top"></div>

    <splash />

    <nav id="navbar" class="p-0 py-2 py-sm-3 bg-dark">
      <div class="container px-3">
        <div class="row">
          <div class="col">
            <a class="navbar-brand" href="#">
              <img src="../assets/logo/logo_light.svg" height="50" alt="" />
            </a>
          </div>

          <div class="col-auto align-items-center d-none d-md-flex">
            <ul class="nav">
              <li class="nav-item active">
                <a class="nav-link text-light" href="#top"><b>Home</b></a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-light" href="#about"><b>About</b></a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-light" href="#"><b>Work</b></a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-light" href="#"><b>Skills</b></a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-light" href="#"><b>Contact</b></a>
              </li>
            </ul>
          </div>

          <div class="col-auto align-items-center d-flex d-md-none d-lg-none">
            <button
              class="btn text-light d-flex align-items-center"
              type="button"
              data-toggle="collapse"
              data-target="#navbarCollapse"
            >
              <i class="fa fa-lg fa-bars"></i>
            </button>
          </div>
        </div>
      </div>

      <div
        class="collapse bg-light mt-3 d-md-none d-lg-none"
        id="navbarCollapse"
      >
        <div class="container p-3">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link text-dark" href="#"><b>Home</b></a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-dark" href="#"><b>About</b></a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-dark" href="#"><b>Work</b></a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-dark" href="#"><b>Skills</b></a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-dark" href="#"><b>Contact</b></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div id="content" class="bg-dark">
      <div id="nav-spacer"></div>

      <div id="header">
        <div class="container h-100">
          <div class="row h-100">
            <div
              id="header-wrapper"
              class="col h-100 d-flex align-items-center text-light"
            >
              <div id="header-content">
                <h1 id="header-title">
                  Hi. <br />
                  I am Max
                </h1>
                <div class="row w-100 m-0">
                  <div class="col-auto p-0 pr-2">
                    <h1 class="text-muted m-0">And I like</h1>
                  </div>
                  <div class="col-12 col-md-auto p-0">
                    <div class="row w-100 m-0">
                      <div class="col-auto p-0">
                        <h1 class="m-0 text-muted">
                          <span id="phrase"></span>
                        </h1>
                      </div>
                      <div class="col-auto pl-1 p-0 d-flex align-items-center">
                        <div id="cursor" class="bg-secondary flash"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div id="header-bg">
                <img
                  id="header-wave-lg"
                  src="../assets/waveLarge.svg"
                  alt=""
                  class="d-none d-lg-flex"
                />
                <img
                  id="header-wave"
                  src="../assets/waveMedium.svg"
                  alt=""
                  class="d-none d-sm-flex d-lg-none"
                />
                <img
                  id="header-wave-sm"
                  src="../assets/waveSmall.svg"
                  alt=""
                  class="d-flex d-sm-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="header-spacer"></div>

      <div id="about">
        <div class="container py-3 py-md-5">
          <h1 class="text-light mb-3">About Me</h1>

          <div class="row">
            <div
              class="col-12 col-md-auto d-flex justify-content-center mb-3 mb-md-0"
            >
              <img
                src="https://picsum.photos/200/200"
                class="img-fluid rounded-circle shadow"
                alt=""
                style="filter: grayscale(1);"
              />
            </div>

            <div class="col-12 col-md mb-3 mb-md-0">
              <p class="text-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Cursus in hac habitasse platea dictumst quisque sagittis purus
                sit. Nunc pulvinar sapien et ligula ullamcorper malesuada proin
                libero.
              </p>
            </div>

            <div
              class="col-12 col-md d-flex align-items-center justify-content-end mb-3 mb-md-0"
            >
              <button
                id="more-about-btn"
                class="btn btn-lg btn-outline-light rounded-pill"
              >
                More About Me
                <div class="arrow">
                  <i class="fa fa-arrow-right" aria-hidden="true"></i>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div id="footer">
        <div class="container py-5 px-3">
          <div class="row">
            <div class="col-12 col-md-auto text-light mb-5 mb-md-3">
              <div id="footer-about">
                <h4>Max Caplan</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                <div class="row">
                  <div class="col-auto pr-0">
                    <button class="btn btn-outline-light" disabled>
                      <i class="fa fa-envelope"></i>
                    </button>
                  </div>
                  <div class="col-auto pr-0">
                    <button class="btn btn-outline-light" disabled>
                      <i class="fab fa-instagram"></i>
                    </button>
                  </div>
                  <div class="col-auto pr-0">
                    <button class="btn btn-outline-light" disabled>
                      <i class="fab fa-facebook-f"></i>
                    </button>
                  </div>
                  <div class="col-auto">
                    <button class="btn btn-outline-light" disabled>
                      <i class="fab fa-linkedin"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="col-12 col-md d-md-flex d-block justify-content-end mb-3"
            >
              <div>
                <h4 class="text-light">Navigation</h4>
                <ul class="nav flex-column d-md-flex d-none">
                  <li class="nav-item">
                    <a class="nav-link text-light" href="#top">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link text-light" href="#about">About</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link text-light" href="#">Work</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link text-light" href="#">Skills</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link text-light" href="#">Contact</a>
                  </li>
                </ul>

                <ul class="nav d-md-none d-lg-none d-flex">
                  <li class="nav-item">
                    <a class="nav-link text-light" href="#top">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link text-light" href="#about">About</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link text-light" href="#">Work</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link text-light" href="#">Skills</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link text-light" href="#">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col text-center text-muted">
              &copy; 2020 Max Caplan
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import "../assets/js/index.js";
import Splash from "../components/Splash.vue";

export default {
  name: "Home",

  components: {
    Splash,
  },
};
</script>
