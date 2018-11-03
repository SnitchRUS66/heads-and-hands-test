<template>
    <nav class="addresses-menu">
        <ul class="addresses-menu__list">
            <li class="addresses-menu__list-item">
                <router-link class="addresses-menu__link addresses-menu__link_msc"
                    to="/address?office=msc">
                    Москва<br />
                    +7 (495) 269 84 10<br />
                    ул. Ленинская Слобода, 19<br />
                    Бизнес-центр &laquo;Омега плаза&raquo;
                </router-link>
            </li>
            <li class="addresses-menu__list-item">
                <router-link class="addresses-menu__link addresses-menu__link_spb"
                    to="/address?office=spb">
                    Санкт-Петербург<br />
                    + 7 (812) 240-43-35<br />
                    196158, наб. Обводного канала 199,<br />
                    &laquo;Обводный двор&raquo;, офис 3 &laquo;А&raquo;
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<style lang="scss">
.addresses-menu {
  &__list {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  &__list-item {
  }
  &__link {
    font-size: 8px;
    line-height: 1.5;
    letter-spacing: 0.1px;
    color: #4a4a4a;
    text-decoration: none;
    &_msc {
    }
    &_spb {
    }
    &.router-link-exact-active {
      font-weight: 500;
      color: #000;
    }
  }
}
</style>
