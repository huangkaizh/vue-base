<template>
  <div>
    pageB
    <a href="#/pageA">pageA</a>
  </div>
</template>

<script>
export default {
  data () {
    return {
      b: null
    }
  },
  beforeCreate () {
    console.log('pageB beforeCreate')
  },
  created () {
    console.log('pageB created')
  },
  beforeMount () {
    console.log('pageB beforeMount')
  },
  mounted () {
    console.log('pageB mounted')
  },
  activated () {
    console.log('pageB activated')
  },
  deactivated () {
    console.log('pageB deactivated')
  },
  beforeUpdate () {
    console.log('pageB beforeUpdate')
  },
  updated () {
    console.log('pageB updated')
  },
  beforeDestroy () {
    console.log('pageB beforeDestroy')
  },
  destroyed () {
    console.log('pageB destroyed')
  }
}
</script>
