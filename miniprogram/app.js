//app.js
App({
  onLaunch: function () {
    this.globalData = {};
    wx.cloud.init({
      traceUser: true,
    });
  }
})
