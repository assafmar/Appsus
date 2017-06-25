<template>
    <section class="map-preview" @click.stop="seeDetails">
        <div class="preview-title">
            <div class="location-from">{{location.name}}</div>
            <el-button class="close-button" @click.stop="deleteItem" icon="close"></el-button> 
        </div>
            <div class="location-date">{{location.category}}</div>
        <p class="location-subject">{{location.address}}</p>
    
    </section>
</template>

<script>
export default {
    name: 'map-preview',
    props: ['location'],
    methods: {
        seeDetails() {
            this.$emit('selectedItem',this.location);
            this.$emit('showLocation');
        },        
        deleteItem() {
            this.$emit('deleteItem',this.location);
        },
    },
    data() {
        return{
            isSelected:false,
        }
    },
    created(){
    }
}
</script>




<style scoped>
.map-preview {
    background: #D3DCE6;
    /*height: 80px;*/
    border-radius: 3px;
    /*width: 100%;*/
    margin-bottom: 1px;
    display: flex;
    flex-direction:column;
    padding: 0px 10px;
     border-radius: 3px;
    cursor: pointer;
    box-shadow: 4px 0px 7px -1px rgba(173,171,173,1);
    transition: all .3s;
     box-sizing: border-box;

}

.preview-title{
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-top: 0.5em;
    flex-wrap: wrap;
}

.close-button{
    background-color: transparent;
    border:none;
    padding:0px;
    color: #999999;
    
}
.el-button:focus, .el-button:hover {
    color: #666666;
}

.location-from{
font-size: 1em;    
}
.location-date{
font-size: 0.7em;    
}
.location-subject{
font-size: 1em;    
  
   
}
.map-preview:hover {
    background: #C0CCDA;
    box-shadow: 4px 0px 7px -1px #99A9BF;


}

</style>