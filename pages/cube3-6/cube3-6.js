Page({
  data:{
    
  },
  onLoad:function(options){
    // 生命周期函数--监听页面加载

  },
  onShareAppMessage: function() {
    // 用户点击右上角分享
    return {
      title: '爱聊回拨通软件开发', // 分享标题
      desc: '爱聊回拨通软件开发', // 分享描述
      path: 'path' // 分享路径
    }
  }
})