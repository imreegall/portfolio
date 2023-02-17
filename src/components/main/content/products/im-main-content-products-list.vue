<template>
  <div class="im-main-content-products-list">
    <ul class="products-list">
      <li v-for="product in products" class="product">
        <h3>{{ product.productName }}</h3>

        <div class="product-categories">
          <div
              v-for="category in product.productCategories"
              v-bind:class="category"
          >
            <h5></h5>
          </div>
        </div>

        <div
            class="product-preview"
            v-bind:style="'background-color: ' + product.backgroundColor + ';'"
        >
          <div
              class="preview-image"
              v-bind:style="'background-image: url(/assets/images/products-list/' + product.imagePath + ');'"
          ></div>
        </div>

        <div class="product-links">
          <div class="link-to-github">
            <h5>GitHub</h5>
          </div>

          <div class="link-to-deploy">
            <h5>Deploy</h5>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import {products} from "./products-list/index.js";

export default {
  name: "im-main-content-products-list",
  data() {
    return {
      products
    }
  }
}
</script>

<style lang="sass">
  .im-main-content-products-list
    .products-list
      display: flex
      flex-direction: row
      flex-wrap: wrap

      @media (min-width: 1280px)
        flex-direction: row
        row-gap: 50px
        column-gap: 21px

      @media (max-width: 1279px)
        flex-direction: column
        gap: 40px

      .product
        display: flex
        flex-direction: column
        gap: 12px

        @media (min-width: 1280px)
          width: calc(33% - 14px)

        @media (max-width: 1279px)
          width: 100%

        .product-categories
          display: flex
          flex-wrap: wrap
          flex-direction: row
          justify-content: flex-start
          align-items: flex-start
          flex: 1
          gap: 10px

          > *
            padding: 4px 12px
            +border-radius(10px)
            color: white
            display: flex

          .html
            background-color: $blue

            > *
              &:before
                content: "HTML"

          .css
            background-color: $green

            > *
              &:before
                content: "CSS"

          .sass
            background-color: $pink

            > *
              &:before
                content: "SASS"

          .scss
            background-color: $pink

            > *
              &:before
                content: "SCSS"

          .js
            background-color: $orange

            > *
              &:before
                content: "JS"

          .Mobile
            color: $black
            background-color: $lightyellow

            > *
              &:before
                content: "Mobile"

        .product-preview
          //background-color: rgba(0, 61, 42, 0.33)
          padding: 30px 15px 20px
          +border-radius(15px)

          .preview-image
            background-image: url("/assets/images/products-list/prod1.png")
            width: 100%
            padding-top: 50%
            +background-image-settings()
            +border-radius(7px)

        .product-links
          display: flex
          gap: 40px

          > *
            display: flex
            align-items: center
            gap: 6px
            text-decoration: underline solid $black 1px

            &:hover
              text-decoration: underline solid $black 2px
              cursor: pointer
              +user-select(none)

            &:after
              +background-image-settings()
              width: 20px
              height: 20px
              content: ""
              display: block

            &.link-to-github:after
              background-image: url("/assets/images/svg/gitLogo.svg")

            &.link-to-deploy:after
              background-image: url("/assets/images/svg/webLogo.svg")




</style>