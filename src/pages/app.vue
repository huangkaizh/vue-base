<template>
  <article class="test">
    <p>{{ vue }}</p>
  </article>
</template>

<script>
export default {
  data () {
    return {
      vue: 'vue'
    }
  }
}
</script>

<style scoped>
.test > p {
  background-color: aqua;
}
</style>

<style lang="less" scoped>
.test > p {
  color: red;
}
</style>
