<template>
  <div>
    pageB
    <a href="#/pageA">pageA</a>
    <div ref="num">
      {{ number }}
    </div>
    <button @click="handleClick">
      addNum
    </button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      b: null,
      number: 0
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
  },
  methods: {
    handleClick () {
      console.log(new Date().getTime())
      for (let i = 0; i < 1000000; i++) {
        this.number++
      }
      console.log(new Date().getTime())
    }
  }
}
</script>
