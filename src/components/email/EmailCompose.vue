<template>  
<section class = "email-compose">
   To:email<el-input placeholder="Please input" v-model="to"></el-input>







</section>
</template>


<script>
    export default {

    data(){
        return{
       to: '',
    //    from,
    //    subject,
    //    text,

    }
  },

  methods:{

  }

    }



</script>




<style lang="">
.email-compose{
background: #99A9BF;
width: 100%;
}




    
</style>