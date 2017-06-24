<template>  
 <section v-if="emails" class="email-list">
 <el-button class="list-compose" @click="startComposing" type="primary" icon="edit">Compose</el-button>
    <el-tabs type="card" @tab-click="handleClick">
    <el-tab-pane label="inbox" value="1">
     <email-preview 
        @selectedEmail="passingSelectedMail"
        @showEmail="showEmail"
        v-for="currEmail in emails" 
        :key="currEmail.id" 
        :email="currEmail">
    </email-preview>
    </el-tab-pane>
    <el-tab-pane label="sent" value="2">
   

    </el-tab-pane>
  </el-tabs>
  </section>
</template>


<script>
  // <section class="email-list">

      // <email-preview ></email-preview>
//      <email-preview v-for="currEmail in emails" :key="currEmail.id" @click.native="selectEmail(currEmail)"  :email="currEmail">

import EmailPreview from './EmailPreview.vue';
import emailService from '../../services/email/email.service';
    
export default {
  name: 'EmailList',
  props: ['isMobile'],
  created() {
    emailService.getEmails().then(mails => {
      console.log('promise returned to List', this.mails)
      this.emails = mails
      this.$emit('defaultEmail', this.emails[0])
    console.log('after', this.emails)});
      
  },

  components: {
     EmailPreview,

  },
  data() {
    return {
      emails: null,
      selectedEmail: null,
      isCreateMode: false,
      filter: {},
      key: null
    }
  },
  computed: {
    emailsToDisplay() {
// TBD implement filter
      var emails = this.emails;
      return emails;
    },
    // emailToShow() {
    //         if (!key) return this.emails;
    //         return this.emails.filter(email => {
    //             return email.category.key
    //         });
    
  },

  methods:{
   passingSelectedMail(mailToSelect){
    this.$emit('selectedEmail',mailToSelect);
   },
   startComposing(){
     this.$emit('startComposing')
   },
      handleClick(tab, event) {
        
        console.log(tab._props.label);
      },
      emailsToShow(key) {
            let emailToshow = this.emails.filter(email => {
                 if(email.category.sent){
                  return email.category.sent
                }
              console.log(emailToshow)
              this.emails=emailToshow
            });
  },
  showEmail(){
    this.$emit('showEmail')
  }

}
}






</script>




<style lang="">

.email-list{
   box-sizing: border-box;
    width:33%;
    height: 100%;
    background: #eef1f6;
    padding: 0 10px 0 5px;
    transition: all .5s;
}

.list-compose{
  width: 100%;
  margin: 5px 0;
  box-shadow: 0 0px 11px -1px rgba(173,171,173,1);
}

.el-tabs__content{
  overflow: visible !important;
}
@media (max-width: 711px) {
  .email-list{
    width:100%;
    height: 100%;
  }
  
}


    
</style>