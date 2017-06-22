<template>  
<section class="email-app">
    <email-list>EmailList</email-list>
        <input type="checkbox" v-model ="isComposing"></input> 
        <div class="cont">
        <transition name="fade">
            <email-details v-if="!isComposing"></email-details>
        </transition>
        <transition name="fade">
            <email-compose v-if="isComposing"
            @cancel="showDetails"
            @send="sendEmail">
            </email-compose>
            </transition>
            </div>



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
        emailToSend: null

    }
  },
  methods:{
   sendEmail(mailToSend){
       this.emailToSend = mailToSend;
    console.log(mailToSend, "BOBOB")
   },
   showDetails(){
       this.isComposing = !this.isComposing
       console.log('Cancel')
   }
  }
}




</script>




<style lang="">

.email-app{
height: 100%;
width: 100%;
background: #EFF2F7;
display: flex;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0
}

.cont{

    width: 100%;
    display: block;
    height:100vw;
}




    
</style>