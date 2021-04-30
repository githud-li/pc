<template>
 <!-- 搜索 -->
 <div class="search">
  <div class="search-Centered">
   <img src="../../assets/logo.jpg" />
   <div class="search-right">
     <el-input placeholder="请输入关键词" v-model="input">
        <template slot="append">搜索</template>
      </el-input>
   </div>
  </div>
 </div>
</template>

<script>
export default {
  data () {
    return {
      input: ''
    }
  }
}
</script>

<style scoped lang="scss">
 .search{
  background: #fff;
  width: 100%;
  .search-Centered{
   position: relative;
   width: 1200px;
   height: 90px;
   margin: 0 auto;
   display: flex;
   align-items: center;
   img{
    width: 290px;
    height: 75px;
    align-items: center;
   }
  }
  .search-right{
   position: absolute;
   top: 24px;
   right: 80px;
  }
 }
 .el-input-group--append{
  width: 600px;
  .el-input-group__append{
   background-color: #BF270F;
  }
 }

</style>
