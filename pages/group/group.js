Page({

  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots: true,
    indicatorColor: "#fff",
    imgUrl:[],
    list:[]

  },

  

  onTapBook: function (e) {
    wx.navigateTo({
      url: './more-books/more-books'

    })
  },  
  //跳转到书籍详情页
  onTap: function (e) {
    wx.navigateTo({
      url: "../detail/detail"
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      imgUrl: [{
        img: "/source/images/pic_book1.png"
      },
      {
        img: "/source/images/pic_book1.png"
      },
      {
        img: "/source/images/pic_book1.png"
      },
      {
        img: "/source/images/pic_book1.png"
      },
      {
        img: "/source/images/pic_book1.png"
      },
      ],
      bannerUrl: [{
        img: "/source/images/banner_0.png"
      },
      {
        img: "/source/images/banner_0.png"
      },
      {
        img: "/source/images/banner_0.png"
      },
      ],
      list: [
        {
          title: "演员文章",
          article: "文章1984年出生于陕西省西安市。上高三的时候，文章被保送到四川师范大学艺术学院学习影视表演，但是他并未进入这个学校，而是决心去北京学习。在填写大学志愿之前，"
        },
        {
          title: "中国文学词语",
          article: "书籍 [1]  ，是指装订成册的图书和文字，在狭义上的理解是带有文字和图像的纸张的集合。广义的书则是一切传播信息的媒体。不过有些人认为图书一词是“河图”与“洛书”的简称。"
        }

      ]
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