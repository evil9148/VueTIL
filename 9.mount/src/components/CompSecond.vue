<template>
  <h2>comp2</h2>
  <p>onUpdated를 이용한 setTimeout 구현</p>
  <p>num: {{ num }}</p>
  <button class="btn">1증가</button>
</template>

<script>
import { onMounted, onUpdated, ref } from "vue";
export default {
  setup() {
    const num = ref(0);

    onMounted(() => {
      document.querySelector(`.btn`).addEventListener(`click`, () => {
        num.value++;
      });
    });

    onUpdated(() => {
      setTimeout(() => {
        num.value++;
      }, 1000);
    });
    return {
      num,
    };
  },
};
</script>

<style>
</style>