<template>
    <section class="map-app">
        <transition name="slide-fade">
            <map-list class="item-list" v-if="!isMobile||(!showEmail&&!isComposing&&isMobile)" @defaultItem="passingSelectedItem" @selectedItem="passingSelectedItem" @startComposing="showDetails" @showItem="showItem" @deleteItem="itemDelete" :isMobile="isMobile">
    
            </map-list>
        </transition>
        <transition name="slide-fade">
            <div class="cont" v-if="isComposing||showEmail||!isMobile">
                <transition name="slide-fade">
                    <!--<map-canvas v-if="!isComposing" @showItem="showItem" :Item="selectedItem" :center="locations[0].coords" :locations="locations" :selectedItem="this.selectedItem">-->
                    <map-canvas v-if="!isComposing&&locations" @showItem="showItem"  :center="this.center" :locations="locations" :selectedItem="selectedItem">
                    </map-canvas>
                </transition>
                <transition name="slide-fade">
                    <map-compose v-show="isComposing" @cancel="showDetails" @save="saveItem">
                    </map-compose>
                </transition>
            </div>
        </transition>
    
    </section>
</template>


<script>
import MapList from './MapList.vue';
import MapCanvas from './MapCanvas.vue';
import MapCompose from './MapCompose.vue';
import mapService from '../../services/maps/map.service';


export default {
    name: 'MapApp',
    components: {
        MapList,
        MapCanvas,
        MapCompose,
    },
    created() {
        this.getWindowWidth()
        mapService.getLocations().then(locations => {
            console.log('promise returned to List', this.locations)
            this.locations = locations
            console.log('after', this.locations)
            this.center = locations[0].coords
            
        });
    },
    data() {
        return {
            center: null,
            locations: null,
            isComposing: false,
            itemToSend: null,
            selectedItem: null,
            isMobile: false,
            windowWidth: 0,
            nextItem: false,
            showItem: false,
            showEmail: false

        }
    },
    methods: {

        saveItem(itemToSave) {
            console.log('map app - saving new location', itemToSave);
            mapService.saveLocation(itemToSave);
            this.showDetails();
        },
        showDetails() {
            this.isComposing = !this.isComposing;
            console.log('composing', this.isComposing, 'showing Item', this.showItem, 'isMobile', this.isMobile)
        },
        passingSelectedItem(itemToSelect) {
            this.isComposing = false;
            this.nextItem = !this.nextItem;
            if (this.selectedItem === itemToSelect) this.selectedItem = null;
            else this.selectedItem = itemToSelect;
            console.log('mapp-app recived event - item to select:', itemToSelect, this.selectedItem)
        },
        itemDelete(itemToDelete) {
            console.log('map app - recived request to delete item:',itemToDelete);
            mapService.deleteLocation(itemToDelete);
            // this.passingSelectedItem();
            this.selectedItem = null;
            this.center=(this.locations[0])?this.locations[0].coords:{lat:32.0872919, lng:34.8027026}
            console.log(this.locations[0],this.center,'!!!!!!!!!!!!')
            // mapService.getLocations().then(locations => {
            //     console.log('Local', locations)
            //     this.selectedItem = locations[0]
            // })
        },

        getWindowWidth(event) {
            if (this.windowWidth < 710) {
                this.isMobile = true;
            } else {
                this.isMobile = false;
            }
            this.windowWidth = document.documentElement.clientWidth;
        },
        showItem() {
            this.showItem = !this.showItem;
            console.log('showing', this.showItem)
        }
    },
    mounted() {
        this.$nextTick(function () {
            window.addEventListener('resize', this.getWindowWidth);
            //Init
            this.getWindowWidth()
        })

    },



}

</script>




<style lang="">
.map-app {
    /*height: 100%;
    width: 100%;*/
    background: #FFFFFF;
    display: flex;
    transition: all .5s;
}

.slide-fade-enter-active {
    transition: all .8s ease;
}

.slide-fade-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter,
.slide-fade-leave-to
/* .slide-fade-leave-active for <2.1.8 */

{
    transform: translateX(10px);
    opacity: 0;
}

.item-list {
    /*width: 33%;*/
    /*display: block;
        height: 100vh;*/
}

.cont {
    width: 67%;
    display: block;
    height: 100vh;
}

@media (max-width: 710px) {
    .item-list {
        width: 100%;
        display: block;
        height: 100vh;
    }
}

@media (max-width: 710px) {
    .cont {
        width: 100%;
    }
}
</style>



