const Path = require('path')
const merge = require('webpack-merge')
const Config = require('./webpack.base.js')

const serverConfig = {
  target: 'node', //打包的目标是服务器的代码
  mode: "development",
  entry: './src/server/index.js', //打包的路径
  output: { //打包完成后的路径在哪里显示
    filename: 'bundle.js', //打包完成后的bundle.js
    path: Path.resolve(__dirname, 'build') //打包完成后的路径
  },
}

module.exports = merge(Config,serverConfig)