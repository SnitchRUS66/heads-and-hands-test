<template>
    <nav class="links-menu">
        <ul class="links-menu__list">
            <li class="links-menu__list-item"
                v-for="link in links"
                :key="link.path">
                <router-link class="links-menu__link"
                    :to="link.path">
                    {{ link.text }}
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
  data: () => {
    return {
      links: [
        {
          path: "/cases",
          text: "Кейсы"
        },
        {
          path: "/formats",
          text: "Форматы"
        },
        {
          path: "/for-publishers",
          text: "Издателям"
        },
        {
          path: "/platform",
          text: "Платформа"
        },
        {
          path: "/checkins",
          text: "Чекины"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.links-menu {
  margin-top: 15px;
  &__list {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  &__list-item {
    margin-top: 6px;
    &:first-child {
      margin-top: 0;
    }
  }
  &__link {
    color: #000;
    font-size: 10.5px;
    font-weight: 300;
    line-height: 2.22;
    letter-spacing: 1.3px;
    text-decoration: none;
    text-transform: uppercase;
    &.router-link-exact-active {
      font-weight: 500;
    }
  }
}
</style>
