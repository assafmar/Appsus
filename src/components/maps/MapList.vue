
<template>
  <section v-if="locations" class="item-list">
    <el-button class="list-compose" @click="startComposing" type="primary" icon="edit">Add New</el-button>
    <!--<Location-search @searchQueryB="setQuery" @radioSelectB="setRadio"></Location-search>-->
  
    <map-preview @selectedLocation="passingSelectedLocation" v-for="currLocation in locations" :key="currLocation.id" :location="currLocation" ></map-preview>
  
  </section>
</template>


<script>

import MapPreview from './MapPreview.vue';
import mapService from '../../services/maps/map.service';

export default {
  name: 'map-list',
  components: {
    MapPreview
  },
  created() {
    mapService.getLocations().then(locations => {
      console.log('promise returned to List', this.locations)
      this.locations = locations
      this.$emit('defaultLocation', this.locations[0])
      console.log('after', this.locations)
    });

  },
  data() {
    return {
      locations: null,
      selectedLocation: null,
      isCreateMode: false,
    }
  },

  computed: {
 
  },

  methods: {
    passingSelectedLocation(locationToSelect) {
      this.$emit('selectedLocation', locationToSelect);
    },
    startComposing() {
      this.$emit('startComposing');
    },
    showLocation() {
      this.$emit('showLocation')
    }
  }
}

</script>




<style lang="">

.item-list {
    box-sizing: border-box;
    width: 33%;
    height: 100%;
    background: #eef1f6;
    padding: 0 10px 0 5px;
    transition: all .5s;
  }

  .list-compose {
    width: 100%;
    margin: 5px 0;
    box-shadow: 4px 0px 11px -1px rgba(173, 171, 173, 1);
  }

  .is-not-read {
    font-weight: bold;
  }
 

.el-tabs__content {
  overflow: visible !important;
}

@media (max-width: 711px) {
  .item-list {
    width: 100%;
    height: 100%;
  }
}

</style>

