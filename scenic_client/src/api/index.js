import request from "@/utils/request";
import * as port from "./port";
//interface关键字
//获取banner图
export function getBanner() {
  return request.get(port.banner)
}
//获取icon列表数据
export function getIconList() {
  return request.get(port.iconList)
}
//获取弹框的数据
export function getCityList(id) {
  return request.get(port.cityList, {
    params: {
      id
    }
  })
}
//获取home列表的数据
export function getHomeList() {
  return request.get(port.homeList)
}
//点击城市列表的时候获取对城市的一个数据筛选
export function getHomeListCity(title) {
  return request.get(port.homeListCity, {
    params: {
      title
    }
  })
}

//点击预定时限获取数据
export function getHomeListTime(obj) {
  return request.get(port.homeListTime, {
    params: {
      obj
    }
  })
}
//获取详情列表数据
export function getDetailList(id) {
  return request.get(port.getDetailList, {
    params: {
      id
    }
  })
}
//获取门票列表数据
export function getMenpiaoList(id) {
  return request.get(port.getMenpiaoList, {
    params: {
      id
    }
  })
}
//点击详情图片获取图集
export function getImgs(id) {
  return request.get(port.getImgs, {
    params: {
      id
    }
  })
}
//获取景点介绍数据
export function jisShao(id) {
  return request.get(port.jisShao, {
    params: {
      id
    }
  })
}

//获取经纬度坐标数据
export function getLngLat(id) {
  return request.get(port.getLngLat, {
    params: {
      id
    }
  })
}
//获取门票预订信息
export function yuDings(id) {
  console.log(id, "api")
  return request(port.yuDings, {
    params: {
      id
    }
  })
}

//获取评价列表的数据
export function getEvalList() {
  return request.get(port.evalList)
}
//获取 所有 评价列表的数据
export function getAllEvalList(pageSize, pageCount) {
  console.log(pageSize, pageCount, 'aaaaaaa')
  return request.get(port.evalAllList, {
    pageSize,
    pageCount
  })
}
//加载更多 列表的数据
export function loadEvalList(pageSize, pageCount) {
  return request.post(port.loadEvalList, {
    pageSize,
    pageCount
  })
}

//获取有图评价列表的数据
export function getEvalImg() {
  return request.get(port.evalImg)
}
//加载更多 有图评价列表的数据
export function loadEvalImg(pageSize, pageCount) {
  return request.post(port.loadEvalImg, {
    pageSize,
    pageCount
  })
}

//获取好评列表的数据
export function getGoodEval() {
  return request.get(port.goodEval)
}
//获取差评列表的数据
export function getBadEval() {
  return request.get(port.badEval)
}
//根据id获取订单页面的信息
export function getOrder(id) {
  return request.get(port.order, {
    params: {
      id
    }
  })
}
