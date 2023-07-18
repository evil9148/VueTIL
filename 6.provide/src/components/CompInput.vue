<template>
  <input v-model="num" @input="setNum($event.target.value)" type="text" />
</template>

<script>
import { inject } from "vue";
export default {
  setup() {
    const {num, setNum} = inject('numProvide');
    return {num, setNum};
  },
};
</script>

<style>
</style>