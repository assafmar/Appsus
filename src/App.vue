<template>
  <div id="app">
    <el-menu :default-active="activeIndex" class="el-menu" mode="horizontal" @select="handleSelect">
    <el-menu-item index="/">
    <el-badge :value="unreadEmails" class="item">
    Email
    <i class="el-icon-message"></i>
</el-badge>
    </el-menu-item>
    <el-menu-item index="/map">Maps</el-menu-item>
</el-menu>

<transition name="fade">
    <router-view @unreadMails="updateCount"></router-view>
</transition>

  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return{
         activeIndex: '/',
         activeIndex2: '/map',
         unreadEmails: 0
    }
  },
   methods: {
      handleSelect(key, keyPath) {
        console.log(key,keyPath);
         this.$router.push(key)
      },
      updateCount(count){
        this.unreadEmails = count;
      }
    }
}
</script>

<style>
html,body{
    padding: 0;
    margin:0;
}
#app {
  color: #2c3e50;
}

.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .25s;
}

.fade-enter-active {
  transition-delay: .25s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}

sup.el-badge__content.is-fixed{
  top: 20px !important;
}

</style>
