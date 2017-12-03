// pages/welcome/welcome.js
Page({

  clickLogo:function(){
    wx.reLaunch({
      url: '../index/index'
    });
  },

  onShareAppMessage: function () {
    return {
      title: 'e 生活',
      desc: '还没进去就想分享？我就喜欢你这样的老铁☺️',
      success: function (res) {
        wx.showToast({
          title: "分享成功",
          duration: 1000,
          icon: "success"
        })
      }
    }
  }
})