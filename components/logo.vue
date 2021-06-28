<template>
  <div id="logo-wrapper">
    <a id="logo" href="#">
      <span>
        <img src="../assets/images/logo/logo.svg" width="50.9833" height="28" />
      </span>

      <span class="ml-3 is-size-4 has-text-weight-bold is-hidden-mobile">
        Max Caplan
      </span>
      <span class="ml-2 is-size-4 has-text-weight-bold is-hidden-touch">
        | Portfolio
      </span>
    </a>
  </div>
</template>

<script>
export default {
  name: "logo"
};
</script>

<style scoped>
#logo-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  height: 74px;
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
</style>
