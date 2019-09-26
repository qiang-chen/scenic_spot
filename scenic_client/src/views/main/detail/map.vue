<template>
  <div class="mapp">
    <Header title="景点导航"></Header>
    <label class="inp">
      地址：
      <input v-model="keyword" />
    </label>
    <baidu-map
      class="map"
      id="mapID"
      :center="postionMap"
      :zoom="zoom"
      :scroll-wheel-zoom="true"
      @click="getPoint"
    >
      <bm-map-type
        :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP']"
        anchor="BMAP_ANCHOR_TOP_LEFT"
      ></bm-map-type>
      <bm-local-search
        :keyword="keyword"
        :auto-viewport="true"
        :location="location"
        zoom="15"
        style="display: none"
      ></bm-local-search>
      <bm-marker :position="postionMap">
        <bm-info-window
          :show="show"
          @close="infoWindowClose"
          @open="infoWindowOpen"
          style="font-size: 14px"
        >
          <p>站点：{{ add.siteName }}</p>
          <p>站点地址：{{ add.site }}</p>
        </bm-info-window>
      </bm-marker>
      <bm-scale anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-scale>
      <bm-navigation anchor="BMAP_ANCHOR_BOTTOM_LEFT"></bm-navigation>
      <bm-overview-map anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :isOpen="true"></bm-overview-map>
      <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>
      <bm-city-list anchor="BMAP_ANCHOR_TOP_LEFT"></bm-city-list>
      <bm-panorama></bm-panorama>
    </baidu-map>
  </div>
</template>
<script>
import Header from "@/components/Head.vue";
import { getLngLat } from "@/api/index";
export default {
  props: {},
  components: { Header },
  data() {
    return {
      jgNameDialog: false,
      show: false,
      postionMap: {
        //地图坐标
        lng: "",
        lat: ""
      },
      location: "",
      keyword: "", //搜索框关键词
      zoom: 15, //放大比例
      address: "", //位置详细信息
      add: {
        siteName: "",
        site: "",
        jd: "",
        wd: "",
        desce: "",
        type: "",
        jgName: "",
        jgNum: ""
      },
      organizationData: [],
      jgName: ""
    };
  },
  computed: {},
  methods: {
    getPoint(e) {
      //点击地图获取一些信息，
      this.show = true;
      this.postionMap.lng = e.point.lng; //通过  e.point.lng获取经度
      this.postionMap.lat = e.point.lat; //通过  e.point.lat获取纬度
      this.add.jd = e.point.lng;
      this.add.wd = e.point.lat;
      this.zoom = e.target.getZoom();
      let geocoder = new BMap.Geocoder(); //创建地址解析器的实例
      geocoder.getLocation(e.point, rs => {
        this.add.site = rs.address;
        //地址描述(string)=
        console.log(rs.address); //这里打印可以看到里面的详细地址信息，可以根据需求选择想要的
        console.log(rs.addressComponents); //结构化的地址描述(object)
        console.log(rs.addressComponents.province); //省
        console.log(rs.addressComponents.city); //城市
        console.log(rs.addressComponents.district); //区县
        console.log(rs.addressComponents.street); //街道
        console.log(rs.addressComponents.streetNumber); //门牌号
        console.log(rs.surroundingPois); //附近的POI点(array)
        console.log(rs.business); //商圈字段，代表此点所属的商圈(string)
      });
    },
    infoWindowClose() {
      this.show = false;
    },
    infoWindowOpen() {
      setInterval(() => {
        this.show = true;
      }, 100);
    }
  },
  created() {
    let { id } = this.$route.query;
    getLngLat(id).then(res => {
      this.postionMap.lng = res.result[0].lng;
      this.postionMap.lat = res.result[0].lat;
      this.zoom = res.result[0].zoom;
    });
  },
  mounted() {}
};
</script>
<style scoped lang="scss">
.mapp {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.map {
  flex: 1;
  overflow: auto;
}
.inp {
  width: 100%;
  height: 1rem;
  font-size: 0.3rem;
  line-height: 1rem;
}
</style>