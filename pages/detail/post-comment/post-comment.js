const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '书名',
    currComment:''
  },

  //获取用户信息
  onGotUserInfo: function (e) {
    // var s = e.detail.userInfo;
    // console.log(s)
    app.globalData.userInfo = e.detail.userInfo;
  },
//点击发布评论
  formSubmit (e) {
    var val = e.detail.value.comment;
    if(!val){
      wx.showToast({
        title: '请填写评论',
        icon: 'none',
        duration: 1000,
        mask: true,
        success: function () {

        }
      })
    }else{
      const book = app.globalData.book;
      this.setData({
        currComment: e.detail.value.comment
      })
      book.comments.unshift({
        content: this.data.currComment,
        username: app.globalData.userInfo.nickName,
        head: app.globalData.userInfo.avatarUrl
      })
      wx.showToast({
        title: '评论成功',
        icon: 'success',
        duration: 5000,
        mask: true,
        success: function () {
          wx.navigateBack({
            url: '../detail',
            success: function(res) {},
            fail: function(res) {},
            complete: function(res) {},
          })

        }
      })
    }
   
  },

 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      title: app.globalData.book.title,
      desc: app.globalData.book.desc
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
    
  }
})