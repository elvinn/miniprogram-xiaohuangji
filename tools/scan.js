/**
 * 输出指定目录下的文件名（不支持递归）
 * 用于获取表情包目录下所有的表情包名称
 */
const fs = require('fs');
const path = require('path');

const imageFolder = path.join(__dirname, '../newImg');
const data = [];

fs.readdir(imageFolder, (err, files) => {
  files.forEach(file => {
    data.push(file);
  });

  console.log(JSON.stringify(data));
});