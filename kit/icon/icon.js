const iconType = ['entry']
const iconTypeSystem = [
  'success',
  'success_no_circle',
  'info',
  'warn',
  'waiting',
  'cancel',
  'download',
  'search',
  'clear'
]

Component({
  properties: {
    type: {
      type: String,
      value: 'custom'
    },
    src: {
      type: String,
      value: ''
    },
    color: {
      type: String,
      value: '#b2b2b2'
    },
    size: {
      type: Number,
      value: 30
    },
    width: {
      type: Number
    },
    height: {
      type: Number
    }
  },
  data: {
    isSystem: false
  },
  attached: function() {
    // 用户自定义
    if (this.type == 'custom')
      return
      // 官方icon
    if (iconTypeSystem.indexOf(this.data.type) > -1) {
      this.setData({isSystem: true})
      return
    }
    // 预置icon
    if (iconType.indexOf(this.data.type) > -1) {
      this.setData({
        src: iconBase64[this.data.type].base64,
        width: iconBase64[this.data.type].width,
        height: iconBase64[this.data.type].height
      })
      return
    }
  }
})

const iconBase64 = {
  entry: { //右箭头“进入”icon，列表中的选择器、链接
    width: 16,
    height: 26,
    base64: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAaCAYAAAHJb+yRAAAAAXNSR0IArs4c6QAAAopJREFUOBGFVEFrE0EUnpm4YPEgSA8FL+aQczBZ2N2zJ0FBkAqtoFUEFYug5CBCRasepIi10HoICpVaoYd68OKh4EXIbsnGH+JZUDQzfm92ZzKbCXEOmTfv+96bN+99Wcbc1ev1lXAdha2U4r4X5C5L0/5XDYFTo3CfB48FyOj18n3NyrLBFZcupJTblmqQIqRIbKuA8w8IR8o8/Rs2LMv6F+yBYFT4Q9PKHw7GvJRsj85x3Bac80rV7iUWSJLQ+q1h0qZpPsT7deeI6LUQ4D2HvG4zoJZF1PKhBHcRfZlsfng4ODMcyoMC4F+SpH22JI02vLM7OlUtAfAvXNSZN1WoOFGROyVwC016PU4SKGaJc/aSAKXYXTxzzSXpZ8Zx2GFMPChIqoPpPjck+0xypOngulLyLdlC8MdR1H5SIRBA00M/PpGNqx96BHe0XqtRoKRIWjRZ2u0syiHpjABrZuw1YiEt6UnbAAOAQ/LTQifzX9i12GZnjx8FSJ21i644TacgYMcajcZvi5SGvhNqX4AOdkgoyNCNotZNU8N4wPiZowTMSmltuCASbKLeZdc3ydYV4GboKt9Eg2/7JP4KGrvv+wuPNwgoZhWiWBkPEIK9iKJQ68HFvAQGzLJ8GYk2qDrjox3jfwpxPTK+Cmic7k4NxhfkPXzFd8GCYiVJWs/+m4D4eFYH1VR0Tn40em1qAiiImrpFZHchcAsTukO+iQkg+at4+jvShRsIexuB15DAfoUqCcrv2EcQtW5HwXwvjluLCLQaNphOgI6fw237eGdggGLnn4NAXQzDkP4MExeU+P0UY/Ib1HhyxOAHc3MnztfrdfqjTF32Cfg/tpFkdWYmuNRsNn9OjXLAf+bWGZ8MCVFYAAAAAElFTkSuQmCC'
  }
}
