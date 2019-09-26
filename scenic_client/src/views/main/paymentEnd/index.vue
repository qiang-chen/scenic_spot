<template>
  <Layout title="出票成功">
    <div class="wraper">
      <div class="payment-wrap">
        <div class="payment-title">
          <div>
            <span class="iconImg">
              <img :src="iconImg" alt="">
            </span>
            <span>出票成功</span>
          </div>
        </div>
        <p class="payment-paragraph">入园确认短信将会发送到您的练习手机，请注意查收</p>
        <div class="payment-QRcode">
          <span class="QRcode-title">入园验证码</span>
          <span class="QRcode-sum">1090 0983</span>
          <img src="" alt="tupian">
        </div>
        <div class="payment-btn">
          <button @click="handleBuy">继续购买</button>
          <button @click="handleSelect">查看订单</button>
        </div>
      </div>
      <div class="payment-bottom-wrap">
        <div>
          <h5 class="titles">镇北堡西部影视城成人门票</h5>
          <div>
            <span style="color:#999;margin-right:10px">使用时间</span>
            <span>2018-08-16</span>
            <span>周四</span>
          </div>
          <div>
            <span style="color:#999;margin-right:10px">购买数量</span>
            <span>1份</span>
          </div>
          <div>
            <span style="color:#999;margin-right:10px">订单总价</span>
            <span>￥200</span>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>
<script>
import Layout from '@/components/layout';
import { Icon } from 'vant';
const iconImg = require('@/assets/img/dui.png');
export default {
    name: 'payment',
    data() {
        return {
            iconImg
        };
    },
    components: {
        Layout,
        vanIcon: Icon
    },
    methods: {
        handleBuy() {
            this.$router.history.push('/main/detail');
        },
        handleSelect() {
            this.$router.history.push('/main/attractionsDetails');
        }
    }
};
</script>
<style lang="scss">
.wraper {
    font-size: 0.38rem;
}
.payment-wrap {
    height: 393px;
    background: #fff;
    margin-bottom: 10px;
    font-size: 0.34rem;
}
.payment-title {
    padding-top: 25px;
    display: flex;
    justify-content: center;
    font-size: 20px;
    margin-bottom: 10px;
    font-weight: 900;
    .iconImg {
        width: 18px;
        height: 18px;
        border-radius: 50%;
        display: inline-block;
        border: 1px solid #999;
        text-align: center;
        line-height: 18px;
        margin-right: 10px;
        img {
            width: 80%;
            height: 80%;
            margin-left: 2px;
            margin-top: 2px;
        }
    }
}
.titles {
    font-size: 0.46rem;
}
.payment-paragraph {
    width: 275px;
    font-size: 14px;
    text-align: center;
    margin-left: 49px;
    color: #999;
    margin-bottom: 20px;
}
.payment-QRcode {
    display: flex;
    flex-direction: column;
    justify-content: center;
    .QRcode-title {
        font-size: 12px;
        color: #999;
        margin-bottom: 6px;
        text-align: center;
    }
    .QRcode-sum {
        font-size: 20px;
        text-align: center;
        font-weight: 900;
        margin-bottom: 20px;
    }
}
.payment-btn {
    height: 30px;
    display: flex;
    justify-content: space-around;
    button {
        border: none;
        border-radius: 120px;
        color: #53ab3a;
        border: 1px solid #53ab3a;
        width: 82px;
        background: #fff;
    }
}
.payment-bottom-wrap {
    height: 160px;
    background: #fff;
    padding: 16px;
    h5 {
        margin-bottom: 16px;
        font-size: 0.48rem;
    }
    div {
        margin-bottom: 16px;
    }
}
</style>