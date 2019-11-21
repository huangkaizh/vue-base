const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const copyWebpackPlugin = require('copy-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const path = require('path')

module.exports = merge(common, {
  mode: 'production', // 生产环境需要压缩代码

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        use: ['vue-loader']
      },
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader']
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
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        libs: {
          name: 'chunk-libs',
          test: /[\\/]node_modules[\\/]/,
          priority: 10,
          chunks: 'initial' // only package third parties that are initially dependent
        },
        elementUI: {
          name: 'chunk-elementUI', // split elementUI into a single package
          priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
          test: /[\\/]node_modules[\\/]_?element-ui(.*)/ // in order to adapt to cnpm
        },
        commons: {
          name: 'chunk-commons',
          test: path.resolve(__dirname, '../src/components'),
          minChunks: 3, //  minimum common number
          priority: 5,
          reuseExistingChunk: true
        }
      }
    }
  },
  plugins: [
    new copyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'), // 打包的静态资源目录地址
        to: './static' // 打包到dist下面的static
      }
    ])
    // new BundleAnalyzerPlugin() // 使用此插件能清晰的展示出打包后的各个bundle所依赖的模块
  ]
})
