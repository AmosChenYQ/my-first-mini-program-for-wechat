import { postsList } from "../../data/data"

// pages/posts/posts.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  onNavigateToDetail(event) {
    wx.navigateTo({
      url: `/pages/post-detail/post-detail?pid=${event.currentTarget.dataset.postId}`,
    });
  },

  onTapAvatar(event) {
    // console.log(event);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad() {
    let data = postsList;
    let that = this;

    wx.request({
      url: 'https://zhihu.com/hot',
      dataType: 'json',
      success(res) {
        that.setData({postsList});
      }
    });

    // wx.setStorageSync('flag', true);
    wx.setStorageSync("flag", true);
    const flag = await wx.getStorage({key: "flag"});

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})