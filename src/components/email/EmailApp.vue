<template>  
<section class="email-app">
 <transition name="slide-fade">
    <email-list class="email-list" v-if="!isMobile||(!showEmail&&!isComposing&&isMobile)"
        @defaultEmail="passingSelectedMail"
        @selectedEmail="passingSelectedMail"
        @startComposing="showDetails"
        @showEmail="showMail"
        :isMobile="isMobile">
    </email-list>
    </transition>
    <transition name="slide-fade">
    <div class="cont" v-if="isComposing||showEmail||!isMobile">
        <transition name="slide-fade">
            <email-details v-if="!isComposing&&nextMail"
                @showEmail="showMail"
                @emailDelete="emailDelete"
                @isReadChange="isReadChange"
                :email="selectedMail">
            </email-details>
            </transition>
            <transition name="slide-fade">
              <email-details v-if="!isComposing&&!nextMail"
                @showEmail="showMail"   
                @emailDelete="emailDelete"
                @isReadChange="isReadChange"
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
    </transition>



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
        this.getWindowWidth()
        this.updateUnreadEmailCounter();
    },
    data(){
    return{
        isComposing: false,
        emailToSend: null,
        selectedMail: null,
        unreadCount: 0,
        isMobile: false,
        windowWidth: 0,
        nextMail: false,
        showEmail: false

    }
  },
    methods:{

    sendEmail(mailToSend){
        emailService.sendEmail(mailToSend);
        this.showDetails();
        this.updateUnreadEmailCounter();
    },
    showDetails(){
        this.isComposing = !this.isComposing;
        console.log('composing',this.isComposing,'showing email',this.showEmail,'isMobile',this.isMobile)
   },
     passingSelectedMail(mailToSelect){
        this.isComposing = false;
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
    },
     getWindowWidth(event) {
         if(this.windowWidth < 710){
             this.isMobile = true;
         }else{
             this.isMobile = false;
         }
        this.windowWidth = document.documentElement.clientWidth;
      },
      showMail(){
          this.showEmail = !this.showEmail;
          console.log('showing', this.showEmail)
      }
},
mounted() {
    this.$nextTick(function() {
      window.addEventListener('resize', this.getWindowWidth);
      //Init
      this.getWindowWidth()
    })

  },



}

</script>




<style lang="">

.email-app{
height: 100%;
width: 100%;
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
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for <2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

.cont{
    width: 67%;
    display: block;
   height: 100vh;
}
@media (max-width: 710px) {
  .email-list{
    width: 100%;
    display: block;
    height: 100vh;
  }
  .email-app{
      display:block;
      height: 100vh;
  }
  .cont{
    width: 100%;
  }
}




    
</style>