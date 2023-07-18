<template>
  <!-- 
  생명주기 선서
  parsing : 부모->객체
  dom구출: 자식 -> 부모
  onMounted() : useEffect(()=>{},[])
  onUpdated() : useEffect(()=>{},[num,])
  onUnmounted() : useEffect(()=>{return (()=>{})},[])
 -->
  <CompFirstVue v-if="comp1" />
  <CompSecondVue />
</template>

<script>
import { provide, ref } from 'vue';
import CompFirstVue from './components/CompFirst.vue';
import CompSecondVue from './components/CompSecond.vue';

export default {
  components: { CompFirstVue, CompSecondVue },
  setup() {
    const comp1 = ref(true)
    const setComp1 = (newValue)=>{
      comp1.value = newValue
    }
    provide('comp1Provide',{comp1, setComp1})
    return {
      comp1
    };
  },
};
</script>

<style>
</style>