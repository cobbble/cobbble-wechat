Component({
  properties: {
    title: {
      type: String,
      value: ''
    },
    checked: {
      type: Boolean,
      value: false
    },
    disabled: {
      type: Boolean,
      value: false,
    },
  },
  methods: {
    handleSwitchAction: function(e) {
      var checked = !this.data.checked
      this.setData({
        checked: checked
      })
      this.triggerEvent('change', {
        checked: checked
      }, {
        bubbles: true,
        composed: false
      })
    },
  }
})
