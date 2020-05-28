<template>
  <div>
    pageA
    <button @click="sayHi">
      sayHi
    </button>
    <button @click="sayGoodbye">
      sayGoodbye
    </button>
    <a href="#/pageB">pageB</a>
    <PageAChild :value="pageAChildVal" />
    <span>{{ obj.a }}</span>
  </div>
</template>

<script>
import mapData from '../mapData/71.json'
import PageAChild from '../components/pageA/PageAChild.vue'
export default {
  components: {
    PageAChild
  },
  data () {
    return {
      count: 0,
      timer: null,
      mapData: mapData,
      pageAChildVal: 'abc',
      obj: {
        a: 1
      }
    }
  },
  computed: {
    computedObj () {
      const computedObj = {
        a: this.obj.a + 1
      }
      return computedObj
    }
  },
  beforeCreate () {
    console.log('pageA beforeCreate this.obj', this.obj)
    console.log('pageA beforeCreate', this)
  },
  created () {
    console.log('pageA created', this)
    console.log('this.mapData', this.mapData)
    this.setInterval()
  },
  beforeMount () {
    console.log('pageA beforeMount', this)
  },
  mounted () {
    console.log('pageA mounted', this)
  },
  activated () {
    console.log('pageA activated', this)
  },
  deactivated () {
    console.log('pageA deactivated', this)
  },
  beforeUpdate () {
    console.log('pageA beforeUpdate', this)
  },
  updated () {
    console.log('pageA updated', this)
  },
  beforeDestroy () {
    console.log('pageA beforeDestroy', this)
    this.clearInterval()
  },
  destroyed () {
    console.log('pageA destroyed', this)
  },
  methods: {
    clearInterval () {
      clearInterval(this.timer)
      console.log('clearInterval this.interval', this.interval)
    },
    setInterval () {
      this.timer = setInterval(() => {
        this.count++
        console.log('this.count: ', this.count)
        console.log('this.mapData', JSON.parse(JSON.stringify(this.mapData)))
      }, 2000)
    },
    sayHi () {
      console.log('hi')
      const rand = Math.round(Math.random() * 100)
      const pageAChildVal = 'hi, ' + rand
      this.pageAChildVal = pageAChildVal
    },
    sayGoodbye () {
      console.log('goodbye')
      this.pageAChildVal = 'goodbye'
    }
  },
  errorCaptured (err, vm, info) {
    console.log('pageA errorCaptured')
    console.log('err', err)
    console.log('vm', vm)
    console.log('info', info)
    return false
  }
}
</script>
