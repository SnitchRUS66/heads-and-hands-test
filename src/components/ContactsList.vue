<template>
    <ul class="contacts-list">
        <li class="contacts-list__item">
            Размещение рекламы:<br />
            +7 945 249-48-91<br />
            +7 966 009-30-65<br />
            <a href="mailto:media@hpmdnetwork.ru">media@hpmdnetwork.ru</a>
        </li>
        <li class="contacts-list__item">
            По вопросам подключения сайтов к сети<br />
            HPMD Network или использования<br />
            SSP HPMD Ads:<br />
            <a href="mailto:media@hpmdnetwork.ru">media@hpmdnetwork.ru</a>
        </li>
    </ul>
</template>

<style lang="scss">
.contacts-list {
  margin: 0;
  padding: 0;
  list-style: none;
  &__item {
    font-size: 8px;
    font-weight: 500;
    line-height: 1.5;
    letter-spacing: 0.1px;
    color: #4a4a4a;
    margin-top: 7px;
    &:first-child {
      margin-top: 0;
    }
    a {
      text-decoration: none;
    }
  }
}
</style>
