<template>
  <form>
    <CompBtnsVue :propsNum="propsNum" @btnEmit="fnSendEmit" />
  </form>
</template>

<script>
import CompBtnsVue from "./CompBtns.vue";

export default {
  props: ["propsNum"],
  components: { CompBtnsVue },
  setup(props, context) {
    const fnSendEmit = (sendValue)=>{
      context.emit('formEmit',sendValue)
    }
    return {fnSendEmit};
  },
};
</script>

<style>
</style>