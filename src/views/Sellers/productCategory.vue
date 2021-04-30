<template>
<!--卖家后台管理 产品分类 -->
<div class='productCategory'>
    <div class="productCategoryCen">
        <!--  -->
        <div class="productCategorySearch">
            <input type="text" placeholder="请输入内容" v-model="input" style="color: #8C8C8C;padding-left: 10px;font-size: 14px;">
            <!--分类  -->
            <span>选择分类 ：</span>
             <el-select v-model="value" clearable placeholder="请选择">
                <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
            <!-- 价格 -->
            <span>价格：</span><input type="text"/><span>与</span><input type="text"/>
            <!-- 按钮 -->
            <el-button type="primary" icon="el-icon-search" style="margin-left: 100px;">搜索</el-button>
        </div>
        <!--  -->
        <div class="productCategoryBo">
            <el-button type="primary">主要按钮</el-button>
        </div>
        <!--  -->
        <div class="productCategoryTable">
            <table border="1" cellspacing="0">
              <tr>
                  <td><el-checkbox>全选</el-checkbox></td>
                  <td>图片</td>
                  <td>产品名称</td>
                  <td>价格</td>
                  <td>所属分类</td>
                  <td>编辑</td>
              </tr>
              <tr v-for="a in 5" :key="a">
                  <td><el-checkbox></el-checkbox></td>
                  <td class="productCategoryTabletr"><img src="../../assets/1.png" alt=""></td>
                  <td class="productCategoryTabletrl"><span>asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd</span></td>
                  <td class="productCategoryTabletrprice">asd</td>
                  <td class="productCategoryTabletrclass">asd</td>
                  <td>asd</td>
              </tr>
            </table>
        </div>
        <!--  -->
        <div class="productCategoryPag">
            <div class="block">
                <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"

                :page-size="100"
                layout="total, prev, pager, next"
                :total="1000">
                </el-pagination>
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
      input: '', // 请输入产品名称
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
      value: '',
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  computed: {},
  watch: {},
  created () { },
  mounted () { },
  methods: {
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    }
  }
}
</script>
<style scoped lang='scss'>
.productCategory{
    .productCategoryCen{
        padding: 30px 0px;
        margin: 0 auto;
        width: 83vw;
        .productCategorySearch{
            input:nth-child(1){
             width: 340px;
             height: 40px;
             border: 0px;
             border: 1px solid #979797;
            }
            input:nth-child(5){
             height: 40px;
             border: 0px;
             border: 1px solid #979797;
            }
             input:nth-child(7){
             height: 40px;
             border: 0px;
             border: 1px solid #979797;
            }
            span{
                margin-left: 30px;
                color: #272727;
                font-size: 16px;
            }
            span:nth-child(6){
                margin: 0px 20px;
                font-size: 16px;
                color: #272727;
            }
        }

        .productCategoryBo{
            padding: 30px 0px;
        }
        .productCategoryTable{
            table{
                width: 83vw;
                border: 0px;
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
                    width: 160px;
                    height: 110px;
                }
                .productCategoryTabletrl{
                    width: 400px;
                }
                .productCategoryTabletrprice{
                    width: 100px;
                }
                .productCategoryTabletrclass{
                    width: 400px;
                }
                }

            }
        }
        .productCategoryPag{
            display: flex;
            justify-content: flex-end;
            padding: 30px 0px;
        }
    }
}
</style>
