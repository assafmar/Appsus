<template>  
<section class="email-list">
<email-preview></email-preview>
<email-preview></email-preview>
<email-preview></email-preview>
<email-preview></email-preview>
<email-preview></email-preview>
<email-preview></email-preview>
<email-preview></email-preview>
<email-preview></email-preview>


</section>



</template>


<script>
import EmailPreview from './EmailPreview.vue';
    
export default {
  name: 'EmailList',
  components: {
     EmailPreview,

  },
  data(){
    return{
    }
  },
  methods:{
   
  }
}








</script>




<style lang="">

.email-list{
    width:33%;
    height: 100%;
    background: #E5E9F2;
}



    
</style>