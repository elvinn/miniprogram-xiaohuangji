const cloud = require('wx-server-sdk')

cloud.init({
  env: 'xiaohuangji-7g6y1dxh578e577a',
});

const db = cloud.database();
const subscribeMessageCollection = db.collection('subscribeMessageCollection');

/**
 * 将指定的订阅消息次数加一
 * @param {Array} idList 
 * @returns {boolean} 是否成功
 */
const subscribeMessage = async (idList) => {
  const { OPENID } = cloud.getWXContext();
  const subscribe = async (messageId) => {
    const { data: [ existData ] } = await subscribeMessageCollection.where({
      OPENID,
      messageId,
    }).get();
  
    // 第一次订阅该消息
    if (!existData) {
      return subscribeMessageCollection.add({
        data: {
          OPENID,
          messageId,
          leftTimes: 1,
        },
      })
    }
  
    // 非第一次订阅消息，将次数加 1
    return subscribeMessageCollection.doc(existData._id).update({
      data: {
        leftTimes: db.command.inc(1),
      },
    });
  };
  
  const promiseList = idList.map((id) => subscribe(id));
  await Promise.all(promiseList).catch((error) => {
    console.error('次数添加失败', error);
    throw error
  });

  return true;
};

/**
 * 查询指定的订阅消息次数
 * @param {Array} idList 消息 ID 列表
 * @returns {Array} timesList 订阅次数列表
 */
const queryMessage = async (idList) => {
  const { OPENID } = cloud.getWXContext();
  const query = async (messageId) => {
    const {
      data: [
        { leftTimes = 0 } = {}
      ] = [],
    } = await subscribeMessageCollection.where({
      OPENID,
      messageId,
    }).get();

    return leftTimes;
  };

  const promiseList = idList.map((id) => query(id));
  const res = await Promise.all(promiseList).catch((error) => {
    console.error('查询失败');
    throw error;
  });

  return res;
};

exports.main = async (event) => {
  const { type, idList = [] } = event; 
  const handlerMap = {
    subscribe: subscribeMessage,
    query: queryMessage,
  };

  const handler = handlerMap[type];

  if (!handler) {
    console.error('缺乏处理函数', type);
    return { code: -2, message: '缺乏处理函数' };
  }

  const result = await handler(idList).catch((error) => {
    console.error(error);
  });

  if (!result) {
    return { code: -1 }
  }

  return { code: 0, result };
}
