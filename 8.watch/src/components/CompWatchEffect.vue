<template>
  <h2>watchEffect</h2>
  <div v-if="!user">
    <p>로그인 전 <button @click="user = true">login</button></p>
    <p>비회원 페이지...</p>
  </div>

  <div v-if="user">
    <p>로그인 후 <button @click="user = false">logout</button></p>
    <p>ID : {{ ID }} name : {{ name }} email : {{ eamil }}</p>
  </div>
</template>

<script>
import { ref, watchEffect } from "vue";
export default {
  setup() {
    const user = ref(false);
    const ID = ref();
    const name = ref("");
    const email = ref("");
    watchEffect(() => {
      if (user.value) {
        (ID.value = "userid"), (name.value = "jun"), (email.value = "a@a.com");
        setTimeout(()=>{
          user.value = false
        },3000)
      } else {
        (ID.value = ""), (name.value = ""), (email.value = "");
      }
    });
    return {
      ID,
      name,
      email,
      user,
    };
  },
};
</script>

<style>
</style>