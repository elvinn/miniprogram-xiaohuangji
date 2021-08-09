const { recorder } = require('@tencent/mp-auto-test/index');

recorder.init();

App({
  onLaunch: function () {
    this.globalData = {};
    wx.cloud.init({
      env: 'xiaohuangji-7g6y1dxh578e577a',
      traceUser: true,
    });
  }
})
