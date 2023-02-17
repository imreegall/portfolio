<template>
  <input type="checkbox" id="nav-burger-checkbox">
  <label class="im-main-nav-burger" for="nav-burger-checkbox">
    <div class="burger-line1"></div>
    <div class="burger-line2">
      <div class="burger-line2-subLine"></div>
    </div>
    <div class="burger-line3"></div>
  </label>
  <im-main-nav-burger-menu/>
</template>

<script>
import imMainNavBurgerMenu from "./im-main-nav-burger-menu.vue";

export default {
  name: "im-main-nav-burger",
  components: {
    imMainNavBurgerMenu
  }
}
</script>

<style lang="sass">
  #nav-burger-checkbox:checked ~ .im-main-nav-burger
    .burger-line1, .burger-line3
      background-color: $white

    .burger-line2
      transform: rotate(45deg)

      .burger-line2-subLine
        transform: rotate(90deg)

  .im-main-nav-burger
    display: flex
    flex-direction: column
    align-items: flex-end
    justify-content: space-between
    height: 36px
    width: 36px
    cursor: pointer
    padding: 10px
    box-sizing: content-box
    z-index: 999

    *
      background-color: $black
      height: 5px
      +border-radius(999px)
      transition: 0.3s

      &.burger-line1
        width: 36px

      &.burger-line2
        width: 32px
        display: flex

        .burger-line2-subLine
          width: 100%

      &.burger-line3
        width: 16px


</style>