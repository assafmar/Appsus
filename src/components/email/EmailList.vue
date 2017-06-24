<template>
  <section v-if="emails" class="email-list">
    <el-button class="list-compose" @click="startComposing" type="primary" icon="edit">Compose</el-button>
    <email-directory></email-directory>
    <email-search @searchQueryB="setQuery" @radioSelectB="setRadio"></email-search>
    <email-preview @selectedEmail="passingSelectedMail" v-for="currEmail in emailsToDisplay" :key="currEmail.id" :email="currEmail" :class="{ 'is-not-read': !currEmail.isRead }"></email-preview>
  </section>
</template>


<script>

import EmailPreview from './EmailPreview.vue';
import EmailSearch from './EmailSearch.vue';
import EmailDirectory from './EmailDirectory.vue';
import emailService from '../../services/email/email.service';

export default {
  name: 'EmailList',

  components: {
    EmailPreview,
    EmailSearch,
    EmailDirectory,
  },
  created() {
    emailService.getEmails().then(mails => {
      console.log('promise returned to List', this.mails)
      this.emails = mails
      this.$emit('defaultEmail', this.emails[0])
      console.log('after', this.emails)
    });

  },
  data() {
    return {
      emails: null,
      selectedEmail: null,
      isCreateMode: false,
      searchQuery: '',
      radioSelect: 'All'
    }
  },

  computed: {
    emailsToDisplay() {
      var emails = this.emails;
      if (this.radioSelect !== 'All') {
        console.log('filtering only unread emails')
        emails = this.emails.filter(email => {
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
    }
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

    }
  },
}


</script>




<style lang="">
.email-list {
  width: 33%;
  height: 100%;
  background: #E5E9F2;
  border: 4px solid darkgray;
  padding: 0 10px 0 5px;
}

.list-compose {
  width: 100%;
  margin: 5px 0;
  box-shadow: 4px 0px 11px -1px rgba(173, 171, 173, 1);
}

.is-not-read {
  font-weight: bold;
}
</style>