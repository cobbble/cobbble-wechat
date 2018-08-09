Component({
  properties: {
    // 可选日期区间
    start: {
      type: String,
      value: '2018-01-01'
    },
    end: {
      type: String,
      value: '2022-12-31'
    },
    // 开始日期选择器placeholder
    titleStart: {
      type: String,
      value: '开始日期'
    },
    // 结束日期选择器placeholder
    titleEnd: {
      type: String,
      value: '结束日期'
    },
    // 选中的日期
    valueStart: {
      type: String
    },
    valueEnd: {
      type: String
    },
  },
  data: {
    startFrom: '',
    startTo: '',
    endFrom: '',
    endTo: '',
  },
  methods: {
    bindStartChange: function(e){
      var dateStart = e.detail.value || ''
      this.setData({
        valueStart: dateStart,
        endFrom: dateStart || this.data.start// 设置结束时间开始区间
      })
      this.triggerEvent('changeStart', e.detail, { bubbles: true , composed: false})
    },
    bindEndChange: function(e){
      var dateEnd = e.detail.value || ''
      this.setData({
        valueEnd: dateEnd,
        startTo: dateEnd || this.data.end // 设置开始时间结束区间
      })
      this.triggerEvent('changeEnd', e.detail, { bubbles: true , composed: false})
    }
  },
  ready: function(){
    var startFrom = this.data.start,
        endFrom = this.data.start,
        startTo = this.data.end,
        endTo = this.data.end

    if(this.data.valueStart)
      endFrom = this.data.valueStart

    if(this.data.valueEnd)
      startTo = this.data.valueEnd

    this.setData({
      startFrom: startFrom,
      startTo: startTo,
      endFrom: endFrom,
      endTo: endTo
    })
  }
})
