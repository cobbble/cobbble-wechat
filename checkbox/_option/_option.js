/**
  * @properties name
  * @properties checked 被选中
  * @event change 值改变
  */
Component({
  properties: {
    name: {
      type: String
    },
    checked: {
      type: Boolean,
      value: false
    }
  },
  methods: {
    handleTap: function(e){
      this.setData({
        checked: !this.data.checked
      })
      this.triggerEvent('change', this, { bubbles: true , composed: false})
    }
  }
})
