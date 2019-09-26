<template >
    <Layout title="订单详情">
        <!-- 已出票 -->
        <div class="wraper">
            <div class="state">
                <ul>
                    <li>已出票</li>
                    <li @click="handleProcess">退款进度 支付宝正在退款</li>
                </ul>
            </div>
            <div class="orderinformation">
                <li class="tit">镇北堡西部成人门票</li>
                <li class="code">
                    <div class="home">
                        <div id="qrcode" ref="qrcode"></div>
                    </div>
                </li>
                <ul>
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
                    <li class="phone">联系手机：18360176433</li>
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
import QRCode from 'qrcodejs2';
import { Dialog } from 'vant';
export default {
    name: 'home',
    props: {},
    components: {
        Layout
    },
    data() {
        return {
            url: 'https://www.baidu.com'
        };
    },
    computed: {},
    methods: {
        handleProcess() {
            this.$router.push('/main/schedule');
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
        },
        qrcode(a) {
            /* eslint-disable */
            let qrcode = new QRCode('qrcode', {
                width: 110, // 设置宽度，单位像素
                height: 110, // 设置高度，单位像素
                text: a // 设置二维码内容或跳转地址
            });
        }
    },

    created() {
        this.$nextTick(function() {
            this.qrcode(this.url);
        });
    },
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
    padding-left: 20px;
}
.state ul li:nth-child(1) {
    font-size: 24px;
    color: #53ab3a;
}
.state ul li:nth-child(2) {
    margin-top: -30px;
}
.orderinformation {
    margin-top: 10px;
    padding-top: 15px;
    width: 100%;
    height: 435px;
    border-bottom: 1px solid #eee;
    background: #fff;
}
.orderinformation ul {
    width: 100%;
    height: 60%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding-left: 20px;
    font-size: 14px;
}
.orderinformation ul li {
    flex: 1;
}
.tit {
    font-size: 14px;
    padding-left: 20px;

    font-weight: bold;
}
.code {
    display: block;
    width: 120px;
    height: 120px;
    margin: 0 auto;
    margin-top: 10px;
}
.orderinformation ul li:nth-child(7) p {
    padding-left: 80px;
}
.orderinformation ul li:nth-child(7) p span {
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
    height: 150px;
    background: #fff;
    margin-top: 10px;
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
    line-height: 37px;
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
    padding-left: 20px;
    padding-right: 20px;
    border: 1px solid #000;
    border-radius: 20px;
    margin-right: 15px;
    margin-top: 5px;
}
</style>