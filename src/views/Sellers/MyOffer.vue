<template>
<!-- 卖家管理后台 我的报价 -->
<div class='MyOffer'>
    <div class="MyOffer-top">
        <div class="MyOffer-topCen">
            <div class="MyOffer-topIcon">
                <i class="el-icon-tickets"><span>条件查询</span></i>
            </div>
            <div class="MyOffer-topInput">
                <div class="MyOffer-top-status">
                    <span>报价状态：</span>
                     <el-select v-model="value" placeholder="全部">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div class="MyOffer-top-name">
                    <span>产品名称：</span>
                    <input type="text" placeholder="请输入产品名称">
                    <span>创建时间：</span>
                    <div class="block">
                        <el-date-picker
                        v-model="value3"
                        type="date"
                        placeholder="选择日期"
                        format="yyyy 年 MM 月 dd 日"
                        value-format="timestamp">
                        </el-date-picker>
                    </div>
                    <el-button type="primary" icon="el-icon-search">搜索</el-button>
                </div>
            </div>
        </div>
    </div>
    <div class="MyOffer-Table">
        <div class="MyOffer-Table-cen">
            <div class="MyOffer-TableNoe">
                <table border="1" cellspacing="0">
                    <tr>
                        <td><el-checkbox>全选</el-checkbox></td>
                        <td>图片</td>
                        <td>产品信息</td>
                        <td>商品类别</td>
                        <td>有效时间</td>
                        <td>采购量</td>
                        <td>所报单价</td>
                        <td>报价状态</td>
                        <td>编辑</td>
                    </tr>
                    <tr v-for="a in 5" :key="a">
                        <td><el-checkbox></el-checkbox></td>
                        <td class="productCategoryTabletr"><img src="../../assets/1.png" alt=""></td>
                        <td class="productCategoryTabletrl"><span>asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd</span></td>
                        <td class="productCategoryTabletrprice">asd</td>
                        <td class="productCategoryTabletrclass">asd</td>
                        <td>asd</td>
                        <td>asd</td>
                        <td>asd</td>
                        <td>asd</td>
                    </tr>
                </table>
            </div>
            <div class="MyOffer-TableBotton">
                <el-button type="primary">全部删除</el-button>
                <div class="block">
                    <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page.sync="currentPage1"
                    :page-size="100"
                    layout="total, prev, pager, next"
                    :total="1000">
                    </el-pagination>
                </div>
            </div>
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
      options: [{
        value: '选项1',
        label: '报价中'
      }, {
        value: '选项2',
        label: '已接受'
      }, {
        value: '选项3',
        label: '已拒绝'
      }],
      value: '',
      value3: ''

    }
  },
  computed: {},
  watch: {},
  created () { },
  mounted () { },
  methods: {
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    }
  }
}
</script>
<style scoped lang='scss'>
.MyOffer{
    .MyOffer-top{
    background: #fff;
    height: 220px;
    margin-top: 20px;
    border-radius: 8px;
    box-shadow: 2px 4px 12px #efefef;
    .MyOffer-topCen{
        width: 83vw;
        margin: 0 auto;
        .MyOffer-topIcon{
            padding: 30px 0px;
            i{
            font-size: 20px;
            span{
                font-size: 20px;
                padding-left: 10px;
            }
        }
        }
        .MyOffer-topInput{
            display: flex;
            flex-direction:column;
            margin-left: 30px;
                span{
                    font-size: 16px;
                    color: #272727;
                }
            // .MyOffer-top-status{

            // }
            .MyOffer-top-name{
                display: flex;
                align-items: center;
                padding: 30px 0px ;
                span:nth-child(3){
                    margin-left: 40px;
                }
                input{
                    width: 205px;
                    height: 38px;
                    padding-left: 10px;
                    border: 1px solid #DCDFE6;
                    color: #8C8C8C;
                }
                .el-button{
                    margin-left: 30px;
                }
            }
        }
    }
    }
    .MyOffer-Table{
        background: #fff;
        margin-top: 20px;
        border-radius: 8px;
        box-shadow: 2px 4px 12px #efefef;
        .MyOffer-Table-cen{
            width: 83vw;
            margin: 0 auto;
            .MyOffer-TableNoe{
                table{
                width: 83vw;
                border: 0px;
                padding: 20px 0px;
                tr{
                    text-align: center;
                    td{
                        border-right: 1px solid #979797;
                        border-bottom: 1px solid #979797;
                        font-size: 14px;
                        img{
                            width: 80px;
                        }
                        span{
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                            width: 350px;
                            display: block;
                            margin: 0 auto;
                        }

                    }
                    td:nth-child(1){
                    width: 50px;
                    height: 40px;
                    text-align: center;
                }
                .productCategoryTabletr{
                    width: 120px;
                    height: 110px;
                }
                .productCategoryTabletrl{
                    width: 400px;
                }
                .productCategoryTabletrprice{
                    width: 100px;
                }

                }

            }
            }
            .MyOffer-TableBotton{
                display: flex;
                justify-content: space-between;
                padding-bottom:10px ;
            }
        }
    }
}
</style>
