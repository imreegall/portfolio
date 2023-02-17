<template>
  <div class="im-footer" id="contacts">
    <div class="footer-center">
      <div class="footer-info">
        <h3>Есть предложения?</h3>

        <div class="info-contacts">
          <h4><a rel="nofollow" title="https://kazan.hh.ru/resume/..." target="_blank" href="https://kazan.hh.ru/resume/afff37d4ff095f52350039ed1f6b6f37464372">Моё резюме</a></h4>
          <h4>+7 (937) 770-86-01</h4>
          <h4><a rel="nofollow" title="mailto:imreegall@gmail.com" href="mailto:imreegall@gmail.com">imreegall@gmail.com</a></h4>
        </div>

        <hr>

        <div class="info-messengers">
          <a class="messengers-vk" rel="nofollow" target="_blank" title="https://vk.com/reegall" href="https://vk.com/reegall"></a>
          <a class="messengers-tg" rel="nofollow" target="_blank" title="https://t.me/imreegall" href="https://t.me/imreegall"></a>
          <a class="messengers-dc" rel="nofollow" target="_blank" title="https://discordapp.com/users/..." href="https://discordapp.com/users/384075541415723008/"></a>
        </div>
      </div>

      <div class="footer-image"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "im-footer"
}
</script>

<style lang="sass">
  .im-footer
    display: flex
    justify-content: center
    margin-top: auto
    width: 100%
    background-color: $black
    +border-radius(48px 48px 0 0)
    padding: 80px 74px

    @media (min-width: 1280px)
      padding: 80px 74px

    @media (max-width: 1279px)
      padding: 60px 74px

    .footer-center
      display: flex
      justify-content: space-between
      color: $white
      width: 1100px

      .footer-info
        display: flex
        flex-direction: column
        justify-content: space-between

        @media (max-width: 1279px)
          gap: 32px

        .info-contacts
          display: flex
          flex-direction: column
          gap: 20px

        hr
          width: 100%
          height: 3px
          background-color: $white

          @media (max-width: 1279px)
            display: none

        .info-messengers
          display: flex

          @media (min-width: 1280px)
            gap: 20px

          @media (max-width: 1279px)
            gap: 15px

          > *
            @media (min-width: 1280px)
              width: 60px
              height: 60px

            @media (max-width: 1279px)
              width: 40px
              height: 40px

          .messengers-vk
            background-image: url("/assets/images/svg/vkIcon.svg")

          .messengers-tg
            background-image: url("/assets/images/svg/telegramIcon.svg")

          .messengers-dc
            background-image: url("/assets/images/svg/discordIcon.svg")


      .footer-image
        background-image: url("/assets/images/svg/footerTheme.svg")
        +background-image-settings()
        +border-radius(40px)
        width: 350px
        height: 350px

        @media (min-width: 1280px)

        @media (max-width: 1279px)
          display: none
</style>