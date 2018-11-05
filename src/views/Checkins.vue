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
                        onMarkerClick(event, station.id);
                    }
                }">
            </ymap-marker>
        </yandex-map>
        <div class="checkins-page__chart">
            <div class="checkins-page__chart-title">
                {{ $store.state.barChartDataCollection.datasets[0].label }}
            </div>
            <bar-chart class="checkins-page__chart-graph"
                :chart-data="$store.state.barChartDataCollection">
            </bar-chart>
        </div>
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
      markers: []
    };
  },
  mounted() {
    window.t = this;

    this.checkinsData = stationsData;
  },
  methods: {
    showAllMarkers(map) {
      window.yaMap = map;

      map.setBounds(map.geoObjects.getBounds());
      map.setZoom(map.getZoom() - 1);
    },

    onMarkerClick(event, stationId) {
      this.$store.commit("setBarChartDataCollectionById", stationId);
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
    display: flex;
    flex-direction: column;
    background: #fff;
    width: 300px;
    height: 200px;
    padding: 10px 20px 0 10px;
    border-radius: 4px;
    position: absolute;
    top: 15px;
    left: 15px;
    &-title {
      height: 20px;
      font-size: 12px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      text-align: center;
    }
    &-graph {
      height: calc(100% - 20px);
    }
  }
}
</style>
