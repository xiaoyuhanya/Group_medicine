const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    selected: true,
    selected1: false,
    bookName: '书名',
    desc: "简介",
    comments: []
  },
  //tab切换方法
  selected: function (e) {
    this.setData({
      selected1: false,
      selected: true
    })
  },
  //tab切换方法
  selected1: function (e) {
    this.setData({
      selected: false,
      selected1: true
    })
  },
  // 跳转到评论页
  onGrosschange:function(e){
    wx.navigateTo({
      url: '../detail/comments/comments',
    })
  },
  //跳转到发布评论页
  postComment:function(e){
    wx.navigateTo({
      url: '../detail/post-comment/post-comment',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取数据...

    // 从后台获取数据之后
    app.globalData.book = {
      title: 'JavaScript高级程序设计',
      desc: "《JavaScript高级程序设计》是2006年人民邮电出版社出版的图书，作者是(美)(Nicholas C.Zakas)扎卡斯。",
      gross: "1000",      
      comments: [
        {
          username: 'a',
          content: 'aaaaaaaaaaaaaaaaaaaa',
          head: '/source/images/cont_user.png',
          postId:0
        },
        {
          username: 'b',
          content: 'bbbbbbbbbbbbbbbb',
          head: '/source/images/cont_user.png',
          postId: 1
        }
      ]
    }
    //将最新的值绑定到页面上
    // const book = app.globalData.book;
    // this.setData({
    //   title: book.title,
    //   desc: book.desc,
    //   comments: book.comments
    // })
    this.setDataHandler();

    //获取所有评论点赞的缓存状态
    var postComments = wx.getStorageSync("post_comments");

    //获取所有评论中一条评论点赞的缓存状态
    var aa = app.globalData.book.comments;
    for(var i = 0;i<aa.length;i++){
      console.log(aa[i].postId)
    }

  },
  //定义的方法
  setDataHandler: function (e) {
    const book = app.globalData.book;
    this.setData({
      title: book.title,
      desc: book.desc,
      gross:book.gross,
      comments: book.comments
    })
  },




  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // this.setData()
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.count('onShow')
    this.setDataHandler();
  },

})