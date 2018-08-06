Component({
  relations:{
    './duration':{
      type: 'parent',
      linked: function(target) {
        // 每次有custom-li被插入时执行，target是该节点实例对象，触发在该节点attached生命周期之后
      },
      linkChanged: function(target) {
        // 每次有custom-li被移动后执行，target是该节点实例对象，触发在该节点moved生命周期之后
      },
      unlinked: function(target) {
        // 每次有custom-li被移除时执行，target是该节点实例对象，触发在该节点detached生命周期之后
      }
    }
  },
  properties: {
    placeholder: {
      type: String,
      value: '请选择日期'
    },
    start: {
      type: String,
      value: ''
    },
    end: {
      type: String,
      value: ''
    },
    icon: {
      type: String,
      value: "default"
    },
    value: {
      type: String,
      value: '',
      observer: function(newVal, oldVal, changedPath){
        this.triggerEvent('ValueChange', newVal, { bubbles: true , composed: false})
        if(newVal){
          this.setData({
            isEmpty: false
          })
        }else{
          this.setData({
            isEmpty: true
          })
        }
      }
    }
  },
  data: {
    isEmpty: true
  },
  methods: {
    bindDateChange: function(e){
      this.setData({
        value: e.detail.value
      })
    },
    bindClean: function(e){
      this.setData({
        value: ""
      })
    }
  },
  ready: function(){
    if(this.data.value){
      this.setData({
        isEmpty: false
      })
    }
  }
})
