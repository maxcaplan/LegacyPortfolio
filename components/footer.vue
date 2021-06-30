<template>
  <section id="footer" class="section pb-5">
    <div class="container">
      <div class="box has-background-dark has-text-light pb-1">
        <div class="columns mb-1">
          <div class="column">
            <div class="columns is-flex-direction-column">
              <div class="column pb-1 is-narrow">
                <div id="logo-wrapper">
                  <a id="logo" href="#">
                    <span>
                      <img
                        src="../assets/images/logo/logo-light.svg"
                        width="50.9833"
                        height="28"
                      />
                    </span>

                    <span
                      class="ml-3 is-size-4 has-text-weight-bold has-text-light"
                    >
                      Max Caplan
                    </span>
                  </a>
                </div>
              </div>

              <div class="column pt-1">
                <div class="field is-grouped">
                  <p class="control">
                    <a
                      class="button is-light is-outlined"
                      href="https://github.com/maxcaplan"
                      target="_blank"
                    >
                      <span class="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                          />
                        </svg>
                      </span>
                    </a>
                  </p>
                  <p class="control">
                    <a
                      class="button is-light is-outlined"
                      href="https://www.linkedin.com/in/max-caplan-6ab7141b4/"
                      target="_blank"
                    >
                      <span class="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"
                          />
                        </svg>
                      </span>
                    </a>
                  </p>
                  <p class="control">
                    <button
                      class="button is-light has-tooltip-arrow has-tooltip-right"
                      :data-tooltip="mailTooltip"
                      :class="{
                        'is-outlined': !copied && !failed,
                        'is-success': copied && !failed,
                        'has-tooltip-success': copied && !failed,
                        'is-danger': failed,
                        'has-tooltip-danger': failed
                      }"
                      @mousedown="pressingDown"
                      @mouseup="notPressingDown"
                      @mouseleave="notPressingDown"
                      v-touch:start="pressingDown"
                      v-touch:end="notPressingDown"
                    >
                      <span class="icon">
                        <span
                          v-show="!copied && !failed"
                          class="material-icons-round"
                        >
                          email
                        </span>

                        <span
                          v-show="copied && !failed"
                          class="material-icons-round"
                        >
                          content_copy
                        </span>

                        <span v-show="failed" class="material-icons-round">
                          error
                        </span>
                      </span>
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="column">
            <a
              :href="quote.loaded ? quote.link : '#'"
              :target="quote.loaded ? '_blank' : ''"
            >
              <p class="has-text-grey-lighter has-text-justified">
                {{ quote.quote }}
              </p>

              <p class="has-text-grey-light">- {{ quote.author }}</p>
            </a>
          </div>
        </div>

        <hr class="has-background-grey mt-0 mb-3" />

        <!-- Footer Bottom Desktop -->
        <div class="columns id-desktop is-hidden-mobile mb-0">
          <div class="column is-flex is-align-items-flex-end">
            <p class="is-family-monospace has-text-grey-light">
              &copy; 2021 Max Caplan
            </p>
          </div>

          <div class="column is-flex is-justify-content-center">
            <a
              class="has-text-weight-bold has-text-light"
              href="https://github.com/maxcaplan/maxcaplan.github.io"
              target="_blank"
            >
              Made with
              <span
                class="icon is-size-4 nuxt-icon has-tooltip-arrow has-tooltip-top mx-1 is-borderless"
                data-tooltip="Nuxt"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  focusable="false"
                  width="1em"
                  height="1em"
                  style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 32 22"
                >
                  <path
                    d="M26.297 27.031l.031-.063a.746.746 0 0 0 .073-.156v-.005c.099-.26.12-.536.073-.813v.01a2.368 2.368 0 0 0-.313-.828l.01.01l-7.094-12.474l-1.083-1.891l-8.156 14.365c-.141.25-.229.521-.276.802v.016c-.057.323-.021.651.109.953l-.005-.01c.016.047.042.089.068.135l-.005-.005c.214.365.667.802 1.667.802h13.198c.208 0 1.234-.042 1.708-.849zm-8.302-12.422l6.479 11.396H11.521zm13.666 10.579L22.307 8.709c-.099-.177-.635-1.052-1.578-1.052c-.422 0-1.026.182-1.521 1.047L18 10.824l1.073 1.896l1.667-2.953l9.255 16.245h-3.521c.047.271.021.547-.073.807v-.01c-.021.057-.042.115-.073.167v-.005l-.031.063c-.474.807-1.495.849-1.693.849h5.505c.203 0 1.219-.042 1.693-.849c.214-.37.359-.984-.141-1.844zM9.74 27.078l-.063-.125v-.005a1.668 1.668 0 0 1-.115-.953v.01H1.999l11.24-19.776l3.687 6.484l1.073-1.891l-3.219-5.667c-.089-.161-.63-1.036-1.568-1.036c-.422 0-1.031.182-1.521 1.052L.306 25.187c-.099.172-.568 1.078-.099 1.885c.214.37.667.802 1.667.802h9.531c-.99 0-1.453-.427-1.667-.802z"
                    fill="#626262"
                  /></svg
              ></span>
              and
              <span
                class="icon is-size-4 bulma-icon has-tooltip-arrow has-tooltip-top ml-1 is-borderless"
                data-tooltip="Bulma"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  focusable="false"
                  width="0.69em"
                  height="1em"
                  style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 256 373"
                >
                  <path
                    fill="#fff"
                    d="M0 256L23.273 93.09L116.363 0l116.364 116.364l-69.818 69.818L256 279.272l-139.636 93.092z"
                  />
                </svg>
              </span>
            </a>
          </div>

          <div class="column is-flex is-justify-content-flex-end">
            <button class="button is-small is-rounded is-light" disabled>
              <span class="icon">
                <span class="material-icons-outlined theme-icon">
                  light_mode
                </span>
              </span>
              <span>Light</span>
            </button>
          </div>
        </div>

        <div class="columns is-hidden-tablet mb-0">
          <div class="column is-flex is-justify-content-center pb-1">
            <a
              class="has-text-weight-bold has-text-light"
              href="https://github.com/maxcaplan/maxcaplan.github.io"
              target="_blank"
            >
              Made with
              <span
                class="icon is-size-4 nuxt-icon has-tooltip-arrow has-tooltip-top mx-1 is-borderless"
                data-tooltip="Nuxt"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  focusable="false"
                  width="1em"
                  height="1em"
                  style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 32 22"
                >
                  <path
                    d="M26.297 27.031l.031-.063a.746.746 0 0 0 .073-.156v-.005c.099-.26.12-.536.073-.813v.01a2.368 2.368 0 0 0-.313-.828l.01.01l-7.094-12.474l-1.083-1.891l-8.156 14.365c-.141.25-.229.521-.276.802v.016c-.057.323-.021.651.109.953l-.005-.01c.016.047.042.089.068.135l-.005-.005c.214.365.667.802 1.667.802h13.198c.208 0 1.234-.042 1.708-.849zm-8.302-12.422l6.479 11.396H11.521zm13.666 10.579L22.307 8.709c-.099-.177-.635-1.052-1.578-1.052c-.422 0-1.026.182-1.521 1.047L18 10.824l1.073 1.896l1.667-2.953l9.255 16.245h-3.521c.047.271.021.547-.073.807v-.01c-.021.057-.042.115-.073.167v-.005l-.031.063c-.474.807-1.495.849-1.693.849h5.505c.203 0 1.219-.042 1.693-.849c.214-.37.359-.984-.141-1.844zM9.74 27.078l-.063-.125v-.005a1.668 1.668 0 0 1-.115-.953v.01H1.999l11.24-19.776l3.687 6.484l1.073-1.891l-3.219-5.667c-.089-.161-.63-1.036-1.568-1.036c-.422 0-1.031.182-1.521 1.052L.306 25.187c-.099.172-.568 1.078-.099 1.885c.214.37.667.802 1.667.802h9.531c-.99 0-1.453-.427-1.667-.802z"
                    fill="#626262"
                  /></svg
              ></span>
              and
              <span
                class="icon is-size-4 bulma-icon has-tooltip-arrow has-tooltip-top ml-1 is-borderless"
                data-tooltip="Bulma"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  focusable="false"
                  width="0.69em"
                  height="1em"
                  style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 256 373"
                >
                  <path
                    fill="#fff"
                    d="M0 256L23.273 93.09L116.363 0l116.364 116.364l-69.818 69.818L256 279.272l-139.636 93.092z"
                  />
                </svg>
              </span>
            </a>
          </div>

          <div class="column pt-1">
            <div class="columns is-mobile">
              <div class="column is-flex is-align-items-flex-end">
                <p
                  class="is-family-monospace has-text-grey-light has-text-small"
                >
                  &copy; 2021
                </p>
              </div>

              <div class="column is-flex is-justify-content-flex-end">
                <button class="button is-small is-rounded is-light" disabled>
                  <span class="icon">
                    <span class="material-icons-outlined theme-icon">
                      light_mode
                    </span>
                  </span>
                  <span>Light</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "page-footer",

  data: function() {
    return {
      timerID: null,
      counter: 0,
      pressHoldDuration: 50,
      copied: false,
      failed: false,
      quote: {
        author: "Max Caplan",
        quote: "The quote is loading.",
        loaded: false
      }
    };
  },

  computed: {
    mailTooltip() {
      if (this.failed) {
        return "Failed!";
      } else if (this.copied) {
        return "Copied!";
      } else {
        return "Hold to copy";
      }
    }
  },

  async mounted() {
    try {
      this.$axios.setHeader("Access-Control-Allow-Origin", "*");
      const result = await this.$axios.$get("https://zenquotes.io/api/today");

      this.quote.author = result[0].a;
      this.quote.quote = result[0].q;
      this.quote.loaded = true;
    } catch (e) {
      console.error(e);
    }
  },

  methods: {
    pressingDown(e) {
      if (e.button === 0 && !this.copied && !this.failed) {
        requestAnimationFrame(this.timer);

        e.preventDefault();
      }
    },

    notPressingDown(e) {
      if (e.button === 0) {
        cancelAnimationFrame(this.timerID);

        if (this.counter != 0 && this.counter < this.pressHoldDuration) {
          this.handleMailPress();
        }

        this.counter = 0;
      }
    },

    timer() {
      if (this.counter < this.pressHoldDuration) {
        this.timerID = requestAnimationFrame(this.timer);
        this.counter++;
      } else {
        this.handleMailHoldPress();
      }
    },

    handleMailPress() {
      window.open("mailto:maxacaplan@gmail.com");
    },

    handleMailHoldPress() {
      this.copyTextToClipboard("maxacaplan@gmail.com").then(
        () => {
          console.log("Async: Copying to clipboard was successful!");
          this.copied = true;
          window.setTimeout(() => {
            this.copied = false;
          }, 2000);
        },

        err => {
          console.error(err);
          this.failed = true;
          this.copied = false;
          window.setTimeout(() => {
            this.failed = false;
          }, 2000);
        }
      );
    },

    fallbackCopyTextToClipboard(text) {
      return new Promise((resolve, reject) => {
        var textArea = document.createElement("textarea");
        textArea.value = text;

        // Avoid scrolling to bottom
        textArea.style.top = "0";
        textArea.style.left = "0";
        textArea.style.position = "fixed";

        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        try {
          var successful = document.execCommand("copy");
          document.body.removeChild(textArea);
          resolve();
        } catch (err) {
          document.body.removeChild(textArea);
          reject();
        }
      });
    },

    copyTextToClipboard(text) {
      if (!navigator.clipboard) {
        return fallbackCopyTextToClipboard(text);
      }

      return navigator.clipboard.writeText(text);
    }
  }
};
</script>

<style scoped>
.is-borderless {
  border: none;
}

.box {
  box-shadow: none;
}

.container {
  max-width: 1920px;
}

#logo-wrapper {
  display: flex;
  align-items: center;
}

#logo {
  display: flex;
}

.button.is-light.is-outlined {
  border-color: #b5b5b5 !important;
}

.button.is-light.is-outlined * {
  color: #b5b5b5 !important;
  fill: #b5b5b5 !important;
}

.button.is-light.is-outlined:hover *,
.button.is-light.is-outlined:focus * {
  color: rgba(0, 0, 0, 0.7) !important;
  fill: rgba(0, 0, 0, 0.7) !important;
}

.nuxt-icon * {
  fill: hsl(141, 71%, 48%);
}

.bulma-icon * {
  fill: hsl(171, 100%, 41%);
}

.theme-icon {
  font-size: 1rem !important;
}
</style>
