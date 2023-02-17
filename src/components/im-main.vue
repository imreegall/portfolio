<template>
  <div class="im-main">
    <im-main-nav/>
    <im-main-content/>
  </div>
</template>

<script>
import imMainNav from "./main/im-main-nav.vue";
import imMainContent from "./main/im-main-content.vue";

export default {
  name: "im-main",
  components: {
    imMainNav,
    imMainContent
  }
}
</script>

<style lang="sass">
  .im-main
    max-width: 1280px

    @media (min-width: 1280px)
      padding: 0 90px

    @media (max-width: 1279px)
      padding: 0 24px
</style>