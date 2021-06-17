// pages/more-movies/more-movies.js
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    movies: [],
    isLoading: false,
    _page: 1,
    _movies: [],
    _type: "in_theaters",
    _reachToEnd: false,
  },

  getMoviesListData(uri, page = 1) {
    try {
      wx.showNavigationBarLoading();
      wx.request({
        url: `${app.gBaseUrl}/${uri}`,
        data:{
          start: (page - 1) * app.gMoviesPerPage,
          count: app.gMoviesPerPage
        },
        success: (res) => {
          res.data.subjects.forEach(item => item.rating.stars = parseInt(item.rating.stars) / 10);
          if(res?.data?.subjects?.length && res?.data?.subjects?.length < app.gMoviesPerPage) {
            this.data._reachToEnd = true;
          }
          this.data._movies = this.data._movies.concat(res.data.subjects);
          wx.hideNavigationBarLoading();
          this.setData({movies: this.data._movies, isLoading: false});
        }
      });
    } catch(e) {
      this.setData({isLoading: false});
      console.error(e);
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.data._type = options.type;
    this.getMoviesListData(this.data._type, this.data._page);
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
    if(!this.data._reachToEnd) {
      this.data._page++;
      this.setData({isLoading: true});
      this.getMoviesListData(this.data._type, this.data._page);
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})