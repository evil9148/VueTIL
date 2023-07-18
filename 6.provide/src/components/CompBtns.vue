<template>
  <div>
    <button @click.prevent="num='1'" :class="(num === '1')&&'active'">1</button>
    <button @click.prevent="num='2'" :class="(num === '2')&&'active'">2</button>
    <button @click.prevent="num='3'" :class="(num === '3')&&'active'">3</button>
    <button @click.prevent="num='4'" :class="(num === '4')&&'active'">4</button>
    <button @click.prevent="num='5'" :class="(num === '5')&&'active'">5</button>
  </div>
</template>

<script>
import { inject } from "vue";
export default {
  setup() {
    const { num, setNum } = inject("numProvide");
    return {
      num,
      setNum,
    };
  },
};
</script>

<style>
</style>