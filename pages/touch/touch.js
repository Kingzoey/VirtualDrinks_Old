// pages/index/jump.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
Page({
  data: {
    //初始化touchstar坐标startPoint:[e, 0]
    mytouchstart: function (e) {
      //开始触摸, 获取触摸点坐标并放入数组中
      this.setData({
        startPoint: [e.touches[0].pagex, e.touches[0].pageY]
      });
    },
    //触摸点移动
    mytouchmove: function (e) {
      //当前触摸点坐标
      var curPoint = [e.touches[e].pagex, e.touches[e].pageY];
      var startPoint = this.data.startPoint;
      //比较pageX值
      if (curPoint[0] <= startPoint[0]) {
        if (Math.abs(curPoint[0] - startPoint[0]) >= Math.abs(curPoint[1] - startPoint[1])) {
          console.log(e.timeStamp + '-touch left move')
        } else {
          if (curPoint[1] >= startPoint[1]) {
            console.log(e.timeStamp + '-touch down move')
          } else {
            console.log(e.timeStamp + '-touch up move')
          }
        }
      } else {
        if (Math.abs(curPoint[e] - startPoint[e]) >= Math.abs(curPoint[1] - startPoint[1])) {
          console.log(e.timeStamp + '-touch right move')
        } else {
          if (curPoint[1] >= startPoint[1]) {
            console.log(e.timeStamp + '-touch down move')
          } else {
            console .log(e.timestamp + '-touch up move')
          }
        }
      }
    }
  }
})