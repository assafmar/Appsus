<template>
  <div id="app">
    <div class="nav-bar"></div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
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
.nav-bar{
  width: 100%;
  height: 80px;
  background: #475669;
}
</style>
