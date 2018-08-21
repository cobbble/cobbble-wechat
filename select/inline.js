/**
  * @properties placeholder
  * @properties columns 选项数组，有几列就有几个数组（需要异步数据的，初始化时也需要传入空数组）
  * @properties columnsName 列标题，不填就不显示
  * @properties selected 选中项id数组，
  * @event change 选项变更（并非提交，用于触发异步操作）
  * @event submit 提交
  */
import {ArrayEqual} from '../_common/util'

Component({
  properties: {
    placeholder: {
      type: String,
      value: '请选择'
    },
    items: {
      type: Array,
      observer: function(newVal, oldVal, changedPath) {
        this._render()
      }
    },
    disabled: {
      type: Boolean,
      value: false,
    },
    value: {
      type: String,
      value: '',
      observer: function(newVal, oldVal, changedPath) {
        if(newVal !== oldVal){
          this._render()
        }
      }
    },
    searchEnable: {
      type: Boolean,
      value: false
    },
    searchPlaceholder: {
      type: String,
      value: '请输入搜索内容'
    },
  },
  data: {
    valueText: '',
    isShow: false,
    searchText: ''
  },
  methods: {
    showPanel: function(e) {
      if(this.data.disabled)
        return
      this.setData({isShow: true})
    },
    _render: function(){
      var items = this.data.items,
          valueText = ''
      for(var index in items){
        var item = items[index]
        if(item.id == this.data.value){
          items[index].selected = true,
          valueText = items[index].name
        }else{
          items[index].selected = false
        }
      }
      this.setData({
        items: items,
        valueText: valueText
      })
    },
    handleSearchInput: function(e) {
      this.setData({
        searchText: e.detail.value
      })
      this.triggerEvent('searchInput', e.detail, {
        bubbles: true,
        composed: false
      })
    },
    handleSearchSubmit: function(e) {
      this.triggerEvent('searchSubmit', e.detail, {
        bubbles: true,
        composed: false
      })
    },
    handleSearchClean: function() {
      this.setData({
        searchText: ''
      })
      this.triggerEvent('searchSubmit', {
        value: ''
      }, {
        bubbles: true,
        composed: false
      })
    },
    handleSelectAction: function(e) {
      this.setData({
        value: e.detail.dataset.id,
        valueText: e.detail.dataset.name,
        isShow: false
      })
      this.triggerEvent('change', {
        value: e.detail.dataset.id,
        item: e.detail.dataset
      }, {
        bubbles: true,
        composed: false
      })
    },
    handleCancelAction: function(e) {
      this.setData({isShow: false})
    },
    handleCleanAction: function(e) {
      this.setData({
        value: '',
        valueText: ''
      })
      this.triggerEvent('change', {
        value: '',
        item: {}
      }, {
        bubbles: true,
        composed: false
      })
    },
    handleScrollToBottom: function(e){
      this.triggerEvent('scrollToBottom', e.detail, {
        bubbles: true,
        composed: false
      })
    }
  }
})
