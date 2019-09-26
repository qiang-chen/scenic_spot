const {
    Service
} = require('egg');
class DetailService extends Service {
    async getDetailList(id) {
        const $sql = `select * from homelist where id=?`
        const result = await this.app.mysql.query($sql, [id])
        return result
    }
    async getMenpiaoList(id) {
        const $sql = `select * from detailtypelist where d_id=?`
        const result = await this.app.mysql.query($sql, [id])
        return result
    }
    async getImgs(id) {
        const $sql = `select * from imgs where img_id=?`
        const result = await this.app.mysql.query($sql, [id])
        return result
    }
    async jisShao(id) {
        const $sql = 'select dan,wang,`desc`,jtmsg from homelist where id=?'
        const result = await this.app.mysql.query($sql, [id])
        return result
    }
    async getLngLat(id) {
        const $sql = 'select title,lng,lat,zoom from homelist where id=?'
        const result = await this.app.mysql.query($sql, [id])
        return result
    }
    async yuDings(id) {
        const $sql = 'select * from detailtypelist where id=?'
        const result = await this.app.mysql.query($sql, [id])
        return result
    }

}
module.exports = DetailService