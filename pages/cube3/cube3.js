Page({
  data: {
    imgUrls: [
      {
        imgUrl: 'http://loveoftalk-1251154446.cossh.myqcloud.com/content/cube3-1.jpg',
        navUrl: 'cube3-1',
        content: '1、网络电话三级分销系统源码建设（点击标题查看详情）'
      },
      {
        imgUrl: 'http://loveoftalk-1251154446.cossh.myqcloud.com/content/cube3-2.jpg',
        navUrl: 'cube3-2',
        content: '2、微信三级分销系统建设、商城三级分销系统（点击标题查看详情）'
      },
      {
        imgUrl: 'http://loveoftalk-1251154446.cossh.myqcloud.com/content/cube3-3.jpg',
        navUrl: 'cube3-3',
        content: '3、网络电话系统2017最新版（点击标题查看详情）'
      },
      {
        imgUrl: 'http://loveoftalk-1251154446.cossh.myqcloud.com/content/cube3-4.jpg',
        navUrl: 'cube3-4',
        content: '4、安卓苹果回拨电话APP开发源码（点击标题查看详情）'
      },
      {
        imgUrl: 'http://loveoftalk-1251154446.cossh.myqcloud.com/content/cube3-5.jpg',
        navUrl: 'cube3-5',
        content: '5、VOIP开发安卓/苹果/回拨直拨软件手机APP定制卖源码（点击标题查看详情）'
      },
      {
        imgUrl: 'http://loveoftalk-1251154446.cossh.myqcloud.com/content/cube3-6.jpg',
        navUrl: 'cube3-6',
        content: '6、爱聊回拨通软件开发（点击标题查看详情）'
      },
      {
        imgUrl: 'http://loveoftalk-1251154446.cossh.myqcloud.com/content/cube3-7.jpg',
        navUrl: 'cube3-7',
        content: '7、网络电话回拨系统（点击标题查看详情）'
      },
      {
        imgUrl: 'http://loveoftalk-1251154446.cossh.myqcloud.com/content/cube3-8.jpg',
        navUrl: 'cube3-8',
        content: '8、网络电话软件源码开发（点击标题查看详情）'
      },
      {
        imgUrl: 'http://loveoftalk-1251154446.cossh.myqcloud.com/content/cube3-9.jpg',
        navUrl: 'cube3-9',
        content: '9、网络电话OEM软件APP定制开发（点击标题查看详情）'
      },
      {
        imgUrl: 'http://loveoftalk-1251154446.cossh.myqcloud.com/content/cube3-10.jpg',
        navUrl: 'cube3-10',
        content: '10、手机APP开发-回拨+直拨（点击标题查看详情）'
      },
      {
        imgUrl: 'http://loveoftalk-1251154446.cossh.myqcloud.com/content/cube3-11.jpg',
        navUrl: 'cube3-11',
        content: '11、回拨电话系统搭建开发源码（点击标题查看详情）'
      },
      {
        imgUrl: 'http://loveoftalk-1251154446.cossh.myqcloud.com/content/cube3-12.jpg',
        navUrl: 'cube3-12',
        content: '12、包月卡-礼品卡（点击标题查看详情）'
      },
      {
        imgUrl: 'http://loveoftalk-1251154446.cossh.myqcloud.com/content/cube3-13.jpg',
        navUrl: 'cube3-13',
        content: '13、手机充值礼品卡（点击标题查看详情）'
      }
    ]
  },
  onLoad: function (options) {
    // 生命周期函数--监听页面加载
  },
  onClickImage: function (e) {
    console.log(e)
  },
  onShareAppMessage: function () {
    // 用户点击右上角分享
    return {
      title: '产品展示', // 分享标题
      desc: '河南爱聊商城的部分产品展示！！！', // 分享描述
      path: 'path' // 分享路径
    }
  }
})