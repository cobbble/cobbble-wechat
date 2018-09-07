/**
  * @properties key
  * @properties value
  * @properties selected 被选中
  * @event submit 提交
  */
Component({
  properties: {
    name: {
      type: String,
    },
    extra: {
      type: String,
    },
    selected: {
      type: Boolean,
      value: false
    },
    multi: {
      type: Boolean,
      value: false
    },
  },
  methods: {
    handleTap: function(e){
      this.setData({
        selected: true
      })
      this.triggerEvent('submit', this, { bubbles: true , composed: false})
    }
  },
})
