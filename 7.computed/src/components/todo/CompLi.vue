<template>
  <div>
    <h2>list</h2>
    <p><input v-model="keword" type="text"></p>
    <ul>
      <li v-for="v in outputArr" :key="v.id">{{v.title}}</li>
    </ul>
  </div>
</template>

<script>
import { computed, ref } from 'vue';

export default {
 
  setup() {
    const Arr = ref([
      {id: 1, title: 'd2'},
      {id: 2, title: 'c1'},
      {id: 3, title: 'a2'},
      {id: 4, title: 'a1'},
      {id: 5, title: 'b2'},
      {id: 6, title: 'b1'},
    ])
    const keword = ref('')
    const outputArr = computed(()=>{
      return Arr.value.filter((v)=>v.title.includes(keword.value))
    })
    return {
      Arr,
      keword,
      outputArr
    };
  },
};
</script>

<style>
</style>