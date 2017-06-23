<template>
    <section class="email-search">
<!--code here-->
 <form id="search">
    Search <input name="query" v-model="searchQuery">
  </form>
 <template v-for="branch in branches">
    <input type="radio"
      name="branch"
      :id="branch"
      :value="branch"
      v-model="currentBranch">
    <label :for="branch">{{branch}}</label>
  </template>

    </section>
</template>

<script>
export default {
    name: 'email-search',
    props: ['email'],
    methods: {
    }
}
</script>

<style>
.email-search {
    background: #00FF00;
    height: 80px;
        margin-bottom: 1px;
}

.search{
    padding: 10px;
}
</style>