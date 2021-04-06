let transformRemoveConsolePlugin = []
// 生產環境清除console.log的資訊
if (process.env.NODE_ENV === 'production') {
  transformRemoveConsolePlugin = ['transform-remove-console']
}

module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    ...transformRemoveConsolePlugin
  ]
}
