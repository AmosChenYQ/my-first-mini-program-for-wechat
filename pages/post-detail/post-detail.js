import { postsList } from "../../data/data"

// pages/post-detail/post-detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    postData: {},
    collected: false,
    _pid: null,
    _collectedPosts: {}
  },

  onCollect(event) {
    const collectedPosts = this.data._collectedPosts;
    let collected = !this.data.collected;
    this.setData({collected: collected});
    collectedPosts[this.data._pid] = collected;
    wx.setStorageSync('collectedPosts', collectedPosts);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let postData = postsList[options.pid];
    this.data._pid = options.pid;
    const collectedPosts = wx.getStorageSync('collectedPosts') || {};
    this.data._collectedPosts = collectedPosts;
    let collected = collectedPosts[this.data._pid] || false;
    this.setData({postData, collected});
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