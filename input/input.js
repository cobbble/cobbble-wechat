Component({
  properties: {
    title: {
      type: String
    },
    value: {
      type: String
    },
    unit: {
      type: String
    },
    type: {
      type: String,
      value: 'text',
    },
    password: {
      type: Boolean,
      value: false
    },
    placeholder: {
      type: String,
      value: '请输入内容',
    },
    button: {
      type: String
    },
    buttonDisabled: {
      type: Boolean,
      value: false,
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
    buttonTap: function(e){
      this.triggerEvent('buttonTap', e.detail, { bubbles: true , composed: false})
    },
    clean: function(e){
      this.setData({value: ''})
      this.triggerEvent('change', {value: ''}, { bubbles: true , composed: false})
    }
  }
})
