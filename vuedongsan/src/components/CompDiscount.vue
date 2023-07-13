<template>
  <div class="discount">
    <h4>지금 결제하면 {{ num }}% 할인</h4>
  </div>
</template>

<script>
export default {
  name: "CompDiscount",
  data() {
    return {
      num: 20,
    };
  },
  mounted() {
    let intervalId;
    intervalId = setInterval(() => {
      this.num -= 1;
      if (this.num <= 0) {
        clearInterval(intervalId);
      }
    }, 1000);
  },
};
</script>

<style>
.discount {
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
  background-color: #ccc;
}
</style>