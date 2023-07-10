<template>
  <CompModalVue
    :click="click"
    :rooms="rooms"
    :modal="modal"
    :modalClose="modalClose"
  />
  <div class="menu">
    <a v-for="(nav, idx) in menus" :key="idx">{{ menus[idx] }}</a>
  </div>
  <CompDiscountVue  />
  <CompContentVue :rooms="rooms" :modalHandler='modalHandler' />
</template>

<script>
import roomInfo from "./post";
import { ref } from "vue";
import CompDiscountVue from "./components/CompDiscount.vue";
import CompModalVue from "./components/CompModal.vue";
import CompContentVue from "./components/CompContent.vue";

export default {
  components: { CompDiscountVue, CompModalVue, CompContentVue },
  name: "App",
  setup() {
    const rooms = roomInfo;
    const cnt = ref([0, 0, 0]);
    const menus = ref(["Home", "Shop", "About"]);
    const price = ref([90, 70, 40]);
    let click = ref(0);
    let modal = ref(false);
    const modalClose = () => {
      modal.value = false;
    };
    return {
      cnt,
      menus,
      price,
      modal,
      modalClose,
      rooms,
      click,
    };
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
div {
  box-sizing: border-box;
}

.room-img {
  display: block;
  width: 50%;
  margin: 0 auto;
}
.menu {
  background-color: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}
.menu a {
  color: #fff;
  padding: 10px;
}
</style>
