<template>
 <!-- 轮播图 -->
 <div class="Carousel">
  <div class="Carousel-Centered">
   <div class="Carousel-Centered-left">
    <el-carousel indicator-position="none" height="520px">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
   </div>
   <div class="Carousel-Centered-rigth">
    <div class="rigthDiv">
     <div class="rigthDiv-left">
      <img src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"/>
      <div class="rigthDiv-rigth">Hi～欢迎来到中国进出口产品交易网！</div>
      <div>
        <el-button>登入</el-button>
      </div>
      <div>
        <el-button>注册</el-button>
      </div>

     </div>
    </div>
    <div class="rigthDiv">
     <dl>
      <dt><img src="../assets/fb.png" /> </dt>
      <dd>发布求购</dd>
     </dl>
     <dl>
      <dt><img src="../assets/fb.png" /> </dt>
      <dd>发布求购</dd>
     </dl>
     <dl>
      <dt><img src="../assets/fb.png" /> </dt>
      <dd>发布求购</dd>
     </dl>
     <dl>
      <dt><img src="../assets/fb.png" /> </dt>
      <dd>发布求购</dd>
     </dl>
     <dl>
      <dt><img src="../assets/fb.png" /> </dt>
      <dd>发布求购</dd>
     </dl>
     <dl>
      <dt><img src="../assets/fb.png" /> </dt>
      <dd>发布求购</dd>
     </dl>
    </div>
    <div class="rigthDiv">
     <div>
      <h4>| 公告</h4>
      <ul>
       <li v-for="a in 6" :key="a">{{msg}}</li>

      </ul>
     </div>
    </div>
   </div>
  </div>
 </div>
</template>

<script>
export default {
  data () {
    return {
      msg: '关于行业资质未认证信息的处理关于行业资质未认证信息的处理'
    }
  }
}
</script>

<style scoped lang="scss">
 .Carousel{
  width: 100%;
  .Carousel-Centered{
   width: 1200px;
   margin: 0 auto;
   position: relative;
   .Carousel-Centered-left{
    width: 990px;
   }
   .Carousel-Centered-rigth{
    position: absolute;
    top: 0px;
    right: 0px;
    .rigthDiv:first-child{
     width: 210px;
     height: 180px;
     position: relative;
     box-shadow:1px 1px 3px #c8c8c8;

     .rigthDiv-left{
      width: 100%;
      position: absolute;
      top: 15px;
      left: 30px;
      img{
       width: 45px;
       border-radius: 50%;
      }
      .rigthDiv-rigth{
       width: 120px;
       position: absolute;
       top: 8px;
       right: 35px;
       font-size: 12px;
       color: #272727;
      }
      .el-button{
       width: 150px;
       font-size: 14px;
      }
      div:nth-child(3){
       padding-top: 10px;
       .el-button{
        background: #BF270F;
        color: #FFF;

       }
      }
      div:nth-child(4){
       padding-top: 15px;
       .el-button{
        color: #BF270F;
        border: 2px solid #BF270F;
       }
      }
     }
    }
    .rigthDiv:last-child{
     width: 210px;
     height: 180px;
     background: #fff;
    }
    .rigthDiv:nth-last-child(2){
     width: 210px;
     height: 160px;
     background: #FAFAFA;
     dl{
      float: left;
      width: 70px;
      height: 73px;
      padding-top: 10px;
      text-align: center;
      dt{
       img{
        width: 36px;
        text-align: center;
       }
       dd{
        font-size: 12px;
        color: #000000;
       }
      }

     }
    }
    .rigthDiv:last-child{
     width: 210px;
     height: 180px;

     div{
      margin-left: 15px;
      ul{
       padding-top: 10px;
       li{
        padding-top: 6px;
        color: #000000;
        font-size: 12px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        width: 90%;
       }
      }
     }
    }

   }
  }
 }
 .el-carousel__item h3 {
     color: #475669;
     font-size: 18px;
     opacity: 0.75;
     line-height: 300px;
     margin: 0;
   }

   .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
   }

   .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
   }
</style>
