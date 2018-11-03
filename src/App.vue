<template>
    <div id="app">
        <router-view class="router-view" />
        <nav-panel />
    </div>
</template>

<script>
import "normalize.css";
import NavPanel from "@/components/NavPanel.vue";

export default {
  components: {
    NavPanel
  },
  data: () => {
    return {};
  }
};
</script>

<style lang="scss">
html {
  height: 100%;
}

body {
  height: 100%;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  height: 100%;
}

.router-view {
  flex-grow: 1;
}
</style>
