Component({
  properties: {
  },
  data: {
    animationData: {}
  },
  onShow: function(){
    var animation = wx.createAnimation({
      transformOrigin: "50% 50%",
      duration: 1000,
      timingFunction: "ease",
      delay: 0
    })
    this.setData({
      animationData:animation.export()
    })
  }
})
