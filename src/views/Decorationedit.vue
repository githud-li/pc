<template>
<!-- 店铺装修编辑 -->
<div class=''>
    <!-- 顶部 -->
    <PersonalCenter/>
    <!-- 导航 -->
    <div class="Decorationedit">
        <div class="Decorationedit_Cen">
            <div class="Cen_left">
                <ul>
                    <li>首页</li>
                </ul>
            </div>
            <div class="Cen_rigth">
                <el-button type="primary" plain>主要按钮</el-button>
                <el-button type="primary" plain>主要按钮</el-button>
            </div>
        </div>
    </div>
    <!-- 体 -->
    <div class="DecorList">
        <div class="List_Cen">
            <!-- 体 top -->
            <div class="Cen_top">
                <img src="" alt="">
                <el-button>编辑</el-button>
            </div>
            <!-- 导航 -->
            <div class="Cen_cen">
                <div class="Cen_ul">
                    <ul>
                        <li>首页</li>
                    </ul>
                </div>
                <div class="Cen_botton">
                    <el-button>编辑</el-button>
                </div>
            </div>
            <!-- 轮播图 -->
            <div class="Cen_lb">
                <div class="Cen_botton"> <el-button>编辑</el-button></div>
                <el-carousel :interval="5000" arrow="always" height='520px' indicator-position='none'>
                    <el-carousel-item v-for="item in 4" :key="item">
                    <h3>{{ item }}</h3>
                    </el-carousel-item>
                </el-carousel>

            </div>
            <!-- 面包屑 -->
            <div class="Cen_mbx">
                <div class="mbx_ul">
                    <ul>
                        <li>全部商品</li>
                    </ul>
                </div>
                <div class="mbx_list">
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

    </div>
    <!--底部 -->
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
    }
  },
  computed: {},
  watch: {},
  created () { },
  mounted () { },
  methods: {}
}
</script>
<style scoped lang='scss'>
.Decorationedit{
    background: #fff;
    height: 64px;
    display: flex;
    align-items: center;
    .Decorationedit_Cen{
        width: 1200px;
        margin:  0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .Cen_left{
            ul{
                li{
                    color: #272727;
                    font-size: 16px;
                }
            }
        }
        // .Cen_rigth{

        // }
    }
}
// 体
.DecorList{
    .List_Cen{
        margin: 0 auto;
        width: 1200px;
        // 体 top
        .Cen_top{
            height: 120px;
            background: #fff;
            position: relative;
            .el-button{
                position: absolute;
                top: 0px;
                right: 0px;
            }
        }
        // 导航
        .Cen_cen{
            background: #fff;
            height: 40px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .Cen_ul{
                ul{
                    li{
                        color: #272727;
                        font-size: 16px;
                        margin-left: 10px;
                    }
                }
            }
            .Cen_botton{

            }
        }
        //轮播图
       .Cen_lb{
        height: 520px;
        position: relative;
           .Cen_botton{
               position: absolute;
               top: 0px;
               right: 0px;
           }

       }
        // 面包屑
        .Cen_mbx{
            margin: 10px 0px 30px 0px;
            .mbx_ul{
                background: #fff;
                height: 40px;
                display: flex;
                align-items: center;
                ul{
                    li{
                        color: #272727;
                        font-size: 16px;
                        margin-left: 10px;
                    }
                }
            }
            .mbx_list{
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
}
</style>
