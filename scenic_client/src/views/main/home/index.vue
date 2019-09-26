<template>
  <div class="home">
    <Header title="宁夏景点门票"></Header>
    <div class="main" ref="main">
      <div class="content">
        <div class="swiper-container banner">
          <div class="swiper-wrapper">
            <div
              class="swiper-slide"
              v-for="(item,index) in msg"
              :key="index"
              @click="tiaoImgs(item.id)"
            >
              <img :src="baseUrl()+item.imgurl" alt="banner">
            </div>
          </div>
          <div class="swiper-pagination"></div>
        </div>
        <div class="iconList">
          <div class="icon-item" v-for="item in iconList" :key="item.id">
            <img :src="baseUrl()+item.icon" alt="icon">
            <span>{{item.title}}</span>
          </div>
        </div>
        <div class="xian"></div>
        <!-- 导航条 -->
        <Sticky :offset-top="50">
          <div ref="nav" @click="navClick">
            <DropdownMenu>
              <DropdownItem
                v-for="item in navList"
                :key="item.id"
                @change="(e)=>select(e,item.id)"
                :title="item.value.slice(1)"
                v-model="item.value"
                :options="item.option"
              />
            </DropdownMenu>
          </div>
        </Sticky>
        <!-- 首页列表结构 -->
        <div class="home-list">
          <HomeList :homeList="homeList"></HomeList>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper';
import Header from '@/components/Head.vue';
import * as api from '@/api/index';
//引入列表组件
import HomeList from '@/components/HomeList';
//引入弹框组价
import Dralog from '@/components/Dralog.vue';
import Bscroll from 'better-scroll';
//引入弹出层组件
import { DropdownMenu, DropdownItem, Sticky } from 'vant';
export default {
    name: 'Index',
    data() {
        return {
            curValue: '',
            msg: [],
            iconList: [],
            navList: [
                {
                    id: 1,
                    value: '1全部城市',
                    option: []
                },
                {
                    id: 2,
                    value: '2综合排序',
                    option: []
                },
                {
                    id: 3,
                    value: '3预定时限',
                    option: []
                }
            ],
            className: '',
            homeList: [] //首页列表页面数据
        };
    },
    components: {
        Header,
        HomeList,
        Dralog,
        DropdownMenu,
        DropdownItem,
        Sticky,
        scrollTop: 0
    },
    async created() {
        //获取下拉框的数据
        this.everySelect(1);
        this.everySelect(2);
        this.everySelect(3);
        //获取banner图
        let data = await api.getBanner();
        this.msg = data.msg;
        this.$nextTick(() => {
            new Swiper('.banner', {
                autoplay: true,
                observer: true,
                observeSlideChildren: true,
                pagination: {
                    el: '.swiper-pagination'
                }
            });
        });
        //获取icon列表数据
        let iconList = await api.getIconList();
        this.iconList = iconList.msg;
        //获取首页列表页面数据
        let homeList = await api.getHomeList();
        console.log(homeList, '首页数据');
        this.homeList = homeList.msg;
    },
    mounted() {
        //监听页面滚动
        this.scrollTop = this.$refs.nav.getBoundingClientRect().top;
    },
    methods: {
        navClick() {
            this.$refs.main.scrollTop = this.scrollTop - 50;
            let dom = document.querySelectorAll('.van-dropdown-item');
            dom[0].style.top = dom[1].style.top = dom[2].style.top =
                this.$refs.nav.getBoundingClientRect().top + 50 + 'px';
        },
        async select(value, id) {
            //let id = value.slice(0, 1);
            switch (id) {
                case 1:
                    //证明是对城市的模糊搜索
                    //城市的时候发起请求获取最新城市
                    this.curValue = value.slice(1);
                    let getHomeListCity = await api.getHomeListCity(
                        value.slice(1)
                    );
                    this.homeList = getHomeListCity.msg;
                    this.navList[1].value = '2综合排序';
                    this.navList[2].value = '3预定时限';
                    break;
                case 2:
                    if (value.slice(1) == '距离最近') {
                        //证明是对距离的排序糊搜索
                        this.homeList = this.homeList.sort((min, max) => {
                            return (
                                min.distance.slice(0, -2) -
                                max.distance.slice(0, -2)
                            );
                        });
                    } else if (value.slice(1) == '评价最高') {
                        this.homeList = this.homeList.sort((min, max) => {
                            return (
                                max.grade.slice(0, -1) - min.grade.slice(0, -1)
                            );
                        });
                    } else if (value.slice(1) == '销量最高') {
                        this.homeList = this.homeList.sort((min, max) => {
                            return max.sum - min.sum;
                        });
                    }
                    break;
                case 3:
                    //证明是对哪天可以订货的搜索 这里也需要发送接口写数据
                    let getHomeListTime = await api.getHomeListTime({
                        value: value.slice(1),
                        curValue: this.curValue
                    });
                    this.homeList = getHomeListTime.msg;
                    break;
                default:
                    break;
            }
        },
        //封装一个函数用于初始状态获取三个下拉框的数据
        async everySelect(id) {
            let option1 = await api.getCityList(id);
            this.navList[id - 1].option = option1.msg.map(item => {
                item.text = item.title;
                item.value = item.id + item.title;
                delete item.title;
                return item;
            });
        },
        //跳详情
        tiaoImgs(id) {
            this.$router.push({
                path: '/main/imgs',
                query: { id }
            });
        }
    }
};
</script>

<style lang="scss" scoped>
@import '../../../assets/fonts/iconfont.css';
%juzhong {
    display: flex;
    justify-content: center;
    align-items: center;
}
.home {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    font-size: 0.34rem;
    .main {
        flex: 1;
        overflow: auto;
    }
    .banner {
        width: 100%;
        height: 3rem;
        .swiper-wrapper {
            height: 100%;
            .swiper-slide {
                height: 100%;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
    .iconList {
        width: 100%;
        height: 4.2rem;
        display: flex;
        flex-flow: wrap row;
        justify-content: space-around;
        align-content: center;
        .icon-item {
            flex: 1;
            display: flex;
            flex-direction: column;
            padding: 0.1rem;
            span {
                @extend %juzhong;
                font-size: 0.3rem;
                margin-top: 0.2rem;
            }
            img {
                width: 1.2rem;
                height: 1.2rem;
            }
        }
    }
    .xian {
        width: 100%;
        height: 0.2rem;
        background-color: #eee;
    }
    .select-box {
        // position: absolute;
        // left: 0;
        // top: 2rem;
        width: 100%;
        height: auto;
        //overflow: hidden;
        background-color: #fff;
        // z-index: 12;
        // transition: all 1s linear;
    }
    .isHeight {
        height: auto;
    }
    .select-item {
        width: 100%;
        height: 0.7rem;
        color: #000;
        @extend %juzhong;
        border-bottom: 1px solid #eee;
        font-size: 0.32rem;
        justify-content: flex-start;
        padding-left: 0.4rem;
        box-sizing: border-box;
    }
    .tt {
        top: 100px !important;
    }
}
</style>
