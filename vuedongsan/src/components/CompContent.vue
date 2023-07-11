<template>
  <div>
    <img class="room-img" :src="roomContainer.image" alt="" />
    <h4 @click="fnShowModal">{{ roomContainer.title }}</h4>
    <p>{{ roomContainer.price }}</p>
  </div>
</template>

<script>
export default {
  name: "CompContent",
  props: { roomContainer: Object },
  data(){
    return{
      
    }
  },
  methods:{
    fnShowModal(){
      this.$emit('showModal',this.roomContainer.id)
    }
  }
};
</script>

<style>
</style>