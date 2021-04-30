<template>
 <!-- 为你推荐 -->
 <div class="recommend">
  <div class="recommend-cen">
   <div class="recommend-h">
    <h1>{{title}}</h1>
   </div>
   <div class="recommend-dl"  v-for="a in 60" :key="a">
    <dl class="">
     <dt class=""><img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image"></dt>
     <dd class="">{{ currentDate }}</dd>
     <dd class="">¥{{ price }}</dd>
    </dl>
   </div>
  </div>
 </div>
</template>

<script>
export default {
  data () {
    return {
      title: '为你推荐',
      currentDate: '岚尚厂家直销麻棉粘提花面料吊带衬连衣裙休岚尚厂家直销麻棉粘提花面料吊带衬连衣裙休岚尚厂家直销麻棉粘提花面料吊带衬连衣裙休岚尚厂家直销麻棉粘提花面料吊带衬连衣裙休',
      price: '12'
    }
  }
}
</script>

<style scoped lang="scss">
 .recommend{
  overflow: hidden;
  .recommend-cen{
   .recommend-h{
    h1{
     text-align: center;
     color: #272727;
     font-size: 24px;
     margin: 30px 0px;
    }
   }
   width: 1200px;
   margin: 0 auto;
   .recommend-dl{
    width: 230px;
    height: 310px;
    float: left;
    // border: 1px solid #f1f1f1;
    margin: 0px 10px 10px 0px;
    background: #fff;
    dl{
     margin-top: 40px;

     dt{
     margin: 0 auto;
     display: flex;
     justify-content: center;
     align-items: center;
     }
     dd:nth-child(2){
      width: 210px;
      display: block;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp:2;
      -webkit-box-orient: vertical;
      margin: 0 auto;
      margin-top:10px;
      color: #5A5A5A;
      font-size: 14px;
     }
     dd:nth-child(3){
      width: 210px;
      display: block;
      margin: 0 auto;
      padding-top: 10px;
      color: #BF270F;
      font-size: 20px;
     }
    }
    img{
     width: 160px;
     height: 160px;

    }
   }
  }

 }
</style>
