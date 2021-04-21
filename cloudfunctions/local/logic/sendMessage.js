/**
 * 推送小程序订阅消息
 * 
 * https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/subscribe-message/subscribeMessage.send.html#method-cloud
 */
const cloud = require('wx-server-sdk')

const db = cloud.database();
const subscribeMessageCollection = db.collection('subscribeMessageCollection');

/**
 * 给单个用户发送订阅消息
 * @param {Object} 消息参数
 * @returns {Boolean} 是否发送成功
 */
const send = async ({
  OPENID = '',
  messageId = '',
  data = {},
  page = 'pages/index/index',
}) => {
  const result = await cloud.openapi.subscribeMessage.send({
    touser: OPENID,
    templateId: messageId,
    page,
    data,
  }).catch((error) => {
    console.error('消息发送失败', error);
  });

  if (!result) {
    return false;
  }

  console.log('消息发送成功', result);
  return true;
}

const sendMessage = async (event) => {
  const { messageId, page, data, testUserList = [] } = event;
  if (!messageId) {
    console.error('缺乏参数 id');
    return;
  }

  const isTest = testUserList.length > 0;

  let userList = isTest ? testUserList.map((OPENID) => ({ OPENID })) : [];
  
  if (!isTest) {
    ({ data: userList } = await subscribeMessageCollection.where({
      messageId,
      leftTimes: db.command.gt(0),
    }).get());
  }

  let successNum = 0;
  let failNum = 0;
  await Promise.all(userList.map(async ({ _id, OPENID }) => {
    const isSuccessful = await send({ OPENID, messageId, page, data });
    if (!isSuccessful) {
      failNum += 1;
      return;
    }

    successNum += 1;

    if (isTest) {
      return;
    }

    await subscribeMessageCollection.doc(_id).update({
      data: {
        leftTimes: db.command.inc(-1),
      },
    });
  }));

  console.log(`成功推送 ${successNum} 人, 失败推送 ${failNum} 人`);
};

module.exports = sendMessage;
