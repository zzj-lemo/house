<template>
  <gmap-map
    :center="centers"
    :zoom="11"
    @click="updateMaker"
  >
    <gmap-marker
      :position="position"
      :draggable="true"
      @dragend="updateMaker"
    />
  </gmap-map>
</template>
<script>
import { gmapApi } from "vue2-google-maps";

export default {
  props: {
    position: {
      type: Object,
      default: () => {
        return {
          lat: 43.648509660046656,
          lng: -79.3789402652274,
        };
      },
    },
  },
  data() {
    return {
      place: null,
    };
  },
  computed: {
    google: gmapApi, // 获取官方的OBject 使用官方API的时候可以用
    centers() {
      return {
        lat: this.position.lat,
        lng: this.position.lng,
      };
    },
  },
  created() {},
  mounted() {},
  methods: {
    updateMaker: function (event) {
      console.log("updateMaker, ", event.latLng.lat(), event.latLng.lng());
      this.position = {
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
      };
      this.pointToAddress(
        this.position.lat,
        this.position.lng,
        this.pushAddress
      );
    },
    pushAddress(res) {
      this.$emit("mark", res, this.position);
    },
    // pointToAddress(lat, lng, backcall) {
    //   // 实例化Geocoder服务用于解析地址
    //   var geocoder = new this.google.maps.Geocoder();
    //   // 地理反解析
    //   geocoder.geocode(
    //     { location: new this.google.maps.LatLng(lat, lng) },
    //     function geoResults(results, status) {
    //       if (status === this.google.maps.GeocoderStatus.OK) {
    //         backcall(results[0].formatted_address);
    //       } else {
    //         console.log("：error " + status);
    //       }
    //     }
    //   );
    // },
  },
};
</script>
<style lang="scss" scoped>
.vue-map-container {
    width: 100%;
    height: 2.3rem;
}
</style>
 