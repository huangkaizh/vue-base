<template>
  <div>
    pageC
  </div>
</template>

<script>
export default {
  data () {
    return {
      c: null
    }
  },
  beforeCreate () {
    console.log('pageC beforeCreate')
  },
  created () {
    console.log('pageC created')
  },
  beforeMount () {
    console.log('pageC beforeMount')
  },
  mounted () {
    console.log('pageC mounted')
  },
  activated () {
    console.log('pageC activated')
  },
  deactivated () {
    console.log('pageC deactivated')
  },
  beforeUpdate () {
    console.log('pageC beforeUpdate')
  },
  updated () {
    console.log('pageC updated')
  },
  beforeDestroy () {
    console.log('pageC beforeDestroy')
  },
  destroyed () {
    console.log('pageC destroyed')
  }
}
</script>
