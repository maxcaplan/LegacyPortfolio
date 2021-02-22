<template>
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
              I'm Max,
            </h1>
            <div class="row w-100 m-0">
              <div class="col-auto p-0 pr-2">
                <h1 class="text-muted m-0">and I like</h1>
              </div>
              <div class="col-12 col-md-auto p-0">
                <div class="row w-100 m-0">
                  <div class="col-auto p-0">
                    <h1 class="m-0 text-muted">
                      <span id="phrase" ref="phrase"></span>
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
</template>

<script>
export default {
  name: "Header",

  data() {
    return {
      phrases: ["programming", "designing", "tinkering", "making stuff"],
      currentPhrase: 0,
      pause: 0,
      count: 0,
      alph: "abcdefghijklmnopqrstuvwxyz",
      randomChar: false,
    };
  },

  methods: {
    type(that) {
      setTimeout(function() {
        if (!that.randomChar)
          that.$refs.phrase.innerHTML = that.phrases[
            that.currentPhrase
          ].substring(0, that.count);
        else {
          that.count -= 2;
          that.$refs.phrase.innerHTML =
            that.phrases[that.currentPhrase].substring(0, that.count) +
            that.randomChar;
        }

        if (Math.random() > 0.9 && !that.randomChar && that.count > 0)
          that.randomChar = that.alph.charAt(
            Math.round(Math.random() * (that.alph.length - 1))
          );
        else that.randomChar = false;

        if (that.randomChar) that.pause = 100;
        else that.pause = 0;

        that.count++;

        if (that.count <= that.phrases[that.currentPhrase].length)
          that.type(that);
        else that.wait(that);
      }, 100 + Math.round(Math.random() * 150) + that.pause);
    },

    wait(that) {
      setTimeout(function() {
        that.erase(that);
      }, 2000);
    },

    erase(that) {
      setTimeout(function() {
        that.$refs.phrase.innerHTML = that.phrases[
          that.currentPhrase
        ].substring(0, that.count);

        that.count--;

        if (that.count >= 0) that.erase(that);
        else that.changePhrase(that);
      }, 50 + Math.round(Math.random() * 150));
    },

    changePhrase(that) {
      if (that.currentPhrase >= that.phrases.length - 1) that.currentPhrase = 0;
      else that.currentPhrase++;

      that.type(that);
    },
  },

  mounted() {
    this.type(this);
  },
};
</script>

<style scoped>
#header {
  width: 100%;
  height: calc(100vh - 80px);

  min-height: calc(100% - 80px);

  overflow: hidden;
}

#header-content {
  z-index: 100;
}

#header-title {
  font-size: 5rem;
}

#cursor {
  width: 1.25rem;
  height: 2.5rem;
  position: relative;
}

#header-bg {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 0;

  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
  filter: opacity(0);
  opacity: 0;

  transform: translate(120px, 120px);

  animation-delay: 3s;
}

#header-wave-lg {
  position: absolute;

  left: 50%;
  bottom: 0;

  width: 100%;
  max-height: 90%;
}

#header-wave {
  position: absolute;

  left: 50%;
  bottom: 0;

  width: 100%;
  max-height: 90%;
}

#header-wave-sm {
  position: absolute;

  right: 0;
  bottom: 0;

  height: 100%;
}

#header-dots {
  position: absolute;

  right: 0;
  bottom: 0;

  width: 300px;

  opacity: 0.5;

  margin-bottom: 3rem;
}

@media (max-width: 992px) {
  #header-dots {
    width: 240px;
    margin-bottom: 1rem;
  }
}

@media (max-width: 768px) {
  #header-wrapper {
    align-items: unset !important;
  }

  #header-dots {
    width: 200px;
    margin-bottom: 0.5rem;
  }

  #header-title {
    margin-top: 3rem;
  }
}

@media (max-width: 430px) {
  #header-title {
    font-size: 4rem;
  }
}
</style>
