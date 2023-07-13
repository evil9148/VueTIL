<template>
  <div class="black-bg" v-if="modal === true">
    <div class="white-bg">
      <img :src="rooms[click].image" alt="" />
      <div>
        <h4>{{ rooms[click].title }}</h4>
        <p>상세정보 : {{ rooms[click].content }}</p>
        <input v-model="month" />
        <p>{{ month }}개월 결제시 가격 : {{ rooms[click].price * month }}</p>
      </div>
      <div class="pay" @click="payHandler">결제하기</div>
      <button @click="ModalClose($emit)">close</button>
    </div>
  </div>
</template>

<script>

export default {
  name: "CompModal",
  props: ["rooms", "click", "modal"],
  data() {
    return {
      month: 0,
    };
  },
  methods: {
    ModalClose(emit) {
      this.month = 0;
      emit("closeModal");
    },
    payHandler() {
      if (this.month < 3) {
        alert("3개월 이상만 결제가 가능합니다.");
        this.month = 3;
      }
    },
  },
  watch: {
    month(a) {
      if (isNaN(a)) {
        alert(`숫자만 입력이 가능합니다.`);
        this.month = 3;
      }
      if (a > 12) {
        alert("1~12개월만 입력이 가능합니다.");
      }
    },
  },
  beforeUpdate(){
    if(this.month == 1 || this.month == 2){
      alert('3개월 이상부터 결제가 가능합니다.')
    }
  },
};
</script>

<style>
.black-bg {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
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

.pay {
  cursor: pointer;
  text-align: center;
  color: #fff;
  background-color: darkslateblue;
}
</style>