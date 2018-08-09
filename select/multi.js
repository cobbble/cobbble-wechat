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
    title: {
      type: String
    },
    placeholder: {
      type: String,
      value: '请选择'
    },
    columns: {
      type: Array,
      observer: function(newVal, oldVal, changedPath) {
        if (newVal.length == 0)
          return
        this._render()
      }
    },
    columnsName: {
      type: Array
    },
    value: {
      type: Array,
      value: [],
      observer: function(newVal, oldVal, changedPath) {
        if (ArrayEqual(newVal, oldVal))
          return
        this._render()
      }
    }
  },
  data: {
    selectedItems: [],
    columnItems: [],

    valueText: '',
    isShow: false
  },
  methods: {
    _render: function() {
      var columns = this.data.columns,
        columnItems = [],
        selected = this.data.value,
        selectedItems = this.data.selectedItems,
        valueText = ''

      if (columns.length == 0)
        return

      for (var level in columns) {
        var items = columns[level],
          selectedID = selected[level] || ''
        columnItems[level] = []
        for (var index in items) {
          var item = items[index]
          // 如有级联关系，且非第一级，判断级联关系
          if (item.pid && level > 0) {
            var selectedPID = selected[level - 1] || ''
            if (selectedPID === '' || item.pid != selectedPID)
              continue
          }
          if (selectedID !== '' && item.id == selectedID) {
            item['selected'] = true
            selectedItems[level] = item
            if (valueText == '') {
              valueText += item.name
            } else {
              valueText += '-' + item.name
            }
          } else {
            item['selected'] = false
          }
          columnItems[level].push(item)
        }
      }
      this.setData({
        columnItems: columnItems,
        selectedItems: selectedItems,
        valueText: valueText
      })
    },
    showPanel: function(e) {
      this.setData({isShow: true})
    },
    _submit: function(e) {
      var valueText = ''
      for (var index in this.data.selectedItems) {
        var item = this.data.selectedItems[index]
        if (valueText == '') {
          valueText += item.name
        } else {
          valueText += '-' + item.name
        }
      }
      this.setData({isShow: false, valueText: valueText})
      this.triggerEvent('submit', {
        value: this.data.value,
        valueText: valueText,
        items: this.data.selectedItems
      }, {
        bubbles: true,
        composed: false
      })
    },
    handleSelectAction: function(e) {
      // debugger
      var level = e.detail.dataset.level,
        index = e.detail.dataset.index,
        columnItems = this.data.columnItems,
        columns = this.data.columns

      if (columnItems[level] && columnItems[level][index]) {
        var item = columnItems[level][index],
          selected = this.data.value,
          selectedItems = this.data.selectedItems
        if (selected[level] == item.id)
          return
        selected[level] = item.id
        selectedItems[level] = item
        // 清空下级选中数据
        for (var l = level + 1; l <= selected.length; l++) {
          if (selected[l])
            selected[l] = ''
          if (selectedItems[l])
            selectedItems[l] = null
        }
        this.setData({value: selected, selectedItems: selectedItems})
        var columnsChanged = false
        for (var i = level + 2; i <= columns.length; i++) {
          if (columnItems[i] && columnItems[i].length > 0) {
            columnItems[i] = []
            columnsChanged = true
          }
        }
        if (columnsChanged) {
          this.setData({columnItems: columnItems})
        }
        this._render()
        if (level == columns.length - 1)
          this._submit()
        this.triggerEvent('change', e.detail, {
          bubbles: true,
          composed: false
        })
      } else {
        console.log('option not found!')
      }
    },
    handleCancelAction: function(e) {
      this.setData({isShow: false})
    },
    handleCleanAction: function(e) {
      this.setData({value: [], selectedItems: [], valueText: ''})
      this._render()
      this.triggerEvent('submit', {
        value: [],
        items: []
      }, {
        bubbles: true,
        composed: false
      })
    }
  }
})
