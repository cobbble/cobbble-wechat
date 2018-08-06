var Api = require('../../common/util/api.js')
var util = require('../../common/util/util.js')
Component({
  properties: {
    sizeType: {
      type: String,
      value: 'normal',
    },
    disabled: {
      type: Boolean,
      value: false,
    },
    loading: {
      type: Boolean,
      value: false,
    },
    hoverClass: {
      type: String,
      value: 'normal',
    },
  },
  data: {
  },
  methods: {
    bindSubmit: function(e){
      this.triggerEvent('SubmitAction', this, { bubbles: true , composed: false})
    }
  }
})
