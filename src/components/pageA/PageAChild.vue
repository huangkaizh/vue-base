<template>
  <div>pageA's Child</div>
</template>

<script>
export default {
  data () {
    return {
      a: null
    }
  },
  beforeCreate () {
    console.log('PageAChild beforeCreate')
  },
  created () {
    console.log('PageAChild created')
  },
  beforeMount () {
    console.log('PageAChild beforeMount')
  },
  mounted () {
    console.log('PageAChild mounted')
  },
  activated () {
    console.log('PageAChild activated')
  },
  deactivated () {
    console.log('PageAChild deactivated')
  },
  beforeUpdate () {
    console.log('PageAChild beforeUpdate')
  },
  updated () {
    console.log('PageAChild updated')
  },
  beforeDestroy () {
    console.log('PageAChild beforeDestroy')
  },
  destroyed () {
    console.log('PageAChild destroyed')
  }
}
</script>
