<template>  
<section class="map-canvas" v-if="this.locations">

<gmap-map
    :center="center"
    :zoom="14"
    style="width: 100%; height: 100%"
  >

    <gmap-marker
      :key="index"
      v-for="(m, index) in locations"
      :position="m.coords"
      :clickable="true"
      :draggable="true"
      @click="center=m.coords"
    >
    </gmap-marker>


  </gmap-map>






</section>
</template>


<script>
    export default {
       name: 'MapApp',
       props: ['locations','center'],
        created(){
            console.log(this.locations, 'Bbbbbbbbbbbbbbb')
            this.center = center
            this.locations = locations
          
        },
        mounted(){
             this.center = this.locations[0].coords
        },
        methods:{
            
            addInfo(){

            }
        },
        data(){
            return{
            locations: null,
            center: null,
              
            }
        },
        beforeDestroy(){
            
            
        },
       updated(){
          
       }




    }


</script>




<style lang="">
.map-canvas{
    background: #EFF2F7;
    /*width: 60%;*/
    height: 100vh;
}
#map{
    width:100%;
    height: 90%;
}

</style>