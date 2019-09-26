<template>
    <div class="orader">
        <Header title="提交订单"></Header>
        <div class="main">
            <div class="title">
                <div class="title-tick">{{order.title}}</div>
                <div class="retreat">
                    <span>{{order.reserve}}</span>
                    <span>预订须知 &gt;</span>
                </div>
            </div>
            <div class="xian"></div>
            <div class="data">
                <div class="data-title">使用日期</div>
                <div class="data-every">
                    <div
                        :class="forbidden==item.id?'data-every-item forbidden':item.id==count?'data-every-item active':'data-every-item'"
                        v-for="item in timeData"
                        :key="item.id"
                        @click="select(item.id)"
                    >
                        <p>{{item.time}}</p>
                        <p>{{item.id==forbidden?'不可订':'￥'+order.money}}</p>
                    </div>
                </div>
                <div class="sum">
                    <div class="sum-left">
                        <p class="p">购买数量</p>
                        <p class="p">每单限购{{order.nums}}张</p>
                    </div>
                    <div class="sum-right">
                        <span>-</span>
                        <b>3</b>
                        <span>+</span>
                    </div>
                </div>
            </div>
            <div class="xian"></div>
            <div class="info">
                <div class="info-title">
                    <b>出行人信息</b>
                    <div class="span">
                        <span>选择出行人</span>
                    </div>
                </div>
                <div class="info-item">
                    <div class="info-item-left">出行人1</div>
                    <div class="info-item-center">
                        <p>张晓明</p>
                        <p>身份证38492049848293349</p>
                    </div>
                    <div class="info-item-right">
                        <span>x</span>
                    </div>
                </div>
            </div>
            <div class="discounts">
                <div class="discounts-title">优惠</div>
                <div class="discounts-content">
                    {{
                    order.youhui!=0?"优惠"+order.youhui+"元":"暂无优惠"
                    }}
                </div>
            </div>
        </div>
        <SubmitBar
            :price="order.money*100"
            button-text="提交订单"
            :safe-area-inset-bottom="true"
            suffix-label="明细"
            @submit="onSubmit"
        ></SubmitBar>
        <ActionSheet :safe-area-inset-bottom="true" v-model="show" :actions="[]" @select="onSelect">
            <DatetimePicker
                :visible-item-count="7"
                v-model="currentDate"
                type="date"
                :min-date="minDate"
                @confirm="confirmq"
            />
        </ActionSheet>
    </div>
