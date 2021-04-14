const handlerMap = {
  submitPages: require('./logic/submitPages'),
};

exports.main = async (event, context) => {
  const { type } = event; 

  const handler = handlerMap[type];

  if (!handler) {
    console.error('缺乏处理函数', type);
    return;
  }

  handler();
}
