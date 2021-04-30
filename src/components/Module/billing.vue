<template>
 <!-- 广告 -->
 <div class="ab">
  <div class="ab-Centered">
   <div class="ab-Centered-top">
    <img src="../../assets/ab/ab1.png">
   </div>
   <div class="ab-Centered-bottom">
    <ul>
     <li v-for="a in 10" :key="a"><a><img src="../../assets/ab/1.png"></a></li>
    </ul>
   </div>
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
 .ab{

  margin-top: 10px;
  .ab-Centered{
   width: 1200px;
   height: 100%;
   margin: 0 auto;

   .ab-Centered-top{
    height: 90px;
    img{
     width: 1200px;

    }
   }
   .ab-Centered-bottom{
    height: 200px;
    margin-top: 10px;
    li{
     float: left;
     width: 238px;
     height: 98px;
     margin: 5px 0.5px 0.5px 1px;
     a{
      display: flex;
      justify-content: center;
      align-items: center;
     }
     img{
      width: 100%;

     }
    }

   }
  }
 }
</style>
