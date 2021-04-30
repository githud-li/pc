<template>
<!-- 卖家管理后台 -->
<div class=''>
  <el-container style="">
      <div style="background: #fff;position: fixed;left: 0px;right: 0px;z-index: 1;">
      <PersonalCenter/>
      </div>
  <el-header>
      <div>
            <img src="../assets/logo.jpg" alt="" style="width: 290px;display: flex;">
            <p>卖家后台管理平台</p>
      </div>
  </el-header>
  <el-container>
    <el-aside width="200px">
        <el-menu :default-openeds="['1','2']">
            <div class="www"  @click="BasicInformation">基础信息</div>
            <el-submenu index="1">
                <template slot="title"><i class="el-icon-menu"></i>产品管理</template>
                <el-menu-item-group>
                    <ul>
                        <li class="el-menu-item" @click="productRelease">发布产品</li>
                        <li class="el-menu-item" @click="ProductList">产品列表</li>
                    </ul>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
                <template slot="title"><i class="el-icon-menu"></i>店铺管理</template>
                <el-menu-item-group>
                    <ul>
                        <li class="el-menu-item" @click="StoreConstruction">店铺装修</li>
                        <li class="el-menu-item" @click="InCharge">产品管理</li>
                        <li class="el-menu-item" @click="productCategory">产品分类</li>
                    </ul>
                </el-menu-item-group>
            </el-submenu>
             <div class="www"  @click="MyOffer">我的报价</div>
            <!-- <el-submenu index="3">
                <template slot="title"  @click="onclick"><i class="el-icon-menu"></i>我的报价</template>
            </el-submenu> -->
            <el-submenu index="4">
                <template slot="title"><i class="el-icon-menu"></i>消息管理</template>
                <el-menu-item-group>
                    <ul>
                        <li class="el-menu-item" @click="MyMessage">我的消息</li>
                    </ul>
                </el-menu-item-group>
            </el-submenu>
        </el-menu>
    </el-aside>
    <el-main>
         <!-- 面包屑 -->
        <div class="Seller-BreadCrumbs" v-for="item in info" :key="item">{{item}}</div>

            <div>
               <router-view></router-view>
            </div>
    </el-main>
  </el-container>
</el-container>

</div>
</template>

<script>
import PersonalCenter from '../components/SellerBackground/PersonalCenter'
// import SellerInfo from '../components/SellerBackground/sellerInfo'

export default {
  name: '',
  components: {
    PersonalCenter
    // SellerInfo
  },
  props: {},
  data () {
    return {
      info: ['基础信息']
    }
  },
  computed: {},
  watch: {},
  created () { },
  mounted () {

  },
  methods: {
    // 基础信息
    BasicInformation (e) {
      this.$router.push('/Seller')
      if (this.info.length === 0) {
        this.info.push(e.target.innerText)
      } else {
        this.info.splice(0, 1)
        this.info.push(e.target.innerText)
      }
    },
    // 发布产品
    productRelease (e) {
      this.$router.push('/Seller/productRelease')
      if (this.info.length === 0) {
        this.info.push(e.target.innerText)
      } else {
        this.info.splice(0, 1)
        this.info.push(e.target.innerText)
      }
    },
    // 产品列表
    ProductList (e) {
      this.$router.push('/Seller/productRelease')
      if (this.info.length === 0) {
        this.info.push(e.target.innerText)
      } else {
        this.info.splice(0, 1)
        this.info.push(e.target.innerText)
      }
    },
    // 店铺装修
    StoreConstruction (e) {
      this.$router.push('/StoreConstruction')
      if (this.info.length === 0) {
        this.info.push(e.target.innerText)
      } else {
        this.info.splice(0, 1)
        this.info.push(e.target.innerText)
      }
    },
    // 产品管理
    InCharge (e) {
      this.$router.push('/Seller/LnCharge')
      if (this.info.length === 0) {
        this.info.push(e.target.innerText)
      } else {
        this.info.splice(0, 1)
        this.info.push(e.target.innerText)
      }
    },
    // 产品分类
    productCategory (e) {
      this.$router.push('/Seller/productCategory')
      if (this.info.length === 0) {
        this.info.push(e.target.innerText)
      } else {
        this.info.splice(0, 1)
        this.info.push(e.target.innerText)
      }
    },
    // 我的消息
    MyMessage (e) {
      this.$router.push('/Seller/productRelease')
      if (this.info.length === 0) {
        this.info.push(e.target.innerText)
      } else {
        this.info.splice(0, 1)
        this.info.push(e.target.innerText)
      }
    },
    // 我的报价
    MyOffer (e) {
      this.$router.push('/Seller/MyOffer')
      if (this.info.length === 0) {
        this.info.push(e.target.innerText)
      } else {
        this.info.splice(0, 1)
        this.info.push(e.target.innerText)
      }
    },
    onclick () {
      console.log(1)
    }
  }
}
</script>
<style scoped lang='scss'>
.el-header{
    div{
        display: flex;
        p{
            font-size: 28px;
            color: #000;
        }
    }
}
.www{
    margin: 40px;
    color: #000;
    font-size: 16px;
}

 .el-header{
    position: fixed;
    background-color: #fff;
    color: #333;
    text-align: center;
    line-height: 60px;
    width: 100vw;
    overflow: hidden;
    z-index: 2;
    top: 19px;
  }
 .el-aside {
     position: fixed;
     top: 85px;
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    height: 100vh;
    z-index: 3;
  }

  .el-main {
    // background-color: #E9EEF3;
    color: #333;
    // text-align: center;
    position: absolute;
    width: 88vw;
    top: 65px;
    right: 20px;
  }
  .el-menu {
      background-color: #FFF;
      height: 100vh;
}
.Seller-BreadCrumbs{
    color: red;
    height: 50px;
    font-size: 16px;
    color: red;
    background: #E9EEF3;
    display: flex;
    align-items: center;
    padding-left: 30px;
}
</style>
