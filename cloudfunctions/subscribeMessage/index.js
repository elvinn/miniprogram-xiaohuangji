const cloud = require('wx-server-sdk')

cloud.init({
  env: 'xiaohuangji-7g6y1dxh578e577a',
});

const db = cloud.database();
const subscribeMessageCollection = db.collection('subscribeMessageCollection');

const subscribeMessage = async (messageId) => {
  const { OPENID } = cloud.getWXContext();
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

exports.main = async (event) => {
  const { idList = [] } = event; 
  const promiseList = idList.map((id) => subscribeMessage(id));
  const res = await Promise.all(promiseList).catch((error) => {
    console.error('次数添加失败', error);
  });

  const code = res ? 0 : -1;
  
  return { code };
}
