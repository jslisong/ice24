// pages/game/game.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    gms: [
      {
        idd: 1,
        das: [1,5,5,5],
      },
      {
        idd: 2,
        das:[2, 2, 7, 7],
      },
      {
        idd: 3,
        das:[2, 4, 10, 10],
      },
      {
        idd: 4,
        das:[3, 3, 8, 8],
      },
      {
        idd: 5,
        das:[4, 4, 7, 7],
      },
      {
        idd: 6,
        das:[4, 4, 10, 10],
      },
    ]
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

  },

  goPlay: function(event){
    console.log(event);
    wx.navigateTo({ url: '../play/play' })
  },
})
