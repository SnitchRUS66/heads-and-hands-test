<template>
    <aside class="nav-panel">
        <div class="nav-panel__arrow-pan">
            <div class="nav-panel__arrow"
                ref="arrow">
            </div>
        </div>
        <div class="nav-panel__toolbar">
            <div class="nav-panel__logo">
                <router-link to="/">
                    <img src="../assets/logo.svg"
                        alt="HPMD Network">
                </router-link>
            </div>
        </div>
        <baron-scroller class="nav-panel__main"
            ref="main"
            @scroll="debounceRepositionArrow()()">
            <div class="nav-panel__main-content">
                <links-menu class="nav-panel__links-menu" />
                <addresses-menu class="nav-panel__addresses-menu" />
                <contacts-list class="nav-panel__contacts-list" />
                <social-media class="nav-panel__social-media" />
            </div>
        </baron-scroller>
    </aside>
</template>

<script>
import _ from "underscore";
import BaronScroller from "@/components/BaronScroller.vue";
import LinksMenu from "@/components/LinksMenu.vue";
import AddressesMenu from "@/components/AddressesMenu.vue";
import ContactsList from "@/components/ContactsList.vue";
import SocialMedia from "@/components/SocialMedia.vue";

export default {
  components: {
    BaronScroller,
    LinksMenu,
    AddressesMenu,
    ContactsList,
    SocialMedia
  },
  watch: {
    $route() {
      let self = this;

      self.repositionArrow();
    }
  },
  mounted() {
    let self = this;

    self.repositionArrow();
    window.addEventListener("resize", self.debounceRepositionArrow());
  },
  beforeDestroy() {
    window.removeEventListener("resize", self.debounceRepositionArrow());
  },
  methods: {
    repositionArrow() {
      this.$nextTick(() => {
        let activeNavElement = document.getElementsByClassName(
          "router-link-exact-active router-link-active"
        )[0];
        let activeElementHeight = activeNavElement.offsetHeight;
        let activeElementTopOffset = activeNavElement.getBoundingClientRect()
          .top;
        let arrowHeight = this.$refs.arrow.offsetHeight;

        this.$refs.arrow.style.top = `${activeElementTopOffset +
          activeElementHeight / 2 -
          arrowHeight / 2 -
          2}px`;
      });
    },
    debounceRepositionArrow() {
      let self = this;

      return _.debounce(() => {
        self.repositionArrow();
      }, 100);
    }
  }
};
</script>

<style lang="scss">
.nav-panel {
  display: flex;
  flex-direction: column;
  width: 370px;
  background: #fff;
  box-shadow: -3.5px 0 10px 0 rgba(155, 155, 155, 0.25);
  position: relative;
  &__arrow-pan {
    width: 18px;
    position: absolute;
    top: 0;
    right: 100%;
    bottom: 0;
    pointer-events: none;
    overflow: hidden;
  }
  &__arrow {
    width: 18px;
    height: 26px;
    position: absolute;
    top: 50%;
    right: 0;
    pointer-events: none;
    overflow: hidden;
    transition: top linear 300ms;
    &:before {
      content: "";
      width: 14px;
      height: 14px;
      background: #fff;
      transform-origin: center center;
      transform: translate(-50%, -50%) rotate(45deg) skew(9deg, 9deg);
      box-shadow: -3.5px 3.5px 10px 0 rgba(155, 155, 155, 0.25);
      position: absolute;
      top: 50%;
      left: 100%;
      right: 0;
    }
  }
  &__toolbar {
    flex-shrink: 0;
    height: 48px;
    padding: 0 50px;
    display: flex;
    align-items: center;
  }
  &__logo {
    margin-top: 5px;
    a {
      display: inline-flex;
      img {
        width: 93px;
      }
    }
  }
  &__main {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }
  &__main-content {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    padding: 0 50px;
  }
  &__links-menu {
    margin-bottom: auto;
  }
  &__addresses-menu {
    margin: 36px 0;
  }
  &__contacts-list {
    margin-bottom: 13px;
  }
  &__social-media {
    margin-bottom: 18px;
  }
  .baron {
    display: flex;
    flex-direction: column;
    &._scrollbar {
      box-shadow: inset 0 7px 9px -7px rgba(0, 0, 0, 0.1);
    }
    &__scroller {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
    }
  }
  .baron__track {
    top: 19.5px;
    right: 20px;
    bottom: 19.5px;
  }
}
</style>
