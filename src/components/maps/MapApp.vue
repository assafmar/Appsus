<template>  
<section class="map-app">
<map-list></map-list>
<map-canvas></map-canvas>






</section>
</template>


<script>
import MapList from './MapList.vue';
import MapCanvas from './MapCanvas.vue';
    export default {
        components: {
      MapList,
      MapCanvas
      
    }







    }


</script>




<style lang="">
.map-app{
    background: gray;
    width: 100%;
    height: 100vh;
    display: flex;
    transition: all .5s;
}




    
</style>