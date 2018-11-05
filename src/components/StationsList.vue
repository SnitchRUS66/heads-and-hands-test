<template>
    <div class="stations-list">
        <div class="stations-list__item" v-for="station in stations"
            :key="station.id"
            @click="stationsListItemClick(station.id)">
            <div class="stations-list__icon">
                <img src="../assets/metro.svg" alt="M">
            </div>
            <div class="stations-list__name-native">
                {{ getNameNative(station.name) }}
            </div>
            <div class="stations-list__name-translit">
                {{ getNameTranslit(station.name) }}
            </div>
        </div>
    </div>
</template>

<script>
import stations from "@/data/stations.js";

export default {
  data: () => {
    return {
      stations
    };
  },
  methods: {
    getNameNative(name) {
      let indexOfBracket = name.indexOf("(");

      if (indexOfBracket > -1) {
        return name.substring(0, indexOfBracket - 1);
      } else {
        return name;
      }
    },
    getNameTranslit(name) {
      let indexOfBracket = name.indexOf("(");

      if (indexOfBracket > -1) {
        return name.substring(indexOfBracket);
      } else {
        return "";
      }
    },
    stationsListItemClick(stationId) {
      this.$store.commit("setBarChartDataCollectionById", stationId);
    }
  }
};
</script>

<style lang="scss">
.stations-list {
  &__item {
    display: grid;
    grid-template-areas:
      "icon nameNative"
      "icon nameTranslit";
    grid-template-columns: 50px auto;
    margin-top: 20px;
    cursor: pointer;
    &:first-child {
      margin-top: 27.5px;
    }
    &:last-child {
      margin-bottom: 27.5px;
    }
  }
  &__icon {
    grid-area: icon;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      display: block;
      width: 17px;
      height: 20px;
    }
  }
  &__name-native {
    grid-area: nameNative;
    font-size: 12px;
    font-weight: 500;
    line-height: 16.5px;
    letter-spacing: 0.1px;
  }
  &__name-translit {
    grid-area: nameTranslit;
    font-size: 11.5px;
    line-height: 16.5px;
    letter-spacing: 0.1px;
  }
}
</style>
