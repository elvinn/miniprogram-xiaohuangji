const cloud = require('wx-server-sdk')

cloud.init({
  env: 'xiaohuangji-7g6y1dxh578e577a',
});

const handlerMap = {
  submitPages: require('./logic/submitPages'),
  sendMessage: require('./logic/sendMessage'),
};

exports.main = async (event) => {
  const { type } = event; 

  const handler = handlerMap[type];

  if (!handler) {
    console.error('缺乏处理函数', type);
    return;
  }

  await handler(event);
}
