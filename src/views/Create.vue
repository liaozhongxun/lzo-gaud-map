<template>
    <div class="home">
		<div id="container"></div>
	</div>
</template>

<script>
// @ is an alias to /src

export default {
    name: "Create",
    methods: {
        init() {
            var map = new AMap.Map("container", {
                zoom: 11, //级别
                center: "",// [116.397428, 39.90923], //中心点坐标 职位""以城市中心为地图中心的
                // viewMode: "3D", //使用3D视图
            });
        },
    },
    mounted() {
        this.init();
    },
};
</script>
