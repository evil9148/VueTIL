<template>
  <h1>v-if, v-show</h1>
  <hr>  
  <section>
    <img :src="require(`@/assets/img/img${n}.jpg`)" alt=""> <!-- 브라우저에 나오는 것은 같지만 요소 검사시 v-if는 요소가 출력한 것만 나오고 v-show는 요소가 다 나온다. 초기비용이 비쌀 경우 v-if를 사용한다. -->
    <p>
      <button class="btn btn-danger" @click="n=1">1</button>
      <button class="btn btn-danger" @click="n=2">2</button>
      <button class="btn btn-danger" @click="n=3">3</button> <!-- 버튼에는 v-model이 적용이 안된다.-->
    </p>
  </section>
  <hr>
  <form @submit.prevent="fnAdd($event.target.value)">
    <input v-model="text" type="text">
    <p v-if="arr && isErr">내용을 추가하고 입력하세요.</p>
    <p>{{arr}}</p>
  </form>
</template>

<script>
import { ref } from 'vue';

export default {

  setup() {
    const n = ref(1)
    const arr = ref([])
    const isErr = ref(false)
    const text = ref('')
    const fnAdd = ()=>{
    
      if(text.value){
        console.log('dsd');
         isErr.value = false
         arr.value.push(text.value)
      }else{
        isErr.value = true
      }
    }



    return {
      n, arr, isErr, text, fnAdd
    };
  },
};
</script>

<style>

</style>