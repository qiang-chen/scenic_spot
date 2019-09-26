<template>
    <div class="wrap">
        <Header title="退款进度"></Header>
        <div class="main">
            <ul>
                <li>
                    <p>退款金额</p>
                    <span>￥200</span>
                </li>
                <li>
                    <p>退票张数</p>
                    <span>2</span>
                </li>
                <li>
                    <p>退票方式</p>
                    <span>原路退回</span>
                </li>
            </ul>
        </div>
        <div class="bottom">
            <Steps direction="vertical" :active="this.active">
                <Step >
                    <h3>已退款</h3>
                    <p>2016-07-12 12:40</p>
                    <p>退款金额已推至原支付账户</p>
                </Step>
                <Step >
                    <h3>商家同意退款</h3>
                    <p>2016-07-11 10:00</p>
                    <p>商家已通过审核，航旅已提交退款申请至支付宝</p>
                </Step>
                <Step>
                    <h3>提交退款申请</h3>
                    <p>2016-07-10 09:30</p>
                    <p>退款申请已提交，等待商家审核。商家同意退票后，航旅将为您处理退款</p>
                </Step>
            </Steps>
        </div>
    </div>
</template>

<script>
import Header from "@/components/Head.vue";
import { Step, Steps } from "vant";

export default {
    components: { Header,Step, Steps },
    data() {
        return {
            active:2
        };
    }
    ,
    created() {
        setTimeout(() => {
            this.active--
            console.log(this.active)
        }, 3000);
    },
};
</script>

<style lang="scss" scoped>
.main {
    padding-left: 0.4rem;
    padding-right: 0.4rem;
}
ul > li {
    margin-top: 0.3rem;
    font-size: 0.3rem;
    display: flex;
    flex-flow: row nowrap;
    p {
        color: #999999;
        font-size: 0.28rem;
        margin-right: 0.2rem;
        margin-top: 0.05rem;
    }
}
.rxlc-step {
    width: 100%;
    padding: 16px 18px 20px 17px;
    box-sizing: border-box;
    .rxlc-content {
        width: 100%;
        box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.15);
        border-radius: 10px;
        position: relative;
        .content-list {
            width: 100%;
            display: table;
            .content-list-lt {
                display: table-cell;
                background: #3db8ba;
                padding-left: 10px;
                position: relative;
                color: #ffffff;
                font-family: Noto Sans S Chinese Medium;
                font-size: 16px;
                .list-icon-title {
                    display: table;
                    .lt-icon {
                        display: table-cell;
                        .lt-icon-box {
                            width: 5px;
                            height: 5px;
                            border-radius: 3px;
                            background: #ffffff;
                            margin-right: 7px;
                            z-index: 999;
                        }
                    }
                    .lt-text {
                        display: table-cell;
                        padding-right: 10px;
                        font-weight: 550;
                        font-size: 16px;
                        line-height: 18px;
                    }
                }
                .white-line {
                    width: 1px;
                    height: 100%;
                    position: absolute;
                    top: 34px;
                    left: 12px;
                    background: #ffffff;
                    opacity: 0.2;
                    z-index: 888;
                }
            }
            .content-list-rt {
                width: 70%;
                display: table-cell;
                .list-rt-content {
                    padding: 22px 14px 0px 14px;
                    color: #333333;
                    font-size: 14.5px;
                    line-height: 18px;
                }
                .cat-line {
                    margin-left: 24px;
                    margin-top: 20px;
                    border-bottom: 1px solid #efefef;
                }
            }
            &:first-child {
                .content-list-lt {
                    border-radius: 10px 0 0 0;
                }
            }
            &:last-child {
                .content-list-lt {
                    border-radius: 0 0 0 10px;
                    .white-line {
                        width: 0px;
                    }
                }
                .content-list-rt {
                    .cat-line {
                        margin-left: 10px;
                        margin-top: 20px;
                        border-bottom: none;
                    }
                }
            }
        }
    }
}
</style>