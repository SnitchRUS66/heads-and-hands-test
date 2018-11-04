<template>
    <div class="baron baron__root baron__clipper"
        ref="baron">
        <div class="baron__scroller"
            ref="scroller">
            <slot></slot>
        </div>
        <div class="baron__track"
            ref="track">
            <div class="baron__control baron__up"
                ref="up"
                v-if="arrows">
                ▲
            </div>
            <div class="baron__free">
                <div class="baron__bar"
                    ref="bar">
                </div>
            </div>
            <div class="baron__control baron__down"
                ref="down"
                v-if="arrows">
                ▼
            </div>
        </div>
    </div>
</template>

<script>
import baron from "baron";

export default {
  props: {
    arrows: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    baron({
      root: this.$refs.baron,
      scroller: this.$refs.scroller,
      bar: this.$refs.bar,
      scrollingCls: "_scrolling",
      draggingCls: "_dragging"
    }).controls({
      // Element to be used as interactive track. Note: it could be different from 'track' param of baron.
      track: this.$refs.track,
      forward: this.$refs.down,
      backward: this.$refs.up
    });
    this.$refs.scroller.addEventListener("scroll", this.emitScroll);
  },
  beforeDestroy() {
    this.$refs.scroller.removeEventListener("scroll", this.emitScroll);
  },
  methods: {
    emitScroll() {
      this.$emit("scroll");
    }
  }
};
</script>

<style lang="scss">
/* BASE */
.baron__clipper {
  position: relative;
  overflow: hidden;
}
.baron__scroller {
  overflow-y: scroll;
  -ms-overflow-style: none;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  margin: 0;
  border: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  -webkit-overflow-scrolling: touch;
  /* remove line to customize scrollbar in iOs */
}
.baron__scroller::-webkit-scrollbar {
  width: 0;
}
.baron__track {
  display: none;
  width: 3.5px;
  background: rgba(216, 216, 216, 0.26);
  border-radius: 1px;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
}
.baron._scrollbar {
  .baron__track {
    display: block;
  }
}
.baron__free {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
}
.baron__bar {
  width: 3.5px;
  min-height: 19px;
  background: #00e0a9;
  border-radius: 1px;
  position: absolute;
  right: 0;
  z-index: 1;
}
.baron__control {
  display: none;
}

/* SIMPLE */
.baron._simple .baron__track {
  opacity: 0;
  position: absolute;
  z-index: 3;
  top: 10px;
  bottom: 10px;
  right: 5px;
  width: 8px;
  border-radius: 5px;
  background: #ddf;
  background: rgba(0, 0, 255, 0.1);
  pointer-events: none;
}
.baron._simple.baron .baron__track {
  opacity: 1;
}
.baron._simple .baron__bar {
  position: absolute;
  z-index: 1;
  width: 8px;
  border-radius: 3px;
  background: #987;
  opacity: 0;
  -webkit-transition: opacity 0.2s linear;
  transition: opacity 0.2s linear;
  pointer-events: auto;
}
.baron._simple .baron__bar:hover {
  opacity: 0.8;
}
.baron._simple.baron .baron__bar {
  opacity: 0.6;
}

/* Mac OS X */
.baron._macosx .baron__track {
  opacity: 0;
  position: absolute;
  z-index: 3;
  top: 2px;
  bottom: 2px;
  right: 2px;
  width: 0;
}
.baron._macosx._scrollbar .baron__track {
  opacity: 1;
}
.baron._macosx .baron__bar {
  position: absolute;
  z-index: 1;
  width: 6px;
  border-radius: 3px;
  background: #333;
  opacity: 0;
  transition: 0.1s opacity 0.4s linear;
  pointer-events: auto;
}
.baron__bar._dragging {
  /*opacity: 1;*/
}
.baron._macosx .baron__bar:hover,
.baron._scrolling .baron__bar {
  transition-duration: 0s;
  transition-delay: 0s;
  opacity: 0.5;
}

