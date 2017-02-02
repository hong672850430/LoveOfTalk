Page({
  data:{
        imgUrls: [
      {
        imgUrl: 'http://loveoftalk-1251154446.cossh.myqcloud.com/content/cube3-1-1.png',
        navUrl: '',
      },
      {
        imgUrl: 'http://loveoftalk-1251154446.cossh.myqcloud.com/content/cube3-1-2.png',
        navUrl: '',
      },
      {
        imgUrl: 'http://loveoftalk-1251154446.cossh.myqcloud.com/content/cube3-1-3.png',
        navUrl: '',
      },
      {
        imgUrl: 'http://loveoftalk-1251154446.cossh.myqcloud.com/content/cube3-1-4.png',
        navUrl: '',
      }
    ]
  },
  onLoad:function(options){
    // 生命周期函数--监听页面加载

  },
  onShareAppMessage: function() {
    // 用户点击右上角分享
    return {
      title: '网络电话系统2017最新版', // 分享标题
      desc: '网络电话系统2017最新版', // 分享描述
      path: 'path' // 分享路径
    }
  }
})