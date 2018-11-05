import Vue from "vue";
import Vuex from "vuex";
import _ from "underscore";
import stations from "@/data/stations.js";
import stationsData from "@/data/stationsData.js";

function getStationById(id) {
  return _.find(stations, station => station.id == id);
}

function getStationDataById(id) {
  return _.map(stationsData.checkins_timestamps, checkinTimeStamp => {
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

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    officeAddressCoords: [],
    barChartDataCollection: {
      labels: [""],
      datasets: [
        {
          label: "",
          backgroundColor: "#f87979",
          data: [0]
        }
      ]
    }
  },
  mutations: {
    setOfficeAddress(state, coords) {
      state.officeAddressCoords = coords;
    },
    setBarChartDataCollectionById(state, id) {
      let stationData = getStationDataById(id);
      let stationName = getStationById(id).name;

      state.barChartDataCollection = {
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
  },
  actions: {}
});
