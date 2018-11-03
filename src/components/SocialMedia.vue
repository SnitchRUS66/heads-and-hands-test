<template>
    <ul class="social-media">
        <li class="social-media__item">
            <a href="#"
                target="_blank"
                rel="noopener">
                <img src="../assets/twitter.svg"
                    alt="twitter">
            </a>
        </li>
        <li class="social-media__item">
            <a href="#"
                target="_blank"
                rel="noopener">
                <img src="../assets/facebook.svg"
                    alt="facebook">
            </a>
        </li>
        <li class="social-media__item">
            <a href="#"
                target="_blank"
                rel="noopener">
                <img src="../assets/google.svg"
                    alt="google">
            </a>
        </li>
        <li class="social-media__item">
            <a href="#"
                target="_blank"
                rel="noopener">
                <img src="../assets/vimeo.svg"
                    alt="vimeo">
            </a>
        </li>
    </ul>
</template>

<style lang="scss">
.social-media {
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
  &__item {
    margin-left: 22px;
    &:first-child {
      margin-left: 0;
    }
    a {
      img {
        height: 18.2px;
        width: auto;
      }
    }
  }
}
</style>
