<template>
    <div class="header">
        <i class="iconfont icon-angle-left" @click="back"></i>
        <span>{{title}}</span>
    </div>
</template>

<script>
export default {
    name: 'Head',
    props: {
        title: {
            type: String,
            default: ''
        }
    },
    methods: {
        back() {
            this.$router.history.go(-1);
        }
    }
};
</script>

<style lang="scss" scoped>
@import '../assets/fonts/iconfont.css';
%juzhong {
    display: flex;
    justify-content: center;
    align-items: center;
}
.header {
    width: 100%;
    height: 1rem;
    background: #53ab3a;
    font-size: 0.34rem;
    position: relative;
    i {
        position: absolute;
        width: 1rem;
        height: 1rem;
        font-size: 0.78rem;
        color: #fff;
        @extend %juzhong;
    }
    span {
        @extend %juzhong;
        width: 100%;
        height: 100%;
        color: #fff;
    }
}
</style>
