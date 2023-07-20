// pages/login/login.js
import request from '../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone:'',
    password:'',
    userInfo:{
      avatarUrl:"http://p1.music.126.net/IPUX6SpKmX_m97BJrl9a2Q==/109951163268555806.jpg",
      nickname:"筱兴兴",
      userId:1440258219
    }
  },

  handleInput(e){
    // 获取input输入的数据，进行数据绑定
    let type = e.currentTarget.dataset.type;
    this.setData({
      [type]: e.detail.value
    })
  },

  async login(){
    let {phone,password} = this.data;
    // 校验
    if(!phone){
      wx.showToast({
        title: '请输入手机号',
        icon: 'error'
      })
      return
    }
    let phoneReg = /^1(3|4|5|6|7|8|9)\d{9}$/;
    if(!phoneReg.test(phone)){
      wx.showToast({
        title: '手机号格式错误',
        icon: 'error'
      })
      return
    }
    if(!password){
      wx.showToast({
        title: '请输入密码',
        icon: 'error'
      })
      return
    }
    // 前端验证没问题了，发请求给后端验证(后端这个接口用不了了)
    // let result = await request('/login/cellphone',{phone,password})

    // 直接跳转到个人中心
    // 问题：如何才能跳转的时候把用户信息传递到个人中心页呢
    // avatarUrl:"http://p1.music.126.net/IPUX6SpKmX_m97BJrl9a2Q==/109951163268555806.jpg"
    // nickname:"筱兴兴"
    // userId:1440258219
    wx.setStorageSync('userInfo',JSON.stringify(this.data.userInfo))
    wx.reLaunch({
      url: '/pages/personal/personal',
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