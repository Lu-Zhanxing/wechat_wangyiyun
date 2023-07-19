import request from '../../utils/request.js'

// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bannerList:[],//轮播图
    recommendList:[],//推荐歌曲
    topList:[] //排行榜
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    // 轮播图
    let bannerListData = await request('/banner',{type:2})
    this.setData({
      bannerList:bannerListData.banners
    })

    // 推荐歌曲
    let recommendListData = await request('/personalized',{limit:10})
    this.setData({
      recommendList:recommendListData.result
    })

    // 排行榜
    // 根据idx获取前5组数据，整合到数组中，供页面使用
    let topListData = []
    for (let index = 0; index < 5; index++) {
      let res = await request('/top/list',{idx:index})
      let topListItem = {
        name:res.playlist.name,
        tracks:res.playlist.tracks.slice(0,3)
      }
      topListData.push(topListItem)
      this.setData({
        topList:topListData
      })
    }
    
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