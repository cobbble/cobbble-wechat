var Api = require('../../common/util/api.js')
var util = require('../../common/util/util.js')
Component({
  properties: {
    value: {
      type: String,
      value: '',
      observer: function(newVal, oldVal, changedPath){
        this.triggerEvent('ValueChange', newVal, { bubbles: true , composed: false})
      }
    },
    type: {
      type: String,
      value: 'text',
    },
    label: {
      type: String,
      value: '',
    },
    passport: {
      type: Boolean,
      value: false
    },
    placeholder: {
      type: String,
      value: '请输入内容',
    },
    placeholderClass: {
      type: String,
      value: 'normal',
    },
    disabled: {
      type: Boolean,
      value: false,
    },
    maxlength: {
      type: Number,
      value: -1,
    },
    focus: {
      type: Boolean,
      value: false,
    },
    confirmType: {
      type: String,
      value: "done",
    }
  },
  data: {
    isEmpty: true,
    rangeArray: [],
    rangeID: [],
    rangeKey: '',
    selectValue: ''
  },
  methods: {
    bindValueChange: function(e){
      var val = e.detail.value,
          isEmpty = false
      if(val == '')
        isEmpty = true

      this.setData({
        value: val,
        isEmpty: isEmpty
      })
    },
    bindClean: function(e){
      this.setData({
        value: '',
        isEmpty: true
      })
    }
  },
  ready: function(){
  }
})
