const iconType = [
  'entry',
  'rolling',
  'rolling_dark'
]
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
    },
    text: {
      type: String
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
    if (this.data.type == 'text'
      || this.data.type == 'text_invert'){
      this.setData({
        size: this.data.size < 40 ? 40 : this.data.size
      })
    }
  }
})

const iconBase64 = {
  entry: { //右箭头“进入”icon，列表中的选择器、链接
    width: 16,
    height: 26,
    base64: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAaCAYAAAHJb+yRAAAAAXNSR0IArs4c6QAAAopJREFUOBGFVEFrE0EUnpm4YPEgSA8FL+aQczBZ2N2zJ0FBkAqtoFUEFYug5CBCRasepIi10HoICpVaoYd68OKh4EXIbsnGH+JZUDQzfm92ZzKbCXEOmTfv+96bN+99Wcbc1ev1lXAdha2U4r4X5C5L0/5XDYFTo3CfB48FyOj18n3NyrLBFZcupJTblmqQIqRIbKuA8w8IR8o8/Rs2LMv6F+yBYFT4Q9PKHw7GvJRsj85x3Bac80rV7iUWSJLQ+q1h0qZpPsT7deeI6LUQ4D2HvG4zoJZF1PKhBHcRfZlsfng4ODMcyoMC4F+SpH22JI02vLM7OlUtAfAvXNSZN1WoOFGROyVwC016PU4SKGaJc/aSAKXYXTxzzSXpZ8Zx2GFMPChIqoPpPjck+0xypOngulLyLdlC8MdR1H5SIRBA00M/PpGNqx96BHe0XqtRoKRIWjRZ2u0syiHpjABrZuw1YiEt6UnbAAOAQ/LTQifzX9i12GZnjx8FSJ21i644TacgYMcajcZvi5SGvhNqX4AOdkgoyNCNotZNU8N4wPiZowTMSmltuCASbKLeZdc3ydYV4GboKt9Eg2/7JP4KGrvv+wuPNwgoZhWiWBkPEIK9iKJQ68HFvAQGzLJ8GYk2qDrjox3jfwpxPTK+Cmic7k4NxhfkPXzFd8GCYiVJWs/+m4D4eFYH1VR0Tn40em1qAiiImrpFZHchcAsTukO+iQkg+at4+jvShRsIexuB15DAfoUqCcrv2EcQtW5HwXwvjluLCLQaNphOgI6fw237eGdggGLnn4NAXQzDkP4MExeU+P0UY/Ib1HhyxOAHc3MnztfrdfqjTF32Cfg/tpFkdWYmuNRsNn9OjXLAf+bWGZ8MCVFYAAAAAElFTkSuQmCC'
  },
  rolling: { // loading light
    width: 40,
    height: 40,
    base64: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAACGUlEQVRIS+2VPYtTQRSGn5O4Ksk902ljJQprIau4xF2w0m38B+Lu4hYWCrbWbrQVW1FBQQU/foKCgp0bIuJHI2ovKgh3JpdgvBy5ciNhE28S96PR6ebOO+8z59wzZ4RNGrJJHP5RUKvVmk7TdE5EZoAjwAlVfTZO2gtTlyTJrjRNLwMne03L5fJspVJZWRdQCGHBzG4AldzwO/AGaIpIPYqiT2sGtdvtPZ1O5y2wPTd7Asyr6udxzHu1fakzs1IIoQFM58JlVb30t4Duvj6Q9/4o8DQXPFLV42uFZPsHgZaBupl9E5FJVf2yUaDsfxwD7qvq/HpA+iIysy0hhABsM7MrzrnzGwWaCCG0gRJwXVXPjgPy3l8DzgCdKIqqItIpKoZXwJSZrTjnZscBxXHcEJEa8FJVDxWWdxzHt0XkFGAicjCKotejwLz3+4FMK2Z2yzl3uhCUJMlMmqbPM5GZNVX1sIhYEczMJITQBH5FUSqVatVqNZv/HgN7XRzHd0VkMVfVVfViEch7n61fyA93xzm3tFo/EOS932FmH0VE8w2PzWzBOfe118B7vxO4B8zlkKxid6/WDbywXaMQwqKZ3QS25t+6TTVrT+W8RU0BEz3rS6r6YFD0hc9EHMeTIvIQODCkIF7kEb/7k27oU55d4lardc7Mama2F9gHpMB7EfkANKIouioiP4oOMxQ0SmmPovkPGiVLAzU/AR6o0BtOWR2tAAAAAElFTkSuQmCC'
  },
  rolling_dark: { // loading dark
    width: 40,
    height: 40,
    base64: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAACS0lEQVRIS+2VPWgUURSFz5mdqChbarOVKMRCopjEBKxWG0mYd0MaMRFTWCjYWptoK7YSBQUV/GlC3ptlQSEGOxNWxJ9G1DIgKgibFOLO7pWJEwnZzWTX/DT6uuGdd765l/PuI7ZocYs4+EdBhUKhs1qtngDQQ/IYgFPGmOettD21dWEY5lT1GoDTy01rtVrvwMDAzIaArLXDJG8B2BkbqupPkm8BlDKZzFh/f//ndYOKxeK+KIreAdiRmE1FUTQ0ODj4pRXz5dq61qmqF4bhLIDORDhqjLn6t4Clc3Uga22e5LOkXU9E5OR6IfH5OlAYhqOqOgbgu+/77X19fV83BeScmwJwHMBDY8zQRkDqKpqenvbn5+cXAGwneT0IgkubAiqVSm1zc3M/SHoAbhpjLrQCcs6NAzivqpVcLrerq6ursmoYnHOvAXSo6oyI9LYIitParaqvRORIaryttXdJnv19R/WwiLxpBlYoFA7WarVYS1W9IyLnUkGTk5M9nue9SOJdMsYcJalpMFVlGIYlAItVqGq3iMTff1bDWeecuw/gzGJayLEgCK6kgZxz8f7lBHJPREZW6huCisXi7kql8olkNjnwlORwEATflhtMTEzs8X3/AYB4sseVLHiet3elruGFXTKy1sYV3Sa5LTFZHKqqOksyE48oVe0g2ba0D2BERB41qj71mbDWtpN8DODQGoF4qarDIvJ+Nd2aT3l8icvl8sU4tgD2AzhAsqqqHwB8JDmbzWZv5PP5KO1n1gQ1E+1mNP9BzXSpoeYXZnTlG8vtBlMAAAAASUVORK5CYII='
  }
}
