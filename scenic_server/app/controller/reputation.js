'use strict';

const {
    Controller
} = require('egg');

class Reputation extends Controller {
    //点评列表接口  前两项
    async getEvalList() {
        const result = await this.ctx.service.reputation.getEvalList();
        const allEval = await this.ctx.service.reputation.getAllEvalList()
        this.ctx.body = {
            code: 0,
            result,
            allEval
        }
    }
    //点评列表接口  所有
    async getAllEvalList() {
        const allEval = await this.ctx.service.reputation.getAllEvalList()
        this.ctx.body = {
            code: 0,
            allEval
        }
    }
    //点评列表接口  所有
    async loadEvalList() {
        const { pageSize, pageCount } = this.ctx.request.body
        const loadEval = await this.ctx.service.reputation.loadEvalList(pageSize, pageCount)
        this.ctx.body = {
            code: 0,
            loadEval
        }
    }
    //点评有图列表接口 前两项
    async getEevalImg() {
        const result = await this.ctx.service.reputation.getEevalImg();
        this.ctx.body = {
            code: 0,
            result
        }
    }
    //加载更多  有图列表接口 前两项
    async loadEvalImg() {
        const { pageSize, pageCount } = this.ctx.request.body
        const result = await this.ctx.service.reputation.loadEvalImg(pageSize, pageCount);
        this.ctx.body = {
            code: 0,
            result
        }
    }

    //获取好评列表接口 前两项
    async getGoodEval() {
        const result = await this.ctx.service.reputation.getGoodEval();
        this.ctx.body = {
            code: 0,
            result
        }
    }
    //获取差评列表接口 前两项
    async getBadEval() {
        const result = await this.ctx.service.reputation.getBadEval();
        this.ctx.body = {
            code: 0,
            result
        }
    }

}

module.exports = Reputation;