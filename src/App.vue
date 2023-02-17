<script setup>
  import imMain from "./components/im-main.vue";
  import imFooter from "./components/im-footer.vue";
</script>

<template>
  <im-main/>
  <im-footer/>
</template>

<style lang="sass">
  #app
    min-height: 100vh
    width: 100%
    display: flex
    flex-direction: column
    align-items: center

    @media (min-width: 1280px)
      gap: 80px

    @media (max-width: 1279px)
      gap: 40px
</style>
