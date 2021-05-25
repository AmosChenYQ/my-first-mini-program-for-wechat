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

  async onShare(event) {
    let actionResult = await wx.showActionSheet({
      itemList: ["Share to Friends", "Share to Moments"],
    });
    console.log(actionResult);
  },

  onAudio() {
    let manager = wx.getBackgroundAudioManager();
    manager.src = postsList[this.data._pid].music.url;
    manager.title = postsList[this.data._pid].music.title;
  },

  async onCollect(event) {
    const collectedPosts = this.data._collectedPosts;
    let collected = !this.data.collected;
    this.setData({collected: collected});
    collectedPosts[this.data._pid] = collected;
    wx.setStorageSync('collectedPosts', collectedPosts);

    wx.showToast({
      title: collected ? "Collected" : "Un-Collected" ,
      duration: 3000
    });

    /*
    let modalResult = await wx.showModal({
      title: "Collect Hint",
      content: !collected ? "Do you want to un-collect this article?" : "Do you want to collect this article?"
    });
    if(modalResult.confirm) {
      this.setData({collected: collected});
      collectedPosts[this.data._pid] = collected;
      wx.setStorageSync('collectedPosts', collectedPosts);
    }
    */
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