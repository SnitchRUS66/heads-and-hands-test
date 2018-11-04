<template>
    <div class="address-page">
        <yandex-map class="address-page__map"
            ref="yaMap"
            :coords="$store.state.officeAddressCoords"
            :controls=[]
            :zoom="14"
            :placemarks="placemarks"
            @map-was-initialized="setMarkers">
        </yandex-map>
    </div>
</template>

<script>
import officesCoords from "@/data/officesCoords.js";
import globalEventBus from "@/globalEventBus.js";

export default {
  data: () => {
    return {
      officesCoords,
      mapIsInitialized: false,
      placemarks: []
    };
  },
  created() {
    this.$store.commit(
      "setOfficeAddress",
      this.officesCoords[this.$route.query.office] || officesCoords[0]
    );
  },
  beforeDestroy() {
    globalEventBus.$off("officeAddressClicked", this.officeAddressClickHandler);
  },
  methods: {
    setMarkers() {
      function getMarkerLayout(suffix) {
        let modifier = suffix ? ` address-page__marker_${suffix}` : "";

        return window.ymaps.templateLayoutFactory.createClass(
          `<div class="address-page__marker${modifier}">
               <div class="address-page__marker-logo"></div>
               <div class="address-page__marker-arrow"></div>
               <div class="address-page__marker-bottom-border"></div>
           </div>`
        );
      }

      if (!this.mapIsInitialized) {
        this.placemarks.push(
          {
            coords: this.officesCoords.msc,
            options: {
              iconLayout: getMarkerLayout("msc"),
              iconOffset: [-60, -50]
            }
          },
          {
            coords: this.officesCoords.spb,
            options: {
              iconLayout: getMarkerLayout("spb"),
              iconOffset: [-60, -50]
            }
          }
        );
        globalEventBus.$on(
          "officeAddressClicked",
          this.officeAddressClickHandler
        );
        this.mapIsInitialized = true;
      }
    },
    officeAddressClickHandler(coords) {
      if (this.$store.state.officeAddressCoords == coords) {
        this.$refs.yaMap.myMap.panTo(coords);
      }
    }
  }
};
</script>


<style lang="scss">
.address-page {
  width: 100%;
  height: 100%;
  &__map {
    width: 100%;
    height: 100%;
    [class*="-copyrights-pane"],
    [class*="-controls-pane"] {
      display: none;
    }
    [class*="-ground-pane"] {
      //filter: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><filter id='grayscale'><feColorMatrix type='matrix' values='0.9999 0.9999 0.9999 0 0 0.9999 0.9999 0.9999 0 0 0.9999 0.9999 0.9999 0 0 0 0 0 1 0'/></filter></svg>#grayscale");
      //filter: url("data:image/svg+xml;utf-8,<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' style='display:none'><defs><filter id='high-contrast-filter'><feColorMatrix type='saturate' values='0' result='desat'/><feComponentTransfer><feFuncR type='discrete' tableValues='0 0 0 0 0 0 0 0 0 0 0 0 0 0 .8 .9 1' /><feFuncG type='discrete' tableValues='0 0 0 0 0 0 0 0 0 0 0 0 0 0 .8 .9 1' /><feFuncB type='discrete' tableValues='0 0 0 0 0 0 0 0 0 0 0 0 0 0 .8 .9 1' /></feComponentTransfer></filter></defs></svg>#gray");
      filter: grayscale(1) brightness(0.33);
    }
  }
  &__marker {
    display: inline-flex;
    padding: 13px;
    border: 1px solid #fff;
    border-bottom-color: transparent;
    border-radius: 2px;
    position: relative;
    &:before {
      content: "";
      width: 15px;
      height: 15px;
      background-repeat: no-repeat;
      background-size: contain;
      position: absolute;
      right: calc(100% + 1px);
      bottom: calc(100% + 1px);
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
    &-logo {
      width: 93.3px;
      height: 13.3px;
      background-image: url("../assets/logo.svg");
      background-repeat: no-repeat;
      background-size: contain;
    }
    &-arrow {
      width: 26px;
      height: 18px;
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      pointer-events: none;
      overflow: hidden;
      &:before {
        content: "";
        width: 14px;
        height: 14px;
        border: 1px solid #fff;
        transform-origin: center center;
        transform: translate(-50%, 50%) rotate(45deg) skew(-9deg, -9deg);
        position: absolute;
        bottom: 100%;
        left: 50%;
      }
    }
    &-bottom-border {
      height: 4px;
      position: absolute;
      right: -1px;
      bottom: -1px;
      left: -1px;
      &:before,
      &:after {
        content: "";
        width: calc(50% - 12.5px);
        border-bottom: 1px solid #fff;
        position: absolute;
        top: 0;
        bottom: 0;
      }
      &:before {
        left: 0;
        border-left: 1px solid #fff;
        border-bottom-left-radius: 2px;
      }
      &:after {
        right: 0;
        border-right: 1px solid #fff;
        border-bottom-right-radius: 2px;
      }
    }
  }
}
</style>
