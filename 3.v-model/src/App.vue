<template>
  <h1>v-model과 form요소</h1>
  <hr />
  <input v-model="str" type="text" />
  <p>입력된 내용 : {{ str }}</p>
  <form>
    <p>
      <input type="radio" v-model="gender" name="gender" value="man" />man
      <input type="radio" v-model="gender" name="gender" value="woman" />woman
    </p>
    <p>{{ gender }}을 선택하였습니다.</p>
  </form>
  <hr />
  <input v-model="checked" type="checkbox" />
  <p>체크여부 : {{ checked }}</p>
  <hr />
  <form>
    <p>
      <input v-model="num1" type="number" min="0" max="9" />
      <select v-model="oper">
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <input v-model="num2" type="number" min="0" max="9" />
    </p>
    <p>결과 : {{ fnCalc() }}</p>
  </form>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const str = ref("");
    const gender = ref("남자");
    const checked = ref(false);
    const num1 = ref(0);
    const num2 = ref(0);
    const oper = ref("");

    const fnCalc = () => {
      const n1 = num1.value;
      const n2 = num2.value;
      let result
      if (oper.value === "+") {
        result = n1 + n2;
      } else if (oper.value === "-") {
        result = n1 - n2;
      } else if (oper.value === "*") {
        result = n1 * n2;
      } else {
        result = n1 / n2;
      }
      return result
    };
    return {
      gender,
      checked,
      str,
      num1,
      num2,
      oper,
      fnCalc,
    };
  },
};
</script>

<style>
</style>