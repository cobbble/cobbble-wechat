var Api = require('../../common/util/api.js')
var util = require('../../common/util/util.js')
var app = getApp()
Component({
  properties: {
    label: {
      type: String,
      value: '上传照片',
    },
    placeholder: {
      type: String,
      value: '请上传照片',
    },
    disable:{
      type:Boolean,
      value:false
    }
  },
  data: {
    isEmpty: true,
    filePath: '',
    disable:false
  },
  methods: {
    bindUpload: function (e) {
      if(this.data.disable){
        return 
      }
      wx.chooseImage({
        count: 1, // 默认9
        sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
        success: res => {
          // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
          var tempFilePaths = res.tempFilePaths
          this.setData({
            isEmpty: false,
            filePath: tempFilePaths,
          })

          wx.uploadFile({
            url: Api.getApi('UPLOAD'),
            filePath: tempFilePaths[0],
            header: {
              'wx-user-token': app.globalData.userToken,
              'content-type': 'application/json' // 默认值
            },
            name: 'image',
            success: res => {
              if (res.statusCode == 200) {
                var da = JSON.parse(res.data)
                if (da.error_code == 0) {
                  this.bindUrlBack(da.data[0])
                }
              }
            }
          })

          // wx.uploadFile({
          //   url: 'https://example.weixin.qq.com/upload', //仅为示例，非真实的接口地址
          //   filePath: tempFilePaths[0],
          //   name: 'file',
          //   formData:{
          //     'user': 'test'
          //   },
          //   success: function(res){
          //     var data = res.data
          //     //do something
          //   }
          // })
        }

      })

    },
    bindClean: function (e) {
      this.setData({
        isEmpty: true,
        filePath: '',
      })
    },
    bindUrlBack: function (e) {
      this.triggerEvent('UrlBack', e, {
        bubbles: true,
        composed: false
      })
    },
    bindPreBack:function(e){
      this.triggerEvent('onPre',e,{
        
      })
    }
  },
  ready: function () { }
})