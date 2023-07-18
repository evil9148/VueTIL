<template>
  <h2>watch</h2>
  <p>
    <button
      @click="num = parseInt($event.target.value)"
      v-for="i in 5"
      :key="i"
      :value="i"
    >
      {{ i }}
    </button>
  </p>
  <p>num : {{ num }}, 결과 : {{ result }}</p>
  <hr>
  <h2>watch2</h2>
  <p>{{output}}</p>
</template>

<script>
import { ref, watch } from "vue";
export default {
  setup() {
    const result = ref("초기값");
    const num = ref(1);
    watch(num, (current, prev) => {
      result.value = current > prev ? "증가" : "감소"
    });

    const output = ref('스크롤 변화 없음.')
    const scrY = ref(window.scrollY)
    window.addEventListener('scroll',()=>{
      scrY.value = window.scrollY
    })
    watch(scrY,(current, prev)=>{
      output.value = (current > prev)? '스크롤 증가':'스크롤 감소'
    })
    return {
      result,
      num,
      output
    };
  },
};
</script>

<style>
</style>