const app = getApp()

Page({
  data: {
    srcPath: '',
    dstPath: ''
  },
  bindChooseImage: function(res) {
    wx.chooseImage({
      success: function(res) {
        var tempFilePath = res.tempFilePaths
        wx.saveFile({
          tempFilePath: tempFilePath[0], // 需要保存的文件的临时路径
          success: function(res) {
            console.log(res.savedFilePath) // 文件的保存路径
          }
        })
      },
    })
  },
  bindGetSaveFileList: function(res) {
    wx.getSavedFileList({
      success: function(res) {
        for (var i = 0; i < res.fileList.length; ++i) {
          var item = res.fileList[i]
          console.log('文件路径', item.filePath)
          console.log('文件大小', item.size)
          console.log('创建时间', item.createTime)
        }
      },
      complete: function(res) {
        console.log(res)
      }
    })
  },
  bindRemoveSaveFile: function(res) {
    wx.getSavedFileList({
      success: function(res) {
        if (res.fileList.length > 0) {
          wx.removeSavedFile({
            filePath: res.fileList[0].filePath,
            complete: function(res) {
              console.log(res)
            }
          })
        }
      }
    })
  },
  bindGetFileInfo: function(res) {
    wx.chooseImage({
      success: function(res) {
        var tempFilePath = res.tempFilePaths
        wx.getFileInfo({
          filePath: tempFilePath[0],
          success: function(res) {
            console.log('文件大小', res.size)
            console.log('文件摘要', res.digest)
          }
        })
      },
    })
  },
  bindOpenDocument: function() {
    wx.downloadFile({
      url: 'http://download.m.yimiparking.com/readme.txt',
      sucess: function(res) {
       
      },
      complete: function(res){
        console.log('下载完成:', res)

        var filePath = res.tempFilePath
        wx.saveFile({
          tempFilePath: filePath,
        })

        wx.openDocument({
          filePath: filePath,
          success: function (res) {
            console.log('打开文件成功：')
          }
        })

      }
    })
  }
})
