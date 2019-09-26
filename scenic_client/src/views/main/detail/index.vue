<template>
  <div class="detail">
    <Header title="景点详情"></Header>
    <div class="con">
      <Popup
        v-model="show"
        closeable
        position="bottom"
        :style="{ height: '88.9%' }"
        round
        class="box"
      >
        <b class="yu">预定须知</b>
        <Demo :name="name1"/>
        <div class="ite">
          <div class="left">
            <p>预定时间:</p>
            <p>有效期:</p>
            <p>限购政策:</p>
          </div>
          <div class="right">
            <p>8点前预定</p>
            <p>游玩当天有效</p>
            <p>限购{{yudingsObj.nums}}张</p>
          </div>
        </div>
        <Demo :name="name2"/>
        <div>
          <div class="ite">
            <div class="left">
              <p>费用包含:</p>
              <p>费用不含:</p>
            </div>
            <div class="right">
              <p>本票以内的都含</p>
              <p>本票以外的都不含</p>
            </div>
          </div>
        </div>
        <Demo :name="name3"/>
        <div>
          <div class="ite">
            <div class="left">
              <p>入园方式:</p>
              <p>入园时间:</p>
              <p>入院地址:</p>
            </div>
            <div class="right">
              <p>翻墙,翻栅栏,空降</p>
              <p>游玩当天</p>
              <p>随便了</p>
            </div>
          </div>
        </div>
        <Demo :name="name4"/>
        <div>
          <div class="ite">
            <div class="left">
              <p>退改规则:</p>
            </div>
            <div class="right">
              <p>{{yudingsObj.guize}}</p>
            </div>
          </div>
        </div>
        <Demo :name="name5"/>
        <div>
          <div class="ite">
            <div class="left">
              <p>发票:</p>
            </div>
            <div class="right">
              <p>如需发票请换取纸质门票，不另行提供发票</p>
            </div>
          </div>
        </div>
        <div class="bott">
          <span>
            ￥
            <b>{{yudingsObj.money}}</b>
          </span>
          <span>
            景区价
            <b>￥{{yudingsObj.price}}</b>
          </span>
          <span></span>
          <span @click="order(yudingsObj.id)">立即预定</span>
        </div>
      </Popup>
      <div class="jieshao" v-for="item in list" :key="item.id">
        <p>
          <van-swipe @change="onChange" style="width:100%;height:100%">
            <van-swipe-item v-for="(ite,index) in list2" :key="index">
              <img :src="baseUrl()+'/public/img/'+ite.picurl+'.jpg'" @click="tiaoImgs(item.id)">
            </van-swipe-item>
            <div class="custom-indicator" slot="indicator">{{ current + 1 }}/4</div>
          </van-swipe>
          <span>{{item.title}}</span>
        </p>
        <div class="two">
          <div class="left" @click="tiaoJieShao(item.id)">
            <div>
              <p>景点简介</p>
              <p>开放时间 景点特色</p>
            </div>
            <div class="iconfont icon-chevron-thin-right"></div>
          </div>
          <div class="right">
            <div>
              <div @click="handelClick">
                <p>★★★★★</p>
                <p>
                  <span>{{item.grade}}</span>
                  <span>{{item.sum}}人评价</span>
                </p>
              </div>
            </div>
            <div class="iconfont icon-chevron-thin-right"></div>
          </div>
        </div>
        <div class="didian" @click="tiaoMap(item.id)">
          <span class="iconfont icon-didian"></span>
          <span>{{item.site}}</span>
          <span class="iconfont icon-chevron-thin-right"></span>
        </div>
      </div>
      <div class="menpiao">
        <div class="top">
          <span></span>
          <span>门票</span>
        </div>
        <div v-for="item in menList" :key="item.id" class="bot">
          <div class="left">
            <p>{{item.title}}</p>
            <p>
              <span class="iconfont icon-naozhong">{{item.reserve}}</span>
            </p>
            <p>
              <span>{{item.tab1}}</span>
              <span>{{item.tab2}}</span>
            </p>
            <p>已售{{item.num}} | 预定须知 ></p>
          </div>
          <div class="right">
            <p>
              <span>￥</span>
              <span>{{item.money}}</span>
            </p>
            <p>景区价:{{item.price}}</p>
            <p @click="showPopup(item.id)">预定</p>
          </div>
        </div>
      </div>
      <div class="remark">
        <div class="remark_title">
          <span>点评</span>
          <Icon name="arrow"/>
        </div>
        <div class="tagscloud-ul">
          <div class="statistics">有{{evalLength}}人评价过</div>
          <Tabs v-model="active" class="uls">
            <Tab class="lis" title="全部">
              <Eval :list="evalList"></Eval>
            </Tab>
            <Tab class="lis" title="有图">
              <EvalImg></EvalImg>
            </Tab>
            <Tab class="lis" title="好评">
              <GoodEval></GoodEval>
            </Tab>
            <Tab class="lis" title="差评">
              <BadEval></BadEval>
            </Tab>
            <div class="allEval" @click="handelClick">
              <p>查看更多</p>
              <Icon name="arrow"/>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from '@/components/Head.vue';
