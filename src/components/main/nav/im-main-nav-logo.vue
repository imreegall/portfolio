<template>
  <div class="im-main-nav-logo">
    <div class="logo-icon">
      <div class="icon-round"></div>
      <div class="icon-line"></div>
    </div>
    <div class="logo-text"><h3>Галиев Ренат</h3></div>
  </div>
</template>

<script>
export default {
  name: "im-main-nav-logo"
}
</script>

<style lang="sass">
  .im-main-nav-logo
    display: flex
    place-items: center
    gap: 12px

    .logo-icon
      display: flex
      align-items: flex-end
      gap: 5px

      .icon-round
        background-color: $yellow
        width: 8px
        height: 8px
        +border-radius(50%)
        margin-bottom: 10px

      .icon-line
        background-color: $yellow
        width: 3px
        height: 34px
</style>