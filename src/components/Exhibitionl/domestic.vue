<template>
<!-- 国内展会 -->
 <div class="domestic">
  <div class="domesticH1">
   <div class="domestich1">
    <h3>国内展会</h3>
    <el-link :underline="false">更多展会<i class="el-icon-arrow-right"></i> </el-link>
   </div>
   <div class="domesticxingxi">
    <div class="domesticOne" v-for="item in DomeS" :key='item.id'>
     <div class="domesticTwo">
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
  components: {

  },
  props: {},
  data () {
    return {
      DomeS: null// 国内展会数据
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
          exhibitionType: 1,
          ndTime: 0
        }
      },
      method: 'post'// post
    }).then(res => {
      // console.log(res.data.data.param)
      this.DomeS = res.data.data.param
    })
  },
  methods: {}
}
</script>

<style scoped lang="scss">
 .domestic{
  .domesticH1{

   .domestich1{
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
   .domesticxingxi{
    display: flex;
    flex-wrap:wrap;
    justify-content: space-between;
    align-items: center;

    .domesticOne{
     width: 291px;
     height: 336px;
     background: #fff;
     margin-bottom: 10px;
     .domesticTwo{
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
