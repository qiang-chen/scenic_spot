<template>
  <div class="content">
    <div
      class="home-list-item"
      v-for="item in homeList"
      :key="item.id"
      @click="tiaoDetail(item.id)"
    >
      <div class="home-list-item-left">
        <img :src="baseUrl()+item.img" alt="left">>
      </div>
      <div class="home-list-item-right">
        <div class="home-list-item-right-title">
          <h2>{{item.title}}</h2>
          <span>{{item.scenic}}</span>
        </div>
        <div class="home-list-item-right-tag">
          <span>{{item.stitle}}</span>
          <span>{{item.scenictype}}</span>
        </div>
        <div class="home-list-item-right-info">
          <div class="info">
            <span>{{item.grade}}</span>
            <span>{{item.sum}}评价</span>
          </div>
          <div class="money">
            <span>￥</span>
            <b>{{item.price}}</b>
            <span>起</span>
          </div>
        </div>
        <div class="home-list-item-right-distance">
          <span>距市中心{{item.distance}}</span>
          <span>已售{{item.sum}}份</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as api from '@/api/index';
export default {
    props: {
        homeList: {
            type: Array,
            default: []
        }
    },
    methods: {
        tiaoDetail(id) {
            this.$router.push({
                path: '/main/detail',
                query: { id }
            });
        }
    },
    created() {
        console.log(this.baseUrl(), '======');
    }
};
</script>

<style lang="scss" scoped>
%juzhong {
    display: flex;
    justify-content: center;
    align-items: center;
}
.home-list-item {
    display: flex;
    padding: 0.1rem;
    width: 100%;
    height: 2.8rem;
    border-bottom: 1px solid #eee;
    box-sizing: border-box;
    .home-list-item-left {
        flex: 3.2;
        background-color: red;
        img {
            width: 100%;
            height: 100%;
        }
    }
    .home-list-item-right {
        box-sizing: border-box;
        padding-left: 0.2rem;
        flex: 6.8;
        display: flex;
        flex-direction: column;
        .home-list-item-right-title {
            flex: 4;
            overflow: hidden;
            font-size: 0.32rem;
            display: flex;
            align-items: center;
            justify-content: space-around;
            span {
                width: 28%;
                height: 55%;
                background-color: #fc6120;
                color: #fff;
                @extend %juzhong;
                border-radius: 0.12rem;
            }
            h2 {
                width: 65%;
                font-size: 0.42rem;
                padding-bottom: 0.1rem;
                font-weight: 530;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
        }
        .home-list-item-right-tag {
            flex: 1;
            display: flex;
            align-items: center;
            span {
                @extend %juzhong;
                color: #fc6120;
                border: solid 1px #fc6120;
                width: 35%;
                font-size: 0.3rem;
                &:first-child {
                    margin-right: 0.22rem;
                }
            }
        }
        .home-list-item-right-info {
            flex: 4;
            display: flex;
            .info {
                width: 60%;
                display: flex;
                span {
                    @extend %juzhong;
                    &:first-child {
                        flex: 4;
                        color: #fc6120;
                    }
                    &:last-child {
                        flex: 6;
                        color: #999999;
                        font-size: 0.3rem;
                        margin-right: 0.2rem;
                    }
                }
            }
            .money {
                @extend %juzhong;
                color: #fc6120;
                b {
                    font-size: 0.52rem;
                    margin-right: 0.1rem;
                }
            }
        }
        .home-list-item-right-distance {
            flex: 1;
            align-items: center;
            display: flex;
            justify-content: space-between;
            color: #999999;
            font-size: 0.28rem;
        }
    }
}
</style>
