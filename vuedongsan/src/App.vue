<template>
  <transition name="fade">
    <CompModalVue
      @closeModal="modal = false"
      :click="click"
      :rooms="rooms"
      :modal="modal"
    />
  </transition>
  <div class="menu">
    <a v-for="(nav, idx) in menus" :key="idx">{{ menus[idx] }}</a>
  </div>
  <CompDiscountVue />

<div class="btns">
    <button @click="priceSort">가격순정렬</button>
    <button @click="priceReverseSort">가격역순정렬</button>
    <button @click="titleSort">가나다순정렬</button>
    <button @click="resetSort">되돌리기</button>
</div>

  <CompContentVue
    @showModal="
      modal = true;
      click = $event;
    "
    v-for="(roomContainer, idx) in rooms"
    :key="idx"
    :roomContainer="roomContainer"
    :idx="idx"
    :click="click"
  />
</template>

<script>
import roomInfo from "./post";
import CompDiscountVue from "./components/CompDiscount.vue";
import CompModalVue from "./components/CompModal.vue";
import CompContentVue from "./components/CompContent.vue";

export default {
  name: "App",
  data(){
    return {
      roomsOriginal: [...roomInfo],
      rooms: roomInfo,
      cnt: [0, 0, 0],
      menus: ["Home", "Shop", "About"],
      price: [90, 70, 40],
      click: 0,
      modal: false,
    };
  },
  methods: {
    priceSort(){
      this.rooms.sort((a, b) => {
        return a.price - b.price;
      });
    },
    priceReverseSort(){
      this.rooms.sort((a, b) => {
        return b.price - a.price;
      });
    },
    titleSort(){
      this.rooms.sort((a, b) => {
        return a.title.localeCompare(b.title);
      });
    },
    resetSort(){
      this.rooms = [...this.roomsOriginal]
    },
  },

   components: { CompDiscountVue, CompModalVue, CompContentVue },
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

.btns{
  text-align: center;
  margin: 10px;
}

.fade-enter-from {
  opacity: 0;
}

.fade-enter-active {
  transition: all 1s;
}

.fade-enter-to {
  opacity: 1;
}

.fade-leave-from {
  transform: translateY(0);
}

.fade-leave-active {
  transition: all 2s;
}

.fade-leave-to {
  transform: translateY(-1000px);
  opacity: 0;
}
</style>
