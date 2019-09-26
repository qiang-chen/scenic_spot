<template>
  <Layout title="订单详情">
    <div class="wraper">
      <div class="state">
        <ul>
          <li>已支付</li>
          <li @click="handleOut">正在为你出票，请稍后查看订单</li>
        </ul>
      </div>
      <div class="orderinformation">
        <ul>
          <li>镇北堡西部成人门票</li>
          <li>使用时间2019-8-18 周四</li>
          <li>入园方式：扫码入园</li>
          <li>入院时间：当日16:00前</li>
          <li>入园地址：光明大道北门</li>
          <li>购买数量：2张</li>
          <li>订单总价：￥120</li>
          <li>
            <span>出行人：</span>
            <p>
              <span>张明</span>
              <span>身份证：123142514516318</span>
            </p>
            <p>
              <span>王丽</span>
              <span>身份证：63456789318</span>
            </p>
          </li>
          <li>联系手机：18360176433</li>
        </ul>
      </div>
      <div class="title">
        <p>
          <span>镇北堡西部影城</span>
          <span>></span>
        </p>
      </div>
      <div class="ordertime">
        <ul>
          <li>订单编号：09876543234567898765</li>
          <li>创建时间：2019-9-12 20:18:45</li>
          <li>支付时间：2019-9-12 20:20:45</li>
          <li>祝福方式：在线支付</li>
        </ul>
      </div>
      <div class="footerbuttom">
        <span @click="contact">联系客服</span>
        <span @click="comment">点评</span>
        <span @click="refund">申请退款</span>
      </div>
    </div>
  </Layout>
</template>

<script>
import Layout from '@/components/layout';
import { Button } from 'vant';
import { Dialog } from 'vant';
export default {
    props: {},
    components: {
        Layout
    },
    data() {
        return {};
    },
    computed: {},
    methods: {
        handleOut() {
            this.$router.push('/main/alreadYissued');
        },
        contact() {
            Dialog.confirm({
                title: '联系客服',
                message: '是否拨打景点客服电话'
            })
                .then(() => {
                    // on confirm
                })
                .catch(() => {
                    // on cancel
                });
        },
        comment() {
            Dialog({ message: '门票使用后可评价' });
        },
        refund() {
            this.$router.push('/main/arefund');
        }
    },
    created() {},
    mounted() {}
};
</script>

<style scoped lang="">
.wraper {
    font-size: 0.34rem;
}
.orderDetail {
    width: 100%;
    height: 100%;
    background: #eee;
    box-sizing: border-box;
    /* padding: 20px; */
}
.state {
    width: 100%;
    height: 100px;
    background: #fff;
}
.state ul {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
.state ul li {
    flex: 1;
    align-items: center;
    display: -webkit-flex;
    box-sizing: border-box;
    padding-left: 40px;
}
.state ul li:nth-child(1) {
    font-size: 24px;
    color: #53ab3a;
}
.state ul li:nth-child(2) {
    margin-top: -10px;
}
.orderinformation {
    margin-top: 10px;
    padding-top: 15px;
    width: 100%;
    height: 408px;
    border-bottom: 1px solid #eee;
    background: #fff;
}
.orderinformation ul {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding-left: 20px;
    font-size: 14px;
}
.orderinformation ul li {
    flex: 1;
}
.orderinformation ul li:nth-child(1) {
    font-weight: bold;
}
.orderinformation ul li:nth-child(8) p {
    padding-left: 120px;
}
.orderinformation ul li:nth-child(8) p span {
    display: block;
    line-height: 20px;
}
.title {
    width: 100%;
    height: 45px;
    line-height: 45px;
    box-sizing: border-box;
    padding-left: 20px;
    border-bottom: 1px solid #eee;
    margin-top: 10px;
    background: #fff;
    font-size: 16px;
}
.title p {
    display: flex;
}
.title p span:nth-child(1) {
    flex: 8.5;
}
.title p span:nth-child(2) {
    flex: 1.5;
}
.ordertime {
    width: 100%;
    height: 120px;
    background: #fff;
    margin-top: 10px;
    padding-top: 10px;
}
.ordertime ul {
    width: 100%;
    height: 100%;
    display: flex;
    font-size: 14px;
    box-sizing: border-box;
    padding-left: 20px;
    flex-direction: column;
}
.ordertime ul li {
    flex: 1;
}
.footerbuttom {
    width: 100%;
    height: 45px;
    background: #fff;
    padding-top: 1px;
    text-align: right;
}
.footerbuttom span {
    display: inline-block;
    padding-left: 10px;
    padding-right: 20px;
    border: 1px solid #000;
    border-radius: 20px;
    margin-right: 20px;
    margin-top: 10px;
}
</style>