<template>
    <section class="item-compose">
        <h3>Location name:</h3>
        <el-input class="to" size="large" placeholder="enter the name of the place" v-model="name"></el-input>
        <h3>Category:</h3>
        <el-input class="sub" size="large" placeholder="category" v-model="category">{{category}}</el-input>
        <div class="location-inputs">
            <div class="location-input">
                <h4>Latitude:</h4>
                <el-input class="sub" size="medium" placeholder="such as 32.4668" v-model="lat">{{lat}}</el-input>
            </div>
            <div class="location-input">
                <h4>Longitude:</h4>
                <el-input class="sub" size="medium" placeholder="such as 42.4325" v-model="lng">{{lng}}</el-input>
            </div>
        </div>
        <h4>Address:</h4>
        <el-input class="sub" size="medium" placeholder="number,street,city,state,country " v-model="address">{{address}}</el-input>
        <el-input class="description" :autosize="{ minRows: 6, maxRows: 16}" type="textarea" placeholder="description" v-model="description">{{description}}</el-input>
        <br/>
        <el-button-group class="compose-buttons">
            <el-button class="compose-button" @click="cancel" type="warning"> Cancel</el-button>
            <el-button class="compose-button" @click="send" type="success">Save</el-button>
        </el-button-group>
    
    </section>
</template>


<script>
import { Notification } from 'element-ui';
export default {
    data() {
        return {
            name: '',
            category: '',
            lat: undefined,
            lng: undefined,
            address: '',
            description: ''


        }
    },

    methods: {
        send() {
            this.getDataToSave();
            this.$emit('save', this.itemData);
            this.clear()
        },
        cancel() {
            this.$emit('cancel');
            this.clear();
        },
        getDataToSave() {
            this.itemData = {
                name: this.name,
                category: this.category,
                lat: this.lat,
                lng: this.lng,
                address: this.address,
                description: this.description
            }
        },
        clear() {
            this.name = '';
            this.category = '';
            this.lat = undefined;
            this.lng = undefined;
            this.address = '';
            this.description = '';


        }

    }

}



</script>




<style lang="">
.item-compose {
    font-size: 1.2em;
    display: inline-block;
    background: #F9FAFC;
    width: 100%;
    height: 100%;
    padding-left: 0.5em;
}

.location-inputs {
    display: flex;
}

.location-input{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;

}

h3,
h4,
.description {
    margin: 5px;
    padding: 0px;
}

.compose-buttons {
    margin: 10px;
    margin-left: 68%;
}

.compose-button {
    box-shadow: 4px 0px 11px -1px rgba(173, 171, 173, 1);
}

.to {
    width: 80%;
    margin-left: 10px;
}

.sub {
    width: 80%;
    margin-left: 10px;
    margin-bottom: 5px;
}

.txt {
    width: 80%;
    margin: 30px 10px 10px 10px;
}





/*h3{
    margin: 10px;
}*/
</style>