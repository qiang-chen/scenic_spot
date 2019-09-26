'use strict';

const {
    Controller
} = require('egg');

class SubmitOrder extends Controller {
    //根据id获取订单页面的信息
    async getOrder(ctx) {
        let code = 1,
            msg = [];
        try {
            const result = await ctx.service.submitOrder.getOrder(ctx.request.query.id);
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

module.exports = SubmitOrder;