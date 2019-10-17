const path = require('path')
const fs = require('fs')

function readConten (file) {
  return fs.readFileSync(file, 'utf8')
}

const reg = /\$t\((.*?)\[(.*?)\](.*?)\)/gi

function readFn (file) {
  let fileContent = readConten(file)
  fileContent = fileContent.replace(reg, ($0, $1, $2, $3) => {
    return `$t(${$2.replace(/"/gi, "'")})`
  })
  fs.writeFileSync(file, fileContent, 'utf8')
  console.log('出来的内容', fileContent)
}

function fileDisplay (filePath) {
  // 根据文件路径读取文件，返回文件列表
  fs.readdir(filePath, function (err, files) {
    if (err) {
      console.warn(err)
    } else {
      // 遍历读取到的文件列表
      files.forEach(function (filename) {
        // 获取当前文件的绝对路径
        var filedir = path.join(filePath, filename)
        // 根据文件路径获取文件信息，返回一个fs.Stats对象
        fs.stat(filedir, function (eror, stats) {
          if (eror) {
            console.warn('获取文件stats失败')
          } else {
            var isFile = stats.isFile() // 是文件
            var isDir = stats.isDirectory() // 是文件夹
            if (isFile) {
              if (['.js', '.vue', '.html'].includes(path.extname(filedir))) {
                console.log(filedir)
                readFn(filedir)
              }
            }
            if (isDir) {
              fileDisplay(filedir) // 递归，如果是文件夹，就继续遍历该文件夹下面的文件
            }
          }
        })
      })
    }
  })
}
var filePath = path.resolve(__dirname, './components')
fileDisplay(filePath)
