Component({
  relations:{
    './simple':{
      type: 'child', // 关联的目标节点应为子节点
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
    // 可选日期区间
    start: {
      type: String,
      value: '2018-01-01',
    },
    end: {
      type: String,
      value: '2022-12-31',
    },
    // 开始日期选择器placeholder
    titleStart: {
      type: String,
      value: '开始日期',
    },
    // 结束日期选择器placeholder
    titleEnd: {
      type: String,
      value: '结束日期',
    },
    // 选中的日期
    valueStart: {
      type: String,
      value: '',
      observer: function(newVal, oldVal, changedPath){
        this.triggerEvent('StartValueChange', newVal, { bubbles: true , composed: false})
      }
    },
    valueEnd: {
      type: String,
      value: '',
      observer: function(newVal, oldVal, changedPath){
        this.triggerEvent('EndValueChange', newVal, { bubbles: true , composed: false})
      }
    },
  },
  data: {
    startFrom: '',
    startTo: '',
    endFrom: '',
    endTo: '',
  },
  methods: {
    _getAllNodes: function(){
      // 使用getRelationNodes可以获得nodes有序数组
      var nodes = this.getRelationNodes('./simple')
      return nodes
    },
    bindStartChange: function(e){
      var dateStart = e.detail
      this.setData({
        valueStart: dateStart,
        endFrom: dateStart // 设置结束时间开始区间
      })
    },
    bindEndChange: function(e){
      var dateEnd = e.detail
      this.setData({
        valueEnd: dateEnd,
        startTo: dateEnd // 设置开始时间结束区间
      })
    }
  },
  ready: function(){
    var startFrom = this.data.start,
        endFrom = this.data.start,
        startTo = this.data.end,
        endTo = this.data.end
    if(this.data.valueStart){
      endFrom = this.data.valueStart
    }
    console.log()
    if(this.data.valueEnd){
      startTo = this.data.valueEnd
    }
    this.setData({
      startFrom: startFrom,
      startTo: startTo,
      endFrom: endFrom,
      endTo: endTo
    })
    // this._getAllNodes()
  }
})
