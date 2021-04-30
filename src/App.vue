<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style lang="scss" >
  *{
    margin: 0 ;
    padding: 0;
    font-size: 12px;
  }
  body{
    background:#fafafa;
  }
  li{
    list-style: none;
  }
  a {
    text-decoration: none;
    a:hover { text-decoration: underline; }
  }
</style>
