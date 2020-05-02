// miniprogram/pages/courseManagement/newCourse.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  onSubmit: function (e) {
    const db = wx.cloud.database()
    const form_values = e.detail.value
    db.collection('XL_Course').add({
      data: {
        name: form_values.name,
        desc: form_values.desc,
        status: 'preparing'
      },
      success: res => {
        console.log('[数据库] [新增记录] 成功，记录 _id: ', res._id)

        var pages = getCurrentPages()
        var beforePage = pages[pages.length - 2]
        beforePage.onLoad()
          wx.navigateBack({
            success: () => {
              wx.showToast({
                title: '新增课程成功',
              })
            }
          })
      },
      fail: err => {
        wx.showToast({
          icon: 'none',
          title: '新增课程失败'
        })
        console.error('[数据库] [新增记录] 失败：', err)
      }
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