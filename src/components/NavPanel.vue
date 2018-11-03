<template>
    <aside class="nav-panel">
        <div class="nav-panel__arrow"></div>
        <div class="nav-panel__toolbar">
            <div class="nav-panel__logo">
                <img src="../assets/logo.svg"
                    alt="HPMD Network">
            </div>
        </div>
        <div class="nav-panel__main">
            <links-menu class="nav-panel__links-menu" />
            <addresses-menu class="nav-panel__addresses-menu"/>
            <contacts-list class="nav-panel__contacts-list"/>
            <social-media class="nav-panel__social-media"/>
        </div>
    </aside>
</template>

<script>
import LinksMenu from "@/components/LinksMenu.vue";
import AddressesMenu from "@/components/AddressesMenu.vue";
import ContactsList from "@/components/ContactsList.vue";
import SocialMedia from "@/components/SocialMedia.vue";

export default {
  components: {
    LinksMenu,
    AddressesMenu,
    ContactsList,
    SocialMedia
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
  &__arrow {
    width: 18px;
    height: 26px;
    position: absolute;
    top: 50%;
    right: 100%;
    pointer-events: none;
    overflow: hidden;
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
    height: 48px;
    padding: 0 50px;
    display: flex;
    align-items: center;
  }
  &__logo {
    img {
      width: 93px;
    }
  }
  &__main {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    padding: 0 50px;
  }
  &__links-menu {
    margin-bottom: auto;
  }
  &__addresses-menu {
    margin-bottom: 36px;
  }
  &__contacts-list {
    margin-bottom: 13.5px;
  }
  &__social-media {
    margin-bottom: 18.2px;
  }
}
</style>
