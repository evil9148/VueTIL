<template>
  <div>
    {{ propsNum }}
    <button @click.prevent="$emit('btnEmit','1')" :class="propsNum === '1' && 'active'">1</button>
    <button @click.prevent="$emit('btnEmit','2')" :class="propsNum === '2' && 'active'">2</button>
    <button @click.prevent="$emit('btnEmit','3')" :class="propsNum === '3' && 'active'">3</button>
    <button @click.prevent="$emit('btnEmit','4')" :class="propsNum === '4' && 'active'">4</button>
    <button @click.prevent="$emit('btnEmit','5')" :class="propsNum === '5' && 'active'">5</button>
   
  </div>
</template>

<script>
export default {
  emits: ['btnEmit'],
  props: ["propsNum"],
};
</script>

<style>
</style>