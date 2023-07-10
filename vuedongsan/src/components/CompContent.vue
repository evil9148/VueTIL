<template>
  <div v-for="(roomContainer, idx) in rooms" :key="idx">
    <img class="room-img" :src="rooms[idx].image" alt="" />
    <h4 @click="modalHandler(idx)">{{ rooms[idx].title }}</h4>
    <p>{{ rooms[idx].price }}</p>
  </div>
</template>

<script>
export default {
  name: "CompContent",
  props: ["rooms", "modal"],
  setup(props, context) {
    const modalHandler = (idx) => {
      modal.value = true;
      click.value = idx;
      context.emit('idx',idx)
    };
    return { modalHandler };
  },
};
</script>

<style>
</style>