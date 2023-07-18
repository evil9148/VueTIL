<template>
  <h2>calc</h2>
  <!-- ref를 이용한 방식
    <input @input="fnCalc" v-model="num1" type="number" min="0" max="9" />
  &nbsp;
  <input @input="fnCalc" v-model="num2" type="number" min="0" max="9" />
   -->

  <input v-model="num1" type="number" min="0" max="9" />
  &nbsp;
  <input v-model="num2" type="number" min="0" max="9" />
  <p>
    더하기 : {{sum}}, <br />
    빼기 : {{minus}},<br />
    곱하기 : {{multi}}, <br />
    나누기 {{divide}}:
  </p>
</template>

<script>
import { computed, ref } from "vue";

export default {
  setup() {
    // const num1 = ref(0);
    // const num2 = ref(0);
    // const sum = ref(0);
    // const fnCalc = () => {
    //   sum.value = num1.value +num2.value
    const num1 = ref(0);
    const num2 = ref(0);
    const sum = computed(() => {
      return num1.value + num2.value;
    });
     const minus = computed(() => {
      return num1.value - num2.value;
    });
     const multi = computed(() => {
      return num1.value * num2.value;
    });
     const divide = computed(() => {
      return num1.value / num2.value;
    });

    return {
      num1,
      num2,
      sum,
      minus,
      multi,
      divide
    };
  },
};
</script>

<style>
</style>