/* Windows XP */
.baron._winxp .baron__scroller {
  padding-right: 17px;
}
.baron._winxp .baron__track {
  opacity: 0;
  position: absolute;
  z-index: 3;
  top: 0;
  bottom: 0;
  right: 0;
  width: 15px;
  overflow: hidden;
  background-image: linear-gradient(to right, #f2f1ec, #fdfef9);
  border: 1px solid #ecede5;
}
.baron._winxp._scrollbar .baron__track {
  opacity: 1;
}
.baron._winxp .baron__control {
  display: block;
}
.baron._winxp .baron__control,
.baron._winxp .baron__bar {
  border: 1px solid #f3ffff;
  box-shadow: 1px 1px 1px #b7caf5 inset, 1px 1px 1px #7b9fd3;
  border-radius: 3px;
  background-image: linear-gradient(to right, #c9d7fc, #baccf4);
  text-align: center;
  font-size: 8px;
  line-height: 14px;
  color: #4e6287;
  cursor: default;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.baron._winxp .baron__control:hover,
.baron._winxp .baron__bar:hover {
  background-image: linear-gradient(to right, #d9e7ff, #cadcff);
}
.baron._winxp .baron__up,
.baron._winxp .baron__down {
  position: absolute;
  z-index: 1;
  width: 15px;
  height: 16px;
  box-sizing: border-box;
}
.baron._winxp .baron__up {
  top: 0;
}
.baron._winxp .baron__down {
  bottom: 0;
}
.baron._winxp .baron__free {
  position: absolute;
  top: 18px;
  bottom: 18px;
  right: 0;
  width: 0;
}
.baron._winxp .baron__bar {
  position: absolute;
  z-index: 1;
  width: 15px;
  box-sizing: border-box;
  border: 1px solid #f3ffff;
  box-shadow: 1px 1px 1px #b7caf5 inset, 1px 1px 1px #7b9fd3;
  border-radius: 3px;
  background-image: linear-gradient(to right, #c9d7fc, #baccf4);
  opacity: 1;
  -webkit-transition: opacity 0.2s ease-in;
  transition: opacity 0.2s ease-in;
  pointer-events: auto;
}
.baron._winxp .baron__bar:before {
  content: "";
  position: absolute;
  top: 45%;
  left: 3px;
  width: 6px;
  height: 7px;
  z-index: 1;
  background-image: linear-gradient(
    to bottom,
    #f0f4ff 0px,
    #f0f4ff 1px,
    rgba(255, 255, 255, 0) 1px,
    rgba(255, 255, 255, 0) 2px,
    #f0f4ff 2px,
    #f0f4ff 3px,
    rgba(255, 255, 255, 0) 3px,
    rgba(255, 255, 255, 0) 4px,
    #f0f4ff 4px,
    #f0f4ff 5px,
    rgba(255, 255, 255, 0) 5px,
    rgba(255, 255, 255, 0) 6px,
    #f0f4ff 6px,
    #f0f4ff 7px,
    rgba(255, 255, 255, 0) 7px,
    rgba(255, 255, 255, 0) 8px
  );
}
.baron._winxp .baron__bar:after {
  content: "";
  position: absolute;
  top: 47%;
  left: 4px;
  width: 6px;
  height: 7px;
  background-image: linear-gradient(
    to bottom,
    #8aaff6 0px,
    #8aaff6 1px,
    rgba(138, 175, 246, 0) 1px,
    rgba(138, 175, 246, 0) 2px,
    #8aaff6 2px,
    #8aaff6 3px,
    rgba(138, 175, 246, 0) 3px,
    rgba(138, 175, 246, 0) 4px,
    #8aaff6 4px,
    #8aaff6 5px,
    rgba(138, 175, 246, 0) 5px,
    rgba(138, 175, 246, 0) 6px,
    #8aaff6 6px,
    #8aaff6 7px,
    rgba(138, 175, 246, 0) 7px,
    rgba(138, 175, 246, 0) 8px
  );
}
.baron._winxp .baron__bar._dragging,
.baron._winxp .baron__bar:hover {
  background-image: linear-gradient(to right, #d9e7ff, #cadcff);
}

/* Ubuntu */
.baron._ubuntu12 .baron__scroller {
  padding-right: 14px;
}
.baron._ubuntu12 .baron__track {
  opacity: 0;
  position: absolute;
  z-index: 3;
  top: 0;
  bottom: 0;
  right: 0;
  width: 14px;
  box-sizing: border-box;
  border: 1px solid #c5c1bd;
  border-radius: 7px;
  background-image: linear-gradient(to right, #d3d3d3, #e5e5e5);
}
.baron._ubuntu12._scrollbar .baron__track {
  opacity: 1;
}
.baron._ubuntu12 .baron__bar {
  position: absolute;
  z-index: 1;
  width: 12px;
  box-sizing: border-box;
  border: 1px solid #fff;
  border-radius: 6px;
  background-image: linear-gradient(to right, #fcfbfb, #eeeceb);
  opacity: 1;
  pointer-events: auto;
  box-shadow: 0 0 1px #d6d3d0;
}
.baron._ubuntu12 .baron__bar:hover,
.baron._ubuntu12 .baron__bar._dragging {
  background-image: linear-gradient(to right, #e96d3a, #f58050);
  border-color: #e1632f;
}
.baron__bar._dragging {
  /*opacity: 1;*/
}
.baron._ubuntu12 .baron__bar:hover,
._scrolling .baron__bar {
}
</style>
