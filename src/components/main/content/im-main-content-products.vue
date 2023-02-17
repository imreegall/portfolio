<template>
  <div class="im-main-content-products" id="products">
    <h1>Последние<br>проекты</h1>
    <im-main-content-products-list/>
  </div>
</template>

<script>
import imMainContentProductsList from "./products/im-main-content-products-list.vue";

export default {
  name: "im-main-content-products",
  components: {
    imMainContentProductsList
  }
}
</script>

<style lang="sass">
  .im-main-content-products
    display: flex
    flex-direction: column

    @media (min-width: 1280px)
      gap: 60px

    @media (max-width: 1279px)
      gap: 40px
</style>