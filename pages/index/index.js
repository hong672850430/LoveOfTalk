Page({
  data:{
      text:'公司简介（点击进入详情）',
      imgUrls:[
       'http://loveoftalk-1251154446.cossh.myqcloud.com/banner/banner1.jpg',
       'http://loveoftalk-1251154446.cossh.myqcloud.com/banner/banner2.jpg',
       'http://loveoftalk-1251154446.cossh.myqcloud.com/banner/banner3.jpg',
       'http://loveoftalk-1251154446.cossh.myqcloud.com/banner/banner4.jpg',
       'http://loveoftalk-1251154446.cossh.myqcloud.com/banner/banner5.jpg'
      ]
  },
  onLoad:function(options){
    // 生命周期函数--监听页面加载
    
  },
  onChangeText: function(){
      this.setData({
          text: '这是公司简介详细内容。。。。。'
      })
  },
  onShareAppMessage: function() {
    // 用户点击右上角分享
    return {
      title: 'title', // 分享标题
      desc: 'desc', // 分享描述
      path: 'path' // 分享路径
    }
  }
})