Component({
  properties: {
    title: {
      type: String
    },
    placeholder: {
      type: String,
      value: '请选择日期'
    },
    disabled: {
      type: Boolean,
      value: false,
    },
    start: {
      type: String
    },
    end: {
      type: String
    },
    value: {
      type: String
    }
  },
  methods: {
    handleChangeAction: function(e){
      this.setData({value: e.detail.value})
      this.triggerEvent('change', e.detail, { bubbles: true , composed: false})
    },
    handleCleanAction: function(e){
      this.setData({value: ""})
      this.triggerEvent('change', {value: ""}, { bubbles: true , composed: false})
    }
  }
})
