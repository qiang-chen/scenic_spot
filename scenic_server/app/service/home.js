// eslint-disable-next-line strict
const {
  Service
} = require('egg');

class Home extends Service {
  //获取banner图数据接口
  async getBanner() {
    const data = await this.app.mysql.select('showBanner');
    return data;
  }
  //获取Icon图标接口数据
  async getIconList() {
    const data = await this.app.mysql.select('iconList');
    return data;
  }
  //获取城市列表数据
  async getCityList(id) {
    let data = [];
    switch (id * 1) {
      case 1:
        data = await this.app.mysql.select('city');
        break;
      case 2:
        data = await this.app.mysql.select('sort');
        break;
      case 3:
        data = await this.app.mysql.select('scheduled');
        break;
      default:
        break;
    }
    return data;
  }
  //获取首页展示的列表数据
  async getHomeList() {
    let $sql = `select homelist.id,img,scheduled.title as stitle,city.title as ctitle,grade,homelist.title,price,sum,scenic,scenictype,distance from homelist,scheduled,city where homelist.scheduledId=scheduled.id and homelist.cityId=city.id`
    const data = await this.app.mysql.query($sql);
    return data;
  }
  //点击城市列表的时候获取对城市的一个数据筛选
  async getHomeListCity(title) {
    let $sql = `select img,scheduled.title as stitle,city.title as ctitle,grade,homelist.title,price,sum,scenic,scenictype,distance from city,homelist,scheduled where city.title='${title}' and city.id=homelist.cityId and homelist.scheduledId=scheduled.id`;
    const data = await this.app.mysql.query($sql);
    return data;
  }
  //点击预定时限获取数据
  async getHomeListTime(opj) {
    let $sql;
    let {
      value,
      curValue
    } = JSON.parse(opj);
    if (curValue) {
      $sql = `select img,scheduled.title as stitle,city.title as ctitle,grade,homelist.title,price,sum,scenic,scenictype,distance from city,homelist,scheduled where city.title='${curValue}' and city.id=homelist.cityId and scheduled.title='${value}' and scheduled.id=homelist.scheduledId`;
    } else {
      $sql = `select img,scheduled.title as stitle,city.title as ctitle,grade,homelist.title,price,sum,scenic,scenictype,distance from city,homelist,scheduled where homelist.cityId=city.id and scheduled.title='${value}' and scheduled.id=homelist.scheduledId `;
    }
    const data = await this.app.mysql.query($sql);
    return data;
  }

}

module.exports = Home;