<template>
  <div>
    {{name}}
    {{age}}
  </div>
</template>

<script>
import defineComponent from "vue";
export default defineComponent({
  name: "HelloWorld",
  props: ["name", "age"],
});
</script>

<style scoped>
</style>
