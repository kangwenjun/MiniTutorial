var customFormControls = require('./custom-form-controls')
Component({
  behaviors: [customFormControls],
  relations: {
    './custom-form': {  // 所要关联的组件的相对路径
      type: 'ancestor', // 关联的目标节点应为祖先节点 用于一类组件的关联
    }
  }
})
