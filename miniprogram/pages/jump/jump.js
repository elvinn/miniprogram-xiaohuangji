Page({

  /**
   * 页面的初始数据
   */
  data: {
    appId: '',
    path: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const {
      appId = 'wxe4675794891ef72f',
      path,
    } = options;
    this.setData({
      appId,
      path: decodeURIComponent(path),
    });
  },

  onShareAppMessage() {},

  onJump() {
    const {
      appId,
      path = '',
    } = this.data;

    wx.navigateToMiniProgram({
      appId,
      path,
    });
  },
})