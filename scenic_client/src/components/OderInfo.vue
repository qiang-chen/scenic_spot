<template>
    <ul>
        <li>
            <p>订单号</p>
            <span>288888888888</span>
        </li>
        <li>
            <p>创建时间时间</p>
            <span>2018年08月16日</span>
        </li>
        <li>
            <p>支付时间</p>
            <span>2018-08-16</span>
        </li>
        <li>
            <p>支付方式</p>
            <span>在线支付</span>
        </li>
    </ul>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
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
</style>