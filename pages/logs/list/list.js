Component({
  /**
   * 组件的属性列表
   */
  properties: {
  },

  /**
   * 组件的初始数据
   */
  data: {
    tabBar: [
      {
        "selectedIconPath": "images/list.png",
        "iconPath": "/images/list1.png",
        "pagePath": "/pages/logs/list/list",
        "text": "列表"
      },
      {
        "selectedIconPath": "images/user.png",
        "iconPath": "/images/user1.png",
        "pagePath": "/pages/logs/user/user",
        "text": "个人中心"
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    navigateDetail: function (e) {
      wx.reLaunch({ // 关闭所有打开过的页面，跳转到相对于的页面
        url: e.currentTarget.dataset.url  // 获取tabbar.wxml中data-url传递的参数
      })
    }
  }
})