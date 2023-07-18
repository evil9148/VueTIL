<template>
  <h1>componet와 스테이트 관리</h1>
  <CompFormVue/>
    <hr>
  <CompInputVue/>  
</template>

<script>
import { provide, ref } from 'vue';
import CompFormVue from "./components/CompForm.vue";
import CompInputVue from './components/CompInput.vue';
CompInputVue
export default {
  components: { CompFormVue, CompInputVue },
  setup() {
    const num = ref("1")
    const setNum =(newValue)=>{
      num.value = newValue
    }
    provide('numProvide',{num,setNum})
    return {setNum};
  },
};
</script>

<style>
button.active{
  color: red;
}
</style>