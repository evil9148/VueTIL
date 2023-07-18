<template>
  <h1>경로</h1>
  <hr>
  <p>1.src이미지 불러오기</p>
  <img src="@/assets/srcImg/img1.jpg" alt="">
  <p>2.변수를 이용하여 scr폴더의 이미지 불러오기</p>
  <img :src="require(`@/assets/srcImg/img${n}.jpg`)" alt=""> <!--변수를 이용할 때 require를 입력한다.-->
  <p>3.public 폴더의 이미지 불러오기</p>
  <img :src="`${baseUrl}publicImg/img${n}.jpg`" alt=""> <!--public 폴더의 이미지를 불러올 때 require를 입력안한다.-->
</template>

<script>
import { ref } from 'vue';
import '@/src-css/bg.css'

export default {

  setup() {
    const n = ref(2)
    const baseUrl = process.env.BASE_URL

    return {
      n,
      baseUrl,

    };
  },
};
</script>

<style>
  @import url('@/src-css/color.css');
  img{
    width: 100px;
  }
</style>