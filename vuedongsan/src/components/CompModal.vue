<template>
  <div class="black-bg" v-if="modal === true">
    <div class="white-bg">
      <img :src="rooms[click].image" alt="" />
      <div>
        <h4>{{ rooms[click].title }}</h4>
        <p>상세정보 : {{ rooms[click].content }}</p>
        <input v-model.number="month" type="number">
        <p>{{month}}개월 결제시 가격 : {{ rooms[click].price * month }}</p>
      </div>
      <button @click="$emit('closeModal')">close</button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  name: "CompModal",
  props: ["rooms","click","modal","modalClose"],
  setup() {
    let month = ref(0)
    return {
      month
    };
  },
};
</script>

<style>
.black-bg {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 20px;
}

.white-bg {
  width: 70%;
  padding: 20px;
  margin: 0 auto;
  border-radius: 20px;
  background-color: #fff;
}
.white-bg h4 {
  text-align: center;
}

.white-bg img {
  display: block;
  width: 512px;
  margin: 0 auto;
}

.white-bg div {
  margin: 0 auto;
  width: 512px;
  box-sizing: border-box;
  margin-top: 20px;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 4px 16px rgba(17, 17, 26, 0.05),
    0px 8px 32px rgba(17, 17, 26, 0.05);
}
</style>