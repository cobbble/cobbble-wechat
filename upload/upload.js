var Api = require('../../common/util/api.js')
var app = getApp()
Component({
  properties: {
    title: {
      type: String
    },
    placeholder: {
      type: String,
      value: '请选择照片'
    },
    disable:{
      type:Boolean,
      value:false
    },
    value: {
      type: String,
      observer: function(newVal, oldVal, changedPath) {
        console.log('value change', newVal, oldVal)
      }
    }
  },
  data: {
    previewImage: false
  },
  methods: {
    selectPhoto: function(e){
      wx.chooseImage({
        count: 1, // 默认9
        sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
        success: res => {
          this.triggerEvent('pick', res, {
            bubbles: true,
            composed: false
          })
        }
      })
    },
    clean: function (e) {
      this.setData({value: ''})
      this.triggerEvent('clean', {value: ''}, {
        bubbles: true,
        composed: false
      })
    }
  }
})
