<template>  
<section class="map-canvas" v-if="this.locations">

<gmap-map
    :center="currCenter"
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
      @dblclick="currCenter=m.coords"
    >
    </gmap-marker>
  </gmap-map>
</section>
</template>


<script>
    export default {
       name: 'MapCanvas',
       props: ['locations','center', 'selectedItem'],
        created(){
            // console.log(this.locations,this.center,this.selectedItem)
            this.currCenter = this.center
        },
       watch:{
           selectedItem:function () {
               if(this.selectedItem){
                this.toggleInfoWindow(this.selectedItem)}
                else{
                    this.infoWinOpen=false;
                }
    },
        currCenter:function (){
            if(!this.currCenter)this.currCenter={lat:32.0872919, lng:34.8027026}
        }

       },
        methods:{
            toggleInfoWindow(marker, idx) {
            let infoStr = `<h2>${marker.name}</h2><h4>${marker.description}</h4>`
            this.infoWindowPos = marker.coords;
            this.infoContent = infoStr;
            //check if its the same marker that was selected if yes toggle
            if (this.currentMidx == marker.id) {
              this.infoWinOpen = !this.infoWinOpen;
            }
            //if different marker set infowindow to open and reset current marker index
            else {
              this.infoWinOpen = true;
              this.currentMidx = marker.id;
            }
          },
        },
        data(){
            return{
            currCenter:{lat:32.0872919, lng:34.8027026},
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



