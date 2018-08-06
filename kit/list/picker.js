Component({
  properties: {
    placeholder: {
      type: String,
      value: '',
    },
    value: {
      type: String,
      value: '',
    },
    empty: {
      type: Boolean,
      value: true,
    },
  },
  methods: {
    clean: function(){
      this.triggerEvent('clean', {}, {bubbles: true , composed: false})
    }
  }
})
