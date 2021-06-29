<template>
  <section id="about" class="section scroll-section">
    <div class="container">
      <div class="columns is-vcentered is-mobile">
        <div class="column is-narrow">
          <h1 class="title is-size-3 is-size-2-desktop">
            <span class="icon about-icon has-text-primary">
              <span class="material-icons-round">
                person
              </span>
            </span>

            About
          </h1>
        </div>

        <div class="column">
          <div class="line-break"></div>
        </div>
      </div>

      <div class="columns is-variable is-8">
        <div
          class="column is-one-third-desktop is-flex is-justify-content-center"
        >
          <div class="card max-card">
            <img class="image" src="/maxcaplan.png" alt="Max Caplan" />

            <div class="box p-3 has-background-primary-light">
              <h1
                class="title is-size-3-desktop is-size-5 has-text-primary-dark"
              >
                Max Caplan
              </h1>
            </div>
          </div>
        </div>

        <div class="column">
          <div id="terminal" class="card has-text-light">
            <header class="card-header is-flex is-flex-direction-column">
              <div class="card-top-bar">
                <div>
                  <div class="columns is-variable is-1 is-mobile">
                    <div class="column">
                      <span class="icon has-text-success">
                        <span class="material-icons-round">
                          circle
                        </span>
                      </span>
                    </div>

                    <div class="column">
                      <span class="icon has-text-warning">
                        <span class="material-icons-round">
                          circle
                        </span>
                      </span>
                    </div>

                    <div class="column">
                      <span class="icon has-text-danger">
                        <span class="material-icons-round">
                          circle
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="card-tabs">
                <div class="card-tab">
                  <p class="card-tab-label">
                    <span class="icon icon-document has-text-primary">
                      <span class="material-icons-round">
                        description
                      </span>
                    </span>

                    About.md

                    <span class="icon icon-circle">
                      <span class="icon-circle material-icons-round">
                        circle
                      </span>
                    </span>
                  </p>
                </div>
              </div>
            </header>

            <div class="card-content">
              <div class="content">
                <ol class="code is-family-monospace">
                  <li class="mb-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </li>

                  <li class="mb-5">
                    Nulla facilisi cras fermentum odio eu feugiat pretium nibh.
                  </li>

                  <li>
                    Fames ac turpis egestas integer eget aliquet nibh.
                  </li>
                </ol>
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
  name: "about"
};
</script>

<style scoped>
.about-icon * {
  font-size: 2rem;
}

.max-card {
  position: relative;
  display: inline-block;
  max-width: 50vw;
  height: fit-content;
  margin-bottom: 2.25rem;
}

.max-card img {
  border-radius: 0.25rem;
  max-width: 100%;
}

.max-card .box {
  white-space: nowrap;
  display: block;
  position: absolute;
  bottom: -2.25rem;
  left: 50%;
  transform: translate(-50%, 0);
}

#terminal.card {
  background-color: #1d1d1d;
  overflow: hidden;
}

.card-top-bar {
  width: 100%;
  padding: 8px 8px 0px 8px;
  display: flex;
  justify-content: flex-end;
  background-color: #333;
}

.card-tabs {
  width: 100%;
  display: flex;
  background-color: #252526;
}

.card-tab {
  padding: 8px 16px 8px 16px;
  background-color: #1d1d1d;
}

.card-tab * {
  vertical-align: text-bottom;
}

.card-tab .icon-document * {
  font-size: 1.25rem !important;
}

.card-tab .icon-circle * {
  font-size: 0.75rem !important;
}

li::marker {
  color: #5b5b5b;
}
</style>
