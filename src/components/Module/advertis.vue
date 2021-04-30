<template>
 <!-- 广告2 -->
 <div class="abchid">
  <div class="abchid-cen">
   <el-carousel :interval="5000" arrow="never" height="180px" >
       <el-carousel-item v-for="item in 4" :key="item">
         <h3>{{ item }}</h3>
       </el-carousel-item>
     </el-carousel>
  </div>
 </div>
</template>

<script>
export default {
  name: '',
  components: {},
  props: {},
  data () {
    return {

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
 .abchid{
  .abchid-cen{
   width: 1200px;
   margin: 0 auto;
   margin-top: 10px;
  }
 }
</style>
