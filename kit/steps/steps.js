Component({
  properties: {
    steps: {
      type: Array
    },
    current: {
      type: Number,
      value: 0,
      observer: function(newVal, oldVal, changedPath) {
        this._render()
      }
    }
  },
  data: {
    // 步骤状态：wait，process，finish，error
    status: []
  },
  attached: function() {
    this._render()
  },
  methods: {
    _render: function(){
      var current = this.data.current,
          status = []
      for(var index in this.data.steps){
        if(index < current){
          status[index] = 'finish'
        }else if(index == current){
          status[index] = 'process'
        }else{
          status[index] = 'wait'
        }
      }
      this.setData({
        status: status
      })
    },
    handleTap: function(e){
      this.triggerEvent('tap', e.currentTarget.dataset, {
        bubbles: true,
        composed: false
      })
    }
  }
})
