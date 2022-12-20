<template>
  <div class="hello">
    <Swiper :modules="modules" :pagination="{ clickable:true}">
      <SwiperSlide>
        <img src="../assets/1.jpg" alt="">
      </SwiperSlide>
      <SwiperSlide>
        <img src="../assets/2.jpeg" alt="">
      </SwiperSlide>
      <SwiperSlide>
        <img src="../assets/1.jpg" alt="">
      </SwiperSlide>
      <SwiperSlide>
        <img src="../assets/2.jpeg" alt="">
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script>

import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import { Pagination } from 'swiper';
import 'swiper/css/pagination';

export default {
  name: 'HelloWorld',
  data(){
    return{
      modules: [Pagination]
    }
  },
  components:{
    Swiper,
    SwiperSlide
  },

  beforeCreate(){
    console.log("beforeCreate:组件创建之前");
  },
  created(){
    console.log("created:组件创建完成");
  },
  beforeMount(){
    console.log("beforeMount:组件渲染之前");
  },
  mounted(){
    console.log("mounted:组件渲染完成");
    // 把网络请求放到这里
  },
  beforeUpdate(){
    console.log("beforeUpdate:组件更新之前");
  },
  updated(){
    console.log("updated:组件更新之后");
  },
  beforeUnmount(){
    console.log("beforeUnmount:组件卸载之前");
    // 卸载之前，把消耗性能的处理都完成
    // 定时器
  },
  unmounted(){
    console.log("unmounted:组件卸载之后");
  }
}
</script>

<style scoped>
img{
  width: 100%;
}
</style>
