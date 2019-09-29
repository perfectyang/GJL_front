
import axios from 'axios'
import qs from 'qs'
import { message } from 'antd'
const fetch = axios.create({
  baseURL: '/',
  timeout: 50000
})
const config = Object.assign({
  headers: {
    withCredentials: true,
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})
fetch.interceptors.request.use(config => {
  const tokenId = JSON.parse(window.localStorage.getItem('token_id')) || ''
  if (Object.prototype.toString.call(config.data) === '[object FormData]') {
    config.headers['Content-Type'] = 'multipart/form-data'
    config.data.append('token_id', tokenId)
  } else {
    Object.keys(config.data).forEach(key => {
      if (Object.prototype.toString.call(config.data[key]) === '[object Object]') {
        config.data[key] = JSON.stringify(config.data[key])
      }
    })
    config.data.token_id = tokenId
    config.data = qs.stringify(config.data)
  }
  return config
}, (error) => {
  return Promise.reject(error)
})
fetch.interceptors.response.use(response => {
  return response
}, (error) => {
  // console.log('请求失败！请重试2222')
  message.error('请求失败！请重试', 1)
  return Promise.reject(error)
})

const handlResult = (res, callback) => {
  if (/^([1-9]\d?)$/.test(+res.data.code)) {
    // console.log(res.data.message)
    message.error(res.data.message, 1)
    callback(null)
  } else {
    message.success(res.data.message, 1)
    callback(res.data)
  }
}

// function get (url, params) {
//   return new Promise((resolve, reject) => {
//     fetch.get(url, {
//       params,
//       headers: config.headers
//     }).then(response => {
//       handlResult(response, resolve)
//     }).catch(err => {
//       resolve(null, err)
//     })
//   })
// }

function post (url, params) {
  return new Promise((resolve, reject) => {
    fetch.post(url, params, config).then(response => {
      handlResult(response, resolve)
    }).catch(err => {
      resolve(null, err)
    })
  })
}

export default {
  post
  // get
}
