const merge = require('webpack-merge')
const common = require('./webpack.common')
const path = require('path')

const devServerPort = 9527
const mockServerPort = 9528

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = merge(common, {
  mode: 'development', // 开发环境不压缩代码，加快编译速度
  devtool: 'source-map', // 提供源码映射文件，以便于调试
  devServer: {
    port: devServerPort,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: {
      // change xxx-api/login => /mock-api/v1/login
      // detail: https://cli.vuejs.org/config/#devserver-proxy
      '/api': {
        target: `http://localhost:${mockServerPort}/mock-api/v1`,
        changeOrigin: true, // needed for virtual hosted sites
        ws: true, // proxy websockets
        pathRewrite: {
          ['^/api']: ''
        }
      }
    }
  },
  optimization: {
    splitChunks: {
      chunks: 'all' // async表示只从异步加载得模块（动态加载import()）里面进行拆分；
      // initial表示只从入口模块进行拆分；all表示以上两者都包括
    }
  },
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
