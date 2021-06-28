const imgList = [
  "http://im6.leaderhero.com/emotion/6040/406810677/1d7351070c.gif",
  "http://im6.leaderhero.com/emotion/6040/406810677/d244c37d4e.jpg",
  "http://im6.leaderhero.com/emotion/6040/406810677/bcd1da8e0c.jpg",
  "http://im6.leaderhero.com/emotion/6040/406810677/cf2d2be518.jpg",
  "http://im6.leaderhero.com/emotion/6040/406810677/84635804e3.jpg",
  "http://im6.leaderhero.com/emotion/6040/406810677/9d78619d1f.jpg",
  "http://im6.leaderhero.com/emotion/6040/406810677/211eb7f568.jpg",
  "http://im6.leaderhero.com/emotion/6040/406810677/d480d75363.jpg",
  "http://im6.leaderhero.com/emotion/6040/406810677/adacd5900a.jpg",
  "http://im6.leaderhero.com/emotion/6040/406810677/46283fc058.jpg",
  "http://im6.leaderhero.com/emotion/6040/406810677/11b72b7c29.jpg",
  "http://im6.leaderhero.com/emotion/6040/406810677/89b0e4e20b.jpg",
  "http://im6.leaderhero.com/emotion/6040/406810677/22d1394d56.jpg",
  "http://im6.leaderhero.com/emotion/6040/406810677/cbabbb8fc7.jpg",
  "http://im6.leaderhero.com/emotion/6040/406810677/72c4607ece.jpg",
  "http://im6.leaderhero.com/emotion/6040/406810677/a18edd95a2.jpg",
  "http://im6.leaderhero.com/emotion/6040/406810677/9f06228b52.jpg",
  "http://im6.leaderhero.com/emotion/6040/406810677/5174bf886d.jpg",
  "http://im6.leaderhero.com/emotion/6040/406810677/100d04aff3.jpg",
  "http://im6.leaderhero.com/emotion/6040/406810677/0bafb7cad8.gif",
  "http://im6.leaderhero.com/emotion/6040/406810677/ebb863494d.jpg",
  "http://im6.leaderhero.com/emotion/6040/406810677/74ab004734.jpg",
  "http://im6.leaderhero.com/emotion/6040/406810677/1aed00c884.jpg",
  "http://im6.leaderhero.com/emotion/6040/406810677/0381dc4f5d.jpg",
  "http://im6.leaderhero.com/emotion/6040/406810677/213e3b7989.jpg",
  "http://im6.leaderhero.com/emotion/6040/406810677/ea77a5d65a.jpg",
  "http://im6.leaderhero.com/emotion/6040/406810677/277b13a134.jpg",
  "http://im6.leaderhero.com/emotion/6040/406810677/1cc6210204.jpg",
  "http://im6.leaderhero.com/emotion/6040/406810677/237d0f7110.jpg",
  "http://im6.leaderhero.com/emotion/6040/406810677/631690b4a8.jpg",
  "http://im6.leaderhero.com/emotion/6040/406810677/90f5e39be4.jpg",
  "http://im6.leaderhero.com/emotion/6040/406810677/9de34bad8c.jpg",
  "http://im6.leaderhero.com/emotion/6040/406810677/13a0cb9dba.jpg",
  "http://im6.leaderhero.com/emotion/6040/406810677/8f643d7d05.jpg",
  "http://im6.leaderhero.com/emotion/6040/406810677/a7d7dfc0bf.jpg",
  "http://im6.leaderhero.com/emotion/6040/406810677/e77cb4bf31.jpg",
  "http://im6.leaderhero.com/emotion/6040/406810677/b38aaa4a97.jpg",
  "http://im6.leaderhero.com/emotion/6040/406810677/a025678b4f.jpg",
  "http://im6.leaderhero.com/emotion/6040/406810677/f22d066288.jpg",
  "http://im6.leaderhero.com/emotion/6040/406810677/7a598aa94c.jpg",
  "http://im6.leaderhero.com/emotion/6040/406810677/547a6c9a44.jpg",
  "http://im6.leaderhero.com/emotion/6250/567707265/b25a35e8b4.gif",
  "http://im6.leaderhero.com/emotion/6338/406810677/a7cc658726.jpg",
  "http://im6.leaderhero.com/emotion/6338/406810677/b592906275.gif",
  "http://im6.leaderhero.com/emotion/6338/406810677/732e13b515.gif",
  "http://im6.leaderhero.com/emotion/6338/406810677/95bc452284.jpg",
  "http://im6.leaderhero.com/emotion/6338/406810677/b9c0809d2d.gif",
  "http://im6.leaderhero.com/emotion/6338/406810677/3ab9f4215a.jpg",
  "http://im6.leaderhero.com/emotion/6338/406810677/945be1c49e.jpg",
  "http://im6.leaderhero.com/emotion/6338/406810677/03014dabcb.jpg",
  "http://im6.leaderhero.com/emotion/6338/406810677/930843e31d.jpg",
  "http://im6.leaderhero.com/emotion/6338/406810677/b2c6f88c1f.jpg",
  "http://im6.leaderhero.com/emotion/6338/406810677/f386837d73.jpg",
  "http://im6.leaderhero.com/emotion/6338/406810677/f60e96b44b.jpg",
  "http://im6.leaderhero.com/emotion/6338/406810677/b8b3c5ff44.jpg",
  "http://im6.leaderhero.com/emotion/6338/406810677/edd8a729fe.jpg",
  "http://im6.leaderhero.com/emotion/6338/406810677/1b2cd8735e.jpg",
  "http://im6.leaderhero.com/emotion/6338/406810677/b1e917a130.gif",
  "http://im6.leaderhero.com/emotion/6338/406810677/a82dbfb794.jpg",
  "http://im6.leaderhero.com/emotion/6338/406810677/ddbedc16d9.jpg",
  "http://im6.leaderhero.com/emotion/6338/406810677/69e98edaee.gif",
  "http://im6.leaderhero.com/emotion/6338/406810677/bfb5ad9c16.gif",
  "http://im6.leaderhero.com/emotion/6338/406810677/67cf581a8f.gif",
  "http://im6.leaderhero.com/emotion/6338/406810677/82a7710065.jpg",
]

const fs = require('fs');
const path = require('path');
const request = require('request');

const saveDirectory = path.join(__dirname, '../newImg/');
if (!fs.existsSync(saveDirectory)) {
  fs.mkdirSync(saveDirectory)
}

const download = (index, url) => {
  const arr = url.split('/');
  const name = arr.slice(-1);
  const savePath = path.join(saveDirectory, `${index}-${name}`);

  request.head(url, () => {
    request(url)
      .pipe(fs.createWriteStream(savePath))
      .on('close', () => {
        console.log(`${url} => ${savePath} ✅`)
      })
  })
}

imgList.forEach((imgUrl, index) => {
  // 200 毫秒下载一张
  setTimeout(() => download(index, imgUrl), 200 * index);
})