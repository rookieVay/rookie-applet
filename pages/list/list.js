var movieData = require('../../data/movie.js');
var comm = require('../../utils/comm.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    let $this = this;
    wx.request({
      url: 'https://www.easy-mock.com/mock/5ce34f3781db8b299f231911/debug/list',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        $this.setData({
          "banner": res.data.banner,
          "movie": res.data.movie
        });
      }
    })
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

  onDetails: function (options) {
    comm.onDetails(options);
  }
})