<template>
  <div class="home">
    <div id="container"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import { getpop } from "@/apis/poi";
export default {
  name: "Create",
  methods: {
    init() {
      var map = new AMap.Map("container", {
        zoom: 11, //级别
        center: "", // [116.397428, 39.90923], //中心点坐标 职位""以城市中心为地图中心的
        // viewMode: "3D", //使用3D视图
      });
    },
    getPopData() {
      // let params = {'key':'265d1f10919c205f3d5ad493dfc643a9','keywords':'北京大学','types':'高等院校','city':'北京','children':'1','offset':'20','page':'1','extensions':'all'}
      let params = {
        key: "0b4c14b2f6f02f94e6d3f34e703d786f",
        polygon:"116.0415636,39.925531|116.437094,39.906737",
        types: "120000", // poi类型编码
        page_size: "25",
        page_num:'1'
      };
      getpop(params).then((res) => {
        console.log(res);
      });
    },
  },
  mounted() {
    this.init();
    this.getPopData();
  },
};
</script>
