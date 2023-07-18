<template>
  {{ propsNum }}
  <input
    :value="propsNum"
    @input="$emit('inputTextEmit', $event.target.value)"
    type="text"
  />
</template>

<script>
export default {
  emits: ["inputTextEmit"],
  props: ["propsNum"],
  setup() {
    console.log('tt');
  },
};
</script>

<style>
</style>