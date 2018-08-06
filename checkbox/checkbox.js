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
        if(newVal.length == 0 && oldVal.length == 0)
          return
        console.log(2222, newVal, oldVal)
        this._render()
      }
    },
    value: {
      type: Array,
      value: [],
      observer: function(newVal, oldVal, changedPath) {
        if (ArrayEqual(newVal, oldVal))
          return
        console.log(1111, newVal, oldVal)
        this._render()
      }
    }
  },
  data: {
    choosenText: '',
    valueText: '',
    isShow: false,

    checkedItems: []
  },
  methods: {
    _render: function() {
      console.log('checkbox rendering...')
      var checkedList = this.data.value,
        items = this.data.items,
        checkedItems = [],
        checkedOptionNum = 0,
        valueText = ''

      for (var index in items) {
        var item = items[index]
        if (checkedList.length > 0 && checkedList.indexOf(item.id) >= 0) {
          items[index].checked = true
          if (valueText == '') {
            valueText += item.name
          } else {
            valueText += ', ' + item.name
          }
          checkedItems.push(item)
          checkedOptionNum++
        } else {
          items[index].checked = false
        }
      }
      if (checkedOptionNum > 0) {
        this.setData({
          items: items,
          checkedItems: checkedItems,
          valueText: valueText,
          choosenText: "(已选" + checkedOptionNum + "个)"
        })
      } else {
        this.setData({
          items: items,
          checkedItems: [],
          valueText: '',
          choosenText: ''
        })
      }
    },
    showPanel: function(e) {
      this.setData({isShow: true})
    },
    _submit: function(e) {
      var valueText = ''
      for (var index in this.data.checkedItems) {
        var item = this.data.checkedItems[index]
        if (valueText == '') {
          valueText += item.name
        } else {
          valueText += ', ' + item.name
        }
      }
      this.setData({isShow: false, valueText: valueText})
      this.triggerEvent('submit', {
        value: this.data.value,
        items: this.data.checkedItems
      }, {
        bubbles: true,
        composed: false
      })
    },
    handleCheckChange: function(e) {
      var id = e.detail.dataset['id'],
        index = e.detail.dataset['index'],
        checked = e.detail.data['checked'],
        checkedList = this.data.value,
        items = this.data.items,
        item = items[index]

      var index = checkedList.indexOf(id)
      if (checked) {
        if (index == -1) {
          checkedList.push(id)
        }
      } else {
        if (index > -1) {
          checkedList.splice(index, 1)
        }
      }
      this.setData({
        value: checkedList
      })
      this.triggerEvent('change', e.detail, {
        bubbles: true,
        composed: false
      })
      this._render()
    },
    handleSubmitAction: function(e) {
      this._submit()
    },
    handleCleanAction: function(e) {
      this.setData({value: [], checkedItems: [], valueText: ''})
      this._render()
      this._submit()
    }
  },
  ready: function() {
    if (this.data.value.length > 0 && this.data.items.length > 0)
      this._render()
  }
})
