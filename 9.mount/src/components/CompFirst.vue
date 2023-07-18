<template>
  <h2>1</h2>
  <p>onMounted를 이용한 setInterval구현</p>
  <p>{{num}}</p>
  <p><button @click="setComp1(false)">comp1사라지기</button></p>
</template>

<script>
import { inject, onMounted, onUnmounted, ref } from 'vue';
export default {
  setup() {
    let num = ref(0);
    const {setComp1} = inject('comp1Provide')
    let IntervalID
    onMounted(()=>{
      IntervalID = setInterval(()=>{
        num.value ++
        console.log(num.value);
      },1000)
    })
    onUnmounted(()=>{
      clearInterval(IntervalID)
    })
    return {
      num,setComp1
      
    };
  },
};
</script>

<style>
</style>