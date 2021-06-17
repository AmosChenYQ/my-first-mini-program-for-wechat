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
    searchBarQuery: "",
    isShowSearchResult: false,
    searchMovies: [],
    _searchMovies: [],
    _searchMoviesPage: 1,
    _querySearch: "",
    _isSearchPageLoading: false,
    _reachToEnd: false
  },

  getMoviesListData(uri, dataName) {
    try {
      wx.request({
        url: `${app.gBaseUrl}/${uri}`,
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
      console.error(e);
    }
  },

  getSearchMoviesData(query, page = 1) {
    wx.request({
      url: `${app.gBaseUrl}/search`,
      data: {
        q: query,
        start: (page - 1) * app.gSearchMoviesPerPage,
        count: app.gSearchMoviesPerPage
      },
      success: (res) => {
        if(res?.data?.subjects?.length && res.data.subjects.length < app.gSearchMoviesPerPage) {
          this.data._reachToEnd = true;
        }
        res.data.subjects.forEach(item => item.rating.stars = parseInt(item.rating.stars) / 10);
        this.data._searchMovies = this.data._searchMovies.concat(res.data.subjects);
        this.setData({searchMovies: this.data._searchMovies});
      }
    });
  },

  searchBarConfirm(event) {
    this.setData({isShowSearchResult: true});
    this.data._searchMovies = [];
    this.data._reachToEnd = false;
    this.data._searchMoviesPage = 1;
    this.data._querySearch = event.detail.value;
    this.getSearchMoviesData(this.data._querySearch, this._searchMoviesPage);
  },

  searchBarCancel(event) {
    const searchBar = this.selectComponent("#searchBar");
    searchBar.onClearTap(event);
    this.setData({isShowSearchResult: false});
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
    if(this.data.isShowSearchResult && !this.data._reachToEnd) {
        this.data._searchMoviesPage += 1;
        this.getSearchMoviesData(this.data._querySearch, this.data._searchMoviesPage);
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})