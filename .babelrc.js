module.exports = {
  presets: [
    ['@babel/preset-env', {
      targets: {
        node: 6,
      },
      useBuiltIns: 'usage',
      corejs: 3,
    }]
  ]
}
