<template>
    <div class="nav-panel">
        <div class="nav-panel__arrow"></div>
        <div class="nav-panel__toolbar">
            <div class="nav-panel__logo">
                <img src="../assets/logo.svg"
                    alt="HPMD Network">
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.nav-panel {
  width: 370px;
  background: #fff;
  box-shadow: -3.5px 0 10px 0 rgba(155, 155, 155, 0.25);
  &__arrow {
    width: 18px;
    height: 18px;
    background: #fff;
    transform: rotate(0deg);
    box-shadow: -3.5px 0 10px 0 rgba(155, 155, 155, 0.25);
    position: absolute;
    display: none; // TODO: DELETE
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
}
</style>
