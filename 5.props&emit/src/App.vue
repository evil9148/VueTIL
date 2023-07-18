<template>
  <h1>componet와 스테이트 관리</h1>
  <hr />
  <CompFormVue :propsNum="num" @fnSendEmit="fnSetNum(num)" />
  <hr />
  <CompInputVue @compInput="fnSetNum(num)" />
</template>

<script>
import { ref } from "vue";
import CompFormVue from "./components/CompForm.vue";
import CompInputVue from "./components/CompInput.vue";
CompInputVue;
export default {
  components: { CompFormVue, CompInputVue },
  setup() {
    const num = ref("1");
    const fnSetNum = (sendnumber) => {
      num.value = sendnumber;
    };
    return {
      num,
      fnSetNum,
    };
  },
};
</script>

<style>
button.active {
  color: red;
}
</style>