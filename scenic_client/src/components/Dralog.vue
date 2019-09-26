<template>
    <div class="select" v-show="flag" @click="mask"></div>
</template>

<script>
export default {
    props: {
        flag: {
            default: false,
            type: Boolean
        },
        isShow: {
            default: () => {},
            type: Function
        }
    },
    methods: {
        //点击遮罩随便一个位置让其消失
        mask() {
            //调用父组件传过来的函数让弹框消失
            this.isShow();
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
.select {
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;
    top: 2rem;
    background-color: rgba($color: #000000, $alpha: 0.4);
    // transition: all 1s linear;
    z-index: 3;
}
</style>
