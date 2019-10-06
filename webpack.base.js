module.exports = {
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