const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {

    comments:[]
    
  },

  // 点赞
  zanClick (e) {
    const postId = e.currentTarget.dataset.id;
    const comments = app.globalData.book.comments;
    for (var i = 0; i < comments.length; i++) {
      var item = comments[i];
      if (item.postId == postId) {
        // if (item.zan == false) {
        //   item.zanCount++;
        //   item.zan = true;
        // } else {
        //   item.zanCount--;
        //   item.zan = false;
        // }

        item.zan ? item.zanCount-- : item.zanCount++;
        item.zan = !item.zan;
      }
    }
    this.setDataHandler();
  },
  //定义的方法
  setDataHandler: function (e) {
    const book = app.globalData.book;
    this.setData({
      title: book.title,
      desc: book.desc,
      comments: book.comments
    })
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
    var book = app.globalData.book;

    this.setData({
      title: book.title,
      desc: book.desc,
      comments: book.comments

    })
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