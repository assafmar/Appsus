<template>  
 <section v-if="emails" class="email-list">
     <email-preview v-for="currEmail in emails" :email="currEmail"></email-preview>
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
  created() {
    emailService.getEmails().then(mails => {
      console.log('promise returned to List', this.mails)
      this.emails = mails
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
      filter: {}
    }
  },
  computed: {
    emailsToDisplay() {
// TBD implement filter
      var emails = this.emails;
      return emails;
    },
    byby() {
      console.log('arives emails',this.emails)
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