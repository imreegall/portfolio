<template>
  <div class="im-main-content">
    <im-main-content-welcome/>
    <im-main-content-products/>
    <im-main-content-about/>
  </div>
</template>

<script>
  import imMainContentWelcome from "./content/im-main-content-welcome.vue";
  import imMainContentProducts from "./content/im-main-content-products.vue";
  import imMainContentAbout from "./content/im-main-content-about.vue";

  export default {
    name: "im-main-content",
    components: {
      imMainContentWelcome,
      imMainContentProducts,
      imMainContentAbout
    }
  }
</script>

<style lang="sass">
  .im-main-content
    width: 100%
    display: flex
    flex-direction: column

    @media (min-width: 1280px)
      gap: 80px

    @media (max-width: 1279px)
      gap: 40px
</style>