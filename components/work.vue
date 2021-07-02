<template>
  <section id="work" class="section scroll-section">
    <div class="container">
      <div class="columns is-vcentered is-mobile">
        <div class="column is-narrow">
          <h1 class="title is-size-3 is-size-2-desktop">
            <span class="icon work-icon has-text-danger">
              <span class="material-icons-round">
                description
              </span>
            </span>

            Work
          </h1>
        </div>

        <div class="column">
          <div class="line-break"></div>
        </div>
      </div>

      <div class="columns">
        <div class="column">
          <work-card
            :title="'Spark West Network'"
            :image="'/sparkwest.png'"
            :color="'danger'"
            :tags="[
              { name: 'Nuxt', color: 'success' },
              { name: 'Firebase', color: 'danger' }
            ]"
            :link="'https://sparkwest.network/'"
            >An umbrella marketing company for rural entrepreneurship in the
            Annapolis Valley area.</work-card
          >
        </div>
        <div class="column">
          <work-card
            :title="'GoodGoods.ca'"
            :image="'/goodgoods.png'"
            :color="'primary'"
            :tags="[
              { name: 'Nuxt', color: 'success' },
              { name: 'Firebase', color: 'danger' }
            ]"
            :link="'https://www.goodgoods.ca/'"
            >GoodGoodsCAN Limited is a social enterprise that promotes products
            and services provided by Charities, Non Profit organizations and
            Social Entrepreneurs.
          </work-card>
        </div>
        <div class="column">
          <work-card
            :title="'Personal Website'"
            :color="'link'"
            :image="'/portfolio.png'"
            :tags="[
              { name: 'Nuxt', color: 'success' },
              { name: 'Bulma', color: 'primary' }
            ]"
            >The very same website that you are currently browsing.</work-card
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import workCard from "./work-card.vue";

export default {
  name: "work",

  components: {
    workCard
  }
};
</script>

<style scoped>
.work-icon * {
  font-size: 2rem;
}
</style>
