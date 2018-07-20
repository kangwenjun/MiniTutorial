// plugin/components/prototype/prototype.js

// Component 与 Page 不能共存
Component({
  data: {
    prototype: []
  },
  attached: function (e) {
    this.setData({
      prototype: [
        'number min(number, number)',
        'number max(number, number)'
      ]
    })
  }
})