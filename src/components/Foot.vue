<template>
 <div class="footer">
  <div class="footer-Centered">
   <ul>
    <li>
     <dl>
      <dt>新手上路</dt>
      <dd class="navDd"><el-link href="" target="_blank" :underline="false">免费注册</el-link></dd>
      <dd class="navDd"><el-link href="" target="_blank" :underline="false">买家入口</el-link></dd>
      <dd class="navDd"><el-link href="" target="_blank" :underline="false">买家入口</el-link></dd>
     </dl>
    </li>
    <li>
     <dl>
      <dt>采购商服务</dt>
      <dd class="navDd"><el-link href="" target="_blank" :underline="false">找产品</el-link></dd>
      <dd class="navDd"><el-link href="" target="_blank" :underline="false">发布询价单</el-link></dd>
      <dd class="navDd"><el-link href="" target="_blank" :underline="false">展会信息</el-link></dd>
     </dl>
    </li>
    <li>
     <dl>
      <dt>供应商服务</dt>
      <dd class="navDd"><el-link href="" target="_blank" :underline="false">发布产品</el-link></dd>
      <dd class="navDd"><el-link href="" target="_blank" :underline="false">找采购信息</el-link></dd>
      <dd class="navDd"><el-link href="" target="_blank" :underline="false">诚信保障</el-link></dd>
     </dl>
    </li>
    <li>
     <dl>
      <dt>其他服务</dt>
      <dd class="navDd"><el-link href="" target="_blank" :underline="false">客服中心</el-link></dd>
      <dd class="navDd"><el-link href="" target="_blank" :underline="false">买家指南</el-link></dd>
      <dd class="navDd"><el-link href="" target="_blank" :underline="false">卖家指南</el-link></dd>
     </dl>
    </li>
    <li>
     <dl>
      <dt>微信公众号</dt>
      <dd class="navDd"><img src="../assets/1.png"  alt="" /></dd>

     </dl>
    </li>
    <li>
     <dl>
      <dt>公司官网</dt>
      <dd class="navDd"><img src="../assets/1.png"  alt="" /></dd>

     </dl>
    </li>
   </ul>
  </div>
  <div class="footer-Centered-bottom">
   <p>Copynght 2015-2020 远恒互联网络科技有限公司 版权所有 <span>浙ICP备19009440号-4</span> 电话：0575-85025309 邮编：312000</p>
   <div>
    <img src="../assets/2.jpg" />
    <p>浙公网安备 33060202000883号</p>
   </div>

  </div>
 </div>
</template>

<script>
</script>

<style scoped lang="scss">
 .footer{
  background: #000000;
  width: 100%;
  height: 400px;
 }
 .footer-Centered{
  width: 1200px;
  margin: 0 auto;
  ul{
   padding: 30px 0px 30px 0px;
   height: 200px;
   li{
    float: left;
    width: 200px;
    text-align: center;
    dl dt{
     font-size: 14px;
     padding-bottom: 10px;
     color: #fff;
    }
   }
  }
  .navDd{
   padding-top: 20px;
   .el-link{
    color: #fff;
    font-size: 12px;
   }
   img{
    width: 80px;
    height: 80px;
   }
  }
 }
 .footer-Centered-bottom{
  div{
   width: 400px;
   margin: 0 auto;
   position: relative;
  }
  p{
   color: #fff;
   text-align: center;
   padding-bottom: 30px;
   font-size: 14px;
  }
  img{
   margin: 0 auto;
   position: absolute;
   top: 0px;
   left: 50px;
   width: 20px;
  }
 }
</style>
