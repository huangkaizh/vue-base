const merge = require('webpack-merge')
const prod = require('./webpack.prod.js')

module.exports = merge(prod, {
  mode: 'production', // 测试环境
  devtool: 'eval-source-map'
})
