<template>
  <section v-if="emails" class="email-list">
    <el-button class="list-compose" @click="startComposing" type="primary" icon="edit">Compose</el-button>
    <email-search @searchQueryB="setQuery" @radioSelectB="setRadio"></email-search>
    <el-tabs type="card" @tab-click="handleClick">
      <el-tab-pane label="inbox" value="1">
        <!--<email-preview @selectedEmail="passingSelectedMail" @showEmail="showEmail" v-for="currEmail in emailsToDisplay" :key="currEmail.id" :email="currEmail">-->
        </email-preview>
      </el-tab-pane>
      <el-tab-pane label="sent" value="2">
      </el-tab-pane>
    </el-tabs>
    <email-preview @selectedEmail="passingSelectedMail" @showEmail="showEmail" v-for="currEmail in emailsToDisplay" :key="currEmail.id" :email="currEmail" :class="{ 'is-not-read': !currEmail.isRead }"></email-preview>

  </section>
</template>


<script>

import EmailPreview from './EmailPreview.vue';
import EmailSearch from './EmailSearch.vue';
import emailService from '../../services/email/email.service';

export default {
  name: 'EmailList',

  components: {
    EmailPreview,
    EmailSearch,
  },
  created() {
    emailService.getEmails().then(mails => {
      console.log('promise returned to List', this.mails)
      this.emails = mails
      this.$emit('defaultEmail', this.emails[0])
      this.emailsToShow('inbox')
      console.log('after', this.emails)
    });

  },
  data() {
    return {
      emails: null,
      selectedEmail: null,
      isCreateMode: false,
      searchQuery: '',
      radioSelect: 'All',
      key: null,
      currEmails: null
    }
  },

  computed: {
    emailsToDisplay(emailsToShow) {
      var emails = this.currEmails;
      if (this.radioSelect !== 'All') {
        console.log('filtering only unread emails')
        emails = emails.filter(email => {
          var isRead = email.isRead;
          var result = (isRead === false);
          return (result)
        })
      }
      if (this.searchQuery) {/// LESSON: need to be an arrow function so the "this"" will work
        emails = emails.filter(email => {
          var from = email.from.toLowerCase();
          var query = this.searchQuery.toLowerCase();
          var result = from.indexOf(query);
          return (result >= 0)
        })
      }
      return emails;
    },
    
  },

  methods: {
    passingSelectedMail(mailToSelect) {
      this.$emit('selectedEmail', mailToSelect);
    },
    startComposing() {
      this.$emit('startComposing');
    },
    setQuery(searchQuery) {
      console.log('setQuery', searchQuery);
      this.searchQuery = searchQuery;
      console.log('setQuery', this.searchQuery);
    },
    setRadio(radioSelect) {
      console.log('setRadio', radioSelect);
      this.radioSelect = radioSelect;
      console.log('setRadio', this.radioSelect);
    },

    handleClick(tab, event) {//tabs
      this.emailsToShow(tab._props.label)
      console.log(tab._props.label);
    },
    emailsToShow(key) {
      console.log('Enter in to loop', key)
      var emailsToShow;
      if (key === 'inbox') {
        emailsToShow = this.emails.filter(email => {
          console.log('inLoop', email.category.inbox)
          return email.category.inbox;
        });
      } else if (key === 'sent') {
        emailsToShow = this.emails.filter(email => {
          console.log('inLoop', email.category.sent)
          return email.category.sent;
        });
      }
      console.log('end loop', emailsToShow)
      this.currEmails = emailsToShow;
      console.log(this.currEmails)

    },
    showEmail() {
      this.$emit('showEmail')
    }
  }
}


</script>




<style lang="">

.email-list {
    box-sizing: border-box;
    width: 33%;
    height: 100%;
    background: #eef1f6;
    padding: 0 10px 0 5px;
    transition: all .5s;
  }

  .list-compose {
    width: 100%;
    margin: 5px 0;
    box-shadow: 4px 0px 11px -1px rgba(173, 171, 173, 1);
  }

  .is-not-read {
    font-weight: bold;
  }
 

.el-tabs__content {
  overflow: visible !important;
}

@media (max-width: 720px) {
  .email-list {
    width: 100%;
    height: 100%;
  }
}

</style>