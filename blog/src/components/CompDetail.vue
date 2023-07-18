<template>

  <h4>상세페이지</h4>
  <h5>{{blogData[$route.params.id].title}}</h5>
  <p>{{blogData[$route.params.id].content}}</p>
</template>
  
<script>
export default {
  name: "CompDetail",
  props: { blogData: Array },
};
</script>

<style>
</style>