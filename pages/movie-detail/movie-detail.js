// pages/movie-detail/movie-detail.js
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    movie: {}
  },

  onViewMovieImage(event) {
    console.log(event);
    wx.previewImage({
      urls: [this.data.movie.images.large],
    })
  },

  prepProcessMovieData(movie) {
    movie.subTitle = `${movie.countries.toString()} · ${movie.year}`;
    movie.castsNames = movie.casts.map(item => item.name).join(" / ");
    movie.castsInfo = movie.casts.map((item) => {
      return {
        img: item?.avatars?.large || "",
        name: item.name
      }
    });
    movie.directorsNames = movie.directors.map(item => item.name).join("/");
    movie.genres = movie.genres.join(', ');
    console.log(movie);
    this.setData({movie});
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    wx.request({
      url: `${app.gBaseUrl}/subject/${options.movieId}`,
      success: (res) => {
        // console.log(res.data);
        this.prepProcessMovieData(res.data);
        // res.data.subTitle = `${res.data.countries.toString()} · ${res.data.year}`
        // this.setData({movie: res.data});
      }
    });
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