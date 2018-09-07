var Api = require('../../common/util/api.js')
var util = require('../../common/util/util.js')
Component({
  properties: {
    sizeType: {
      type: String,
      value: 'default',
    },
    disabled: {
      type: Boolean,
      value: false,
    },
    loading: {
      type: Boolean,
      value: false,
      observer: function(newVal, oldVal, changedPath) {
        this.setData({disabled: newVal})
      }
    },
    loadingText: {
      type: String
    },
    hoverClass: {
      type: String,
      value: 'normal',
    },
    width: {
      type: String
    }
  },
  data: {
  },
  methods: {
    tap: function(e){
      if(this.data.disabled)
        return
      this.triggerEvent('submit', this, { bubbles: true , composed: false})
    }
  }
})
