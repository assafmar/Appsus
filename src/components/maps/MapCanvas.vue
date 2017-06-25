<template>  
<section class="map-canvas">

<gmap-map
    :center="center"
    :zoom="14"
    style="width: 100%; height: 100%"
  >
    <gmap-marker
      :key="index"
      v-for="(m, index) in markers"
      :position="m.position"
      :clickable="true"
      :draggable="true"
      @click="center=m.position"
    ></gmap-marker>
  </gmap-map>






</section>
</template>


<script>
// import GoogleMapsLoader from 'google-maps';
var map;
var google;

    export default {
       name: 'MapApp',
       props: ['options'],
        created(){
            GoogleMapsLoader.KEY = 'AIzaSyBriaPD72cENJFp8ezr9wJJ-l2VSHua3VA',
            GoogleMapsLoader.load(this.mapLoad)
            this.mapMarker(this.places)
        },
        methods:{
            mapLoad(google){
            map = new google.maps.Map(document.getElementById('map'),this.myOptions)
            // new google.maps.Marker({position: {lat: 32.0684, lng: 34.8248}, map:map,})
            console.log(google)
            },
            mapMarker(places){
                GoogleMapsLoader.load(function(google) {
                google = google
                new google.maps.Marker({position: {lat: places.position.lat, lng: places.position.lng}, map:map,});});
            },
            addInfo(){

            }
        },
        data(){
            return{
            //    myOptions: {center: {lat: 32.0684, lng: 34.8248},zoom: 17},
            //    places: {position: {lat: 32.0684, lng: 34.8248},map:map,},
                center: {lat: 32.0684, lng: 34.8248},


        markers: [{
          position: {lat: 32.0684, lng: 34.8248} //marker
        }, {
          position: {lat: 32.0659, lng: 34.8291}
        }]
            }
        },
        // beforeDestroy(){
        //     GoogleMapsLoader.release()
            
        // },
    //    updated(){
    //        GoogleMapsLoader.load(this.mapLoad)
    //    }




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