import '@/assets/fonts/iconfont.css';
import Eval from '@/components/Eval.vue';
import EvalImg from '@/components/EvalImg.vue';
import GoodEval from '@/components/GoodEval.vue';
import BadEval from '@/components/BadEval.vue';
import Demo from '@/components/Demo.vue';
import { Tab, Tabs, Icon, Popup, Swipe, SwipeItem } from 'vant';

import {
    getEvalList,
    getDetailList,
    getMenpiaoList,
    yuDings,
    getImgs
} from '@/api/index';
export default {
    components: {
        Header,
        Eval,
        EvalImg,
        GoodEval,
        BadEval,
        Demo,
        Tab,
        Tabs,
        Icon,
        Popup,
        VanSwipe: Swipe,
        VanSwipeItem: SwipeItem
    },
    data() {
        return {
            active: '',
            list: [],
            list2: [],
            menList: [],
            evalLength: 0,
            evalList: [], //所有的评价
            show: false,
            name1: '预定说明',
            name2: '费用说明',
            name3: '使用说明',
            name4: '退款说明',
            name5: '其他说明',
            yudingsObj: {},
            current: 0
        };
    },
    methods: {
        onChange(index) {
            this.current = index;
        },
        order(id) {
            this.$router.push({
                path: '/main/submitOrder/' + id
            });
        },
        tiaoImgs(id) {
            this.$router.push({
                path: '/main/imgs',
                query: { id }
            });
        },
        tiaoJieShao(id) {
            this.$router.push({
                path: '/main/jieshao',
                query: { id }
            });
        },
        tiaoMap(id) {
            this.$router.push({
                path: '/main/map',
                query: { id }
            });
        },
        handelClick() {
            this.$router.push({ path: '/main/allEval' });
        },
        showPopup(id) {
            console.log(id);
            this.show = true;
            yuDings(id).then(res => {
                console.log(res.result);
                this.yudingsObj = res.result[0];
            });
        }
    },
    created() {
        let { id } = this.$route.query;
        getDetailList(id).then(res => {
            console.log(res.result);
            this.list = res.result;
        });
        getImgs(id).then(res => {
            console.log(res.result, '应该是4张图片的数据');
            this.list2 = res.result;
        });
        getMenpiaoList(id).then(res => {
            console.log(res.result, '门票数据');
            this.menList = res.result;
        });
        //获取所有列表数据
        getEvalList().then(res => {
            this.evalList = res.result;
            this.evalLength = res.allEval.length;
        });
    }
};
</script>
<style scoped lang="scss">
.detail {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    font-size: 12px;
}
.con {
    flex: 1;
    overflow: auto;
    width: 100%;
    background: #eee;
}
.jieshao {
    width: 100%;
    background: white;

    p:nth-child(1) {
        width: 100%;
        position: relative;
        .custom-indicator {
            position: absolute;
            right: 10px;
            bottom: 10px;
            background: rgba(0, 0, 0, 0.3);
            color: #fff;
        }
        img {
            width: 100%;
            height: 3.8rem;
        }
        span {
            position: absolute;
            left: 0.2rem;
            bottom: 0.35rem;
            color: white;
            font-size: 0.45rem;
        }
    }
}

