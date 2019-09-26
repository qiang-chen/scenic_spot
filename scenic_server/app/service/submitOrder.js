// eslint-disable-next-line strict
const {
    Service
} = require('egg');

class SubmitOrder extends Service {
    //根据id获取订单页面的信息
    async getOrder(id) {
        const data = await this.app.mysql.select('detailtypelist', {
            where: {
                id
            }
        });
        return data;
    }
}

module.exports = SubmitOrder;