//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    userInfos:[]
  },
  onLoad: function () {
    this.setData({
      userInfos: (wx.getStorageSync('userInfos') || []).map(userInfo => {
        return userInfo
      })
    });

    var logs = this.data.logs;
    var userInfos = this.data.userInfos;
  }
})
