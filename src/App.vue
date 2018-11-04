<template>
    <div class="app">
        <main class="main">
            <router-view />
        </main>
        <nav-panel class="nav"/>
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
@font-face {
  font-family: "Muller";
  src: url("./assets/fonts/Muller/MullerLight.woff") format("woff"),
    url("./assets/fonts/Muller/MullerLight.otf") format("otf");
  font-weight: 300;
}
@font-face {
  font-family: "Muller";
  src: url("./assets/fonts/Muller/MullerRegular.woff") format("woff"),
    url("./assets/fonts/Muller/MullerRegular.otf") format("otf");
  font-weight: 400;
}
@font-face {
  font-family: "Muller";
  src: url("./assets/fonts/Muller/MullerMedium.woff") format("woff"),
    url("./assets/fonts/Muller/MullerMedium.otf") format("otf");
  font-weight: 500;
}

html {
  height: 100%;
}

body {
  height: 100%;
}

a {
  color: #0040ff;
}

.app {
  font-family: "Muller", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  height: 100%;
}

.main {
  flex-grow: 1;
}

@media (max-width: 700px) {
  .app {
    flex-direction: column;
  }
  .main {
    height: 50%;
  }
  .nav {
    height: 50%;
  }
}
</style>
