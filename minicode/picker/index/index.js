const app = getApp()

Page({
  data: {
    dateFields: 'day',
    array: ['美国', '中国', '巴西', '日本'], // 普通选择器
    objectArray: [
      {
        id: 0,
        name: '美国'
      },
      {
        id: 1,
        name: '中国'
      },
      {
        id: 2,
        name: '巴西'
      },
      {
        id: 3,
        name: '日本'
      }
    ],
    index: 0,

    multiArray: [['无脊柱动物', '脊柱动物']/*第一列*/
      , ['扁性动物', '线形动物', '环节动物', '软体动物', '节肢动物']/*第二列*/
      , ['猪肉绦虫', '吸血虫']/*第三列*/],
    objectMultiArray: [
      [
        {
          id: 0,
          name: '无脊柱动物'
        },
        {
          id: 1,
          name: '脊柱动物'
        }
      ], [
        {
          id: 0,
          name: '扁性动物'
        },
        {
          id: 1,
          name: '线形动物'
        },
        {
          id: 2,
          name: '环节动物'
        },
        {
          id: 3,
          name: '软体动物'
        },
        {
          id: 4,
          name: '节肢动物'
        }
      ], [
        {
          id: 0,
          name: '猪肉绦虫'
        },
        {
          id: 1,
          name: '吸血虫'
        }
      ]
    ],
    multiIndex: [0, 0, 0], // （第一列的行号，第二列的行号，第三列的行号)
    objectMultiIndex:[0, 0, 0],

    date: '2016-09-01',
    time: '12:01',
    region: ['广东省', '广州市', '海珠区']
  },
  bindPickerChange: function (e) {
    var CurSel = e.detail.value
    console.log('picker发送选择改变，携带值为', CurSel, this.data.array[CurSel])
    this.setData({
      index: CurSel
    })
  },
  bindMultiPickerChange: function (e) { // 点击确定按钮触发,并一定表示有修改
    var NewMultiIndex = e.detail.value
    console.log('picker发送选择改变，携带值为', NewMultiIndex)
    this.setData({
      multiIndex: NewMultiIndex
    })
    var MultiArray = this.data.multiArray
    var MultiIndex = this.data.multiIndex
    console.log(MultiArray[0][MultiIndex[0]], MultiArray[1][MultiIndex[1]], MultiArray[2][MultiIndex[2]])
  },
  bindObjectMultiPickerChange: function (e) { // 点击确定按钮触发,并一定表示有修改
    var NewMultiIndex = e.detail.value
    console.log('picker发送选择改变，携带值为', NewMultiIndex)
    this.setData({
      objectMultiIndex: NewMultiIndex
    })
  },
  bindObjectMultiPickerColumnChange: function (e) {
    var CurCol = e.detail.column;
    var NewRow = e.detail.value;
    console.log('bindObjectMultiPickerColumnChange:第', CurCol + 1, '列，滚动至第', NewRow + 1, '行');
    var data = {
      objectMultiArray: this.data.objectMultiArray,
      objectMultiIndex: this.data.objectMultiIndex
    };
    data.objectMultiIndex[CurCol] = NewRow;
    switch (CurCol) {
      case 0: // 第一列
        switch (data.objectMultiIndex[0]) { // 行号
          case 0: // 第一行
            data.objectMultiArray[1] = [{ id: 0, name: '扁性动物' }, 
              { id: 1, name: '线形动物' }, { id: 2, name: '环节动物' }, 
              { id: 3, name: '软体动物' }, { id: 4, name: '节肢动物'}];

            data.objectMultiArray[2] = [{ id: 0, name: '猪肉绦虫' }, { id: 1, name: '吸血虫'}];
            break;
          case 1: // 第二行
            data.objectMultiArray[1] = [{ id: 0, name: '鱼' }, { id: 1, name: '两栖动物' }, { id: 2, name: '爬行动物'}];
            data.objectMultiArray[2] = [{ id: 0, name: '鲫鱼' }, { id: 1, name: '带鱼'}];
            break;
        }
        data.objectMultiIndex[1] = 0;
        data.objectMultiIndex[2] = 0;
        break;

      case 1: // 第二列
        switch (data.objectMultiIndex[0]) { // 第一列行号
          case 0:
            switch (data.objectMultiIndex[1]) { // 第二列行号
              case 0:
                data.objectMultiArray[2] = [{ id: 0, name: '猪肉绦虫' }, { id: 1, name: '吸血虫'}];
                break;
              case 1:
                data.objectMultiArray[2] = [{ id: 0, name: '蛔虫'}];
                break;
              case 2:
                data.objectMultiArray[2] = [{ id: 0, name: '蚂蚁' }, { id: 1, name: '蚂蟥'}];
                break;
              case 3:
                data.objectMultiArray[2] = [{ id: 0, name: '河蚌' }, { id: 1, name: '蜗牛' }, { id: 2, name: '蛞蝓'}];
                break;
              case 4:
                data.objectMultiArray[2] = [{ id: 0, name: '昆虫' }, { id: 1, name: '甲壳动物' }, 
                  { id: 2, name: '蛛形动物' }, { id: 3, name: '多足动物'}];
                break;
            }
            break;

          case 1:  // 第一列行号
            switch (data.objectMultiIndex[1]) { // 第二列行号
              case 0:
                data.objectMultiArray[2] = [{ id: 0, name: '鲫鱼' }, { id: 1, name: '带鱼'}];
                break;
              case 1:
                data.objectMultiArray[2] = [{ id: 0, name: '青蛙' }, { id: 1, name: '娃娃鱼'}];
                break;
              case 2:
                data.objectMultiArray[2] = [{ id: 0, name: '蜥蜴' }, { id: 1, name: '龟' }, { id: 2, name: '壁虎'}];
                break;
            }
            break;
        }
        data.objectMultiIndex[2] = 0;
        console.log(data.objectMultiIndex);
        break;
    }

    this.setData(data);
  },
  bindMultiPickerColumnChange: function (e) { // 使用选择器修改了某列时触发
    var CurCol = e.detail.column;
    var NewRow = e.detail.value;
    console.log('第', CurCol + 1, '列，滚动至第', NewRow + 1, '行');
    var data = {
      multiArray: this.data.multiArray,
      multiIndex: this.data.multiIndex
    };
    data.multiIndex[CurCol] = NewRow;
    switch (CurCol) {
      case 0: // 第一列
        switch (data.multiIndex[0]) { // 行号
          case 0: // 第一行
            data.multiArray[1] = ['扁性动物', '线形动物', '环节动物', '软体动物', '节肢动物'];
            data.multiArray[2] = ['猪肉绦虫', '吸血虫'];
            break;
          case 1: // 第二行
            data.multiArray[1] = ['鱼', '两栖动物', '爬行动物'];
            data.multiArray[2] = ['鲫鱼', '带鱼'];
            break;
        }
        data.multiIndex[1] = 0;
        data.multiIndex[2] = 0;
        break;

      case 1: // 第二列
        switch (data.multiIndex[0]) { // 第一列行号
          case 0:
            switch (data.multiIndex[1]) { // 第二列行号
              case 0:
                data.multiArray[2] = ['猪肉绦虫', '吸血虫'];
                break;
              case 1:
                data.multiArray[2] = ['蛔虫'];
                break;
              case 2:
                data.multiArray[2] = ['蚂蚁', '蚂蟥'];
                break;
              case 3:
                data.multiArray[2] = ['河蚌', '蜗牛', '蛞蝓'];
                break;
              case 4:
                data.multiArray[2] = ['昆虫', '甲壳动物', '蛛形动物', '多足动物'];
                break;
            }
            break;

          case 1:  // 第一列行号
            switch (data.multiIndex[1]) { // 第二列行号
              case 0:
                data.multiArray[2] = ['鲫鱼', '带鱼'];
                break;
              case 1:
                data.multiArray[2] = ['青蛙', '娃娃鱼'];
                break;
              case 2:
                data.multiArray[2] = ['蜥蜴', '龟', '壁虎'];
                break;
            }
            break;
        }
        data.multiIndex[2] = 0;
        console.log(data.multiIndex);
        break;
    }

    this.setData(data);
  },
  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  bindTimeChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      time: e.detail.value
    })
  },
  bindRegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  },
  bindYear: function (e) {
    this.setData({
      dateFields: 'year'
    })
  },
  bindMonth: function (e) {
    this.setData({
      dateFields: 'month'
    })
  },
  bindDay: function (e) {
    this.setData({
      dateFields: 'day'
    })
  }
})