</template>
<script>
import Header from '@/components/Head';
import { SubmitBar, ActionSheet, DatetimePicker, Toast } from 'vant';
import * as api from '@/api/index';
import moment from 'moment';
export default {
    data() {
        return {
            minDate: new Date(),
            currentDate: new Date(),
            order: {},
            show: false,
            forbidden: 0,
            count: 0,
            timeData: [
                {
                    id: 1,
                    time: '今日' + moment(new Date().getTime()).format('MM-DD')
                },
                {
                    id: 2,
                    time:
                        '明日' +
                        moment(
                            new Date().getTime() + 24 * 60 * 60 * 1000
                        ).format('MM-DD')
                },
                {
                    id: 3,
                    time:
                        '后日' +
                        moment(
                            new Date().getTime() + 2 * 24 * 60 * 60 * 1000
                        ).format('MM-DD')
                },
                {
                    id: 4,
                    time: '更多日期'
                }
            ]
        };
    },
    async created() {
        console.log(this.timeData);
        //获取一下当前时间
        if (new Date().getHours() > 9) {
            //时间以后让今日不可订
            this.forbidden = 1;
        }
        //根据上方URL地址获取对应的订单信息
        let order = await api.getOrder(1);
        this.order = order.msg[0];
    },
    components: {
        Header,
        SubmitBar,
        ActionSheet,
        DatetimePicker
    },
    methods: {
        confirmq(value) {
            let data = moment(value).format('MM-DD');
            Toast(`您已选择${data}`);
            this.show = false;
        },
        onSelect() {
            console.log(11);
        },
        select(id) {
            console.log(id);
            this.show = true;
            this.count = id;
        },
        onSubmit() {
            this.$router.history.push('/main/attractionsDetails');
        },
        //封装一个方法为当前时间处理补0
        addZero(num) {
            if (num < 10) {
                return '0' + num;
            } else {
                return num;
            }
        }
    }
};
</script>
<style lang="scss" scoped>
%juzhong {
    display: flex;
    justify-content: center;
    align-items: center;
}
.orader {
    font-size: 0.34rem;
    .main {
        padding: 0 0.4rem;
        box-sizing: border-box;
    }
    .title {
        width: 100%;
        height: 1.6rem;
        display: flex;
        flex-direction: column;
        .title-tick {
            flex: 1;
            font-size: 0.42rem;
            color: #333333;
            font-weight: 550;
            @extend %juzhong;
            justify-content: flex-start;
        }
        .retreat {
            flex: 1;
            @extend %juzhong;
            justify-content: space-around;
            span {
                flex: 7;
                display: flex;
                height: 100%;
                font-size: 0.36rem;
                color: red;
                &:last-child {
                    flex: 3;
                    justify-content: flex-end;
                    color: #999999;
                }
            }
        }
    }
    .data {
        width: 100%;
        height: 3.61rem;
        .data-title {
            width: 100%;
            height: 1rem;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            color: #333333;
            font-size: 0.4rem;
            font-weight: 550;
        }
        .data-every {
            display: flex;
            justify-content: space-around;
            .data-every-item {
                border: solid 1px #eee;
                margin-right: 0.1rem;
                flex: 1;
                font-size: 0.3rem;
                height: 1.05rem;
                display: flex;
                flex-direction: column;
                justify-content: center;
                p {
                    flex: 1;
                    @extend %juzhong;
                }
                &:last-child {
                    margin-right: 0;
                }
            }
        }
        .sum {
            width: 100%;
            height: 1.49rem;
            display: flex;
            .sum-left {
                display: flex;
                height: 100%;
                flex-direction: column;
                flex: 6;
                p:first-child {
                    color: #333333;
                    font-size: 0.4rem;
                    font-weight: 550;
                    flex: 1;
                    height: 50%;
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                }
                p:last-child {
                    flex: 1;
                    display: flex;
                    align-items: center;
                }
            }
            .sum-right {
                display: flex;
                align-items: center;
                flex: 4;
                span {
                    width: 0.48rem;
                    height: 0.48rem;
                    @extend %juzhong;
                    background-color: rgba(245, 245, 245, 1);
                }
                b {
                    margin: 0 0.2rem;
                }
            }
        }
    }
    .info {
        width: 100%;
        display: flex;
        flex-direction: column;
        .info-title {
            width: 100%;
            height: 1.01rem;
            display: flex;
            justify-content: space-around;
            align-items: center;
            b {
                flex: 1;
                font-size: 0.42rem;
                color: #333333;
                font-weight: 550;
            }
            .span {
                flex: 1;
                @extend %juzhong;
                justify-content: flex-end;
                span {
                    border: solid 1px rgba(83, 171, 58, 1);
                    padding: 0.1rem 0.3rem;
                    border-radius: 0.4rem;
                    color: rgba(83, 171, 58, 1);
                }
            }
        }
        .info-item {
            width: 100%;
            height: 1.2rem;
            border-bottom: 1px solid #eee;
            display: flex;
            .info-item-left {
                flex: 2.5;
                @extend %juzhong;
            }
            .info-item-center {
                flex: 7.5;
                font-size: 0.3rem;
                color: #999;
                @extend %juzhong;
                flex-direction: column;
                p {
                    flex: 1;
                    width: 100%;
                    height: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: flex-start;
                    margin-left: 0.5rem;
                }
            }
            .info-item-right {
                flex: 1;
                @extend %juzhong;
                span {
                    width: 0.6rem;
                    height: 0.6rem;
                    @extend %juzhong;
                    background-color: #eee;
                    border-radius: 50%;
                    padding-bottom: 0.1rem;
                }
            }
        }
    }
    .discounts {
        width: 100%;
        height: 2rem;
        display: flex;
        flex-direction: column;
        .discounts-title {
            flex: 1;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            color: #333333;
            font-size: 0.4rem;
            font-weight: 550;
        }
        .discounts-content {
            display: flex;
            justify-content: flex-start;
            align-items: center;
        }
    }
    .mingxi {
        @extend %juzhong;
        font-size: 0.4rem;
        padding-left: 0.3rem;
    }
    .van-submit-bar__text {
        font-size: 0.37rem;
    }
    .van-submit-bar__price {
        font-size: 0.5rem;
        margin-right: 1rem;
    }
    .forbidden {
        background: #ccc;
    }
    .active {
        background-color: green;
        color: #fff;
    }
    .xian {
        width: 100%;
        height: 0.2rem;
        background-color: #eee;
    }
}
</style>
