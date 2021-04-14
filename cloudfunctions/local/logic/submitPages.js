/**
 * 提交小程序页面，方便搜一搜录入
 * 
 * https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/search/search.submitPages.html
 */
const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

module.exports = async () => {
  const result = await cloud.openapi.search.submitPages({
    pages: [
      {
        path: 'pages/index/index',
        query: '',
      }
    ]
  })
  
  console.log(result);
}
