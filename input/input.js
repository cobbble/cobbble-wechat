Component({
  properties: {
    title: {
      type: String
    },
    value: {
      type: String
    },
    type: {
      type: String,
      value: 'text',
    },
    passport: {
      type: Boolean,
      value: false
    },
    placeholder: {
      type: String,
      value: '请输入内容',
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
  methods: {
    change: function(e){
      this.setData({value: e.detail.value})
      this.triggerEvent('change', e.detail, { bubbles: true , composed: false})
    },
    clean: function(e){
      this.setData({value: ''})
      this.triggerEvent('change', {value: ''}, { bubbles: true , composed: false})
    }
  }
})
