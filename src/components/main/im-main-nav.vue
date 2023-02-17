<template>
  <div class="im-main-nav">
    <im-main-nav-logo/>
    <im-main-nav-burger/>
<!--    <im-main-nav-burger-menu/>-->
  </div>
</template>

<script>
import imMainNavLogo from "./nav/im-main-nav-logo.vue";
import imMainNavBurger from "./nav/im-main-nav-burger.vue";
import imMainNavBurgerMenu from "./nav/im-main-nav-burger-menu.vue";

export default {
  name: "im-main-nav",
  components: {
    imMainNavLogo,
    imMainNavBurger,
    imMainNavBurgerMenu
  }
}
</script>

<style lang="sass">
  .im-main-nav
    display: flex
    justify-content: space-between
    padding: 40px 0
    width: 100%
    position: relative
</style>