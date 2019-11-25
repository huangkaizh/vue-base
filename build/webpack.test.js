const path = require('path')
// const webpack = require('webpack')
const merge = require('webpack-merge')
// const nodeExternals = require('webpack-node-externals')
const common = require('./webpack.common')
function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = merge(common, {
  mode: 'development', // 开发环境不压缩代码，加快编译速度
  // externals: [nodeExternals],
  devtool: 'inline-cheap-module-source-map',
  // plugins: [
  //   new webpack.DefinePlugin({
  //     'process.env.NODE_ENV': JSON.stringify('test'),
  //     'process.env.Mock': true
  //   })
  // ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: ['vue-loader']
      },
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader'] // 使用vue-style-loader直接插入到style标签中
      },
      {
        test: /\.less$/,
        use: ['vue-style-loader', 'css-loader', 'less-loader'] // 使用vue-style-loader直接插入到style标签中
      },
      {
        test: /\.(png|jpg|gif|svg|ttf|woff)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              // 这里的options选项参数可以定义多大的图片转换为base64
              limit: 8192, // 表示小于8kb的图片转为base64,大于8kb的是路径
              outputPath: 'images' // 定义输出的图片文件夹
            }
          }
        ]
      },
      {
        test: /\.(js|vue)$/,
        use: {
          loader: 'eslint-loader',
          options: {
            formatter: require('eslint-friendly-formatter') // 默认的错误提示方式
          }
        },
        enforce: 'pre', // 编译前检查
        include: [resolve('../src')]
      }
    ]
  }
})
