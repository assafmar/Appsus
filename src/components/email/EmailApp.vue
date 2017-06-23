<template>  
<section class="email-app">
    <email-list
        @defaultEmail="passingSelectedMail"
        @selectedEmail="passingSelectedMail"
        @startComposing="startComposing">
    </email-list>
    <div class="cont">
        <transition name="slide-fade">
            <email-details
                @emailDelete="emailDelete"
                @isReadChange="isReadChange"
                v-if="!isComposing&&nextMail"
                :email="selectedMail">
            </email-details>
            </transition>
            <transition name="slide-fade">
              <email-details
                @emailDelete="emailDelete"
                @isReadChange="isReadChange"
                v-if="!isComposing&&!nextMail"
                :email="selectedMail">
            </email-details>
         </transition>
         <transition name="slide-fade">
            <email-compose v-show="isComposing"
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
import emailService from '../../services/email/email.service';


export default {
  name: 'EmailApp',
  components: {
      EmailList,
      EmailDetails,
      EmailCompose,
    },
    created(){
       this.updateUnreadEmailCounter();
    },
    data(){
    return{
        isComposing: false,
        emailToSend: null,
        selectedMail: null,
        unreadCount: 0,
        nextMail: true

    }
  },
    methods:{
        sendEmail(mailToSend){
        emailService.sendEmail(mailToSend);
        this.showDetails();
        this.updateUnreadEmailCounter();
    },
    startComposing(){
        this.isComposing = !this.isComposing;
        console.log('Composing');
    },
    showDetails(){
        this.isComposing = !this.isComposing;
   },
     passingSelectedMail(mailToSelect){
        this.nextMail= !this.nextMail;
        this.selectedMail = mailToSelect; 
    },
    emailDelete(emailToDelete){
        emailService.deleteEmail(emailToDelete);
        this.passingSelectedMail();
        this.updateUnreadEmailCounter();
        emailService.getEmails().then(mails =>{
            this.selectedMail = mails[0]
        })
    },
    updateUnreadEmailCounter(){
        emailService.getEmails().then(mails =>{
           this.unreadCount = emailService.getUnreadEmailCount();
           this.$emit('unreadMails', this.unreadCount);
       })
    },
    isReadChange(val, mail){
        this.updateUnreadEmailCounter()
        emailService.changeEmailIsRead(mail,val)

       
        
    }
}


}

</script>




<style lang="">

.email-app{
height: 100%;
width: 100%;
background: #FFFFFF;
display: flex;
}

.slide-fade-enter-active {
  transition: all .8s ease;
}
.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for <2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

.cont{

    width: 100%;
    display: block;
   height: 100vh;
}




    
</style>