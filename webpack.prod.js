const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

module.exports = merge(common, {
  mode: 'production', // 生产环境需要压缩代码

  module: {
    rules: [
      {
        test: /\.vue$/,
        use: ['vue-loader']
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader',
          'less-loader'
        ] // 使用vue-style-loader直接插入到style标签中
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              // 这里的options选项参数可以定义多大的图片转换为base64
              limit: 50000, // 表示小于50kb的图片转为base64,大于50kb的是路径
              outputPath: 'images' // 定义输出的图片文件夹
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css' // 指定输出的css文件名
    }),
    new BundleAnalyzerPlugin() // 使用插件能清晰的展示出打包后的各个bundle所依赖的模块
  ]
})
