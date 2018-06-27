// pages/game/game.js

var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    eleArray_1: [
      { id: 11, style: 'op_hidden' },
      { id: 12, num: '?', style: 'num'},
      { id: 13, num: '?', style: 'num'},
      { id: 14, num: '?', style: 'num'},
      { id: 15, num: '?', style: 'num'},
    ],
    eleArray_2: [
      { id: 21, num: '?', style: 'num' },
      { id: 22, num: '?', style: 'num' },
      { id: 23, num: '?', style: 'num' },
      { id: 24, num: '?', style: 'num' },
      { id: 25, num: '?', style: 'num' },
    ],
    eleArray_3: [
      { id: 31, num: '?', style: 'num' },
      { id: 32, num: '?', style: 'num' },
      { id: 33, num: '?', style: 'num' },
      { id: 34, num: '?', style: 'num' },
      { id: 35, num: '?', style: 'num' },
    ],
    eleArray_4: [
      { id: 41, num: '?', style: 'num' },
      { id: 42, num: '?', style: 'num' },
      { id: 43, num: '?', style: 'num' },
      { id: 44, num: '?', style: 'num' },
      { id: 45, num: 24, style: 'num' },
    ],

    isPopping: false,
    animOp: {},
    anmiNum: {},
  },


  //点击弹出  
  plus: function () {
    if (this.data.isPopping) {
      //缩回动画  
      this.popp();
      this.setData({
        isPopping: false
      })
    } else if (!this.data.isPopping) {
      //弹出动画  
      this.takeback();
      this.setData({
        isPopping: true
      })
    }
  },
  input: function () {
    console.log("input")
  },
  transpond: function () {
    console.log("transpond")
  },
  collect: function () {
    console.log("collect")
  },

  //弹出动画  
  popp: function () {
    //plus顺时针旋转  
    var animationPlus = wx.createAnimation({
      duration: 500,
      timingFunction: 'ease-out'
    })
    var animationcollect = wx.createAnimation({
      duration: 500,
      timingFunction: 'ease-out'
    })
    var animationTranspond = wx.createAnimation({
      duration: 500,
      timingFunction: 'ease-out'
    })
    var animationInput = wx.createAnimation({
      duration: 500,
      timingFunction: 'ease-out'
    })
    animationPlus.rotateZ(180).step();
    animationcollect.translate(-100, -100).rotateZ(180).opacity(1).step();
    animationTranspond.translate(-140, 0).rotateZ(180).opacity(1).step();
    animationInput.translate(-100, 100).rotateZ(180).opacity(1).step();
    this.setData({
      animPlus: animationPlus.export(),
      animCollect: animationcollect.export(),
      animTranspond: animationTranspond.export(),
      animInput: animationInput.export(),
    })
  },
  //收回动画  
  takeback: function () {
    //plus逆时针旋转  
    var animationPlus = wx.createAnimation({
      duration: 500,
      timingFunction: 'ease-out'
    })
    var animationcollect = wx.createAnimation({
      duration: 500,
      timingFunction: 'ease-out'
    })
    var animationTranspond = wx.createAnimation({
      duration: 500,
      timingFunction: 'ease-out'
    })
    var animationInput = wx.createAnimation({
      duration: 500,
      timingFunction: 'ease-out'
    })
    animationPlus.rotateZ(0).step();
    animationcollect.translate(0, 0).rotateZ(0).opacity(0).step();
    animationTranspond.translate(0, 0).rotateZ(0).opacity(0).step();
    animationInput.translate(0, 0).rotateZ(0).opacity(0).step();
    this.setData({
      animPlus: animationPlus.export(),
      animCollect: animationcollect.export(),
      animTranspond: animationTranspond.export(),
      animInput: animationInput.export(),
    })
  },  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (params) {
    var i = params.id
    if (i) {
      this.setData({
        'eleArray_1[1].num': app.globalData.levels[i][0],
        'eleArray_1[2].num': app.globalData.levels[i][1],
        'eleArray_1[3].num': app.globalData.levels[i][2],
        'eleArray_1[4].num': app.globalData.levels[i][3],
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var animation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease',
    })

    this.animation = animation

    animation.scale(2, 2).rotate(45).step()
    this.setData({
      animationData: animation.export()
    })

    setTimeout(function () {
      animation.translate(30).step()
      this.setData({
        animationData: animation.export()
      })
    }.bind(this), 5000)

    this.getAllRects(this)
  },
  
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  
  clkBoard: function (obj) {
    console.log(obj)    
  },

  clickOp: function(obj){
    console.log(obj)    

    this.setData({
      ll: obj.target.offsetLeft,
      tt: obj.target.offsetTop,
    })

  },

  getAllRects: function (page) {
    wx.createSelectorQuery().selectAll('.num').boundingClientRect(function (rects) {
      rects.forEach(function (rect) {
        page.setEleRect(rect)
      })
    }).exec()

  },

  setEleRect: function(rect) {    
    var id = rect.id
    var id_x = parseInt(id[0])
    var id_y = parseInt(id[1])
    switch(id_x){
      case 1:
        this.data.eleArray_1[id_y - 1].left = rect.left
        this.data.eleArray_1[id_y - 1].right = rect.right
        this.data.eleArray_1[id_y - 1].top = rect.top
        this.data.eleArray_1[id_y - 1].bottom = rect.bottom
        break;
      default:
        break;
    }

    console.log(this.data.eleArray_1)
  }
})