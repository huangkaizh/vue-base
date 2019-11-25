<template>
  <div id="app">
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {
  data () {
    return {
      vue: 'vue'
    }
  },
  beforeCreate () {
    console.log('app beforeCreate')
  },
  created () {
    console.log('app created')
  },
  beforeMount () {
    console.log('app beforeMount')
  },
  mounted () {
    console.log('app mounted')
  },
  activated () {
    console.log('app activated')
  },
  deactivated () {
    console.log('app deactivated')
  },
  beforeUpdate () {
    console.log('app beforeUpdate')
  },
  updated () {
    console.log('app updated')
  },
  beforeDestroy () {
    console.log('app beforeDestroy')
  },
  destroyed () {
    console.log('app destroyed')
  },
  errorCaptured () {
    console.log('app errorCaptured')
  }
}
</script>

<style scoped>
/* .test > p {
  background-color: aqua;
} */
</style>

<style lang="less" scoped>
// .test > p {
//   color: red;
// }
</style>
