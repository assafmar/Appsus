<template>  
<section class="email-app">
<email-list>EmailList</email-list>
<input type="checkbox" v-model ="isComposing"></input>
<email-details v-if="!isComposing"></email-details>
<email-compose v-if="isComposing"></email-compose>



</section>


</template>


<script>
import EmailList from './EmailList.vue';
import EmailDetails from './EmailDetails.vue';
import EmailCompose from './EmailCompose.vue';

export default {
  name: 'EmailApp',
  components: {
      EmailList,
      EmailDetails,
      EmailCompose,
  },
  data(){
    return{
        isComposing: false,

    }
  },
  methods:{
   
  }
}




</script>




<style lang="">
html,body{
    padding: 0;
    margin:0;
}
.email-app{
height: 100vw;
background: #EFF2F7;
display: flex;

}




    
</style>