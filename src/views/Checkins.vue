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
                }"
                :callbacks="{
                    click: function (event) {
                        fillChartDataByStationId(station.id)
                    }
                }">
            </ymap-marker>
        </yandex-map>
        <bar-chart class="checkins-page__chart"
            :chart-data="barChartDataCollection">
        </bar-chart>
    </div>
</template>

<script>
import _ from "underscore";
import stations from "@/data/stations.js";
import stationsData from "@/data/stationsData.js";
import BarChart from "@/components/BarChart.vue";

export default {
  components: {
    BarChart
  },
  data: () => {
    return {
      stations,
      checkinsData: {},
      barChartDataCollection: {}
    };
  },
  mounted() {
    window.t = this;

    this.checkinsData = stationsData;
  },
  methods: {
    showAllMarkers() {
      let map = this.$refs.yaMap.myMap;

      map.setBounds(map.geoObjects.getBounds());
      map.setZoom(map.getZoom() - 1);
    },
    getStationById(id) {
      let self = this;

      return _.find(self.stations, station => station.id == id);
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
    },
    fillChartDataByStationId(id) {
      let stationData = this.getStationDataById(id);
      let stationName = this.getStationById(id).name;

      this.barChartDataCollection = {
        labels: _.map(stationData, stationData => stationData.time),
        datasets: [
          {
            label: stationName,
            backgroundColor: "#f87979",
            data: _.map(stationData, stationData => stationData.checkins_count)
          }
        ]
      };
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
  &__chart {
    width: 300px;
    height: 200px;
    position: absolute;
  }
}
</style>
