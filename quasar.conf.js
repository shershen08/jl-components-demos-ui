// const path = require('path')
const { configure } = require('quasar/wrappers')

module.exports = configure(function (ctx) {
  return {
    framework: {
      iconSet: 'fontawesome-v6',
      // iconSet: 'material-icons-outlined',
      // iconSet: 'bootstrap-icons',
    },
    boot: [],
    build: {}
  }
})
