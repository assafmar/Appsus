<template>  
<section class="map-canvas" v-if="this.locations">

<gmap-map
    :center="center"
    :zoom="14"
    style="width: 100%; height: 100%"
  >
  <gmap-info-window 
  :options="infoOptions" 
  :position="infoWindowPos" 
  :opened="infoWinOpen" 
  :content="infoContent" 
  @closeclick="infoWinOpen=false">
  </gmap-info-window>
    <gmap-marker
      :key="index"
      v-for="(m, index) in locations"
      :position="m.coords"
      :clickable="true"
      :draggable="false"
      :infoText="m.description"
      @click="toggleInfoWindow(m, index)"
      @dblclick="center=m.coords"
    >
    

    </gmap-marker>


  </gmap-map>






</section>
</template>


<script>
    export default {
       name: 'MapApp',
       props: ['locations','center', 'selectedItem'],
        created(){
            // console.log(this.locations, 'Bbbbbbbbbbbbbbb')
            this.center = center;
            this.locations = locations
          
        },
        mounted(){
             this.center = this.locations[0].coords
        },
        methods:{
            toggleInfoWindow(marker, idx) {
            let infoStr = `<h2>${marker.name}</h2><h4>${marker.description}</h4>`
            this.infoWindowPos = marker.coords;
            this.infoContent = infoStr;
            //check if its the same marker that was selected if yes toggle
            if (this.currentMidx == idx) {
              this.infoWinOpen = !this.infoWinOpen;
            }
            //if different marker set infowindow to open and reset current marker index
            else {
              this.infoWinOpen = true;
              this.currentMidx = idx;

            }
          },
            addInfo(){

            }
        },
        data(){
            return{
            locations: null,
            center: null,
            infoContent: '',
             infoWindowPos: {
            lat: 0,
            lng: 0
          },
          infoWinOpen: false,
          currentMidx: null,
          //optional: offset infowindow so it visually sits nicely on top of our marker
          infoOptions: {
            pixelOffset: {
              width: 0,
              height: -35
            }
          },
              
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



