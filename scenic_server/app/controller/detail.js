const {
    Controller
} = require('egg');
class DetailController extends Controller {
    //默认详情页
    async getDetailList(ctx) {
            let {
                id
            } = ctx.request.query
            let code = 1,
                msg = "获取详情数据成功",
                result
            try {
                result = await ctx.service.detail.getDetailList(id)
            } catch (error) {
                code = 0;
                msg = '获取数据失败';
            }
            ctx.body = {
                code,
                msg,
                result
            };
        }
        //门票数据列表
    async getMenpiaoList(ctx) {
            let {
                id
            } = ctx.request.query;
            let code = 1,
                msg = "获取门票数据成功",
                result
            try {
                result = await ctx.service.detail.getMenpiaoList(id)
            } catch (error) {
                code = 0;
                msg = '获取数据失败';
            }
            ctx.body = {
                code,
                msg,
                result
            };
        }
        //点击图片获取图片集
    async getImgs(ctx) {
            let {
                id
            } = ctx.request.query
            let code = 1,
                msg = "获取图集数据成功",
                result
            try {
                result = await ctx.service.detail.getImgs(id)
            } catch (error) {
                code = 0;
                msg = '获取图集失败';
            }
            ctx.body = {
                code,
                msg,
                result
            };
        }
        //获取景点介绍数据
    async jisShao(ctx) {
            let {
                id
            } = ctx.request.query
            let code = 1,
                msg = "获取景点介绍数据成功",
                result
            try {
                result = await ctx.service.detail.jisShao(id)
            } catch (error) {
                code = 0;
                msg = '获取景点介绍失败';
            }
            ctx.body = {
                code,
                msg,
                result
            };
        }
        //获取景点经纬度坐标
    async getLngLat(ctx) {
            let {
                id
            } = ctx.request.query
            let code = 1,
                msg = "获取景点经纬度数据成功",
                result
            try {
                result = await ctx.service.detail.getLngLat(id)
            } catch (error) {
                code = 0;
                msg = '获取景点经纬度失败';
            }
            ctx.body = {
                code,
                msg,
                result
            };
        }
        //获取门票预订信息
    async yuDings(ctx) {
        let {
            id
        } = ctx.request.query
        let code = 1,
            msg = "获取这张预定票数据成功",
            result
        try {
            result = await ctx.service.detail.yuDings(id)
        } catch (error) {
            code = 0;
            msg = '失败';
        }
        ctx.body = {
            code,
            msg,
            result
        };
    }



}
module.exports = DetailController