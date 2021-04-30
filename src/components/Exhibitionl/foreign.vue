
<template>
<!-- 国外展会 -->
<div class="foreign">
  <div class="foreignH1">
   <div class="foreignh1">
    <h3>国外展会</h3>
    <el-link :underline="false">更多展会<i class="el-icon-arrow-right"></i> </el-link>
   </div>
   <div class="foreignxingxi">
    <div class="foreignOne" v-for="item in inofs" :key='item.id'>
     <div class="foreignTwo">
      <dl>
       <dt><img :src="item.exhibitionPhoto"/></dt>
       <dd>{{item.exhibitionTitle}}</dd>
       <dd>{{item.assortName}}</dd>
       <dd><i class="el-icon-location-outline"></i>&nbsp;{{item.exhibitionName}}</dd>
       <dd><i class="el-icon-alarm-clock"></i>&nbsp;{{item.exhibitionStartTime}}｜{{item.exhibitionEndTime}}</dd>
      </dl>
     </div>
    </div>
   </div>
  </div>
 </div>
</template>

<script>
import http from '../../util/http'
export default {
  name: '',
  components: {},
  props: {},
  data () {
    return {
      inofs: null// 国内展会数据
    }
  },
  computed: {},
  watch: {},
  created () { },
  mounted () {
    http({
      url: '/exhibition/page',
      data: {
        size: 8,
        num: 1,
        param: {
          exhibitionType: 2,
          ndTime: 0
        }
      },
      method: 'post'// post
    }).then(res => {
      // console.log(res.data.data.param)
      this.inofs = res.data.data.param
    })
  },
  methods: {}
}
</script>
<style scoped lang='scss'>
 .foreign{
  .foreignH1{

   .foreignh1{
    position: relative;
    height: 80px;
    line-height: 80px;
    h3{
     font-size: 24px;
     color: #272727;
     text-align: center;
    }
    .el-link{
     position: absolute;
     right: 0px;
     bottom: -20px;
     display: flex;
     justify-content: flex-end;
    }
   }
   .foreignxingxi{
    display: flex;
    flex-wrap:wrap;
    justify-content: space-between;
    align-items: center;

    .foreignOne{
     width: 291px;
     height: 336px;
     background: #fff;
     margin-bottom: 10px;
     .foreignTwo{
      display: flex;
      flex-direction: column;
      align-items: center;

      dl{
       padding-top: 20px;
       dt{
        img{
         width: 219px;
         height: 172px;

        }
       }
       dd{
        padding-top: 10px;
        width: 184px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
       }
      }
     }
    }
   }
  }
 }
</style>
