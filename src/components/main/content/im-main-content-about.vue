<template>
  <div class="im-main-content-about" id="about">
    <div class="about-title">
      <h1>Обо мне</h1>
    </div>

    <div class="about-content">
      <div class="content-info">
        <div class="info-text">
          <h4>
            Мне 21 год и я только начинаю свою карьеру
            в области front-end разработки. Я учусь
            на программного инженера и хотел бы совместить
            с учебой работу в этой области. Мне предстоит
            долгий путь по RoadMap веб-разработки.
            <br><br>
            Тут покажу, чему я уже научился.
          </h4>
        </div>

        <div class="info-skills">
          <div class="skills-title">
            <h2>Hard Skills</h2>
          </div>

          <ul class="skills-list">
            <li
                class="skill"
                v-for="skill in skills"
            >
              <div class="skill-name"><h3>{{skill.skillName}}</h3></div>

              <div
                  class="skill-icon"
                  :style="{ backgroundImage: `url(${getImageUrl(`svg/${skill.imagePath}`)})` }"
              ></div>

              <div class="skill-bar">
                <div
                    class="progress-bar"
                    :style="{
                        background: `repeating-linear-gradient(
                            45deg,
                            ${skill.skillColors[0]},
                            ${skill.skillColors[0]} 10px,
                            ${skill.skillColors[1]} 10px,
                            ${skill.skillColors[1]} 20px)`,
                        width: `${skill.progressPercent}%`
                    }"
                ></div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="content-image"></div>
    </div>
  </div>
</template>

<script>
import {skills} from "./about/skills-list/index.js";
import getImageUrl from "../../mixins/getImageUrl.js";

export default {
  name: "im-main-content-about",
  data() {
    return {
      skills
    }
  },
  methods: {
    getImageUrl
  }
}
</script>

<style lang="sass">
  .im-main-content-about
    display: flex
    flex-direction: column

    @media (min-width: 1280px)
      gap: 40px

    @media (max-width: 1279px)
      gap: 32px

    .about-content
      display: flex

      @media (min-width: 1280px)
        flex-direction: row
        align-items: stretch

        gap: 54px

      @media (max-width: 1279px)
        flex-direction: column-reverse
        align-items: center
        gap: 32px

      .content-info
        display: flex
        flex-direction: column

        @media (min-width: 1280px)
          gap: 48px

        @media (max-width: 1279px)
          gap: 32px

        .info-text
          > *
            display: flex
            flex-direction: row-reverse

            @media (min-width: 1280px)
              gap: 20px

            @media (max-width: 1279px)
              gap: 12px

            &:after
              content: ""
              +border-radius(999px)
              width: 10px
              background-color: $black

        .info-skills
          display: flex
          flex-direction: column

          @media (min-width: 1280px)
            gap: 40px

          @media (max-width: 1279px)
            gap: 24px

          .skills-list
            display: flex
            flex-direction: column

            @media (min-width: 1280px)
              gap: 20px

            @media (max-width: 1279px)
              gap: 10px

            .skill
              display: flex
              align-items: center

              @media (min-width: 1280px)
                gap: 20px

              @media (max-width: 1279px)
                gap: 10px

              .skill-name
                text-align: center

                @media (min-width: 1280px)
                  min-width: 120px

                @media (max-width: 1279px)
                  min-width: 100px

              .skill-icon
                display: flex
                width: 40px
                height: 40px
                +background-image-settings()

              .skill-bar
                +border-radius(5px)
                display: flex
                background: repeating-linear-gradient( 45deg, #d6d6d6, #d6d6d6 10px, #b8b8b8 10px, #b8b8b8 20px)
                width: 100%
                overflow: hidden

                @media (min-width: 1280px)
                  height: 40px

                @media (max-width: 1279px)
                  height: 30px

      .content-image
        background-image: url("/src/assets/images/svg/boy2.svg")
        +background-image-settings(contain)
        display: block

        @media (min-width: 1280px)
          min-width: 395px

        @media (max-width: 1279px)
          width: 100%
          height: 300px

</style>