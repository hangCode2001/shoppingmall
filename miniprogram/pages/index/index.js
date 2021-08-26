//index.js
const app = getApp()

Page({
  
  data:{
    image:['../../images/index/1.jpg','../../images/index/2.jpg','../../images/index/3.jpg'],
    indicatorDots: true,

  },
  //点击轮播图时
  clickImg(event){
    console.log(event.currentTarget.dataset.index)//代表点击的第几张图片
    

  },
  linkToType(e){
    wx.navigateTo({
      url: `../type/type?index=${e.currentTarget.dataset.index}`
    })
  }
})
