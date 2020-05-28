<template>
  <div>
    <span>pageA's Child</span>
    <div>{{ value }}</div>
    <img
      src="http://bi.zcmorefun.com/img/lkfgkjk.png"
      @error="imgErrorHandler"
    >
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      a: null
    }
  },
  beforeCreate () {
    console.log('PageAChild beforeCreate')
    throw new Error('PageAChild create error')
  },
  // beforeCreate () {
  //   console.log('PageAChild beforeCreate')
  //   this.$throw(new Error('PageAChild create error'))
  // },
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
  },
  methods: {
    imgErrorHandler (event) {
      event.target.src = 'http://bi.zcmorefun.com/img/z16dkYCP.jpg'
    }
  }
}
</script>
