const Path = require('path')

module.exports = {
  target: 'node', //打包的目标是服务器的代码
  mode: "development",
  entry: './src/index.js', //打包的路径
  output: { //打包完成后的路径在哪里显示
    filename: 'bundle.js', //打包完成后的bundle.js
    path: Path.resolve(__dirname, 'build') //打包完成后的路径
  },
  module: {
    rules: [{ //打包的规则
      test: /\.js?$/, //如果是.js的文件
      loader: 'babel-loader', //使用babel-loader编译
      exclude: /node_modules/, //node_modules文件夹下的文件不打包
      options: {
        presets: [
          'react', //编译react
          'stage-0',
          'es2015', //编译es6语法
          ['env', {
            targets: {
              browsers: ['last 2 versions'] //
            }
          }]
        ]
      }
    }]
  }
}