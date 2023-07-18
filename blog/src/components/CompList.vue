<template>
  <div v-for="v in blogData" :key="v.number">
    <router-link to="/detail" >{{v.title}}</router-link>
    <p>{{v.content}}</p>
    <p>{{v.date}}</p>
  </div>
 
</template>

<script>
export default {
  name :'CompList',
  props:{blogData : Array}
};
</script>

<style>
</style>