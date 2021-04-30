<template>
 <!-- 优质资源 -->
 <div class="Reso">
  <div class="Reso-cen">
   <div class="Reso-h">
    <h1>{{title}}</h1>
   </div>
   <div class="Reso-dl">
    <dl v-for="a in 14" :key="a">
     <dt><img src="../../assets/1.png"/></dt>
     <dd>{{name}}</dd>
    </dl>
   </div>
   <div class="Reso-img">
    <div class="Reso-img-left">
     <img v-for="b in 2" :key="b" src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg" />
    </div>
    <div class="Reso-img-rigth">
     <div v-for="c in 4" :key="c" class="Reso-imgRigth">
      <div>
       <img src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg" />
        <ul>
         <li>{{user}}</li>
         <li>{{Crice}}</li>
         <li>{{Orice}}</li>
        </ul>
      </div>
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
      title: '优质资源',
      name: '机械五金',
      user: '不锈钢水冷粉碎机', // 产品名字
      Crice: '2354', // 产品现价
      Orice: '3654' // 产品原价
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
 .Reso{

  .Reso-cen{
   width: 1200px;

   margin: 0 auto;
   .Reso-h{
    h1{
     padding: 30px 0px;
     color: #272727;
     font-size: 24px;
     text-align: center;
    }
   }
   .Reso-dl{
    width: 100%;
    display: flex;
    justify-content: center;
    dl{
     width: 86px;
     height: 76px;
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;

     dt{
      img{
       width: 28px;
      }
     }
     dd{
      align-items: center;
     }
    }
   }
   .Reso-img{
    position: relative;
    .Reso-img-left{
     width: 600px;
     img{
      width: 290px;
      height: 390px;
      margin: 0px 10px 0px 0px;
     }
    }
    .Reso-img-rigth{
     width: 600px;
     position: absolute;
     top: 0px;
     right: 0px;
     display: flex;
     flex-wrap: wrap;
     justify-content: center;
     align-items: center;
     .Reso-imgRigth{
      width: 291px;
      height: 189px;
      background: #fff;
      margin: 0px 5px 11px 0px;
      div{
       width: 291px;
       height: 189px;
       display: flex;
       justify-content: center;
       align-items: center;
      }
      ul{
       margin-left: 10px;
       li{
        margin: 0px 0px 10px 0px;
       }
      }
      img{
       width: 136px;

      }
     }
    }
   }
  }
 }
</style>
