<template>
  <div class="im-main-content-welcome">
    <div class="welcome-image-cont">
      <div class="welcome-image"></div>
    </div>

    <div class="welcome-text">
      <h3>Привет, я Ренат 🤟</h3>
      <hr>
      <h2>Я разрабатываю <span class="special-word">сайты</span> и помогаю делать мир лучше с помощью программного обеспечения</h2>
    </div>

    <div class="welcome-buttons">
      <h4><router-link class="button-to-contacts" to="#contacts">Контакты</router-link></h4>

      <div class="button-to-download">
        <h4><a
            href="public/for-download/GalievRM-portfolio.pdf"
            download=""
            title="Скачать портфолио (PDF)"
            target="_blank">
          Скачать портфолио
          <span class="button-arrow">
            <span class="arrow-line1"></span>
            <span class="arrow-line2">
              <span class="arrow-line2-subLine1"></span>
              <span class="arrow-line2-subLine2"></span>
            </span>
          </span>
        </a></h4>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "im-main-content-welcome"
  }
</script>

<style lang="sass">
  @keyframes anim
    @for $i from 0 to 25
      #{4 * $i}%
        background: linear-gradient(#{14.4 * $i}deg, #67d1ff 30%, #0099ff 80%)
        -webkit-background-clip: text
        -webkit-text-fill-color: transparent


  .im-main-content-welcome
    background: linear-gradient(99.03deg, #FBED96 -1%, #ABECD6 92.31%)
    display: flex
    flex-direction: column
    align-items: center
    gap: 30px
    +border-radius(44px)

    @media (min-width: 1280px)
      padding: 38px 130px

    @media (max-width: 1279px)
      padding: 30px 24px

    .welcome-image-cont
      display: flex
      align-items: center
      justify-content: center
      width: 100px
      height: 100px
      background-color: $whiteGreen
      +border-radius(999px)

      .welcome-image
        background-image: url("/src/assets/images/svg/boy1.svg")
        width: 64px
        height: 54px

    .welcome-text
      display: flex
      flex-direction: column
      align-items: center
      text-align: center
      gap: 10px

      hr
        width: 200px
        height: 1px
        background-color: $black

      .special-word
        background: linear-gradient(0deg, #67d1ff 30%, #0099ff 80%)
        transition: background, -webkit-background-clip, -webkit-text-fill-color
        animation: 2s anim infinite
        animation-fill-mode: forwards
        -webkit-background-clip: text
        -webkit-text-fill-color: transparent
        position: relative
        display: inline
        z-index: 0

        &:after
          content: ""
          background-color: #fff273
          width: 100%
          height: 10px
          display: block
          position: absolute
          left: 0
          bottom: 15%
          z-index: -1
          +border-radius(10px)

    .welcome-buttons
      display: flex
      align-items: center

      @media (min-width: 768px)
        flex-direction: row
        gap: 16px

      @media (max-width: 767px)
        flex-direction: column
        gap: 32px

      .button-to-contacts
        background-color: $black
        color: $white
        padding: 8px 36px
        +border-radius(16px)

        &:hover
          background-color: $lightblack

      .button-to-download

        @media (min-width: 768px)
          text-decoration: underline solid $black 2px

          &:hover
            text-decoration: underline solid $black 3px

        @media (max-width: 767px)
          text-decoration: underline solid $black 1px

          &:hover
            text-decoration: underline solid $black 2px

        a
          display: inline-flex
          align-items: center
          gap: 10px

        .button-arrow
          position: relative
          display: flex
          justify-content: flex-end
          align-items: center
          width: 25px
          height: 15px

          @media (max-width: 767px)
            display: none

          .arrow-line1
            position: absolute
            background-color: $black
            width: 100%
            height: 4px
            +border-radius(999px)

          .arrow-line2
            position: absolute
            width: 15px
            height: 15px
            transform: rotate(45deg)

            > *
              position: absolute
              background-color: $black
              +border-radius(999px)


            .arrow-line2-subLine1
              width: 100%
              height: 4px

            .arrow-line2-subLine2
              right: 0
              width: 4px
              height: 100%

</style>