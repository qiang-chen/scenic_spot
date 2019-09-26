'use strict';

const {
  Controller
} = require('egg');

class HomeController extends Controller {
  //获取banner图数据接口
  async getBanner(ctx) {
    let code = 1,
      msg = [];
    try {
      const result = await ctx.service.home.getBanner();
      msg = result;
    } catch (error) {
      console.log(error);
      code = 0;
      msg = '获取数据失败';
    }

    ctx.body = {
      code,
      msg,
    };
  }
  //获取Icon图标接口数据
  async getIconList(ctx) {
    let code = 1,
      msg = [];
    try {
      const result = await ctx.service.home.getIconList();
      msg = result;
    } catch (error) {
      console.log(error);
      code = 0;
      msg = '获取数据失败';
    }

    ctx.body = {
      code,
      msg,
    };
  }
  //获取城市列表数据
  async getCityList(ctx) {
    let code = 1,
      msg = [];
    try {
      const result = await ctx.service.home.getCityList(ctx.request.query.id);
      msg = result;
    } catch (error) {
      console.log(error);
      code = 0;
      msg = '获取数据失败';
    }

    ctx.body = {
      code,
      msg,
    };
  }
  //获取首页展示的列表数据
  async getHomeList(ctx) {
    let code = 1,
      msg = [];
    try {
      const result = await ctx.service.home.getHomeList();
      msg = result;
    } catch (error) {
      console.log(error);
      code = 0;
      msg = '获取数据失败';
    }
    ctx.body = {
      code,
      msg,
    };
  }
  //点击城市列表的时候获取对城市的一个数据筛选
  async getHomeListCity(ctx) {
    let code = 1,
      msg = [];
    try {
      const result = await ctx.service.home.getHomeListCity(ctx.request.query.title);
      msg = result;
    } catch (error) {
      console.log(error);
      code = 0;
      msg = '获取数据失败';
    }

    ctx.body = {
      code,
      msg,
    };
  }
  //点击预定时限获取数据
  async getHomeListTime(ctx) {
    let code = 1,
      msg = [];
    try {
      const result = await ctx.service.home.getHomeListTime(ctx.request.query.obj);
      msg = result;
    } catch (error) {
      console.log(error);
      code = 0;
      msg = '获取数据失败';
    }

    ctx.body = {
      code,
      msg,
    };
  }

}

module.exports = HomeController;