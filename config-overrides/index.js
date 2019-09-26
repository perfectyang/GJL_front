// module.exports = function override(config, env) {
//   //do stuff with the webpack config...
//   console.log('env', env)
//   console.log('config', config)
//   return config;
// }
const {
  addLessLoader,
  override,
  addDecoratorsLegacy,
  addWebpackAlias,
  fixBabelImports,
  addBabelPlugins
} = require("customize-cra");
const path = require('path')
const resolve = (pathName) => path.resolve(__dirname, '..', pathName)

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      '@primary-color': '#353b58',
      '@border-radius-base': '0'
    },
    localIdentName: "[local]--[hash:base64:5]"
  }),
  addDecoratorsLegacy(),
  addWebpackAlias({
    '@': resolve('src'),
    'Store': resolve('src/store'),
    'Reducers': resolve('src/store/reducers'),
    'View': resolve('src/view'),
    'Router': resolve('src/router')
  }),
  addBabelPlugins(
    "react-hot-loader/babel"
  )
);