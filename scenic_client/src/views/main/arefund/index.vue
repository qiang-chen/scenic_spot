<template>
    <div class="wrap">
        <Header title="申请退款"></Header>
        <div class="main">
            <h4>古北水镇成人票</h4>
            <p>退款说明</p>
            <p>退款后优惠券可重复使用</p>
        </div>
        <div class="btm">
            <ul>
                <li>
                    <span>可退数量</span>
                    <span>2张</span>
                </li>
                <li>
                    <span>选择退款数量</span>
                    <Stepper v-model="value" min="1" max="2" @change="onChange"/>
                </li>
                <li>
                    <span>退款方式</span>
                    <span>原路退回</span>
                </li>
                <li>
                    <span>退款金额</span>
                    <span>￥{{this.price*this.value}}</span>
                </li>
            </ul>
        </div>
        <Button
            round
            plain
            color="#FC6120"
            type="info"
            size="large"
            @click="cancel"
            class="btn"
        >取消订单</Button>
    </div>
</template>

<script>
import { Button, Dialog, Stepper } from 'vant';
import Header from '@/components/Head.vue';

export default {
    data() {
        return {
            value: 2,
            price: 100
        };
    },
    components: { Header, Button, Stepper },
    methods: {
        onChange() {
            console.log(this.value);
        },
        cancel() {
            Dialog.confirm({
                title: '你确定要退款吗',
                cancelButtonText: '任然退款',
                confirmButtonText: '不退了',
                confirmButtonColor: '#53AB39'
            })
                .then(() => {
                    // 确定
                })
                .catch(() => {
                    // 取消
                    this.count = 1;
                    this.$router.push('/main/order');
                    setTimeout(()=>{
                        this.$bus.$emit('event',2)
                    },100)
                });
        }
    }
};
</script>

<style lang="scss" scoped>
.wrap {
    width: 100%;
    height: 100%;
    overflow: hidden;
    .main {
        width: 100%;
        height: 2rem;
        margin-left: 0.4rem;
        margin-right: 0.4rem;
    }
}
.btm {
    margin-left: 0.4rem;
    margin-right: 0.4rem;
}
h4 {
    margin-top: 0.6rem;
    font-size: 0.32rem;
}
p {
    font-size: 0.28rem;
    margin-right: 0.2rem;
    margin-top: 0.05rem;
}
span {
    font-size: 0.28rem;
    margin-right: 0.2rem;
    margin-top: 0.05rem;
}
li {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    margin-right: 0.2rem;
    margin-top: 0.05rem;
}
.btn {
    margin-bottom: 0;
}
</style>