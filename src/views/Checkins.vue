<template>
    <div class="checkins-page">
        <yandex-map class="checkins-page__map"
            ref="yaMap"
            :coords="[0, 0]"
            :controls=[]
            :zoom="10"
            @map-was-initialized="showAllMarkers">
            <ymap-marker v-for="station in stations"
                :key="station.id"
                :marker-id="station.id"
                marker-type="placemark"
                :coords="[station.lat, station.lng]"
                :hint-content="station.name"
                :icon="{
                    layout: 'default#image',
                    imageHref: require('../assets/marker.svg'),
                    imageSize: [28.5, 35],
                    imageOffset: [-14.25, -35]
                }">
            </ymap-marker>
        </yandex-map>
    </div>
</template>

<script>
import _ from "underscore";
import globalEventBus from "@/globalEventBus.js";
import stations from "@/data/stations.js";
import stationsData from "@/data/stationsData.js";

export default {
  data: () => {
    return {
      stations,
      checkinsData: {}
    };
  },
  mounted() {
    window.t = this;

    globalEventBus.$on("routeNavigated", this.showAllMarkers);
    this.checkinsData = stationsData;
  },
  beforeDestroy() {
    globalEventBus.$off("routeNavigated");
  },
  methods: {
    showAllMarkers() {
      let map = this.$refs.yaMap.myMap;

      map.setBounds(map.geoObjects.getBounds());
      map.setZoom(map.getZoom() - 1);
    },
    getStationDataById(id) {
      let self = this;

      return _.map(self.checkinsData.checkins_timestamps, checkinTimeStamp => {
        let modifiedCheckinTimeStamp = {};

        modifiedCheckinTimeStamp.time = checkinTimeStamp.time;

        let findedStationCheckin = _.find(
          checkinTimeStamp.stations_checkins_count,
          stationCheckin => {
            return stationCheckin.id_station == id;
          }
        );

        if (findedStationCheckin && findedStationCheckin.count) {
          modifiedCheckinTimeStamp.checkins_count = findedStationCheckin.count;
        }

        return modifiedCheckinTimeStamp;
      });
    }
  }
};
</script>


<style lang="scss">
.checkins-page {
  width: 100%;
  height: 100%;
  position: relative;
  &__map {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    [class*="-copyrights-pane"],
    [class*="-controls-pane"] {
      display: none;
    }
    [class*="-ground-pane"] {
      filter: grayscale(1) brightness(0.33);
    }
  }
  &__marker {
  }
}
</style>