.two {
    width: 100%;
    height: 1rem;
    display: flex;
    border: solid 1px #eee;
    .left {
        width: 50%;
        height: 100%;
        display: flex;
        align-items: center;
        border-right: solid 1px #eee;
        margin-left: 0.15rem;

        div:nth-child(1) {
            flex: 8;
            margin-left: 0.15rem;
            p:nth-child(1) {
                font-size: 0.3rem;
            }
            p:nth-child(2) {
                font-size: 0.25rem;
                color: gray;
            }
        }
        div:nth-child(2) {
            flex: 2;
            color: gray;
        }
    }
    .right {
        width: 50%;
        height: 100%;
        display: flex;
        align-items: center;

        div:nth-child(1) {
            flex: 8;
            margin-left: 0.1rem;

            p:nth-child(1) {
                color: #fc611f;
            }
            p:nth-child(2) {
                span:nth-child(1) {
                    color: #fc611f;
                }
                span:nth-child(2) {
                    color: gray;
                }
            }
        }
        div:nth-child(2) {
            flex: 2;
            color: gray;
        }
    }
}
.didian {
    width: 100%;
    height: 1rem;
    display: flex;
    border-bottom: solid 1px #eee;
    align-items: center;
    span:nth-child(1) {
        flex: 1;
        color: gray;
        text-align: center;
    }
    span:nth-child(2) {
        flex: 8;
    }
    span:nth-child(3) {
        flex: 1;
        color: gray;
    }
}
.menpiao {
    width: 100%;
    display: flex;
    flex-direction: column;
    background: white;
    margin-top: 0.2rem;
    .top {
        width: 100%;
        height: 1rem;
        display: flex;
        border-bottom: solid 1px #eeeeee;
        align-items: center;
        span:nth-child(1) {
            width: 0.08rem;
            height: 0.34rem;
            background: #53ab3a;
            margin-left: 0.3rem;
        }
        span:nth-child(2) {
            font-weight: 700;
            font-size: 0.36rem;
            margin-left: 0.3rem;
        }
    }
    .bot {
        width: 100%;
        height: 2.3rem;
        border-bottom: solid 1px #eeeeee;
        display: flex;
        .left {
            flex: 8;
            margin-left: 0.3rem;
            p {
                margin-top: 0.15rem;
            }
            p:nth-child(1) {
                font-size: 0.35rem;
                font-weight: 500;
            }
            p:nth-child(2) {
                font-size: 0.12rem;
                transform: scale(0.8);
                margin-left: -0.6rem;
                color: #fc6120;
            }
            p:nth-child(3) {
                color: #fc6120;
                font-size: 0.12rem;
                span {
                    padding: 0 0.15rem;
                }
                span:nth-child(1) {
                    border: solid 1px #fc6120;
                }
                span:nth-child(2) {
                    border: solid 1px #fc6120;
                }
            }
            p:nth-child(4) {
                font-size: 0.11rem;
                color: gray;
            }
        }
        .right {
            flex: 2;
            margin-right: 0.3rem;
            p:nth-child(1) {
                margin-top: 0.3rem;
                span:nth-child(1) {
                    color: #fc6120;
                    font-size: 0.11rem;
                }
                span:nth-child(2) {
                    color: #fc6120;
                    font-size: 0.36rem;
                    font-weight: 700;
                }
            }
            p:nth-child(2) {
                margin-top: 0.2rem;
                color: gray;
                text-decoration: line-through;
            }
            p:nth-child(3) {
                margin-top: 0.2rem;
                background: #6fc856;
                border-radius: 0.25rem;
                height: 0.5rem;
                line-height: 0.5rem;
                text-align: center;
                color: white;
            }
        }
    }
}
.remark {
    width: 100%;
    height: 100%;
    margin-top: 10px;
    font-size: 16px;
    background-color: #fff;
    .remark_title {
        width: 100%;
        height: 1rem;
        border-bottom: 1px solid rgb(238, 238, 238);
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-sizing: border-box;
        padding: 0 15px;
        span {
            width: 0.8rem;
            text-align: right;
            border-left: 4px solid #53ab3a;
            padding-left: 8px;
            font-size: 0.33rem;
            font-weight: 700;
        }
    }
    .tagscloud-ul {
        width: 100%;
        height: 2rem;
        box-sizing: border-box;
        padding: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;

        .statistics {
            width: 100%;
            background-color: rgb(218, 218, 218);
            border-radius: 5px;
            line-height: 0.6rem;
            box-sizing: border-box;
            padding: 0 10px;
        }
        .uls {
            width: 100%;
            margin-top: 10px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            position: relative;

            .lis {
                margin-top: 10px;
            }
        }
    }
}
.allEval {
    width: 100%;
    height: 1rem;
    position: absolute;
    bottom: -1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgb(155, 155, 155);
    font-size: 14px;
    p {
        margin-right: 5px;
    }
}
.box {
    width: 100%;
    display: flex;
    flex-direction: column;
    .yu {
        width: 100%;
        height: 0.8rem;
        text-align: center;
        line-height: 1rem;
        color: #333;
        font-size: 0.4rem;
        font-weight: 400;
    }
    .ite {
        width: 100%;
        display: flex;
        .left {
            flex: 2.5;
            text-align: right;
            p {
                line-height: 0.5rem;
            }
        }
        .right {
            flex: 7;
            margin-left: 0.2rem;
            line-height: 0.5rem;
        }
    }
    .bott {
        width: 100%;
        height: 1rem;
        display: flex;
        span {
            width: 25%;
            height: 100%;
            text-align: center;
            line-height: 1rem;
            flex: 1;
        }
        span:nth-child(1) {
            color: #fc6120;

            b {
                font-size: 0.4rem;
            }
        }
        .ite {
            width: 100%;
            display: flex;
            .left {
                flex: 2.5;
                text-align: right;
                p {
                    line-height: 0.5rem;
                }
            }
            .right {
                flex: 7;
                margin-left: 0.2rem;
                line-height: 0.5rem;
                color: #999999;
            }
        }
        span:nth-child(4) {
            background: #53ab3a;
            color: white;
            font-size: 0.24rem;
        }
    }
}
</style>