
<template>
<!-- 店铺装修 -->
<div class=''>
    <PersonalCenter/>
    <!-- 导航 -->
    <div class="StoreCon">
         <el-select v-model="value" placeholder="全部产品">
            <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
        </el-select>
        <el-button type="primary">信息按钮</el-button>
        <el-button type="primary" @click="decorclick">新增装修</el-button>
    </div>
    <!-- 居中 -->
    <div class="StoreCon-cen">
        <div class="StoreCon_one">
            <!--  -->
            <div class="S_one">
                <img src='' alt="">
            </div>
            <!--  -->
            <div class="D_one">
                <ul>
                    <li>首页</li>
                </ul>
            </div>
            <!-- 轮播图 -->
            <div class="Z_one">
                <el-carousel :interval="2000" arrow="never" indicator-position="none" >
                    <el-carousel-item v-for="item in 4" :key="item">
                    <h3>{{ item }}</h3>
                    </el-carousel-item>
                </el-carousel>
            </div>
            <!-- 产品 -->
            <div class="Q_one">
                <ul>
                    <li>首页</li>
                </ul>
            </div>
            <!--  -->
            <div class="C_one">
                <div class="C_one_list" v-for="a in 20" :key="a">
                    <div class="list_img"><img src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg" alt=""></div>
                    <div class="list_ul">
                        <ul>
                            <li class="list_li1">岚尚厂家直销麻棉粘提花面料吊带衬连衣裙休闲服时装</li>
                            <li class="list_li2">¥ <span>234.00</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- 底部 -->
    <Foot/>
</div>
</template>

<script>
import PersonalCenter from '../components/SellerBackground/PersonalCenter'// 顶部
import Foot from '../components/Foot'
export default {
  name: '',
  components: {
    PersonalCenter,
    Foot
  },
  props: {},
  data () {
    return {
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: ''
    }
  },
  computed: {},
  watch: {},
  created () { },
  mounted () { },
  methods: {
    decorclick () {
      this.$router.push('/Decorationedit')
    }
  }
}
</script>
<style scoped lang='scss'>
.StoreCon{
    background: #fff;
    height: 64px;
    display: flex;
    align-items: center;
    .el-select{
        margin: 0px 40px;

    }

}
.StoreCon-cen{
    overflow: hidden;
    .StoreCon_one{
        .S_one{
            width: 1200px;
            height: 120px;
            margin: 0 auto;
        }
        .D_one{
            width: 1200px;
            height: 40px;
            margin: 0 auto;
            background: #fff;
            ul{
                height: 40px;
                display: flex;
                align-items: center;
                margin-left: 30px;
                li{
                    font-size: 16px;
                    color: #272727;
                }
            }
        }
        .Z_one{
            width: 1200px;
            margin: 0 auto;
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
        }
        .Q_one{
            width: 1200PX;
            margin: 10px auto;
            background: #FFF;
            ul{
                height: 40px;
                display: flex;
                align-items: center;
                margin-left: 30px;
                li{
                    font-size: 16px;
                    color: #272727;
                }
            }
        }
        .C_one{
            width: 1200px;
            margin: 0 auto;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            .C_one_list{
                width: 230px;
                height: 280px;
                background: #fff;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-around;
                margin-bottom: 10px;
                .list_img{
                    img{
                        width: 160px;
                        height: 160px;
                    }
                }
                .list_ul{
                    width: 170px;
                    ul{
                        li{
                            padding: 3px 0px;
                        }
                    }
                }
            }
        }
    }
}
</style>
