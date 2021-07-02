<template>
  <section id="contact" class="section scroll-section">
    <div class="container mb-5">
      <div class="columns is-vcentered is-mobile">
        <div class="column is-narrow">
          <h1 class="title is-size-3 is-size-2-desktop">
            <span class="icon contact-icon has-text-success">
              <span class="material-icons-round">
                mail
              </span>
            </span>

            Contact
          </h1>
        </div>

        <div class="column">
          <div class="line-break"></div>
        </div>
      </div>
    </div>

    <div class="container is-max-desktop">
      <div class="card">
        <div class="card-content">
          <div class="columns">
            <div class="column is-one-third">
              <div class="box is-shadowless has-background-success">
                <div class="content has-text-light">
                  <h1 class="is-size-3 has-text-light has-text-weight-bold">
                    Let's Get In Touch!
                  </h1>

                  <p>
                    Want a website built? <br />
                    Or something more complicated? <br />
                  </p>

                  <p>
                    Don't be shy, reach out and I'm sure we can figure something
                    out!
                  </p>
                </div>

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
                        'is-primary': copied && !failed,
                        'has-tooltip-primary': copied && !failed,
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

            <div class="column">
              <div class="field">
                <label class="label">Subject</label>
                <div class="control">
                  <input
                    class="input"
                    type="text"
                    v-model="subject"
                    placeholder="What's it about?"
                  />
                </div>
              </div>

              <div class="field">
                <label class="label">Message</label>

                <div class="control">
                  <textarea
                    class="textarea has-fixed-size"
                    v-model="body"
                    placeholder="What do you want to say?"
                  ></textarea>
                </div>
              </div>

              <div class="field is-flex-desktop is-justify-content-flex-end">
                <div class="control">
                  <a
                    class="button is-link is-fullwidth"
                    :href="
                      'mailto:maxcaplan@gmail.com?subject=' +
                        subjectFormatted +
                        '?body=' +
                        bodyFormatted
                    "
                    target="_blank"
                  >
                    <span>Send</span>
                    <span class="icon">
                      <span class="material-icons-round">
                        send
                      </span>
                    </span>
                  </a>
                </div>
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
  name: "contact",

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
      },
      subject: "",
      body: ""
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
    },

    subjectFormatted() {
      return encodeURIComponent(this.subject);
    },

    bodyFormatted() {
      return encodeURIComponent(this.body);
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
  border: none !important;
}

.contact-icon * {
  font-size: 2rem;
}

.box {
  height: 100%;
}

.button.is-light.is-outlined {
  border-color: rgb(245, 245, 245) !important;
}

.button.is-light.is-outlined * {
  color: rgb(245, 245, 245) !important;
  fill: rgb(245, 245, 245) !important;
}

.button.is-light.is-outlined:hover *,
.button.is-light.is-outlined:focus * {
  color: rgba(0, 0, 0, 0.7) !important;
  fill: rgba(0, 0, 0, 0.7) !important;
}
</style>
