var customFormControls = require('./custom-form-controls')
Component({
  relations: {
      'customFormControls': { // 使用这个behavior来代替组件路径作为关联的目标节点
        type: 'descendant', // 关联的目标节点应为子孙节点  用于一类组件的关联
        target: customFormControls, // 关联具有同一个behavior（customFormControls）的组件 
        linked: function(target) {
        console.info('已关联到 ' + target.is)
      }
    }
  }
})
