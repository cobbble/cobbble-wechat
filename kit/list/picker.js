Component({
  properties: {
    title: {
      type: String,
      value: '',
    },
    value: {
      type: String,
      value: '',
    },
    placeholder: {
      type: String,
      value: '',
    },
    disabled: {
      type: Boolean,
      value: false,
    },
  },
  methods: {
    clean: function(){
      this.triggerEvent('clean', {}, {bubbles: true , composed: false})
    }
  }
})
