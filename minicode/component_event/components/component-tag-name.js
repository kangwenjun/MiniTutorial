// components/component-tag-name.js
Component({
  properties: {},
  methods: {
    onTap: function () {
        var myEventDetail = {num: 20} // detail对象，提供给事件监听函数
        var myEventOption = {} // 触发事件的选项
        this.triggerEvent('myevent', myEventDetail) // 只会触发 pageEventListener2
        this.triggerEvent('myevent', myEventDetail, { bubbles: true }) // 会依次触发 pageEventListener2 、 pageEventListener1
        this.triggerEvent('myevent', myEventDetail, { bubbles: true, composed: true }) // 会依次触发 pageEventListener2 、 anotherEventListener 、 pageEventListener1
    }
  }
})