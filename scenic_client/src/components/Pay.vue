<template>
    <div class="top">
        <span class="title">{{data[count].title}}</span>
        <div class="cdbox">
            <span>{{data[count].content}}</span>
            <span v-if="count==2" @click="jump">支付宝正在处理 ＞</span>
            <CountDown v-if="count==0" :time="time" format=" mm 分 ss 秒" class="countdown"/>
        </div>
        <div class="btn">
            <span></span>
            <Button round type="info" v-if="count==0||count==1">{{data[count].btn}}</Button>
        </div>
    </div>
</template>

<script>
import { CountDown, Button } from 'vant';
export default {
    props: {
        count: {
            type: Number,
            default: 0
        }
    },
    methods: {
        jump(){
             console.log(123)
            this.$router.push('/main/RefundSchedule')

        }
    },
    data() {
        return {
            time: 60 * 60 * 1000,
            data: [
                {
                    title: '待支付',
                    content: '支付倒计时',
                    btn: '去支付'
                },
                {
                    title: '已取消',
                    content: '已超過計時時間',
                    btn: '再次购买'
                },
                {
                    title: '退款中',
                    content: '退款进度',
                    btn: '789'
                }
            ]
        };
    },
    components: {
        CountDown,
        Button
    }
};
</script>

<style lang="scss" scoped>
.title {
    font-size: 0.48rem;
}
.cdbox {
    display: flex;
    font-size: 0.32rem;
    flex-flow: row nowrap;
    span{
        margin-right: 0.2rem;
    }
    .countdown {
        margin-top: 2px;
        margin-left: 0.1rem;
        display: flex;
        flex-flow: row;
        font-size: 0.32rem;
        color: #fc6120;
    }
}
.btn {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
}
</style>