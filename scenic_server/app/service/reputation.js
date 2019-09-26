const {
    Service
} = require("egg");
class Reputation extends Service {
    //获取好评列表信息 前两项
    async getEvalList() {
        const $sql = 'select * from eval limit 0,2'
        const result = await this.app.mysql.query($sql);
        return result;
    }
    //获取所有列表信息 所有
    async getAllEvalList() {
        const $sql = `select * from eval`
        const result = await this.app.mysql.query($sql);
        return result;
    }
    //加载更多列表信息
    async loadEvalList(pageSize, pageCount) {
        const $sql = `select * from eval limit ${pageSize},${pageCount}`
        const result = await this.app.mysql.query($sql);
        return result;
    }
    //获取有图列表信息 前两项
    async getEevalImg() {
        const $sql = `select * from eval where base=1 limit 0,2`
        const result = await this.app.mysql.query($sql);
        return result;
    }
    //获取更多 有图列表信息 所有
    async loadEvalImg(pageSize, pageCount) {
        const $sql = `select * from eval where base=1 limit ${pageSize},${pageCount}`
        const result = await this.app.mysql.query($sql);
        return result;
    }

    //获取好评列表信息 前两项
    async getGoodEval() {
        const $sql = `select * from eval where base=2 limit 0,2`
        const result = await this.app.mysql.query($sql);
        return result;
    }
    //获取好评列表信息 所有
    async getAllGoodEval() {
        const $sql = `select * from eval where base=2`
        const result = await this.app.mysql.query($sql);
        return result;
    }
    //获取差评列表信息 前两项
    async getBadEval() {
        const $sql = `select * from eval where base=3 limit 0,2`
        const result = await this.app.mysql.query($sql);
        return result;
    }
    //获取差评列表信息 所有
    async getAllBadEval() {
        const $sql = `select * from eval where base=3`
        const result = await this.app.mysql.query($sql);
        return result;
    }
}

module.exports = Reputation;