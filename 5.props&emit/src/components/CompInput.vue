<template>
  <h2>compinput</h2>
  <CompInputTextVue :propsNum="propsNum" @inputTextEmit="fnSetEmit" />
</template>

<script>
import CompInputTextVue from './CompInputText.vue';


export default {
  emits:['compInput'],
  props:['propsNum'],
  components:{CompInputTextVue},
  setup(props, context) {
    const fnSetEmit = (sendedvalue) => {
      context.emit('compInput',sendedvalue)
    };
    return {
      fnSetEmit,
    };
  },
};
</script>

<style>
</style>