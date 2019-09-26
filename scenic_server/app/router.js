'use strict';
/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const {
        router,
        controller
    } = app;
    // 获取首页展示的banner图数据
    router.get('/home/getBannerList', controller.home.getBanner);
    // 获取首页icon数据
    router.get('/home/getIconList', controller.home.getIconList);
    // 获取首页弹框数据
    router.get("/home/getCityList", controller.home.getCityList);
    // 获取首页列表数据
    router.get("/home/getHomeList", controller.home.getHomeList);
    //根据筛选的城市进行模糊搜索
    router.get("/home/getHomeListCity", controller.home.getHomeListCity);
    //点击预定时限获取数据
    router.get("/home/getHomeListTime", controller.home.getHomeListTime)
    //默认详情页
    router.get("/detail/getDetailList", controller.detail.getDetailList)
    //门票数据列表
    router.get("/detail/getMenpiaoList", controller.detail.getMenpiaoList)
    //点击图片获取图片集
    router.get("/detail/getImgs", controller.detail.getImgs)
    //获取景点介绍数据
    router.get("/detail/jisShao", controller.detail.jisShao)
    //获取景点经纬度坐标
    router.get("/detail/getLngLat", controller.detail.getLngLat)
    //获取门票预订信息
    router.get("/detail/yuDings", controller.detail.yuDings)
    // 获取评价列表数据
    router.get("/reputation/getEvalList", controller.reputation.getEvalList)
    // 获取 所有 评价列表数据
    router.get("/reputation/getAllEvalList", controller.reputation.getAllEvalList)
    // 加载更多 评价列表数据
    router.post("/reputation/loadEvalList", controller.reputation.loadEvalList)
    // 获取评价有图数据
    router.get("/reputation/evalImg", controller.reputation.getEevalImg)
    // 加载更多 评价有图数据
    router.post("/reputation/loadEvalImg", controller.reputation.loadEvalImg)
    // 获取评价有图数据
    router.get("/reputation/getGoodEval", controller.reputation.getGoodEval)
    // 获取评价有图数据
    router.get("/reputation/getBadEval", controller.reputation.getBadEval)
    //根据id获取订单页面的信息
    router.get("/submitOrder/getOrder", controller.submitOrder.getOrder)

};