// module.exports = function override(config, env) {
//   //do stuff with the webpack config...
//   console.log('env', env)
//   console.log('config', config)
//   return config;
// }

const { addLessLoader, override, addDecoratorsLegacy } = require("customize-cra");

module.exports = override(
  addLessLoader({
    javascriptEnabled: true,
    strictMath: true,
    noIeCompat: true,
    localIdentName: "[local]--[hash:base64:5]" // if you use CSS Modules, and custom `localIdentName`, default is '[local]--[hash:base64:5]'.
  }),
  addDecoratorsLegacy()
  // fixBabelImports('import', {
  //   libraryName: 'antd',
  //   libraryDirectory: 'es',
  //   style: true
  // })
);