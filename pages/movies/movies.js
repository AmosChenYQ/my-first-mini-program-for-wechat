// pages/movies/movies.js
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    inTheaters:[],
    comingSoon: [],
    doubanTop250: [],
    callback: () => {
      console.log("callback");
    }
  },

  getMoviesListData(uri, dataName) {
    try {
      wx.request({
        url: app.gBaseUrl + uri,
        data:{
          start:0,
          count:3
        },
        success: (res) => {
          res.data.subjects.forEach(item => item.rating.stars = parseInt(item.rating.stars) / 10);
          this.setData({[dataName]: res.data.subjects});
        }
      });
    } catch(e) {
      console.log(e);
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getMoviesListData("in_theaters", "inTheaters");
    this.getMoviesListData("coming_soon", "comingSoon");
    this.getMoviesListData("top250", "doubanTop250");
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