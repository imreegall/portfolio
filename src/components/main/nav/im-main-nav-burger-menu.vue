<template>
  <div class="im-main-nav-burger-menu">
    <div class="triangle"></div>
    <ul class="burger-menu">
      <li><h5><router-link to="#products">Проекты</router-link></h5></li>
      <li><h5><router-link to="#about">Обо мне</router-link></h5></li>
      <li><h5><router-link to="#contacts">Контакты</router-link></h5></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "im-main-nav-burger-menu"
}
</script>

<style lang="sass">
  #nav-burger-checkbox
    display: none

    &:checked ~ .im-main-nav-burger-menu
      display: block

  .im-main-nav-burger-menu
    display: none
    background-color: rgba(255, 255, 255, 0.71)
    padding: 30px
    position: absolute
    right: -15px
    top: 100px
    +border-radius(18px)
    border: 3px solid $black

    .triangle
      position: absolute
      right: 23px
      top: -33px
      border: 15px solid transparent
      border-bottom: 15px solid $black

    .burger-menu
      display: flex
      flex-direction: column
      align-items: center
      justify-content: center
      height: 100%
      gap: 20px
      +user-select(none)

</style>