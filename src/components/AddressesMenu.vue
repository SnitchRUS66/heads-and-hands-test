<template>
    <nav class="addresses-menu">
        <ul class="addresses-menu__list">
            <li class="addresses-menu__list-item">
                <router-link class="addresses-menu__link addresses-menu__link_msc"
                    to="/address?office=msc"
                    @click.native="setMapCoords(officesCoords.msc)">
                    Москва<br />
                    +7 (495) 269 84 10<br />
                    ул. Ленинская Слобода, 19<br />
                    Бизнес-центр &laquo;Омега плаза&raquo;
                </router-link>
            </li>
            <li class="addresses-menu__list-item">
                <router-link class="addresses-menu__link addresses-menu__link_spb"
                    to="/address?office=spb"
                    @click.native="setMapCoords(officesCoords.spb)">
                    Санкт-Петербург<br />
                    + 7 (812) 240-43-35<br />
                    196158, наб. Обводного канала 199,<br />
                    &laquo;Обводный двор&raquo;, офис 3 &laquo;А&raquo;
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
import officesCoords from "@/data/officesCoords.js";
import globalEventBus from "@/globalEventBus.js";

export default {
  data: () => {
    return {
      officesCoords
    };
  },
  methods: {
    setMapCoords(coords) {
      this.$store.commit("setOfficeAddress", coords);
      globalEventBus.$emit("officeAddressClicked", coords);
    }
  }
};
</script>


<style lang="scss">
.addresses-menu {
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
    display: inline-block;
    font-size: 8px;
    line-height: 1.5;
    letter-spacing: 0.1px;
    color: #4a4a4a;
    text-decoration: none;
    position: relative;
    &:before {
      content: "";
      width: 15px;
      height: 15px;
      background-repeat: no-repeat;
      background-size: contain;
      position: absolute;
      top: -1px;
      right: calc(100% + 16px);
    }
    &_msc {
      &:before {
        width: 13.5px;
        height: 13.5px;
        background-image: url("../assets/red-star.svg");
      }
    }
    &_spb {
      &:before {
        width: 11.5px;
        height: 12px;
        background-image: url("../assets/blue-anchor.svg");
      }
    }
    &.router-link-exact-active {
      font-weight: 500;
      color: #000;
    }
  }
}
</style>
