<template>
  <nav>
    <router-link to="/">创建</router-link> |
    <router-link to="/poidata">POI</router-link>
  </nav>
  <router-view :style="{height:winHeight + 'px'}"/>
</template>

<script>
export default {
    data(){
        return {
            winHeight:window.innerHeight
        }
    }
}
</script>

<style lang="scss">
nav{
    position: fixed;
    top:0;
    left: 0;
    width: 100%;
    min-height: 50px;
    background: rgba(255,255,255,.7);
    z-index: 999;
}
</style>
