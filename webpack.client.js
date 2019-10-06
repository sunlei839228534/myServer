const Path = require('path')
const merge = require('webpack-merge')
const Config = require('./webpack.base.js')

const clientConfig = {
  mode: "development",
  entry: './src/client/index.js', //打包的路径
  output: { //打包完成后的路径在哪里显示
  filename: 'index.js', //打包完成后的文件叫做bundle.js
  path: Path.resolve(__dirname, 'public') //打包完成后的路径 bundle.js放在哪里
},
}

module.exports = merge(Config,clientConfig)