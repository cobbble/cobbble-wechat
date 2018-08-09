Component({
  properties: {
    placeholder: {
      type: String,
      value: '',
    },
    title: {
      type: String,
      value: '',
    },
    value: {
      type: String,
      value: '',
    },
  },
  methods: {
    clean: function(){
      this.triggerEvent('clean', {}, {bubbles: true , composed: false})
    }
  }
})
