<template>
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

    <div class="collapse bg-light mt-3 d-md-none d-lg-none" id="navbarCollapse">
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
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
#navbar {
  position: fixed;
  top: 0;

  z-index: 900;

  width: 100%;
}

#navbar img {
  height: 50px;
  transition: 0.8s height;
}

.nav-link {
  font-weight: lighter;
}

@media (max-width: 430px) {
  #navbar img {
    height: 38px;
  }

  .shrink img {
    height: 24px !important;
  }
}

.navbar-brand img {
  color: black;
}
</style>
