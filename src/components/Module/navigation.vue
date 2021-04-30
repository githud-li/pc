<template>
 <!-- 同级页面导航 -->
 <div class="navigation">
  <div class="navigation-cen">
   <el-menu
     :default-active="activeIndex2"
     class="el-menu-demo"
     mode="horizontal"
     @select="handleSelect"
     background-color="#BF270F"
     text-color="#fff"
     active-text-color="#ffd04b">
     <el-menu-item index="4" v-for="item in name" :key='item'><a href="" target="_blank">{{item}}</a></el-menu-item>
   </el-menu>

   <!-- <ul>
    <li v-for="item in name" :key='item'><a href="">{{item}}</a></li>
   </ul> -->
  </div>
 </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data () {
    return {
      name: ['首页', '求购信息', '展会信息', '新闻资讯']
    }
  },
  computed: {},
  watch: {},
  created () { },
  mounted () { },
  methods: {}
}
</script>

<style scoped lang="scss">
 .navigation{

  .navigation-cen{
   width: 1200px;
   // height: 40px;
   background: #BF270F;
   margin: 0 auto;
   // ul{
   //  li{
   //   float: left;
   //   line-height: 40px;
   //   margin: 0px 40px 0px 10px;
     a{

      font-size: 16px;

     }
   //  }
   // }
  }
 }

</style>
