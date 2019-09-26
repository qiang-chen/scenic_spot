<template>
    <div ref="wrap" class="father">
        <div class="child">
            <Header title="订单详情"></Header>
            <div class="wrap">
                <div class="top">
                    <Pay :count="count"></Pay>
                </div>
                <div class="main">
                    <Ticket/>
                </div>
                <div class="bottom">
                    <div class="bt">
                        <h4>古北水镇成人票</h4>
                        <Icon name="arrow" class="icon"/>
                    </div>
                    <div class="bb">
                        <OderInfo/>
                        <div class="btn">
                            <Button round plain color="#53AB3A" type="info" size="small">联系客服</Button>
                            <Button
                                round
                                plain
                                color="#FC6120"
                                type="info"
                                size="small"
                                @click="cancel"
                                v-if="count==0"
                            >取消订单</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Pay from '@/components/Pay.vue';
import Header from '@/components/Head.vue';
import Ticket from '@/components/Ticket.vue';
import OderInfo from '@/components/OderInfo.vue';
import Bscroll from 'better-scroll';
import { Button, Dialog, Icon } from 'vant';

export default {
    data() {
        return {
            count: 0,
            show: false
        };
    },
    components: {
        Button,
        Icon,
        Header,
        Pay,
        Ticket,
        OderInfo
    },
    methods: {
        cancel() {
            Dialog.confirm({
                title: '你确定要取消吗',
                cancelButtonText: '任然取消',
                confirmButtonText: '不取消了',
                confirmButtonColor: '#53AB39'
            })
                .then(() => {
                    // 确定
                })
                .catch(() => {
                    // 取消
                    this.count = 1;
                });
        }
    },
    mounted() {
        const Scroll = new Bscroll(this.$refs.wrap,{
            click:true
        });
        const counts = this.$route.query;
        console.log(counts);
    },
    created() {
        this.$bus.$on('event',id=>{
            this.count=id
        })
    },
};
</script>

<style lang="scss" scoped>
.father {
    height: 13.34rem;
}
.child {
    height: 17.34rem;
}
.wrap {
    padding-left: 0.4rem;
    padding-right: 0.4rem;
}
.top {
    width: 100%;
    height: 2.92rem;
}
.main {
    width: 100%;
    height: 8.17rem;
}
h4 {
    font-size: 0.32rem;
}
.icon {
    font-size: 0.32rem;
    margin-top: 0.1rem;
}
.bt {
    margin-top: 0.5rem;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
}
.btn {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    margin-top: 0.5rem;
}
</style>